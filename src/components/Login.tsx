import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('@auth:logged')
    return !!isLogged
  });

  function handleLogin (event: FormEvent) {
    event.preventDefault();
    try {
      localStorage.setItem('@auth:email', email);
      localStorage.setItem('@auth:password', password);
      localStorage.setItem('@auth:logged', 'true');
      setLogged(true)
      console.log(`Email: ${email} - Logged: ${logged}`);
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
