/**
 * http request utils
 * detail api doc: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';

const codeMessage = {
  200: 'The server successfully returned the requested data.',
  201: 'Create or update data success.',
  202: 'A request has been into backend queue (async)',
  204: 'Delete data success',
  400: "Http request error, server didn't create or update data.",
  401: 'Unauthority',
  403: 'Access denied',
  404: 'Not found',
  406: 'Not Acceptable',
  410: 'Gone',
  422: 'Unprocessable Entity ',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

/**
 * Exception Handler
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    console.error({
      message: `request error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    console.error({
      description: 'Network error, cannot connect server',
      message: 'Network error',
    });
  }
  return response;
};

/**
 * http request default option
 */
const request = extend({
  errorHandler, // default error handler 
  credentials: 'include', // request with cookie
});

export default request;
