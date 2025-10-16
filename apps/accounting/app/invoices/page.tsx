export default function InvoicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📄 Invoices</h1>
          <p className="text-gray-600">Manage your invoices and billing</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-gray-600">Total Invoices</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">18</div>
            <div className="text-gray-600">Paid</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-yellow-600">4</div>
            <div className="text-gray-600">Pending</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-red-600">2</div>
            <div className="text-gray-600">Overdue</div>
          </div>
        </div>

        {/* Invoice List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Invoices</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create Invoice
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Invoice #</th>
                  <th className="text-left py-3 px-4 font-semibold">Client</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">#INV-001</td>
                  <td className="py-3 px-4">Acme Corp</td>
                  <td className="py-3 px-4">$2,500.00</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Paid</span>
                  </td>
                  <td className="py-3 px-4">Dec 15, 2023</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">#INV-002</td>
                  <td className="py-3 px-4">TechStart Inc</td>
                  <td className="py-3 px-4">$1,800.00</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Pending</span>
                  </td>
                  <td className="py-3 px-4">Dec 20, 2023</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">#INV-003</td>
                  <td className="py-3 px-4">Global Solutions</td>
                  <td className="py-3 px-4">$3,200.00</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">Overdue</span>
                  </td>
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
