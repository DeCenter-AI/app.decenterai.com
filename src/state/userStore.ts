import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUser {
  id: string;
  particleUUID: string | null;
  userName: string;
  email: string | null;
  name: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
}

type Store = {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clearUser: () => void; 
};

const useUserStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      setUser(userData: IUser) {
        set((state) => ({
          ...state,
          user: userData,
        }));
      },
      clearUser() {
        set({ user: null });
      },
    }),
    {
      name: 'userData',
    },
  ),
);

export default useUserStore;
