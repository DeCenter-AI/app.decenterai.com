import {CID} from 'multiformats'

export function isCid(cidStr: string) {
  const cid = CID.parse(cidStr)

  if (cid) {
    console.log('The string is a CID.')
  } else {
    console.log('The string is not a CID.')
  }

  return !!cid
}

function main() {
  const cid = 'bafybeigdyr2376427363276243276242326273262'
  isCid(cid)

  isCid('hiro')
}

// TODO:
// main()
