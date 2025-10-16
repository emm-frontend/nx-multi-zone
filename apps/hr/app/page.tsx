export default function HRPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">👥 Human Resources</h1>
          <p className="text-gray-600">Manage your workforce and HR processes</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-gray-600">Total Employees</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-gray-600">New Hires</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">3</div>
            <div className="text-gray-600">Open Positions</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-gray-600">On Leave</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">👤</span>
                </div>
                <div>
                  <div className="font-medium">New employee onboarded</div>
                  <div className="text-sm text-gray-500">Sarah Johnson - Software Engineer</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📅</span>
                </div>
                <div>
                  <div className="font-medium">Performance review scheduled</div>
                  <div className="text-sm text-gray-500">Mike Chen - Dec 20, 2023</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">🎓</span>
                </div>
                <div>
                  <div className="font-medium">Training completed</div>
                  <div className="text-sm text-gray-500">Emily Davis - Leadership Skills</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Add New Employee
              </button>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Schedule Interview
              </button>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Process Payroll
              </button>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Employee Directory Preview */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Employee Directory</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500">Software Engineer</div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Product Manager</div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-medium">Mike Chen</div>
                  <div className="text-sm text-gray-500">Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
