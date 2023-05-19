import middy from "@middy/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { httpStatus } from "./utils/enums/http-status.enum";

export const errorHandler = (): middy.MiddlewareObj<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> => {
  const onError = (handler: any) => {
    const { error } = handler;
    const message = error?.message || error?.detail;
    const response: APIGatewayProxyResult = {
      statusCode: Number(httpStatus.SERVER_ERROR),
      body: JSON.stringify({ error: message }),
    };
    handler.response = response;
  };

  return {
    onError,
  };
};
