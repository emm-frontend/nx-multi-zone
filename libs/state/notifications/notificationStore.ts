import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: Date;
  read: boolean;
}

interface NotificationState {
  notifications: Notification[];
  isOpen: boolean;
  unreadCount: number;
  
  // Actions
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
  setIsOpen: (isOpen: boolean) => void;
  getUnreadCount: () => number;
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [
        {
          id: '1',
          title: 'New message received',
          message: 'You have a new message in the chat',
          type: 'info',
          timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
          read: false
        },
        {
          id: '2',
          title: 'System update available',
          message: 'A new system update is ready to install',
          type: 'warning',
          timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
          read: false
        },
        {
          id: '3',
          title: 'Task completed',
          message: 'Your recent task has been completed successfully',
          type: 'success',
          timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
          read: true
        }
      ],
      isOpen: false,
      unreadCount: 0,

      addNotification: (notification) => {
        const newNotification: Notification = {
          ...notification,
          id: Date.now().toString(),
          timestamp: new Date(),
          read: false
        };
        
        set((state) => ({
          notifications: [newNotification, ...state.notifications],
          unreadCount: state.unreadCount + 1
        }));
      },

      markAsRead: (id) => {
        set((state) => {
          const updatedNotifications = state.notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
          );
          
          const unreadCount = updatedNotifications.filter(n => !n.read).length;
          
          return {
            notifications: updatedNotifications,
            unreadCount
          };
        });
      },

      markAllAsRead: () => {
        set((state) => ({
          notifications: state.notifications.map(notification => ({
            ...notification,
            read: true
          })),
          unreadCount: 0
        }));
      },

      removeNotification: (id) => {
        set((state) => {
          const notification = state.notifications.find(n => n.id === id);
          const wasUnread = notification && !notification.read;
          
          return {
            notifications: state.notifications.filter(n => n.id !== id),
            unreadCount: wasUnread ? state.unreadCount - 1 : state.unreadCount
          };
        });
      },

      clearAllNotifications: () => {
        set({
          notifications: [],
          unreadCount: 0
        });
      },

      setIsOpen: (isOpen) => set({ isOpen }),

      getUnreadCount: () => {
        const state = get();
        return state.notifications.filter(n => !n.read).length;
      }
    }),
    {
      name: 'notification-storage',
      partialize: (state) => ({
        notifications: state.notifications,
        isOpen: state.isOpen
      }),
      // Custom serialization to handle Date objects
      serialize: (state) => {
        return JSON.stringify({
          ...state,
          state: {
            ...state.state,
            notifications: state.state.notifications.map(notification => ({
              ...notification,
              timestamp: notification.timestamp.toISOString()
            }))
          }
        });
      },
      deserialize: (str) => {
        const parsed = JSON.parse(str);
        return {
          ...parsed,
          state: {
            ...parsed.state,
            notifications: parsed.state.notifications.map((notification: any) => ({
              ...notification,
              timestamp: new Date(notification.timestamp)
            }))
          }
        };
      }
    }
  )
);
