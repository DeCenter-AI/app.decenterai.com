import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { upsert_user } from '@app/explore/upsert_user'
import { Model, TrainingRequest } from '@prisma/client'

type IModel = Omit<Omit<Model, 'createdAt'>, 'updatedAt'>

interface Models {
  [modelId: string]: IModel
}

type Store = {
  model: IModel | null
  // stores all user's models
  models: Models | null
  /*
  prisma.model.findMany({
    where:{
      userId; userId
    }
  })

  "modelId1": IMOdel,
  "modelId2<comes from mongo>":  IModel,
  }
  */
  init: (userId: string) => void
  setModel: (model: Partial<IModel>) => void
}

const useModelStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        model: null,

        models: null,

        trainRequest: null,

        init(userId: string, syncDB: boolean = true) {
          //make api call
          const returnedModels = []
          const userModels: Models = null
          //create object properties
          returnedModels.forEach((item) => {
            userModels.item.userId = item
          })
          set((state) => ({
            ...state,
            models: userModels,
          }))
          console.log('modelStore: init')
        },

        //set user current model in focus
        async setModel(modelDto: Partial<IModel>, syncDB: boolean = true) {
          set((state) => ({
            ...state,
            model: {
              ...state.model,
              ...modelDto,
            },
          }))
          console.log('modelStore: setModel')
        },
      }),
      {
        name: 'modelData',
      },
    ),
  ),
)

export default useModelStore
