import { create } from 'zustand'

interface Model {
  id: string
  name: string
}
type Store = {
  models: Model[]
  newModel: Model
  addModel: () => void
}

const useModelStore = create<Store>((set) => ({
  models: [],
  newModel: '',
  addModel() {
    set((state) => ({
      ...state,
      models: addModel(state.models, this.newModel),
    }))
  },
}))
