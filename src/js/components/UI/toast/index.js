import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'

const ToastComponent = ({message, open}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{message}</span>}
    />
  )
}

ToastComponent.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
}

export default ToastComponent
