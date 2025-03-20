
import "tailwindcss"

function Aside() {

  return (
    <aside className="bg-gray-100 p-4 shadow-md w-64 h-screen sticky top-0">
      <div className="flex items-center mb-4">
        <img src="https://via.placeholder.com/50" alt="User" className="rounded-full mr-2"/>
        <div>
          <a href="#" className="text-gray-700 hover:text-gray-900">amitvish123</a>
          <p className="text-sm text-gray-500">example@example.com</p>
        </div>
      </div>
      <nav className="space-y-2">
        <a href="#" className="block text-gray-700 hover:text-gray-900">Profile</a>
        <a href="#" className="block text-gray-700 hover:text-gray-900">Gallery</a>
        <a href="#" className="block text-gray-700 hover:text-gray-900">Settings</a>
        <a href="#" className="block text-gray-700 hover:text-gray-900">Sign Up</a>
        <a href="#" className="block text-gray-700 hover:text-gray-900">Logout</a>
        <a href="#" className="block text-gray-700 hover:text-gray-900">About</a>
        <a href="/login" className="block text-gray-700 hover:text-gray-900">Login</a> {/* Added Login link */}
      </nav>
    </aside>
  );
}

export default Aside;
