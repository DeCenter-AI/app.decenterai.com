import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { upsert_user } from '@app/explore/upsert_user'
import { Model, TrainingRequest } from '@prisma/client'

type IModel = Omit<Omit<Model, 'createdAt'>, 'updatedAt'>
type ITrainRequest = Omit<Omit<TrainingRequest, 'createdAt'>, 'updatedAt'>

type Store = {
  model: IModel | null
  models: IModel[] | null
  init: (model: IModel) => void
  //   setModel: (model: Partial<IModel>) => void
  setModels: (model: Partial<IModel[]>) => void
  setTrainRequest: (request: Partial<ITrainRequest>) => void
}

const useModelStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        model: null,

        models: null,

        trainRequest: null,

        init(modelData: IModel, syncDB: boolean = true) {
          set((state) => ({
            ...state,
            model: modelData,
          }))
          console.log('modelStore: init')
        },

        // async setModel(modelDto: Partial<IModel>, syncDB: boolean = true) {
        //   //TODO: make this false, too much DB writes!!
        //   set((state) => ({
        //     ...state,
        //     model: {
        //       ...state.model,
        //       ...modelDto,
        //     },
        //   }))
        //   console.log('modelStore: setModel')
        // },

        async setModels(modelsDto: Partial<IModel[]>, syncDB: boolean = true) {
          set((state) => ({
            ...state,
            models: modelsDto,
          }))
          console.log('modelStore: setModels')
        },

        async setTrainRequest(
          requestDto: Partial<ITrainRequest>,
          syncDB: boolean = true,
        ) {
          set((state) => ({
            ...state,
            trainRequest: requestDto,
          }))
          console.log('modelStore: setTrainRequest')
        },
      }),
      {
        name: 'modelData',
      },
    ),
  ),
)

export default useModelStore
