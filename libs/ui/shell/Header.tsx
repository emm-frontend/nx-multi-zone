import React from "react";

export const Header: React.FC = () => (
  <header className="w-full bg-white shadow-lg border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Nx Multi-Zone</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </a>
          <div className="relative group">
            <a href="/accounting" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Accounting
            </a>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/accounting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
              <a href="/accounting/invoices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Invoices</a>
              <a href="/accounting/expenses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Expenses</a>
              <a href="/accounting/reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reports</a>
            </div>
          </div>
          <div className="relative group">
            <a href="/hr" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              HR
            </a>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
              <a href="/hr/employees" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Employees</a>
              <a href="/hr/recruitment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Recruitment</a>
              <a href="/hr/payroll" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Payroll</a>
            </div>
          </div>
          <div className="relative group">
            <a href="/crm" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              CRM
            </a>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/crm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
              <a href="/crm/leads" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leads</a>
              <a href="/crm/contacts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contacts</a>
              <a href="/crm/deals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deals</a>
            </div>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Multi-Zone App
          </div>
        </div>
      </div>
    </div>
  </header>
);
