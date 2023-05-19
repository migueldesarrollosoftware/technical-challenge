import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import middy from "@middy/core";
import cors from "@middy/http-cors";

import schema from "./schema";
import { errorHandler } from "@libs/handler-error";
import { APIGatewayProxyResult } from "aws-lambda";
import jsonBodyParser from "@middy/http-json-body-parser";
import { translatory } from "@libs/utils/translatory/translatory";
import ApiSwapi from "@libs/apis/swapi/swapi";
import { IParameter } from "@libs/common/parameter.interface";
import { httpStatus } from "@libs/utils/enums/http-status.enum";

const getStartWarsPlanetsTranslated: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = event?.pathParameters as unknown as IParameter;
    // instance swapi service
    const swapiService = new ApiSwapi();
    // use swapi service
    const planets = await swapiService.getPlanetsById(id);
    // tranlate
    const planetsTranslated = translatory(planets);
    // response
    return formatJSONResponse(httpStatus.OK, {
      message: `Fetch success`,
      data: planetsTranslated,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const middlewares = [jsonBodyParser(), errorHandler(), cors()];
export const main = middy(getStartWarsPlanetsTranslated).use(middlewares);
