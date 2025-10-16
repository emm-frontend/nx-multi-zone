"use client";
import React from "react";

export const NotificationPanel: React.FC = () => (
  <div className="notifications fixed top-16 right-4 bg-white shadow-md rounded-2xl p-3">
    <h4 className="font-semibold mb-2">Notifications</h4>
    <p className="text-sm text-gray-500">No new notifications</p>
  </div>
);
