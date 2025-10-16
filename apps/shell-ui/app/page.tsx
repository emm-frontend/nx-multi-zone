"use client";
import { addInfoNotification, addWarningNotification, addSuccessNotification, addErrorNotification } from "features/notifications";

export default function HomePage() {
  const handleTestNotification = (type: 'info' | 'warning' | 'success' | 'error') => {
    switch (type) {
      case 'info':
        addInfoNotification('Test Info', 'This is an info notification');
        break;
      case 'warning':
        addWarningNotification('Test Warning', 'This is a warning notification');
        break;
      case 'success':
        addSuccessNotification('Test Success', 'This is a success notification');
        break;
      case 'error':
        addErrorNotification('Test Error', 'This is an error notification');
        break;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Nx Multi-Zone
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern microfrontend architecture built with Next.js and Nx
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="/accounting" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Accounting
            </a>
            <a 
              href="/hr" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Go to HR
            </a>
            <a 
              href="/crm" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Go to CRM
            </a>
          </div>
          
          {/* Test Notification Buttons */}
          <div className="flex justify-center space-x-2">
            <button 
              onClick={() => handleTestNotification('info')}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              Test Info
            </button>
            <button 
              onClick={() => handleTestNotification('warning')}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm"
            >
              Test Warning
            </button>
            <button 
              onClick={() => handleTestNotification('success')}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
            >
              Test Success
            </button>
            <button 
              onClick={() => handleTestNotification('error')}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
            >
              Test Error
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-2">Accounting</h3>
            <p className="text-gray-600">Manage your financial data and reports with our comprehensive accounting module.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Human Resources</h3>
            <p className="text-gray-600">Streamline HR processes and manage your workforce efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">CRM</h3>
            <p className="text-gray-600">Build stronger customer relationships with our CRM solution.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">System Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-gray-600">Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-gray-600">Shared Libraries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div className="text-gray-600">Feature Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1</div>
              <div className="text-gray-600">Shell App</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
