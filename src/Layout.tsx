import { Outlet } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';



function Layout(props: any) {


  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Content */}
      <main className="main">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Layout;
