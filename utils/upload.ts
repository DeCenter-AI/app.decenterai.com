import JSZip from 'jszip'
import toBuffer from 'blob-to-buffer'

import lighthouse from '@lighthouse-web3/sdk'

//upload file
export const uploadFile = async (
  file: File | null,
  startTrain: (hash: string) => void,
) => {
  if (file) {
    toBuffer(file, async function (err, buffer) {
      if (err) throw err
      const output = await lighthouse.uploadBuffer(
        file,
        `${process.env.NEXT_PUBLIC_LH_API}`,
      )
      const hash = output.data.Hash

      startTrain(hash)
    })
  }
}

//zip files
// export const processFiles = (
//   trainScript: File | {},
//   //   requirementsScript: File | null,
//   dataSet: File | null,
//   startTrain: (hash: string) => void
// ) => {
//   let zip = new JSZip();

//   if (trainScript) zip.file(`${trainScript?.name}`, trainScript);
//   //   if (requirementsScript)
//   //     zip.file(`${requirementsScript?.name}`, requirementsScript);
//   if (dataSet)
//     dataSet.forEach((file) => {
//       zip.file(`${file.name}`, file);
//     });

//   zip.generateAsync({ type: "blob" }).then((content) => {
//     //convert to buffer
//     toBuffer(content, async function (err, buffer) {
//       if (err) throw err;

//       let hash = await uploadFile(buffer);
//       startTrain(hash);
//     });
//   });
// };

//extract zip file
export const extractFile = async (selectedFile: File) => {
  const file = selectedFile
  const zip = new JSZip()
  const extractedFiles = await zip.loadAsync(file)
  const regex = new RegExp('[^.]+$')

  return extractedFiles
}
