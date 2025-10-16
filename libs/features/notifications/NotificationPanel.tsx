"use client";
import React, { memo } from "react";
import { useNotificationStore } from "../../state/notifications";

export const NotificationPanel: React.FC = memo(() => {
  const { 
    notifications, 
    isOpen, 
    unreadCount, 
    setIsOpen, 
    markAsRead, 
    markAllAsRead, 
    removeNotification 
  } = useNotificationStore();

  const formatTime = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diff = now.getTime() - dateObj.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${days} day${days > 1 ? 's' : ''} ago`;
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'info': return '🔵';
      case 'warning': return '🟡';
      case 'success': return '🟢';
      case 'error': return '🔴';
      default: return '🔵';
    }
  };

  const getNotificationBgColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-50';
      case 'warning': return 'bg-yellow-50';
      case 'success': return 'bg-green-50';
      case 'error': return 'bg-red-50';
      default: return 'bg-blue-50';
    }
  };

  const getNotificationDotColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-500';
      case 'warning': return 'bg-yellow-500';
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed top-20 right-6">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors relative"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17l2.586-2.586a2 2 0 012.828 0L12.828 17H4.828z" />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-6 w-72 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h4 className="font-semibold text-lg flex items-center">
          🔔 Notifications
          {unreadCount > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </h4>
        <div className="flex space-x-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-green-100 hover:text-white transition-colors text-sm"
              title="Mark all as read"
            >
              Mark all read
            </button>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="text-green-100 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            <p className="text-sm">No notifications</p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  notification.read ? 'opacity-60' : ''
                } ${getNotificationBgColor(notification.type)}`}
                onClick={() => !notification.read && markAsRead(notification.id)}
              >
                <div className={`w-2 h-2 ${getNotificationDotColor(notification.type)} rounded-full mt-2`}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeNotification(notification.id);
                      }}
                      className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatTime(notification.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
