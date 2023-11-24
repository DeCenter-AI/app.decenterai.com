import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { upsert_user } from '@app/explore/upsert_user'
import { Model, TrainingRequest } from '@prisma/client'

export type IModel = Omit<Omit<Model, 'createdAt'>, 'updatedAt'>

export interface Models {
  [modelId: string]: IModel
}

type Store = {
  // manages the state of current model,
  // TODO: restricts users to 1 tab
  model?: IModel
  models?: Models
  init: (userId: string) => void
  setModel: (model: Partial<IModel>) => void
  getModel: (id: string) => IModel
}

const useModelStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        init(userId: string) {
          //make api call
          const returnedModels = []
          const userModels: Models = {}
          //create object properties

          for (const model of returnedModels) {
            userModels[model.id] = model
          }

          set((state) => ({
            ...state,
            models: userModels,
          }))
          console.log('modelStore: init')
        },

        //set user current model in focus
        async setModel(modelDto: Partial<IModel>, syncDB: boolean = false) {
          let { model } = get()

          set((state) => ({
            ...state,
            model: {
              ...model,
              ...modelDto,
            },
          }))
          console.log('modelStore: setModel')

          if (syncDB) {
            // TODO: upsert the model to DB
            // TODO: set/update the models[id] = ...
          }
        },
        getModel(id: string) {
          const { models } = get()

          let model = models[id]

          if (!model) {
            model = null
            // FIXME: retrieve from the DB with prisma api call
          }
          return model
        },
      }),
      {
        name: 'ModelStore',
      },
    ),
  ),
)

export default useModelStore
