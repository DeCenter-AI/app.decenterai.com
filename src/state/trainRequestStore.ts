import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Model, TrainingRequest } from '@prisma/client'

type ITrainRequest = Omit<Omit<TrainingRequest, 'createdAt'>, 'updatedAt'>


interface ITrainRequsts {
  [requestId: string]: ITrainRequest
}

type Store = {
  // request: holds the current train request that is yet to be processed to the DB
  request: Partial<ITrainRequest> 
  // requests: holds all all the train requests associated with the user
  requests: ITrainRequsts 
  init: (request: Partial<ITrainRequest>) => void
  setTrainRequest: (request: Partial<ITrainRequest>) => void
  getTrainRequest: (id:string) =>ITrainRequest
}

const useTrainRequestStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        request: null,
        requests: null,

        async init() {
          //TODO: fill in the requests with all the training requests associated with the user

          set((state) => ({
            ...state,
            // TODO: api call result
          }))
          console.log('train request: init')
        },

        setTrainRequest(requestDto: Partial<ITrainRequest>, syncDB: boolean = true) {
          //update request store
          const {request} = get()

          set((state) => ({
            ...state,
            request: {
              ...request,
              ...requestDto,
            },
          }))
          console.log('train request: setTrainRequest')
          
          // TODO: see if request is updated, if not use get().request
          console.log(request)

          if (syncDB){
          // TODO: upsert the request with DB 
          // set/update the requests[id] = ...
          }
        },
        
        getTrainRequest(id:string){
          const {requests} = get()

          let request = requests[id]

          if (!request){
            request = null
            // FIXME: retrieve from the DB with prisma api call
          }
          return request
        },
      }),
      {
        name: 'trainRequestData',
      },
    ),
  ),
)

export default useTrainRequestStore
