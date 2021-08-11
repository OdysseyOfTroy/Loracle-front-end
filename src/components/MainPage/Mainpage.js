import React, { useState } from "react"
import Identifiers from "./InfoBox/Identifiers"
import Sidebar from "./Sidebar/Sidebar.Component"
import "../../css/Mainpage.css"
import Universalbar from "../UniversalBar"
import { useParams } from "react-router-dom"

function Mainpage() {

  const {containerId} = useParams()

  const [identifiers, setIdentifiers] = useState([])
  const [information, setInformation] = useState([])

  const setIdentifierView = (data) => {
    setIdentifiers(data)
    setInformation([])
  }

  return (
    <div className="page">
      <Universalbar></Universalbar>
      <div className="sidebar">
      <Sidebar containerId={containerId} setIdentifierView={setIdentifierView}></Sidebar>
      </div>
      <div className="identifiers">
      <Identifiers identifiers={identifiers}></Identifiers>
      </div>
    </div>
  )
}

export default Mainpage;