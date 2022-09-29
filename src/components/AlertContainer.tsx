import React from 'react'
import Alert from './Alert'
const AlertContainer = () => {

  return (
    <div className="absolute right-4 top-10">
      <Alert type="error" message="Message sent"/>
    </div>
  )
}

export default AlertContainer