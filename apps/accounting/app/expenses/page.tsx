export default function ExpensesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">💸 Expenses</h1>
          <p className="text-gray-600">Track and manage business expenses</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-red-600">$12,450</div>
            <div className="text-gray-600">This Month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">$8,230</div>
            <div className="text-gray-600">Last Month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-gray-600">Total Entries</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">$2,450</div>
            <div className="text-gray-600">Reimbursed</div>
          </div>
        </div>

        {/* Expense Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Expense Categories</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Office Supplies</span>
                </div>
                <span className="text-gray-600">$1,250</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Travel</span>
                </div>
                <span className="text-gray-600">$3,400</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-medium">Software</span>
                </div>
                <span className="text-gray-600">$2,100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-medium">Marketing</span>
                </div>
                <span className="text-gray-600">$1,800</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium">Office Supplies</div>
                  <div className="text-sm text-gray-500">Dec 15, 2023</div>
                </div>
                <div className="text-red-600 font-semibold">-$245.00</div>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium">Client Lunch</div>
                  <div className="text-sm text-gray-500">Dec 14, 2023</div>
                </div>
                <div className="text-red-600 font-semibold">-$89.50</div>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium">Software License</div>
                  <div className="text-sm text-gray-500">Dec 13, 2023</div>
                </div>
                <div className="text-red-600 font-semibold">-$99.00</div>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add New Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
