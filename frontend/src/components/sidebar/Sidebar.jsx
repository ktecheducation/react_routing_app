import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebarbase'>
      <Link to="/"><h1 className='logo'>Scope</h1></Link>
        <ul className='sidebarlist'>
            <li className='sidebarlistitems sidebarlistitem_1' >
              <Link to="Document">Documents</Link></li>
            <li className='sidebarlistitems sidebarlistitem_2'>
              <Link to="Framework">Framework guide</Link>
              </li>
            <li className='sidebarlistitems sidebarlistitem_3'>
              <Link to="Project">project and Practics</Link></li>
            <li className='sidebarlistitems sidebarlistitem_4'>
              <Link to="Research">Research and Development</Link></li>
            <li className='sidebarlistitems sidebarlistitem_5'>
              <Link to="Support">Support & Community</Link></li>
        </ul>
    </div>
  )
}
export default Sidebar
