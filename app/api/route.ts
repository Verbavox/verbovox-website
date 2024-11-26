import type { IApiResponse } from '@/src/interfaces/api-response';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request) {
  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      text: 'Welcome to the API!',
      version: '1.0.0',
    },
  };

  return Response.json(sampleResponse);
}