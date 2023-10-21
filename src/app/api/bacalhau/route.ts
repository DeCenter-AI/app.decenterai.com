import {compute} from '@utils/compute'

export async function POST(req: Request) {
  //retrieve body data
  const { trainScript, cid } = await req.json()
  //call compute
  const trainRes = await compute(trainScript, cid)

  //return response
  return new Response(
    JSON.stringify({
      result: trainRes,
    }),
  )
}
