import {BrowserRouter,useRoutes} from 'react-router-dom'
import List from './pages/list'
import Form from './pages/form'
import Navbar from './components/navbar'
import { EmpleadoProvider } from './context/empleadoContext'
import { RolesProvider } from './context/rolContext'
import { AreasProvider } from './context/areaContext'


function Router(){
  let router = useRoutes ([
    {path:"/",element:<Form/>},
    {path:"/list",element:<List/>}
  ])
    return router
}
      function App() {

        return (
            <>
            <EmpleadoProvider>
              <RolesProvider>
                <AreasProvider>
                <BrowserRouter>
                <Navbar/>
                <Router>
                </Router>
                </BrowserRouter>
                </AreasProvider>
              </RolesProvider>
            </EmpleadoProvider>
            </>
        )
      }

export default App
