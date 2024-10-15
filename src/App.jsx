import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Contact from './Components/Contact/Contact'
import Home from './Components/LodingPageComponents/Home';
import Restaurant from './Components/Restaurants/Restaurant';
import Quotes from './Components/Quotes/Quotes';
import Food from './Components/Food/Food';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            // path: '/',
            index: true,
            element: <Home/>
          },
          {
            path: '/quotes',
            element: <Quotes/>
          },
          {
            path: '/restaurants',
            element: <Restaurant/>
          },
          {
            path: '/food',
            element: <Food/>
          },
          {
            path: '/contact',
            element: <Contact/>
          }
        ]
      }
    ]
  );
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
      
    </>
  )
}

export default App
