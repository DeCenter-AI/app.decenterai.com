import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Notification } from '@prisma/client'

type INotification = Omit<Omit<Notification, 'createdAt'>, 'updatedAt'>

interface Notifications {
  [modelId: string]: INotification
}
type Store = {
  notification: INotification[]
  Notifications?: Notifications
  addNotification: (notification: INotification) => void
  markAsRead: (id: string) => void
}

const useNotificationStore = create<Store>()(
  persist(
    devtools((set, get) => ({
      notification: [],

      addNotification: (notification) => {
        set((state) => ({
          notification: [
            ...state.notification,
            {
              id: String(Date.now()),
              ...notification,
            },
          ],
        }))
      },

      markAsRead: (id) => {
        set((state) => ({
          notification: state.notification.map((notification) =>
            notification.id === id ? { ...notification, read: true } : notification,
          ),
        }))
      },
    })),
    { name: 'notification-store' }, 
  ),
)

export default useNotificationStore
