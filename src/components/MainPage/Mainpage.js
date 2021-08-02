import React from "react"
import Identifiers from "./InfoBox/Identifiers"
import Sidebar from "./Sidebar/Sidebar.Component"

function Mainpage() {

  return (
    <div className="page">
      <Sidebar></Sidebar>
      <Identifiers></Identifiers>
    </div>
  )
}

export default Mainpage;