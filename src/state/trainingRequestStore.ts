import { create } from 'zustand'


interface TrainingRequestState {
    id: string,

}

type Store = {
    trainingRequest: TrainingRequestState
    addTrainingRequest : ()=> void

}

export const useTrainingRequestStore = create<TrainingRequestState>(
  
)
