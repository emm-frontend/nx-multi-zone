export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🎯 Leads</h1>
          <p className="text-gray-600">Manage your sales leads and prospects</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">89</div>
            <div className="text-gray-600">Total Leads</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">23</div>
            <div className="text-gray-600">Qualified</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-gray-600">Converted</div>
          </div>
        </div>

        {/* Lead Pipeline */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">New Leads</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
            <div className="space-y-2">
              <div className="p-2 bg-blue-50 rounded text-sm">
                <div className="font-medium">TechStart Inc</div>
                <div className="text-gray-500">$25,000 potential</div>
              </div>
              <div className="p-2 bg-blue-50 rounded text-sm">
                <div className="font-medium">Global Corp</div>
                <div className="text-gray-500">$15,000 potential</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Contacted</h3>
            <div className="text-3xl font-bold text-yellow-600 mb-2">23</div>
            <div className="space-y-2">
              <div className="p-2 bg-yellow-50 rounded text-sm">
                <div className="font-medium">Innovation Labs</div>
                <div className="text-gray-500">$35,000 potential</div>
              </div>
              <div className="p-2 bg-yellow-50 rounded text-sm">
                <div className="font-medium">Future Systems</div>
                <div className="text-gray-500">$20,000 potential</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Qualified</h3>
            <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
            <div className="space-y-2">
              <div className="p-2 bg-orange-50 rounded text-sm">
                <div className="font-medium">Enterprise Co</div>
                <div className="text-gray-500">$50,000 potential</div>
              </div>
              <div className="p-2 bg-orange-50 rounded text-sm">
                <div className="font-medium">Digital First</div>
                <div className="text-gray-500">$30,000 potential</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Proposal</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="space-y-2">
              <div className="p-2 bg-green-50 rounded text-sm">
                <div className="font-medium">Mega Corp</div>
                <div className="text-gray-500">$75,000 potential</div>
              </div>
              <div className="p-2 bg-green-50 rounded text-sm">
                <div className="font-medium">NextGen Solutions</div>
                <div className="text-gray-500">$40,000 potential</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Leads</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add Lead
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Company</th>
                  <th className="text-left py-3 px-4 font-semibold">Contact</th>
                  <th className="text-left py-3 px-4 font-semibold">Value</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Source</th>
                  <th className="text-left py-3 px-4 font-semibold">Created</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">TechStart Inc</td>
                  <td className="py-3 px-4">John Smith</td>
                  <td className="py-3 px-4">$25,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">New</span>
                  </td>
                  <td className="py-3 px-4">Website</td>
                  <td className="py-3 px-4">Dec 15, 2023</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Global Corp</td>
                  <td className="py-3 px-4">Sarah Johnson</td>
                  <td className="py-3 px-4">$15,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Contacted</span>
                  </td>
                  <td className="py-3 px-4">Referral</td>
                  <td className="py-3 px-4">Dec 14, 2023</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Innovation Labs</td>
                  <td className="py-3 px-4">Mike Chen</td>
                  <td className="py-3 px-4">$35,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">Qualified</span>
                  </td>
                  <td className="py-3 px-4">LinkedIn</td>
                  <td className="py-3 px-4">Dec 13, 2023</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Enterprise Co</td>
                  <td className="py-3 px-4">Emily Davis</td>
                  <td className="py-3 px-4">$50,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Proposal</span>
                  </td>
                  <td className="py-3 px-4">Trade Show</td>
                  <td className="py-3 px-4">Dec 12, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
