import { useNotificationStore } from "../../state/notifications";

// Utility functions for adding notifications programmatically
export const addNotification = (notification: {
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
}) => {
  const { addNotification: addNotificationToStore } = useNotificationStore.getState();
  addNotificationToStore(notification);
};

// Convenience functions for different notification types
export const addInfoNotification = (title: string, message: string) => {
  addNotification({ title, message, type: 'info' });
};

export const addWarningNotification = (title: string, message: string) => {
  addNotification({ title, message, type: 'warning' });
};

export const addSuccessNotification = (title: string, message: string) => {
  addNotification({ title, message, type: 'success' });
};

export const addErrorNotification = (title: string, message: string) => {
  addNotification({ title, message, type: 'error' });
};
