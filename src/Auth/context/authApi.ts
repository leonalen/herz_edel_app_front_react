import { AuthResponse } from "./index";

// La URL base de tu API. Puedes moverla a un archivo de configuración .env si lo prefieres.
const API_URL = 'http://localhost:4000/api/auth/login'; 

export const loginApi = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    // Si la API devuelve un error (ej. 401, 404), lo capturamos aquí.
    // Esto permite mostrar mensajes como "Credenciales incorrectas" en el formulario.
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error en el inicio de sesión');
  }

  const data: AuthResponse = await response.json();
  return data;
};