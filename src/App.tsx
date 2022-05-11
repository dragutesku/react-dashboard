import type { RouteObject } from 'react-router-dom';
import { useRoutes, useParams } from 'react-router-dom';
import './App.css'

//// Layout
import Layout from './Layout';

//// Pages
import Homepage from './Pages/Homepage';
// Users
import Users from './Pages/Users/Users';
import NewUser from './Pages/Users/NewUser';
import EditUser from './Pages/Users/EditUser';
// Posts
import Posts from './Pages/Posts/Posts';
import NewPost from './Pages/Posts/NewPost';
import EditPost from './Pages/Posts/EditPost';
import Login from './Pages/Login';


function App() {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: '/users', element: <Users />},
        { path: '/newuser', element: <NewUser /> },
        { path: '/edituser/:id', element: <EditUser /> },
        { path: '/posts', element: <Posts /> },
        { path: '/newpost', element: <NewPost /> },
        { path: '/editpost/:id', element: <EditPost /> }
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
