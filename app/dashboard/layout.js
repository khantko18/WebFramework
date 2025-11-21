// DASHBOARD LAYOUT - Wraps the dashboard pages

export default function DashboardLayout({ children, stats, recent }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📊 Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage events for Sunmoon University
        </p>
      </div>

      {/* PARALLEL ROUTES - Load simultaneously */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Stats Slot - @stats */}
        {stats}
        
        {/* Recent Activity Slot - @recent */}
        {recent}
      </div>

      {/* Main Dashboard Content */}
      {children}
    </div>
  );
}

