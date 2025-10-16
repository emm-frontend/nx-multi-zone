"use client";
import React from "react";

export const NotificationPanel: React.FC = () => (
  <div className="fixed top-20 right-6 w-72 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
    <div className="bg-green-600 text-white p-4">
      <h4 className="font-semibold text-lg flex items-center">
        🔔 Notifications
        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
      </h4>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
        <div>
          <p className="text-sm font-medium text-gray-900">New message received</p>
          <p className="text-xs text-gray-500">2 minutes ago</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
        <div>
          <p className="text-sm font-medium text-gray-900">System update available</p>
          <p className="text-xs text-gray-500">1 hour ago</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
        <div>
          <p className="text-sm font-medium text-gray-900">Task completed</p>
          <p className="text-xs text-gray-500">3 hours ago</p>
        </div>
      </div>
    </div>
  </div>
);
