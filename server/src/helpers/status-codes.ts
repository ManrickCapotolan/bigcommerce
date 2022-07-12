export const success = (data?: string | object | number) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export const badRequest = (summary?: string | object) => {
  const errorMessage = summary ?? 'Bad Request';
  return {
    statusCode: 400,
    body: JSON.stringify(errorMessage),
  };
};

export const unauthorised = (summary?: string | object) => {
  const errorMessage = summary ?? 'Unauthorised';
  return {
    statusCode: 401,
    body: JSON.stringify(errorMessage),
  };
};

export const notFound = (summary?: string | object) => {
  const errorMessage = summary ?? 'Resource Not Found';
  return {
    statusCode: 404,
    body: JSON.stringify(errorMessage),
  };
};

export const error = (err: Error | string) => {
  const errorMessage = err ?? 'Unknown error occurred';

  return {
    statusCode: 500,
    body: JSON.stringify({
      errorSummary: errorMessage,
    }),
  };
};
