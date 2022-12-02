import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin (event: FormEvent) {
    event.preventDefault();
    try {
      console.log(`Email: ${email} - Password: ${password}`)
      navigate('/')
    } catch (e) {
      console.log(`Erro: ${e}`)
    }
  }

  return (
   <div>
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
      <input type="submit" value="Login" />
    </form>
   </div>
  )
}
