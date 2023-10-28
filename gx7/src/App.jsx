import {BrowserRouter,useRoutes} from 'react-router-dom'
import List from './pages/list'
import Form from './pages/form'
import Navbar from './components/navbar'

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
            <BrowserRouter>
            <Navbar/>
            <Router>
            </Router>
            </BrowserRouter>
            </>
        )
      }

export default App
