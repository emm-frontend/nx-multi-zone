export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🏢 Accounting Dashboard</h1>
          <p className="text-gray-600">Manage your financial data and reports</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">$125,430</div>
            <div className="text-gray-600">Total Revenue</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-red-600">$45,230</div>
            <div className="text-gray-600">Total Expenses</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">$80,200</div>
            <div className="text-gray-600">Net Profit</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">$12,450</div>
            <div className="text-gray-600">Pending Invoices</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Office Supplies</div>
                  <div className="text-sm text-gray-500">Dec 15, 2023</div>
                </div>
                <div className="text-red-600 font-semibold">-$245.00</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Client Payment</div>
                  <div className="text-sm text-gray-500">Dec 14, 2023</div>
                </div>
                <div className="text-green-600 font-semibold">+$2,500.00</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Software License</div>
                  <div className="text-sm text-gray-500">Dec 13, 2023</div>
                </div>
                <div className="text-red-600 font-semibold">-$99.00</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Create New Invoice
              </button>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Record Expense
              </button>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Generate Report
              </button>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
