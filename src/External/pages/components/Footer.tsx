export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 flex items-center justify-between px-6">
      {/* Logo izquierda */}
      <img src={"/img/varios/rottweiler.png"} alt="Logo Herz Edel, criadero de Rottweilers" className="w-12 h-12 object-contain" loading="lazy" width="48" height="48" />

      {/* Copyright */}
      <p className="text-sm text-center flex-1">
        © {new Date().getFullYear()} Herz Edel. Todos los derechos reservados.
      </p>

      {/* Logo derecha */}
      <img src={"/img/varios/rottweiler.png"} alt="Logo Herz Edel, criadero de Rottweilers" className="w-12 h-12 object-contain" loading="lazy" width="48" height="48" />
    </footer>
  );
};
