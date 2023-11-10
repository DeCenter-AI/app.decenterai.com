'use client'
import { retrieve } from '@utils/fileCoinIpfs'
import { extractFile } from '@utils/upload'
import React, { useEffect, useRef, useState } from 'react'
import { CiTrash } from 'react-icons/ci'
import { FiUploadCloud } from 'react-icons/fi'
import { MdKeyboardArrowLeft } from 'react-icons/md'

interface IProps {
  setPage: (page: number | null) => void
  setModal: (modal: number | null) => void
  setTrain: (train: boolean) => void
  train: boolean
  modal: number | null
  getData: (dataSet: File | null, trainScript: string, modelName: string) => void
}

interface IFile {
  file: {
    name: string
  }
  path: string
}

const NewModel = ({ setPage, setModal, setTrain, train, modal, getData }: IProps) => {
  const trainScriptInput = useRef<HTMLInputElement | null>(null)
  // const requirementInput = useRef<HTMLInputElement | null>(null)
  const dataSetInput = useRef<HTMLInputElement | null>(null)
  const [trainScript, setTrainScript] = useState<string>('')
  //const [requirementsScript, setRequirementsScript] = useState<File | null>(null)
  const [modelName, setModelName] = useState<string>('')
  const [decodedCid, setDecodedCid] = useState<string>('')
  const [dataSet, setDataSet] = useState<File | null>(null)
  const [dataSetList, setDataSetList] = useState<IFile[]>([])

  //truncate file name
  const truncateFileName = (fileName: string, size = 10) => {
    const split = fileName.split('.')
    const filename = split[0]
    const extension = split[1]
    if (filename.length > size) {
      let currFileName = filename.substring(0, size)
      return currFileName + '....' + extension
    } else {
      return fileName
    }
  }

  // regex for file extension
  const regex = new RegExp('[^.]+$')

  //format file size
  const formatBytes = (bytes: number, decimals = 2) => {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  //train script
  // const selectTrainScript = (e: React.FormEvent<HTMLSelectElement>) => {
  //     const fileName = e.currentTarget.value;
  //     //fillter matching note book file
  //     dataSetList.forEach((item) => {
  //         if (item.file.name.toUpperCase() === fileName.toUpperCase())
  //             //select the matching notebook
  //             setTrainScript(item.file);
  //     });
  // };
  // const handleTrainScriptDragOver = (e: React.DragEvent<Blob>) => {
  //     e.preventDefault()

  // }

  // const handleTrainScriptDrop = (e: React.DragEvent<Blob>) => {
  //     e.preventDefault()
  //     const files = e.dataTransfer.files
  //     if (!files || files.length > 1) {
  //         console.log("upload one file")
  //         return
  //     }

  //     if (files[0].name.match(regex)?.[0] === "ipynb") {
  //         //store file
  //         setTrainScript(files[0])
  //     } else {
  //         console.log("upload a note book")
  //     }

  // }

  //requirements.txt
  // const handleRequirementsScriptDragOver = (e: React.DragEvent<Blob>) => {
  //     e.preventDefault()

  // }

  // const handleRequirementsScriptDrop = (e: React.DragEvent<Blob>) => {
  //     e.preventDefault()
  //     const files = e.dataTransfer.files
  //     if (!files || files.length > 1) {
  //         console.log("upload one file")
  //         return
  //     }
  //     console.log(files)

  //     if (files[0].name.toUpperCase() === "REQUIREMENTS.TXT") {
  //         //store file
  //         setRequirementsScript(files[0])
  //     } else {
  //         console.log("upload a requirements.txt file")
  //     }

  // }

  //dataset logic begins
  const handleDataSetDragOver = (e: React.DragEvent<Blob | HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDataSetDrop = async (e: React.DragEvent<Blob | HTMLDivElement>) => {
    e.preventDefault()
    const files = e.dataTransfer.files

    if (files[0].name.match(regex)?.[0] === 'zip') {
      setDataSet(files[0])
      setDataSetList([])
      const extractedFiles = await extractFile(files[0])
      //loop through extracted files
      extractedFiles.forEach(async (relativePath, file) => {
        const content = await file.async('string')
        //set file list
        if (file.name.match(regex)?.[0] === 'ipynb') {
          setDataSetList((fileList) => [...fileList, { file: file, path: relativePath }])
        }
      })
    }
    if (!files) {
      console.log('upload one file')
      return
    }
  }

  const processDataset = async (files: File[]) => {
    setDataSet(files[0])
    setDataSetList([])
    const extractedFiles = await extractFile(files[0])
    console.log(extractedFiles)
    //loop through extracted files
    extractedFiles.forEach(async (relativePath, file) => {
      const content = await file.async('string')
      //set file list
      if (file.name.match(regex)?.[0] === 'ipynb') {
        setDataSetList((fileList) => [...fileList, { file: file, path: relativePath }])
      }
    })
  }
  //dataset logic ends

  const startProcess = () => {
    //show authorization modal
    if (modelName && trainScript && dataSet) {
      getData(dataSet, trainScript, modelName)
      setModal(0)
      //setPage(2)
    }
  }

  //download trained model
  const download = async () => {
    //download
    const status: boolean = await retrieve(decodedCid, modelName)
    // const status: boolean = await retrieve("QmWLehnQJXwLL5YCDdiXjhZJCSPNUascX4Uh2fxwuNwNYH", modelName)
    console.log(status)
    if (status) setModal(null)
  }

  useEffect(() => {
    if (modal == 3) download()
  }, [modal])

  useEffect(() => {
    if (dataSetList.length > 0) setTrainScript(dataSetList[0].path)
  }, [dataSetList])

  return (
    <div className="w-full h-full px-5 py-3 font-archivo">
      <div className="flex gap-6 items-center text-primary_7 h-[8%] ">
        <div
          onClick={() => setPage(0)}
          className="flex gap-1 text-xs h-full items-center cursor-pointer"
        >
          <MdKeyboardArrowLeft size={15} />
          Back
        </div>
        <div className="flex gap-3 text-xs h-full items-center">
          Models <span>/</span> <span className="text-primary_1">Create model</span>
        </div>
      </div>

      <div className="h-[10%] border border-primary_8 rounded-xl p-5 ">
        <h3 className="font-logirentRegular text-xl text-primary_1 ">New model</h3>
      </div>

      <div className="w-full h-[82%] flex justify-center pt-10 pb-5">
        <div className="w-full lg:w-[60%] xl:w-[40%]  h-full ">
          <div className="w-full h-[70%] overflow-y-auto flex flex-col  gap-2 pr-1">
            <div className="border border-primary_8 rounded-xl h-12">
              <input
                type="text"
                onChange={(e) => setModelName(e.currentTarget.value)}
                placeholder="Enter Model name"
                className="rounded-xl bg-transparent text-primary_1 h-full px-2 text-xs w-full border-none focus:ring-0 focus:border-none outline-none"
              />
            </div>

            <div className="h-auto w-full">
              <div className="h-2 font-archivo flex items-center text-primary_1 text-xs py-4 ">
                <p>
                  {' '}
                  Upload working directory <span className="px-2"> ( .zip )</span>
                </p>
              </div>
              {/* @ts-ignore */}
              <div
                onDrop={(e) => handleDataSetDrop(e)}
                onDragOver={(e) => handleDataSetDragOver(e)}
                className="border-2 border-primary_8 border-dashed h-20  rounded-xl "
              >
                <div className="h-[50%] flex justify-center items-center text-primary_8">
                  <FiUploadCloud size={30} />
                </div>
                <div className="h-[50%] flex justify-center items-center gap-3 font-archivo text-primary_8">
                  <input
                    ref={dataSetInput}
                    multiple
                    className="hidden"
                    accept=".zip"
                    type="file"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      e.currentTarget.files
                        ? processDataset([...e.currentTarget.files])
                        : setDataSet(null)
                    }
                  />
                  <span
                    onClick={() => dataSetInput.current?.click()}
                    className="underline text-xs text-primary_1 cursor-pointer"
                  >
                    Browse file
                  </span>
                  <span>or</span>
                  <span>Drag and drop</span>
                </div>
              </div>
              <div className="h-2 font-archivo flex items-center text-primary_8 text-sm py-2 ">
                <p> Max. size: 1GB</p>
              </div>
            </div>

            <div className="h-auto ">
              <div className="grid grid-cols-1   gap-2 h-auto">
                {dataSet && (
                  <div className="h-6  font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm">
                    <p className="text-primary_1 text-sm ">
                      {truncateFileName(dataSet.name)}{' '}
                      <span className="text-primary_9 text-xs">
                        {formatBytes(Number(dataSet.size))}
                      </span>
                    </p>
                    <CiTrash
                      size={15}
                      className="cursor-pointer"
                      onClick={() => {
                        setDataSet(null)
                        setDataSetList([])
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="h-auto  w-full">
              <select
                onChange={(e) => setTrainScript(e.currentTarget.value)}
                value={trainScript}
                className="rounded-md bg-primary_8 text-primary_1 px-4 py-2 cursor-pointer w-full border-none focus:ring-0 focus:border-none outline-none"
              >
                <option value="">Select train script</option>
                {dataSetList.map((item, idx) => (
                  <option value={item.path} key={idx}>
                    {item.path}
                  </option>
                ))}
              </select>

              {/* <div className='h-2 font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                <p> Training script</p>
                            </div>

                            <div onDrop={(e) => handleTrainScriptDrop(e)} onDragOver={(e) => handleTrainScriptDragOver(e)} className='border-2 border-primary_8 border-dashed h-20  rounded-xl '>
                                <div className='h-[50%] flex justify-center items-center text-primary_8'>
                                    <FiUploadCloud size={30} />
                                </div>
                                <div className='h-[50%] flex justify-center items-center gap-3 font-archivo text-primary_8'>
                                    <input ref={trainScriptInput} className='hidden' accept='.ipynb' type='file' onChange={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.files ? setTrainScript(e.currentTarget.files[0]) : setTrainScript(null)} />
                                    <span className='underline text-xs text-primary_1 cursor-pointer' onClick={() => trainScriptInput.current?.click()}>Browse file</span>
                                    <span>or</span>
                                    <span>Drag and drop</span>
                                </div>
                            </div> */}
              {/* {trainScript && (<div className='h-10 flex items-end  '> */}

              {/* <div className='h-[50%] font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                    <p> Uploading files</p>
                                </div> */}
              {/* <div className='h-[80%] w-full font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm'>
                                    <p className='text-primary_1 text-sm '>{truncateFileName(trainScript.name, 15)}  <span className='text-primary_9 text-xs pl-3'>{formatBytes(Number(trainScript.size))}</span></p>
                                    <CiTrash size={15} className="cursor-pointer" />
                                </div> */}

              {/* </div>)} */}
            </div>

            {/* <div className='h-auto w-full'>
                            <div className='h-2 font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                <p> Requirements</p>
                            </div>

                            <div onDrop={(e) => handleRequirementsScriptDrop(e)} onDragOver={(e) => handleRequirementsScriptDragOver(e)} className='border-2 border-primary_8 border-dashed h-20 rounded-xl '>
                                <div className='h-[50%] flex justify-center items-center text-primary_8'>
                                    <FiUploadCloud size={30} />
                                </div>
                                <div className='h-[50%] flex justify-center items-center gap-3 font-archivo text-primary_8'>
                                    <input ref={requirementInput} className='hidden' accept='.txt' type='file' onChange={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.files ? setRequirementsScript(e.currentTarget.files[0]) : setRequirementsScript(null)} />
                                    <span onClick={() => requirementInput.current?.click()} className='underline text-xs text-primary_1 cursor-pointer'>Browse file</span>
                                    <span>or</span>
                                    <span>Drag and drop</span>
                                </div>
                            </div>
                            <div className='h-2 font-archivo flex items-center text-primary_8 text-sm py-2 '>
                                <p> Max. size: 1GB</p>
                            </div>

                        </div> */}

            {/* {requirementsScript && (<div className='h-8 flex items-start   -mt-1'> */}

            {/* <div className='h-[50%] font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                    <p> Uploading files</p>
                                </div> */}
            {/* <div className='h-[80%] w-full font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm'>
                                <p className='text-primary_1 text-sm '>{truncateFileName(requirementsScript.name, 15)}  <span className='text-primary_9 text-xs pl-3'>{formatBytes(Number(requirementsScript.size))}</span></p>
                                <CiTrash size={15} className="cursor-pointer" />
                            </div> */}

            {/* </div>)} */}
          </div>
          <div className="h-[30%] flex items-start w-full">
            <button
              onClick={() => startProcess()}
              className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full cursor-pointer rounded-xl"
            >
              Train
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewModel
