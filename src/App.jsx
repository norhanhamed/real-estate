import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import NotFound from './Components/NotFound/NotFound'
import Contact from './Components/Contact/Contact'

function App() {
 const routes = createBrowserRouter ([
  {path:'', element: <Layout /> ,children:[
    {index:true, element:<Home />},
    {path:'projects', element: <Projects />},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>},

  ]}
 ])
  return (
   <>
 
   <RouterProvider router={routes}></RouterProvider>
   </>
  )
}

export default App
