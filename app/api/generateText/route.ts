import type { IApiResponse } from '@/src/interfaces/api-response';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request) {
  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      "result": "Generate Text",
    },
  };

  return Response.json(sampleResponse);
}