export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 Reports</h1>
          <p className="text-gray-600">Financial reports and analytics</p>
        </div>

        {/* Report Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Profit & Loss</h3>
            <p className="text-gray-600 mb-4">View your income and expenses</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Generate Report
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Balance Sheet</h3>
            <p className="text-gray-600 mb-4">Assets, liabilities, and equity</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Generate Report
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Cash Flow</h3>
            <p className="text-gray-600 mb-4">Track money in and out</p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Generate Report
            </button>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Report Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Period</th>
                  <th className="text-left py-3 px-4 font-semibold">Generated</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Monthly P&L Report</td>
                  <td className="py-3 px-4">Profit & Loss</td>
                  <td className="py-3 px-4">November 2023</td>
                  <td className="py-3 px-4">Dec 1, 2023</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                    <button className="text-green-600 hover:text-green-800">Download</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Q3 Balance Sheet</td>
                  <td className="py-3 px-4">Balance Sheet</td>
                  <td className="py-3 px-4">Q3 2023</td>
                  <td className="py-3 px-4">Oct 15, 2023</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                    <button className="text-green-600 hover:text-green-800">Download</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Cash Flow Analysis</td>
                  <td className="py-3 px-4">Cash Flow</td>
                  <td className="py-3 px-4">October 2023</td>
                  <td className="py-3 px-4">Nov 1, 2023</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                    <button className="text-green-600 hover:text-green-800">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
