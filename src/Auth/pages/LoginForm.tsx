// import { useState } from "react";
// import { useAuth } from "../api/authApi";


// export const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useAuth();

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setError(null);
//   //   setIsLoading(true);

//   //   try {
//   //     const { user, token } = await loginApi(email, password);
//   //     login(user, token);
//   //     // Aquí podrías redirigir al usuario al dashboard.
//   //   } catch (err: any) {
//   //     setError(err.message || "Ocurrió un error inesperado.");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   return (
//     <form className="mt-6" onSubmit={handleSubmit}>
//       {error && <div className="mb-4 text-center text-red-600 bg-red-100 p-2 rounded-lg">{error}</div>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Email ---</label>
//         <input
//           type="email"
//           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           disabled={isLoading}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           disabled={isLoading}
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 disabled:bg-gray-400"
//         disabled={isLoading}
//       >
//         {isLoading ? 'Iniciando sesión...' : 'Login'}
//       </button>
//     </form>
//   );
// };