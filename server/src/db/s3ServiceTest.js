const { listAllObjectsFromS3, getS3FileContent, listS3Objects } = require('./s3Service');

const testS3Service = async () => {
    const bucketName = 'connextgencurriculum';
    const prefix = '';

    const s3Objects = await listS3Objects(bucketName, prefix);
    console.log(s3Objects);

    for (const s3Object of s3Objects) {
        const key = s3Object.Key;
        const content = await getS3FileContent(bucketName, key);
        console.log(`Content of ${key}:`, content);
    }
};

testS3Service();