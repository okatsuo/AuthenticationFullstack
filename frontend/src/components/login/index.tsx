import { FormEvent } from 'react'

export const UserLogin = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('the event:', event)
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