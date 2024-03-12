import React from 'react'
import "./showcase.css"
import Document from '../sidebar/document/Document'
import Framework from "../sidebar/framework_guide/Framework.jsx"
import Project from "../sidebar/project_practics/Project.jsx"
import Research from '../sidebar/research_development/Research.jsx'
import Support from '../sidebar/support_community/Support.jsx'
import Home from "../home/Home.jsx"
import {Routes,Route} from "react-router-dom"
function Showcase() {
  return (
    
    <div className='showcasebody'>
      <Routes>
  
        <Route path="/" element={<Home />}></Route>
        <Route path='Document' element={<Document />}></Route>      
        <Route path='Framework' element={<Framework />}></Route>
        <Route path='Project' element={<Project />}></Route>
        <Route path='Research' element={<Research />}></Route>
        <Route path='Support' element={<Support />}></Route>
      </Routes>
    </div>
  )
}

export default Showcase
