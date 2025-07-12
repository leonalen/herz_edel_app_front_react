import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import { FiSettings } from "react-icons/fi"

const HomePage = lazy(() => import("../External/pages/HomePage"));

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<FiSettings size={48} />} />
      </Routes>
    </Suspense>
  )
}
