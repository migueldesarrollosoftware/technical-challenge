import { handlerPath } from "@libs/handler-resolver";

const path = "billboard";
export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path,
      },
    },
  ],
  role: "MyLambdaFunctionRole",
  environment: {
    DYNAMODB_TABLE: { Ref: "BillboardTables" },
  },
};
