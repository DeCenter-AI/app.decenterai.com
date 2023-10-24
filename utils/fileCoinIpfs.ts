import CID from 'cids'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import { Web3Storage } from 'web3.storage'

//decode CID to right format
export const decodeCid = (data: string) => {
  const cid = new CID(data.toString())

  const decodedCid = cid.toV1().toBaseEncodedString('base32')

  return decodedCid
}

export const retrieve = async (cid: string, modelName: string) => {
  const client = new Web3Storage({
    token: `${process.env.NEXT_PUBLIC_WEB_TOKEN}`,
  })
  const res = await client.get(cid)
  let files = await res.files()
  console.log(files)

  if (files.length > 0) {
    //fetch the output folder
    const outputRes = await client.get(files[1].cid)
    let outputFiles = await outputRes.files()
    console.log(outputFiles)
    //zip the file
    let zip = new JSZip()
    zip.file('output.zip', outputFiles[0])
    zip.generateAsync({ type: 'blob' }).then((content) => {
      console.log(content)
      //save to device
      saveAs(content, `${modelName}`)
    })

    return true
  } else {
    return false
  }
}
