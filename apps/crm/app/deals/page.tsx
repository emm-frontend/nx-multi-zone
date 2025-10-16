export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">💼 Deals</h1>
          <p className="text-gray-600">Track and manage your sales opportunities</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">$2.4M</div>
            <div className="text-gray-600">Pipeline Value</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">$890K</div>
            <div className="text-gray-600">Closed This Month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">23</div>
            <div className="text-gray-600">Active Deals</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">37%</div>
            <div className="text-gray-600">Win Rate</div>
          </div>
        </div>

        {/* Deal Stages */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Prospecting</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-sm text-gray-500 mb-4">$320K value</div>
            <div className="space-y-2">
              <div className="p-2 bg-blue-50 rounded text-sm">
                <div className="font-medium">TechStart Inc</div>
                <div className="text-gray-500">$25K</div>
              </div>
              <div className="p-2 bg-blue-50 rounded text-sm">
                <div className="font-medium">Global Corp</div>
                <div className="text-gray-500">$50K</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Qualification</h3>
            <div className="text-3xl font-bold text-yellow-600 mb-2">6</div>
            <div className="text-sm text-gray-500 mb-4">$450K value</div>
            <div className="space-y-2">
              <div className="p-2 bg-yellow-50 rounded text-sm">
                <div className="font-medium">Innovation Labs</div>
                <div className="text-gray-500">$75K</div>
              </div>
              <div className="p-2 bg-yellow-50 rounded text-sm">
                <div className="font-medium">Future Systems</div>
                <div className="text-gray-500">$60K</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Proposal</h3>
            <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
            <div className="text-sm text-gray-500 mb-4">$680K value</div>
            <div className="space-y-2">
              <div className="p-2 bg-orange-50 rounded text-sm">
                <div className="font-medium">Enterprise Co</div>
                <div className="text-gray-500">$150K</div>
              </div>
              <div className="p-2 bg-orange-50 rounded text-sm">
                <div className="font-medium">Digital First</div>
                <div className="text-gray-500">$120K</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Negotiation</h3>
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-sm text-gray-500 mb-4">$520K value</div>
            <div className="space-y-2">
              <div className="p-2 bg-purple-50 rounded text-sm">
                <div className="font-medium">Mega Corp</div>
                <div className="text-gray-500">$200K</div>
              </div>
              <div className="p-2 bg-purple-50 rounded text-sm">
                <div className="font-medium">NextGen Solutions</div>
                <div className="text-gray-500">$180K</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Closed Won</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">1</div>
            <div className="text-sm text-gray-500 mb-4">$140K value</div>
            <div className="space-y-2">
              <div className="p-2 bg-green-50 rounded text-sm">
                <div className="font-medium">Acme Corp</div>
                <div className="text-gray-500">$140K</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Deals */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Deals</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create Deal
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Deal Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Company</th>
                  <th className="text-left py-3 px-4 font-semibold">Value</th>
                  <th className="text-left py-3 px-4 font-semibold">Stage</th>
                  <th className="text-left py-3 px-4 font-semibold">Owner</th>
                  <th className="text-left py-3 px-4 font-semibold">Close Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Enterprise Software License</td>
                  <td className="py-3 px-4">TechStart Inc</td>
                  <td className="py-3 px-4">$25,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Prospecting</span>
                  </td>
                  <td className="py-3 px-4">John Smith</td>
                  <td className="py-3 px-4">Jan 15, 2024</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Digital Transformation</td>
                  <td className="py-3 px-4">Global Corp</td>
                  <td className="py-3 px-4">$50,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Qualification</span>
                  </td>
                  <td className="py-3 px-4">Sarah Johnson</td>
                  <td className="py-3 px-4">Jan 20, 2024</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Cloud Migration</td>
                  <td className="py-3 px-4">Innovation Labs</td>
                  <td className="py-3 px-4">$75,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">Proposal</span>
                  </td>
                  <td className="py-3 px-4">Mike Chen</td>
                  <td className="py-3 px-4">Jan 25, 2024</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Enterprise Platform</td>
                  <td className="py-3 px-4">Mega Corp</td>
                  <td className="py-3 px-4">$200,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">Negotiation</span>
                  </td>
                  <td className="py-3 px-4">Emily Davis</td>
                  <td className="py-3 px-4">Feb 1, 2024</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Software Integration</td>
                  <td className="py-3 px-4">Acme Corp</td>
                  <td className="py-3 px-4">$140,000</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Closed Won</span>
                  </td>
                  <td className="py-3 px-4">Robert Wilson</td>
                  <td className="py-3 px-4">Dec 10, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
