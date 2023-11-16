
import { devtools, persist } from 'zustand/middleware';
import { upsert_user } from '@app/explore/upsert_user';
import { Notification, } from '@prisma/client';

type INotification = Omit<Omit<Notification, 'createdAt'>, 'updatedAt'>;

interface Notifications {
    [notificationId: string]: INotification;
}

interface Store {
    model?: INotification;
    models?: Notifications;
    init: (userId: string) => void;
    setNotification: (modelDto: Partial<INotification>) => void;
    getNotification: (id: string) => INotification;
}

