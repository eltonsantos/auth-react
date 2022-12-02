import { NavLink, useNavigate } from "react-router-dom"

export function Menu() {

  const navigate = useNavigate()
  
  const email = localStorage.getItem('@auth:email')

  function logout() {
    localStorage.removeItem('@auth:email')
    localStorage.removeItem('@auth:password')
    localStorage.removeItem('@auth:logged')
    navigate('/login')
  }

  return (
   <div>
    Bem vindo, {email}
    <NavLink to="/">Layout</NavLink> | 
    <NavLink to="/admin">Admin</NavLink> | 
    <button onClick={logout}>Sair</button>
   </div>
  )
}