import React from 'react';

const Login = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center w-96">
                <h2 className="text-3xl font-bold mb-6">Welcome to Letter Editor</h2>
                <p className="text-gray-600 mb-4">Sign in to create, edit, and save letters to your Google Drive.</p>
                <button onClick={handleGoogleLogin} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;