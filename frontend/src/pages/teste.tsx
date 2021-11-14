import type { NextPage } from 'next'
import Router from 'next/router'
import { DashboardTemplate } from '../template/dashboard-template'

const Teste: NextPage = () => {
  return (
    <div>
      <button onClick={() => Router.push('/')}>teste</button>
    </div>
  )

}

export default Teste
