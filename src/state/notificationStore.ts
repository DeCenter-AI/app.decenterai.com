// import notifications from '@/data/notification';
// import { create } from 'zustand'

// type Notification = {
//     id: number;
//     name: string;
//     msg: string;
//     avatar: string;
//     time: string;
//     read: boolean;
//   };

//   type NotificationStore = {
//     notifications: Notification[];
//     markAsRead: (id: number) => void;
//   };
  
//   const useNotificationStore = create<NotificationStore>((set) => ({
//   notifications: [...notifications], // Assuming notifications is your initial data
//   markAsRead: (id) => {
//     set((state) => ({
//       notifications: state.notifications.map((notification) =>
//         notification.id === id ? { ...notification, read: true } : notification
//       ),
//     }));
//   },
// }));

// export default useNotificationStore;