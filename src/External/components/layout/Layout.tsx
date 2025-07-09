
import { HeaderPro } from "./HeaderPro"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full px-4 bg-gray-100">
      <HeaderPro />

      {/* Contenedor centrado */}
      <div className="flex justify-center py-2">
        
      </div>

      <div className="flex-1 overflow-auto">
        <main className="p-4 flex justify-center items-center flex-wrap gap-4">
          {children}
        </main>
      </div>
    </div>
  );
};
