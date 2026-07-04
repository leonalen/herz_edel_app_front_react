import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './router/AppRouter';
import './main.css';
import "./i18n";

export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
