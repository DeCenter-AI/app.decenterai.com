import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Model, TrainingRequest } from '@prisma/client'

type ITrainRequest = Omit<Omit<TrainingRequest, 'createdAt'>, 'updatedAt'>

type Store = {
  request: Partial<ITrainRequest> | null
  init: (request: Partial<ITrainRequest>) => void
  setTrainRequest: (request: Partial<ITrainRequest>) => void
}

const useTrainRequestStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        request: null,

        async init(request: Partial<ITrainRequest>, syncDB: boolean = true) {
          //make api call

          set((state) => ({
            ...state,
            request,
          }))
          console.log('train request: init')
        },

        setTrainRequest(requestDto: Partial<ITrainRequest>, syncDB: boolean = true) {
          //update request store
          set((state) => ({
            ...state,
            trainRequest: requestDto,
          }))
          console.log('train request: setTrainRequest')
        },
      }),
      {
        name: 'trainRequestData',
      },
    ),
  ),
)

export default useTrainRequestStore
