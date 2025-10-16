'use client';

export default function Dashboard() {
  const zones = [
    {
      id: 'accounting',
      name: 'Accounting',
      description: 'Financial management and reporting',
      path: '/accounting',
      color: 'bg-blue-500',
    },
    {
      id: 'hr',
      name: 'Human Resources',
      description: 'Employee management and HR processes',
      path: '/hr',
      color: 'bg-green-500',
    },
    {
      id: 'crm',
      name: 'Customer Relations',
      description: 'Customer management and sales',
      path: '/crm',
      color: 'bg-orange-500',
    },
  ];

  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Active Sessions', value: '89', change: '+5%' },
    { label: 'Revenue', value: '$45,678', change: '+8%' },
    { label: 'Orders', value: '567', change: '+15%' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-lg text-gray-600">Welcome to your Multi-Zone Application</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            <div className="text-sm text-green-600 mt-2 font-medium">{stat.change}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Zones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${zone.color} rounded-lg flex items-center justify-center mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{zone.name}</h3>
              <p className="text-gray-600 mb-4">{zone.description}</p>
              <button
                onClick={() => window.location.href = zone.path}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
              >
                Access Zone
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-Zone Architecture</h2>
        <p className="text-gray-600 mb-6">
          This application demonstrates a Next.js Multi-Zone architecture using Nx.
          Each zone runs independently and can be deployed separately while sharing
          common UI components and features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">Independent deployments</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">Shared UI components</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">Micro-frontend architecture</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">Nx monorepo benefits</span>
          </div>
        </div>
      </div>
    </div>
  );
}
