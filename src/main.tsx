import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePost from './pages/HomePost/index.tsx';
import HomeUser from './pages/HomeUser/index.tsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>Voir /posts et /users</div>
//     ),
//     children: [
//       {
//         path: "/posts",
//         element: <HomePost/>,
//       },
//       {
//         path: "/users",
//         element: <HomeUser/>,
//       }
//     ]
//   }
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><a href={'/users'}>Voir les users</a> - <a href={'/posts'}>Voir les posts</a></div>,
  },
  {
    path: "/users",
    element: <HomeUser/>,
  },
  {
    path: "/posts",
    element: <HomePost/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
