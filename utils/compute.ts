let data = {
  Engine: 'Docker',
  Docker: {
    Image: 'ubuntu',
    Entrypoint: ['echo'],
    Parameters: ['hello'],
  },
  Deal: {
    Concurrency: 1,
  },
  Verifier: 'Noop',
  PublisherSpec: {
    Type: 'IPFS',
  },
}

const BACALHAU_API = 'http://dashboard.bacalhau.org:1000/api/v1/run'
export const BACALHAU_TIMEOUT = 60 * 60 * 1000 //1hr

export async function compute(train_script: string, cid: string): Promise<string> {
  let dto = {
    Engine: 'Docker',
    Docker: {
      Image: 'ghcr.io/decenter-ai/compute:v1.6.1',
      Parameters: [
        train_script, //headbrain.ipynb
        `/inputs/${cid}`,
      ],
      EnvironmentVariables: [
        'OUTPUT_DIR=/outputs',
        'OUTPUT_ARCHIVE=decenter-model',
        // by default output archive is decenter-ai-model-input_archive.zip
        // but using this environment becomes decenter-model.zip, u can access with /outputs/decenter-model.zip,
      ],
    },
    inputs: [
      {
        StorageSource: 'urlDownload',
        Name: `https://gateway.lighthouse.storage/ipfs/${cid}`,
        URL: `https://gateway.lighthouse.storage/ipfs/${cid}`,
        Path: '/inputs',
      },
    ],
    outputs: [
      {
        Name: 'outputs',
        StorageSource: 'IPFS',
        path: '/outputs',
      },
    ],
    Deal: {
      Concurrency: 1,
    },
    Verifier: 'Noop',
    PublisherSpec: {
      Type: 'IPFS',
    },
    Resources: { CPU: '1', GPU: '1', MEMORY: '1Gb' },
  }

  // const {axios} = await import('axios')

  // const res = await axios.post(BACALHAU_API, dto)

  const res = await fetch(BACALHAU_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  })
  //     most likely gives a status of 200 even for errors.
  const output = await res.json()

  console.log({
    resStatus: res.status,
    data: output,
  })
  // output IPFS CID: is reliable for 1st 5-10 minutes
  return output['cid']
}

export async function computeDemo(
  train_script: string,
  input_archive: string,
): Promise<string> {
  let dto = {
    Engine: 'Docker',
    Docker: {
      Image: 'ghcr.io/decenter-ai/compute:v1.5.5',
      Parameters: [train_script, input_archive],
    },
    outputs: [
      {
        Name: 'outputs',
        StorageSource: 'IPFS',
        path: '/outputs',
      },
    ],
    Deal: {
      Concurrency: 1,
    },
    Verifier: 'Noop',
    PublisherSpec: {
      Type: 'IPFS',
    },
    Resources: {
      CPU: '2',
      Memory: '1gb',
      GPU: '1',
    },
  }

  const res = await fetch(BACALHAU_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  })
  const output = await res.json()

  console.log({
    resStatus: res.status,
    data: output,
  })
  return output['cid']
}

async function main() {
  const sample = {
    train_script: 'headbrain.ipynb',
    cid: 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw',
  }

  await compute(sample.train_script, sample.cid)

  // TODO: use these as templates/presets
  const samples = [
    {
      train_script: 'linear-regression.ipynb',
      input_archive: '/app/samples/sample_v3/sample_v3.zip',
    },
    {
      train_script: 'linear_regression.py',
      input_archive: '/app/samples/sample_v3_1/sample_v3_1.zip',
    },
    {
      train_script: 'linear_regression.py',
      input_archive: '/app/samples/sample_v3_2/sample_v3_2.zip',
    },
    {
      train_script: 'headbrain.ipynb',
      input_archive: '/app/samples/kaggle/inputs/headbrain.zip',
    },
    {
      train_script: 'multiple-linear-regression.ipynb',
      input_archive: '/app/samples/kaggle/inputs/multiple-linear-regression.zip',
    },
    {
      train_script: 'simple-linear-regression.ipynb',
      input_archive: '/app/samples/kaggle/inputs/simple-linear-regression.zip',
    },
    // {train_script: 'boston-housing-price-prediction.ipynb', input_archive:'/app/samples/kaggle/inputs/boston-housing-price-prediction.zip'},
  ]
  /*
  for (let { train_script, input_archive } of samples) {
    console.log('train:', train_script)
    await computeDemo(train_script, input_archive)
  }*/
}

// main()

/*
axios.post('http://dashboard.bacalhau.org:1000/api/v1/run', data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
*/
