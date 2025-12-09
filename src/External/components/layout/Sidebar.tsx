import { FiGrid } from 'react-icons/fi';

export const Sidebar = () => {
  return (
    <>
      <title>Barra lateral | Herz Edel</title>
      <meta name="description" content="Barra lateral de navegación de Herz Edel." />
      <aside
        className="w-64 h-full bg-gray-900 text-white fixed top-0 left-0 flex flex-col shadow-lg z-40"
        aria-label="Barra lateral de navegación"
        role="navigation"
      >
        <nav className="flex-1">
          <ul className="mt-8 space-y-2">
            <li className="flex items-center px-6 py-3 hover:bg-gray-800 cursor-pointer">
              <span className="text-yellow-400 mr-3">
                <FiGrid />
              </span>
              <span>Dashboard</span>
            </li>
            {/* Aquí puedes agregar más elementos de navegación */}
          </ul>
        </nav>
      </aside>
    </>
  );
};
