import type { AWS } from "@serverless/typescript";

import {
  peopleTranslated,
  createBillboard,
  planetTranslated,
  getBillboard,
} from "src/services/index";

const serverlessConfiguration: AWS = {
  service: "swapiproject",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the functions via paths
  functions: {
    peopleTranslated,
    planetTranslated,
    createBillboard,
    getBillboard,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    "serverless-offline": {
      httpPort: 4000,
      websocketPort: 4001,
      lambdaPort: 4002,
    },
  },
  resources: {
    Resources: {
      // DynamoDB Resource
      BillboardTables: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "BillboardTables",
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
          },
          BillingMode: "PROVISIONED",
        },
      },
      // IAM ROLE LAMBDA TO USE DYNAMODB
      MyLambdaFunctionRole: {
        Type: "AWS::IAM::Role",
        Properties: {
          RoleName: "MyLambdaFunctionRole",
          AssumeRolePolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Principal: {
                  Service: "lambda.amazonaws.com",
                },
                Action: "sts:AssumeRole",
              },
            ],
          },
          Policies: [
            {
              PolicyName: "DynamoDBAccessPolicy",
              PolicyDocument: {
                Version: "2012-10-17",
                Statement: [
                  {
                    Effect: "Allow",
                    Action: [
                      "dynamodb:GetItem",
                      "dynamodb:PutItem",
                      "dynamodb:DeleteItem",
                      "dynamodb:UpdateItem",
                    ],
                    Resource: {
                      "Fn::GetAtt": ["BillboardTables", "Arn"],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
