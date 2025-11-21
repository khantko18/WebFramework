import LoginForm from "./LoginForm";

// Metadata for SEO
export const metadata = {
  title: "Login - CampusConnect",
  description: "Login to access CampusConnect features at Sunmoon University",
};

// SERVER COMPONENT - Login Page
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎓</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              CampusConnect
            </h1>
            <p className="text-gray-600">
              Sunmoon University Event Management System
            </p>
          </div>

          {/* Login Form - CLIENT COMPONENT */}
          <LoginForm />
        </div>

        {/* University Info */}
        <p className="text-center text-gray-600 text-sm mt-6">
          🏫 Sunmoon University, Cheonan Asan
        </p>
      </div>
    </div>
  );
}
