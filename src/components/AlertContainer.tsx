import React,{useCallback, useEffect, useState} from 'react'
import Alert from './Alert'
import { IDetails } from './interfaces'
import { v4 as uuidv4 } from 'uuid';


interface IDetailsWithID extends IDetails {
  id: string
}


const AlertContainer = () => {
  const [alerts, setAlerts] = useState<IDetailsWithID[]>([])


  const handleAlertEvent = useCallback(
    (event:CustomEvent<IDetailsWithID>)=>{
      const { detail } = event
      setAlerts(prevState=>{
        const id = uuidv4()
        return [...prevState, {...detail, id}]
      })
      console.log("complete")
    },[])

  const destroy = useCallback(
    (id:string) =>{
      setAlerts(prevState=>{
        const oldAlerts = [...prevState]
        const newAlerts = oldAlerts.filter(item=> item.id !== id)
        return [...newAlerts]
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    window.addEventListener("CreateAlert", handleAlertEvent as any)

    return ()=> window.removeEventListener("CreateAlert", handleAlertEvent as any)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="absolute right-4 top-10 space-y-4">
      {
        alerts.map(alertItem=>
          <Alert 
            key={alertItem.id}
            duration={alertItem.duration} 
            id={alertItem.id} 
            destroy={destroy} 
            type={alertItem.type} 
            message={alertItem.message}
          />)
      }
      
    </div>
  )
}

export default AlertContainer