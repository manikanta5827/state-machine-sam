export const lambdaHandler = async (event: Record<string, string>) => {
  console.log("refund lambda handler");
  console.log(event);
  return {
    ...event,
  };
};
