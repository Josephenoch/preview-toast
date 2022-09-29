import React,{useEffect, useState} from 'react'
import Alert from './Alert'
import { IDetails } from './interfaces'
const AlertContainer = () => {
  const [alerts, setAlerts] = useState<IDetails[]>([])

  const handleAlertEvent = (event:CustomEvent<IDetails>)=>{
    const { detail } = event
    setAlerts(prevState=>{
      return [...prevState, {...detail}]
    })

  }

  useEffect(()=>{
    window.addEventListener("CreateAlert", handleAlertEvent as any)

    return ()=> window.removeEventListener("CreateAlert", handleAlertEvent as any)
  },[])

  return (
    <div className="absolute right-4 top-10 space-y-4">
      {
        alerts.map(alertItem=> <Alert type={alertItem.type} message={alertItem.message}/>)
      }
      
    </div>
  )
}

export default AlertContainer