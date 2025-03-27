import { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/auth/user", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="bg-white text-gray-900 p-10 rounded-xl shadow-lg text-center max-w-sm w-full">
                {user ? (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
                        <img 
                            src={user.picture} 
                            alt={user.name} 
                            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500"
                        />
                        <p className="text-gray-600">You're logged in with Google</p>
                    </>
                ) : (
                    <a 
                        href="http://localhost:5000/auth/google" 
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Login with Google
                    </a>
                )}
            </div>
        </div>
    );
}

export default App;