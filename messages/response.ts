/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */
const statusCode  = {
     OK_200: 200,
     CREATED_201: 201,
     ACCEPTED_202: 202,
     NO_CONTENT_204: 204,
     NOT_MODIFIED_304: 304,
     BAD_REQUEST_400: 400,
     UNAUTHORIZED_401: 401,
     FORBIDDEN_403: 403,
     NOT_FOUND_404: 404,
     METHOD_NOT_ALLOWED_405: 405,
     REQUEST_TIME_OUT_408: 408,
     PAYLOAD_TOO_LARGE_413: 413,
     TOO_MANY_REQUESTS_429: 429,
     UNAVAILABLE_FOR_LEGAL_REASONS_451: 451,
     INTERNAL_SERVER_ERROR_500: 500,
     NOT_IMPLEMENTED_501: 501,
     SERVICE_UNAVAILABLE_503: 503,
};

export default statusCode;
