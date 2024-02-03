// downloadHandler.js

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  try {
    // Extract data from the incoming event (e.g., from API Gateway)
    const { fileKey } = JSON.parse(event.body);

    // Perform S3 download operation
    const fileContent = await downloadFileFromS3(fileKey);

    return {
      statusCode: 200,
      body: JSON.stringify({ fileContent }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

// Example function to download a file from S3
const downloadFileFromS3 = async (fileKey) => {
  const params = {
    Bucket: 'YourS3BucketName', // Replace with your S3 bucket name
    Key: fileKey,
  };

  const response = await s3.getObject(params).promise();
  return response.Body.toString('base64');
};
