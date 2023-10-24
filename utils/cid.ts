export async function isCid(cidStr: string): Promise<boolean> {
  const isIPFS = await import('is-ipfs')
  return isIPFS.cid(cidStr)
  // return true
}

async function main(): Promise<void> {
  const cid = 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw'
  let res = await isCid(cid)
  console.log({ [cid]: res })

  res = await isCid('hiro')
  console.log({ ['hiro']: res })
}

// main();
