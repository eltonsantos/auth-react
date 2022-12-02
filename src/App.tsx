import { Routes, Route } from 'react-router-dom'
import { Admin } from './components/Admin'
import { Layout } from './components/Layout'
import { Login } from './components/Login'
import { PrivateRoutes } from './routes/PrivateRoutes'

export function App() {

  return (
   <Routes>
    <Route>
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />} path="/" />
        <Route element={<Admin />} path="/admin" />
      </Route>
    </Route>
    <Route element={<Login />} path="/login" /> 
   </Routes>
  )
}
