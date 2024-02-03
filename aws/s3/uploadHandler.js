// uploadHandler.js

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  try {
    // Extract data from the incoming event (e.g., from API Gateway)
    const { fileKey, fileContent } = JSON.parse(event.body);

    // Perform S3 upload operation
    await uploadFileToS3(fileKey, fileContent);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File uploaded to S3 successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

// Example function to upload a file to S3
const uploadFileToS3 = async (fileKey, fileContent) => {
  const params = {
    Bucket: 'YourS3BucketName', // Replace with your S3 bucket name
    Key: fileKey,
    Body: Buffer.from(fileContent, 'base64'),
  };

  await s3.upload(params).promise();
};
