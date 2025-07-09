import { Route, Routes } from "react-router-dom"
import { HomePage } from "../External/pages/HomePage"
import { Settings } from "@mui/icons-material"



export const AppRouter = () => {

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
