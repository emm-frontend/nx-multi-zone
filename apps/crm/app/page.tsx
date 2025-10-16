export default function CRMPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 Customer Relationship Management</h1>
          <p className="text-gray-600">Build stronger customer relationships and drive sales</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-gray-600">Total Customers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-gray-600">Active Leads</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">$45,230</div>
            <div className="text-gray-600">Monthly Revenue</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">23</div>
            <div className="text-gray-600">Deals Closed</div>
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
                  <span className="text-green-600">💰</span>
                </div>
                <div>
                  <div className="font-medium">Deal closed successfully</div>
                  <div className="text-sm text-gray-500">Acme Corp - $12,500</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📞</span>
                </div>
                <div>
                  <div className="font-medium">Follow-up call scheduled</div>
                  <div className="text-sm text-gray-500">TechStart Inc - Tomorrow 2 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">📧</span>
                </div>
                <div>
                  <div className="font-medium">Email campaign sent</div>
                  <div className="text-sm text-gray-500">Q4 Product Launch - 1,200 recipients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Add New Lead
              </button>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Create Contact
              </button>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Schedule Meeting
              </button>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>

        {/* Customer Pipeline */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Pipeline</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Prospects</h3>
              <div className="text-2xl font-bold text-blue-600">45</div>
              <div className="text-sm text-blue-600">$125,000</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Qualified</h3>
              <div className="text-2xl font-bold text-yellow-600">23</div>
              <div className="text-sm text-yellow-600">$89,000</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Proposal</h3>
              <div className="text-2xl font-bold text-orange-600">12</div>
              <div className="text-sm text-orange-600">$67,000</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Closed</h3>
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-green-600">$45,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
