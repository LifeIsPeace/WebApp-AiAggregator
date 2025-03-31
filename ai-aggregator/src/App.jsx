//css
import './App.css'
// react imports
import RootLayout from './layouts/RootLayout';
import {Route, 
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements
} 
  from "react-router-dom"
//Components
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path ="/" element={<RootLayout/>}>

        <Route index element={<Home/>}/>
        
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
