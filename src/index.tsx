import ReactDOM from 'react-dom/client'
import './index.css'
import { Context } from './components/Context/Context'
import MainPage from './Page/mainPage/mainPage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  
        <Context>
            <MainPage/>
        </Context>
   
)
