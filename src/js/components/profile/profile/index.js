import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root:{
    width: '99%',
    height:'auto',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '300px',
    margin: '10px'
  },
  card: {
    width: '100%',
    margin: '10px'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  img: {
    width: '100px'
  }
})

const InnerProfileComponent = ({
  classes,
  onChangeValue,
  firstName,
  lastName,
  phone,
  email,
  address,
  dateBirthday,
  country,
  updateUser,
  id
}) => {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <TextField
            id="firstName"
            label="First Name"
            className={classes.textField}
            value={firstName}
            onChange={onChangeValue('firstName')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="lastName"
            label="Last Name"
            className={classes.textField}
            value={lastName}
            onChange={onChangeValue('lastName')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="country"
            label="Country"
            className={classes.textField}
            value={country}
            onChange={onChangeValue('country')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="phone"
            label="Phone"
            className={classes.textField}
            value={phone}
            onChange={onChangeValue('phone')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="email"
            label="E-mail"
            className={classes.textField}
            value={email}
            onChange={onChangeValue('email')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="address"
            label="Address"
            className={classes.textField}
            value={address}
            onChange={onChangeValue('address')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="dob"
            label="Date of Brithday"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            className={classes.textField}
            value={dateBirthday}
            onChange={onChangeValue('dateBirthday')}
            margin="normal"
          />
          <InputLabel htmlFor="id">ID - Passport/Driver License</InputLabel>
          <TextField
            id="id"
            type="file"
            className={classes.textField}
            onChange={onChangeValue('id')}
            margin="normal"
            variant="outlined"
          />
          <img src={id} className={classes.img}/>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={() => updateUser()}>
            Save
          </Button>
        </CardActions>
      </Card>
    </div>
  )

}

InnerProfileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  country: PropTypes.string,
  dateBirthday: PropTypes.string,
  updateUser: PropTypes.func,
  id: PropTypes.string,
}

export default withStyles(styles)(InnerProfileComponent)
