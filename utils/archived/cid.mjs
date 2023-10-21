import { CID } from 'multiformats'

export function isCid(cidStr) {
  let cid
  try {
    cid = CID.parse(cidStr)
    console.log('The string is a CID.')
  } catch (e) {
    console.log('The string is not a CID.')
    console.error({ isCid: e })
  }
  return !!cid
}

function main() {
  const cid = 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw'
  let res = isCid(cid)
  console.log({ [cid]: res })

  res = isCid('hiro')
  console.log({ ['hiro']: res })
}

// main()
