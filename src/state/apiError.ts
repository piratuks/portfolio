import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export const isSerializedError = (
  errorResponse: FetchBaseQueryError | SerializedError
): errorResponse is SerializedError => errorResponse && 'message' in errorResponse;
