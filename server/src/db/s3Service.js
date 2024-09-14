import { S3Client, ListObjectsV2Command } from './s3Client.js';

/* s3 querying */

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const listS3Objects = async (bucketName) => {
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
      } catch (error) {
        console.error('Error listing S3 objects:', error);
        throw error;
      }
};

const getS3FileContent = async (bucketName, key) => {
    const params = {
        Bucket: bucketName,
        Key: key
    };
    const data = await s3.getObject(params);
    return data.Body.toString('utf-8');
};

module.exports = {
    listS3Objects,
    getS3FileContent
};