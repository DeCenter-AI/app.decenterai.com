import { create } from 'zustand'

interface TrainingRequest {
  // same as before 
}

interface TrainingRequestStore {
  trainingRequests: TrainingRequest[],
  getTrainingRequests: () => void,
  addTrainingRequest: (request: TrainingRequest) => void
}

export const useTrainingRequestStore = create<TrainingRequestStore>(set => ({
  trainingRequests: [],

  getTrainingRequests: async () => {
    const response = await fetch('/api/training-requests') 
    const requests = await response.json()
    set({trainingRequests: requests})
  },

  addTrainingRequest: async (request) => {
    const response = await fetch('/api/training-requests', {
      method: 'POST',
      body: JSON.stringify(request)
    })
    const newRequest = await response.json()
    set(state => ({
      ...state,
      trainingRequests: [...state.trainingRequests, newRequest]  
    }))
  }
}))