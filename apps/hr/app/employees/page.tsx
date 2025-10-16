export default function EmployeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">👥 Employees</h1>
          <p className="text-gray-600">Manage your workforce and employee information</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-gray-600">Total Employees</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">142</div>
            <div className="text-gray-600">Active</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">8</div>
            <div className="text-gray-600">On Leave</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">6</div>
            <div className="text-gray-600">New This Month</div>
          </div>
        </div>

        {/* Employee List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Employee Directory</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add Employee
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500">Software Engineer</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>📧 john.doe@company.com</div>
                <div>📱 +1 (555) 123-4567</div>
                <div>🏢 Engineering</div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Product Manager</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>📧 sarah.johnson@company.com</div>
                <div>📱 +1 (555) 234-5678</div>
                <div>🏢 Product</div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-medium">Mike Chen</div>
                  <div className="text-sm text-gray-500">UX Designer</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>📧 mike.chen@company.com</div>
                <div>📱 +1 (555) 345-6789</div>
                <div>🏢 Design</div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">ED</span>
                </div>
                <div>
                  <div className="font-medium">Emily Davis</div>
                  <div className="text-sm text-gray-500">Marketing Manager</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>📧 emily.davis@company.com</div>
                <div>📱 +1 (555) 456-7890</div>
                <div>🏢 Marketing</div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">RW</span>
                </div>
                <div>
                  <div className="font-medium">Robert Wilson</div>
                  <div className="text-sm text-gray-500">Sales Director</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>📧 robert.wilson@company.com</div>
                <div>📱 +1 (555) 567-8901</div>
                <div>🏢 Sales</div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-semibold">LB</span>
                </div>
                <div>
                  <div className="font-medium">Lisa Brown</div>
                  <div className="text-sm text-gray-500">HR Specialist</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>📧 lisa.brown@company.com</div>
                <div>📱 +1 (555) 678-9012</div>
                <div>🏢 Human Resources</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
