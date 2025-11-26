export const lambdaHandler = async (event: Record<string, string>) => {
  console.log("purchase lambda handler");
  // throw new Error('something something');
  console.log(event);
  return {
    ...event,
  };
};
