import { formatJSONResponse } from "@libs/api-gateway";
import middy from "@middy/core";
import cors from "@middy/http-cors";
import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();
import { errorHandler } from "@libs/handler-error";
import { APIGatewayProxyResult } from "aws-lambda";
import jsonBodyParser from "@middy/http-json-body-parser";
import { httpStatus } from "@libs/utils/enums/http-status.enum";

const getAllBillboards = async (): Promise<APIGatewayProxyResult> => {
  try {
    // define tableName
    const params = {
      TableName: "BillboardTables",
    };
    // get all billboards
    const allBillboards = await dynamoDb.scan(params).promise();
    const data = allBillboards?.Items.length != 0 ? allBillboards?.Items : [];
    // response
    return formatJSONResponse(httpStatus.OK, {
      message: `Fetch success`,
      data,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const middlewares = [jsonBodyParser(), errorHandler(), cors()];
export const main = middy(getAllBillboards).use(middlewares);
