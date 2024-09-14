const AWS = require('aws-sdk');

/* s3 querying */

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const listS3Objects = async (bucketName, prefix) => {
    const params = {
        Bucket: bucketName,
        Prefix: prefix
    };

    let s3Objects = [];
    let data;
    
    do {
        data = await s3.listObjectsV2(params).promise();
        console.log(data);
        s3Objects = s3Objects.concat(data.Contents);
        params.ContinuationToken = data.NextContinuationToken;
    } while (data.IsTruncated);

    return s3Objects;
};

const getS3FileContent = async (bucketName, key) => {
    const params = {
        Bucket: bucketName,
        Key: key
    };
    const data = await s3.getObject(params).promise();
    return data.Body.toString('utf-8');
};

module.exports = {
    listS3Objects,
    getS3FileContent
};