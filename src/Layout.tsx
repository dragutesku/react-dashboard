import { Outlet } from 'react-router-dom';
import './App.css'
import logo from './logo.svg'

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';



function Layout(props: any) {


  return (
    <div className="wrapper">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="main">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout;
