import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

const path = "billboard";
export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path,
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
  role: "MyLambdaFunctionRole",
  environment: {
    DYNAMODB_TABLE: { Ref: "BillboardTables" },
  },
};
