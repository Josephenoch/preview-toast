import React, { FC, useEffect, memo} from 'react'
import { IIcons , IDetails} from './interfaces'
import { Error, Done, Dangerous, Info }from '@mui/icons-material';


interface IAlertProps extends IDetails {
  destroy: (id:string)=>void,
  id:string
}

const Alert:FC<IAlertProps> = ({id, duration, destroy, message, type}) => {
  const icons:IIcons = {
    success: <Done/>,
    error: <Dangerous/>,
    warn: <Error/>,
    info: <Info/>
  }
  useEffect(()=>{
    const myTimeOut = setTimeout(()=>destroy(id), duration)

    return () => clearTimeout(myTimeOut)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
        {icons[type]}
        {message}
    </div>
  )
}

export default memo(Alert)