import { create } from 'zustand'


type Notification = {
    id: number;
    message: string;
    // type: 'success' | 'error' | 'info';
};

type NotificationStore = {
    notifications: Notification[];
    addNotification: (notification: Notification) => void;
    removeNotification: (id: number) => void;
};