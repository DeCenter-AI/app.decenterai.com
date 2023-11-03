import { compute } from '@utils/compute'
import prisma from 'src/lib/prisma'

export async function POST(req: Request) {
  //retrieve body data
  const { trainScript, cid, userId } = await req.json() //get the user Id in request
  // FIXME: take a look at prisma/seed.ts
  const modelInput = {
    cid: cid,
    provider: LIGHTHOUSE,
  }

  const tr1 = await prisma.trainingRequest.create({
    data: {
      userId,
      inputs: modelInput,
      config: {
        trainScript,
        inputArchive: `/inputs/${modelInput.cid}`,
      },
    },
  })
  console.log({ orderReq1: tr1 })

  //call compute
  const trainCid = await compute(trainScript, cid)

  const m1 = await prisma.model.create({
    data: {
      userId,
      name: "Decenter Model", //TODO: get model Name
      description: 'Model trained by DecenterAI',
      trainingRequestId: tr1.id,
      data: {
        cid: trainCid,
        // @ts-ignore
        provider: IPFSProviders.IPFS,
      },
    },
  )

  //return response
  return new Response(
    JSON.stringify({
      result: trainCid,
    }),
  )
}
