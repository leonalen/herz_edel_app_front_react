// Define cómo se ve un objeto de usuario en toda la aplicación.
export interface User {
    id: string;
    nombre: string;
    email: string;
    roles: string[];
}

// Define la respuesta que esperamos de la API al hacer login.
export type AuthResponse = {
    user: User;
    token: string;
};