import React from "react"
import Identifiers from "./InfoBox/Identifiers"
import Sidebar from "./Sidebar/Sidebar.Component"
import "../../css/Mainpage.css"
import Universalbar from "../UniversalBar"

function Mainpage() {

  return (
    <div className="page">
      <Universalbar></Universalbar>
      <div className="sidebar">
      <Sidebar></Sidebar>
      </div>
      <div className="identifiers">
      <Identifiers></Identifiers>
      </div>
    </div>
  )
}

export default Mainpage;