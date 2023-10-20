'use client'
import React, {useState} from 'react'
import {DashLayout} from '../dashLayout'
import TransactionAuthorization from './modals/TransactionAuthorization'
import TransactionProcessing from './modals/TransactionProcessing'
import TransactionCompleted from './modals/TransactionCompleted'
import TrainBase from './components/TrainBase'
import NewModel from './components/NewModel'
import DownloadSignal from './modals/DownloadSignal'
import ModelTraining from './components/ModelTraining'
import ModelDownload from './components/ModelDownload'
import {uploadFile} from '@utils/upload'
import axios from 'axios'
import {decodeCid, retrieve} from '@utils/fileCoinIpfs'

export default function Page() {
  const [page, setPage] = useState<number | null>(null)
  const [modal, setModal] = useState<number | null>(null)
  const [train, setTrain] = useState<boolean>(false)
  const [decodedCid, setDecodedCid] = useState<string>('')
  const [trainScript, setTrainScript] = useState<string>('')
  const [modelName, setModelName] = useState<string>('')

  const startTrain = async (cid: string) => {
    //call backend
    const trainData = await axios.post('/api/bacalhau', {
      trainScript: `${trainScript}`,
      cid: `${cid}`,
    })
    console.log(trainData.data.result)
    //decode cid
    const decodedCid = decodeCid(trainData.data.result)
    setDecodedCid(decodedCid)
    console.log(decodedCid)
    setPage(3)
  }

  const startUpload = (dataSet: File | null, trainScript: string, modelName: string) => {
    setTrainScript(trainScript)
    setModelName(modelName)
    uploadFile(dataSet, startTrain)
  }

  //download trained model
  const download = async () => {
    setModal(3)

    //download
    const status: boolean = await retrieve(decodedCid, modelName)
    // const status: boolean = await retrieve("QmWLehnQJXwLL5YCDdiXjhZJCSPNUascX4Uh2fxwuNwNYH", modelName)
    console.log(status)
    if (status) setModal(null)
  }

  return (
    <DashLayout>
      {!page && <TrainBase setPage={setPage} />}
      {page == 1 && (
        <NewModel
          setPage={setPage}
          startUpload={startUpload}
          setModal={setModal}
          modal={modal}
          train={train}
          setTrain={setTrain}
        />
      )}
      {page == 2 && <ModelTraining setPage={setPage} />}
      {page == 3 && <ModelDownload setPage={setPage} download={download} />}

      {modal === 0 && (
        <TransactionAuthorization setModal={setModal} setTrain={setTrain} />
      )}
      {modal === 1 && <TransactionProcessing />}
      {modal === 2 && <TransactionCompleted setModal={setModal} />}
      {modal === 3 && <DownloadSignal />}
    </DashLayout>
  )
}
