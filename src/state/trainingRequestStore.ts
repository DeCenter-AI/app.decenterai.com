import { create } from 'zustand'

interface TrainingRequest {
  id: string
  userId?: string
  user?: User
  inputs: DataStore
  config: ModelTrainConfig
  createdAt: Date
  updatedAt: Date
}

interface User {
  id: string
  // other fields
}

interface DataStore {
  // same as before
}

interface ModelTrainConfig {
  trainScript: string
  inputArchive: string
}

interface TrainingRequestStore {
  trainingRequests: TrainingRequest[]
  addTrainingRequest: (request: TrainingRequest) => void
  getTrainingRequests: () => void
}

export const useTrainingRequestStore = create<TrainingRequestStore>((set) => ({
  trainingRequests: [],

  getTrainingRequests: async () => {
    const requests = await fetchTrainingRequests()
    set({ trainingRequests: requests })
  },

  addTrainingRequest: async (request) => {
    const newRequest = await createTrainingRequest(request)
    set((state) => ({
      ...state,
      trainingRequests: [...state.trainingRequests, newRequest],
    }))
  },
}))
