import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'

// Layout
import Layout from './Layout';

// Pages
import Homepage from './Pages/Homepage';
import Users from './Pages/Users';
import Login from './Pages/Login';


function App() {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: '/users', element: <Users /> }
      ]
    },
    { path: '/login', element: <Login /> }
  ];

  let content = useRoutes(routes);

  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App
