export const success = (data?: string | object | number): APIResponse => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export const badRequest = (summary?: string | object): APIResponse => {
  const errorMessage = summary ?? 'Bad Request';
  return {
    statusCode: 400,
    body: JSON.stringify(errorMessage),
  };
};

export const unauthorised = (summary?: string | object): APIResponse => {
  const errorMessage = summary ?? 'Unauthorised';
  return {
    statusCode: 401,
    body: JSON.stringify(errorMessage),
  };
};

export const notFound = (summary?: string | object): APIResponse => {
  const errorMessage = summary ?? 'Resource Not Found';
  return {
    statusCode: 404,
    body: JSON.stringify(errorMessage),
  };
};

export const error = (err: Error | string): APIResponse => {
  const errorMessage = err ?? 'Unknown error occurred';

  return {
    statusCode: 500,
    body: JSON.stringify({
      errorSummary: errorMessage,
    }),
  };
};
