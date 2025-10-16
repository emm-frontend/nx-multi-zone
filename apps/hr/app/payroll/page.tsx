export default function PayrollPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">💰 Payroll</h1>
          <p className="text-gray-600">Manage employee compensation and payroll processing</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">$245,000</div>
            <div className="text-gray-600">Total Payroll</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-gray-600">Employees</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">$1,570</div>
            <div className="text-gray-600">Average Salary</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">Dec 15</div>
            <div className="text-gray-600">Next Payday</div>
          </div>
        </div>

        {/* Payroll Processing */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Payroll Processing</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">December 2023</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Processed on Dec 1, 2023</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>156 employees</span>
                  <span>$245,000 total</span>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">November 2023</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Processed on Nov 1, 2023</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>154 employees</span>
                  <span>$238,000 total</span>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">October 2023</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Processed on Oct 1, 2023</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>152 employees</span>
                  <span>$231,000 total</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Process Next Payroll
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Salary Ranges</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Engineering</div>
                  <div className="text-sm text-gray-500">45 employees</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$85k - $150k</div>
                  <div className="text-sm text-gray-500">Average: $112k</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Product</div>
                  <div className="text-sm text-gray-500">12 employees</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$75k - $130k</div>
                  <div className="text-sm text-gray-500">Average: $98k</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Design</div>
                  <div className="text-sm text-gray-500">8 employees</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$65k - $110k</div>
                  <div className="text-sm text-gray-500">Average: $85k</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Marketing</div>
                  <div className="text-sm text-gray-500">15 employees</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$55k - $95k</div>
                  <div className="text-sm text-gray-500">Average: $72k</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Sales</div>
                  <div className="text-sm text-gray-500">25 employees</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$60k - $120k</div>
                  <div className="text-sm text-gray-500">Average: $88k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
