import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoutes() {

  //let auth = {'token':true}
  const auth = localStorage.getItem('@auth:logged')

  console.log(auth)
  
  return (
   auth ? <Outlet /> : <Navigate to="/login" />
  )
}