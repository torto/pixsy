import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    left: '50%',
    top:'50%',
    transform: 'translate(-50%, -50%)'
  },
})
const openProfile = (history) => {
  return history.push('/app/profile')
}

const ModalLevel = ({open, handleClose, classes, history}) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose} >
      <div className={classes.paper}>
        <Typography variant="h6" id="modal-title">
              You need update your profile informations.
        </Typography>
        <Button onClick={() => openProfile(history)}> Open Profile</Button>
      </div>
    </Modal>
  )
}

ModalLevel.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  history: PropTypes.object,
}

export default withStyles(styles)(ModalLevel)
