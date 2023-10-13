import JSZip from "jszip";
import { saveAs } from "file-saver";

import lighthouse from "@lighthouse-web3/sdk";

export const uploadFile = async (file: Blob) => {
  const output = await lighthouse.upload(
    file,
    `${process.env.NEXT_PUBLIC_LH_API}`,
    false
  );

  //@ts-ignore
  console.log(output.data[0].Hash);
};

//zip files
export const processFiles = (
  trainScript: Blob,
  requirementsScript: Blob,
  dataSet: Blob[],
  modelName: string
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
    console.log(content);
    //upload to lighthouse
    uploadFile(content);
    //saveAs(content, `${modelName}`)
  });
};
