export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🎯 Recruitment</h1>
          <p className="text-gray-600">Manage job postings and candidate pipeline</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-gray-600">Open Positions</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">45</div>
            <div className="text-gray-600">Applications</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600">8</div>
            <div className="text-gray-600">Interviews</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-gray-600">Offers Made</div>
          </div>
        </div>

        {/* Job Postings */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Open Positions</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Post Job
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Senior Software Engineer</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Active</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Full-time • Remote • Engineering</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>15 applications</span>
                  <span>Posted 3 days ago</span>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Product Manager</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Active</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Full-time • Hybrid • Product</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>8 applications</span>
                  <span>Posted 1 week ago</span>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">UX Designer</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Reviewing</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Full-time • On-site • Design</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>12 applications</span>
                  <span>Posted 2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">AJ</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Alex Johnson</div>
                  <div className="text-sm text-gray-500">Senior Software Engineer</div>
                </div>
                <div className="text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Screening</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">MS</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Maria Santos</div>
                  <div className="text-sm text-gray-500">Product Manager</div>
                </div>
                <div className="text-sm">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Interview</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">DK</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">David Kim</div>
                  <div className="text-sm text-gray-500">UX Designer</div>
                </div>
                <div className="text-sm">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Offer</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">RL</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Rachel Lee</div>
                  <div className="text-sm text-gray-500">Marketing Specialist</div>
                </div>
                <div className="text-sm">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
