const { listAllObjectsFromS3, getS3FileContent } = require('../db/s3Service');
const Course = require('../models/Course');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');

const createMongoDBEntriesFromS3 = async () => {
    const bucketName = 'connextgencurriculum';
    const s3Objects = await listAllObjectsFromS3(bucketName, '');

    const courses = {}; 
    const units = {}; 

    for (const object of s3Objects) {
        const parts = object.Key.split('/').filter(part => part);

        if (parts.length === 2) {
            const [courseTitle, unitTitle] = parts;
            if (!courses[courseTitle]) {
                courses[courseTitle] = new Course({ title: courseTitle, units: [] });
                await courses[courseTitle].save();
            }
            if (!units[unitTitle]) {
                const unit = new Unit({ title: unitTitle, course: courses[courseTitle]._id, lessons: [] });
                await unit.save();
                courses[courseTitle].units.push(unit._id);
                await courses[courseTitle].save();
                units[unitTitle] = unit;
            }
        } else if (parts.length === 3) {
            const [courseTitle, unitTitle, lessonFilename] = parts;
            const lessonTitle = lessonFilename.replace('.md', '');
            const lessonContent = await getS3FileContent(bucketName, object.Key);

            const lesson = new Lesson({
                title: lessonTitle,
                content: lessonContent,
                unit: units[unitTitle]._id
            });
            await lesson.save();
            units[unitTitle].lessons.push(lesson._id);
            await units[unitTitle].save();
        }
    }
};

module.exports = {
    createMongoDBEntriesFromS3
};