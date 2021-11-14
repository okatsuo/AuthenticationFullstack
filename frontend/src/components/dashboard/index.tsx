import Router from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export const Dashboard = () => {
  const { signOut } = useContext(AuthContext)
  return (
    <>
      <h1>DASHBOARD</h1>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur non ea quod harum nulla vero consectetur, expedita animi unde magni. Sapiente qui quis velit laudantium, dolores odit quae facilis?</div>
      <button onClick={signOut}>Logout</button>
      <button onClick={() => Router.push('/teste')}>Teste page</button>
    </>
  )
}