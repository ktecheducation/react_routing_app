import "./app.css"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Showcase from "./components/showcase/Showcase.jsx"
import { MdMarkChatUnread} from "react-icons/md"
import Document from"./components/sidebar/document/Document.jsx"
import { BrowserRouter, Routes,Route } from "react-router-dom"
function App()
{
    return(

        <BrowserRouter>
     
                <div className="main">
                    <div><Sidebar /></div>
                    <div><Showcase /></div>
                    <div className="chat">
                    <div><MdMarkChatUnread /></div>
                    </div>
                </div>
        </BrowserRouter>
  

        
    )
}
export default App