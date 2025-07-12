import { useState } from "react";
import { Helmet } from "react-helmet-async";

export const LoginHomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-4">
      <Helmet>
        <title>Login | Herz Edel</title>
        <meta name="description" content="Accede a tu cuenta de Herz Edel para gestionar tus preferencias y servicios." />
        <meta property="og:title" content="Login | Herz Edel" />
        <meta property="og:description" content="Accede a tu cuenta de Herz Edel para gestionar tus preferencias y servicios." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-600">Login</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};