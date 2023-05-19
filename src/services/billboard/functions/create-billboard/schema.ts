export default {
  type: "object",
  properties: {
    name: {
      type: "string",
      required: ["name"],
    },
    descripton: {
      type: "string",
      required: ["descripton"],
    },
  },
} as const;
