
export default function AdminDashboard() {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">Total Inquiries</h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">0</p>
                    {/* TODO: Connect to actual stats */}
                </div>
                {/* Add more stats cards here */}
            </div>
        </div>
    );
}
