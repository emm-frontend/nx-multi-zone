export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">👥 Contacts</h1>
          <p className="text-gray-600">Manage your customer and prospect contacts</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-gray-600">Total Contacts</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">892</div>
            <div className="text-gray-600">Customers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">355</div>
            <div className="text-gray-600">Prospects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">89</div>
            <div className="text-gray-600">Hot Leads</div>
          </div>
        </div>

        {/* Contact List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Contact Directory</h2>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Search contacts..." 
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Contact
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">JS</span>
                </div>
                <div>
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm text-gray-500">CEO, TechStart Inc</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📧 john.smith@techstart.com</div>
                <div>📱 +1 (555) 123-4567</div>
                <div>🏢 Technology</div>
                <div className="mt-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Customer</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">VP Sales, Global Corp</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📧 sarah.johnson@globalcorp.com</div>
                <div>📱 +1 (555) 234-5678</div>
                <div>🏢 Manufacturing</div>
                <div className="mt-2">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Prospect</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-medium">Mike Chen</div>
                  <div className="text-sm text-gray-500">CTO, Innovation Labs</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📧 mike.chen@innovationlabs.com</div>
                <div>📱 +1 (555) 345-6789</div>
                <div>🏢 Technology</div>
                <div className="mt-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Hot Lead</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">ED</span>
                </div>
                <div>
                  <div className="font-medium">Emily Davis</div>
                  <div className="text-sm text-gray-500">Marketing Director, Enterprise Co</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📧 emily.davis@enterpriseco.com</div>
                <div>📱 +1 (555) 456-7890</div>
                <div>🏢 Finance</div>
                <div className="mt-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Customer</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">RW</span>
                </div>
                <div>
                  <div className="font-medium">Robert Wilson</div>
                  <div className="text-sm text-gray-500">Founder, Digital First</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📧 robert.wilson@digitalfirst.com</div>
                <div>📱 +1 (555) 567-8901</div>
                <div>🏢 Digital</div>
                <div className="mt-2">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Prospect</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-semibold">LB</span>
                </div>
                <div>
                  <div className="font-medium">Lisa Brown</div>
                  <div className="text-sm text-gray-500">Operations Manager, Mega Corp</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📧 lisa.brown@megacorp.com</div>
                <div>📱 +1 (555) 678-9012</div>
                <div>🏢 Retail</div>
                <div className="mt-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Hot Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
