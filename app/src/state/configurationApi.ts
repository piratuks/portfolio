import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface EnvConfig {
  environment: string;
  apiEndpoint: string;
  apiVersionPrefix: string;
}

export const configurationApi = createApi({
  reducerPath: 'configurationApi',
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    fetchConfiguration: builder.query<EnvConfig, void>({
      query: () => '/config.json'
    })
  })
});

export const { useFetchConfigurationQuery } = configurationApi;
