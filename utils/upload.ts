import JSZip from "jszip";
import toBuffer from "blob-to-buffer";

import lighthouse from "@lighthouse-web3/sdk";

//upload file
export const uploadFile = async (file: Buffer) => {
  const output = await lighthouse.uploadBuffer(
    file,
    `${process.env.NEXT_PUBLIC_LH_API}`
  );

  //@ts-ignore
  return output.data.Hash;
};

//zip files
export const processFiles = (
  trainScript: Blob,
  requirementsScript: Blob,
  dataSet: Blob[],
  startTrain: (hash: string) => void
) => {
  let zip = new JSZip();

  if (trainScript) zip.file(`${trainScript?.name}`, trainScript);
  if (requirementsScript)
    zip.file(`${requirementsScript?.name}`, requirementsScript);
  if (dataSet)
    dataSet.forEach((file) => {
      zip.file(`${file.name}`, file);
    });

  zip.generateAsync({ type: "blob" }).then((content) => {
    //convert to buffer
    toBuffer(content, async function (err, buffer) {
      if (err) throw err;

      let hash = await uploadFile(buffer);
      startTrain(hash);
    });
  });
};
