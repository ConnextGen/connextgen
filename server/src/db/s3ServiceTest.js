const { listAllObjectsFromS3, getS3FileContent, listS3Objects } = require('./s3Service');

const testS3Service = async () => {
    const bucketName = 'connextgencurriculum';
    const prefix = '';

    const s3Objects = await listS3Objects(bucketName, prefix);
    console.log(s3Objects);
};

testS3Service();