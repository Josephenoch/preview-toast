import React, { FC } from 'react'
import { IIcons , IAlertProps} from './interfaces'
import { Error, Done, Dangerous, Info }from '@mui/icons-material';



const Alert:FC<IAlertProps> = ({message, type}) => {
  const icons:IIcons = {
    success: <Done/>,
    error: <Dangerous/>,
    warn: <Error/>,
    info: <Info/>
  }

  return (
    <div>
        {icons[type]}
        {message}
    </div>
  )
}

export default Alert