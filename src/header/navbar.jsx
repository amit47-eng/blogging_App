import React from "react";

function Navbar() {
    return (
        <nav className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
            <a href="/blog" className="text-white hover:text-gray-300">Blog</a>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
            <a href="/login" className="text-white hover:text-gray-300">Login</a>
            <a href="/signup" className="text-white hover:text-gray-300">Sign Up</a>
            <a href="/profile" className="text-white hover:text-gray-300">Profile</a>
            <a href="/settings" className="text-white hover:text-gray-300">Settings</a>
        </nav>
    );
}

export default Navbar;
