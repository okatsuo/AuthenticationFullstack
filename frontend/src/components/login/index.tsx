import { FormEvent, useContext } from 'react'
import { AuthContext } from '../../context/auth'

export const UserLogin = () => {
  const { signIn } = useContext(AuthContext)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const email = data.get('email')?.toString()
    const password = data.get('password')?.toString()
    if (!email || !password) return;
    signIn(email, password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-login">LOGIN</label>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">SIGN-IN</button>
      </form>
    </div>
  )
}