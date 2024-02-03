// config.js

module.exports = {
  // Database configuration
  database: {
    host: 'localhost',
    port: 5432,
    username: 'your_db_username',
    password: 'your_db_password',
    databaseName: 'your_database_name',
  },

  // Server configuration
  server: {
    port: 3000,
    host: 'localhost',
  },

  // AWS configuration
  aws: {
    region: 'your_aws_region',
    s3BucketName: 'your_s3_bucket_name',
    lambdaFunctions: {
      userHandler: 'arn:aws:lambda:your_aws_region:your_account_id:function:your_user_handler_function',
      postHandler: 'arn:aws:lambda:your_aws_region:your_account_id:function:your_post_handler_function',
    },
    apiGateway: {
      userApi: 'your_user_api_id',
      postApi: 'your_post_api_id',
    },
  },
};
