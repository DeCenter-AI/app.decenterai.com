import { create } from 'zustand'
import { IPFSProvider } from '@prisma/client'
interface Model {
  id: string
  name: string
  data: DataStore
}
interface DataStore {
  cid: string
  provider: IPFSProvider
}
interface ModelStore {
  models: Model[]
  addModel: (model: Model) => void
  getModels: () => void
}

export const useModelStore = create<ModelStore>((set) => ({
  models: [],

  getModels: async () => {
    const response = await fetch('/api/models')
    const models = await response.json()
    set({ models })
  },

  addModel: async (model) => {
    const response = await fetch('/api/models', {
      method: 'POST',
      body: JSON.stringify(model),
    })
    const newModel = await response.json()
    set((state) => ({ ...state, models: [...state.models, newModel] }))
  },
}))
