import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { LayoutContainer } from './styles'

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}
