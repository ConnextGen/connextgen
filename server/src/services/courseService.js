const { S3Client, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');
const Course = require('../models/Course');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');

/* s3 querying */

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const bucketName = process.env.S3_BUCKET_NAME;

const getObjects = async () => {
    const command = new ListObjectsV2Command({
        Bucket: bucketName
      });

      let s3Objects = [];
      let isTruncated = true;

      try {
        while (isTruncated) {
            const { Contents, IsTruncated, NextContinuationToken } = await s3.send(command);
            s3Objects = s3Objects.concat(Contents);
            isTruncated = IsTruncated;
            command.input.ContinuationToken = NextContinuationToken;
        }
        return s3Objects;
      } catch (err) {
        console.error('Error listing S3 objects:', err);
      }
};

const getObject = async (key) => {
    const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: key
    });

    try {
        const response = await s3.send(command);
        return response.Body.transformToString();
    } catch (err) {
        console.error('Error getting S3 object:', err);
    }
};

/* create mongodb entries */

const syncCurriculum = async () => {
    const courseTitle = 'The ConnextGen Professional Readiness Course';
    const courseDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.';

    let course = await Course.findOne({ title: courseTitle });

    if (!course) {
        course = await Course.create({
            title: courseTitle,
            description: courseDescription,
            units: []
        });
    }

    const objects = await getObjects(bucketName);
    let order = 1;

    for (const object of objects) {
        const key = object.Key;
        const parts = key.split('/').filter(part => part);

        if (parts.length < 2) {
            continue;
        }

        const unitTitle = parts[0];
        const lessonTitle = parts[1].split('.')[0];

        const lesson = await Lesson.findOne({ key });

        if (!lesson) {
            let unit = await Unit.findOne({ title: unitTitle });

            if (!unit) {
                unit = await Unit.create({
                    title: unitTitle,
                    lessons: [],
                    order: order++
                });
                course.units.push(unit._id);
                await course.save();
            }

            const lesson = await Lesson.create({
                title: lessonTitle,
                key,
                order: unit.lessons.length + 1,
            });

            unit.lessons.push(lesson._id);
            await unit.save();
        }
    }

    console.log('Curriculum synced.');
}

module.exports = {
    getObjects,
    getObject,
    syncCurriculum
};