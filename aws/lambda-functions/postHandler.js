// postHandler.js

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {
    // Extract data from the incoming event (e.g., from API Gateway)
    const { postId, title, content } = JSON.parse(event.body);

    // Perform post-related operations (e.g., storing data in DynamoDB)
    await savePostToDynamoDB(postId, title, content);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Post created successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

// Example function to save post data to DynamoDB
const savePostToDynamoDB = async (postId, title, content) => {
  const params = {
    TableName: 'PostsTable', // Replace with your DynamoDB table name
    Item: {
      postId,
      title,
      content,
    },
  };

  await dynamoDB.put(params).promise();
};
