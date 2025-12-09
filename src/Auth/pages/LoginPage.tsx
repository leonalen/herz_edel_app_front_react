import { LoginHomePage } from "./LoginHomePage";


export const LoginPage = () => {
  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-4">
      <title>Login | Herz Edel</title>
      <meta name="description" content="Accede a tu cuenta de Herz Edel para gestionar tus preferencias y servicios." />
      <meta property="og:title" content="Login | Herz Edel" />
      <meta property="og:description" content="Accede a tu cuenta de Herz Edel para gestionar tus preferencias y servicios." />
      <meta property="og:type" content="website" />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-600">Login</h2>
        {/* <LoginForm /> */}
        <LoginHomePage />
      </div>
    </main>
  );
};