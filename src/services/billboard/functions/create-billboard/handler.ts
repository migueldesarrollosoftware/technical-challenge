import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import middy from "@middy/core";
import cors from "@middy/http-cors";
import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();
import schema from "./schema";
import { errorHandler } from "@libs/handler-error";
import { APIGatewayProxyResult } from "aws-lambda";
import jsonBodyParser from "@middy/http-json-body-parser";
import { httpStatus } from "@libs/utils/enums/http-status.enum";
import { ICreateBillboard } from "./interface/create-billboard.interface";
import { v4 as uuidv4 } from "uuid";

const createBillboard: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event): Promise<APIGatewayProxyResult> => {
  try {
    const { description, name} = event?.body as unknown as ICreateBillboard;
    const billboardWithUuid = { description, name, id: uuidv4() };
    // create documentClient
    const createBillboardParams: DynamoDB.DocumentClient.PutItemInput = {
      TableName: "BillboardTables",
      Item: billboardWithUuid,
    };
    await dynamoDb.put(createBillboardParams).promise();
    // get billboard created to show
    const getBillboardParams: DynamoDB.DocumentClient.GetItemInput = {
      TableName: "BillboardTables",
      Key: {
        id: billboardWithUuid.id,
      },
    };
    const billboardSaved = await dynamoDb.get(getBillboardParams).promise();
    // response
    return formatJSONResponse(httpStatus.CREATED, {
      message: `Create success`,
      data: billboardSaved,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const middlewares = [jsonBodyParser(), errorHandler(), cors()];
export const main = middy(createBillboard).use(middlewares);
