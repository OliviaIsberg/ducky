import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout() {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
