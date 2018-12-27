import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Toast from '../UI/toast'
import { withStyles } from '@material-ui/core/styles'
import { registerUser } from '../../../modules/register/actions/register'

const strings = {
  title_header: 'Login',
}

export const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '300px'
  },
  content: {
    backgroundColor: 'white',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.unit * 3,
  },
  card: {
    maxWidth: '300px',
    marginTop: '100px'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputs: {
    marginBottom: '10px'
  },
  buttons: {
    marginBottom: '10px',
    width: '100px'
  },
  header: {
    marginBottom: '10px'
  }
})

export class RegisterComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      password: '',
      username: '',
      open: false
    }
    this.saveUser = this.saveUser.bind(this)
    this.openError = this.openError.bind(this)
  }

  openError = () => {
    this.setState({ open: true })
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  changeToLogin(){
    this.props.history.push('/')
  }

  saveUser() {
    const {
      username,
      password,
      firstName,
      email,
      country
    } = this.state
    this.props.registerUser({
      username,
      password,
      firstName,
      email,
      country
    })
  }

  render() {
    const {
      classes,
      message: {
        error,
        data
      }
    } = this.props

    const {
      username,
      password,
      firstName,
      email,
      country,
      open
    } = this.state

    if(error && !open) this.openError()
    if(data.length) this.changeToLogin()

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <Toast open={open} message={error} />
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                color="inherit"
                noWrap
                className={classes.header}>
                {strings.title_header}
              </Typography>
              <TextField
                className={classes.inputs}
                id="outlined-adornment-usernamename"
                variant="outlined"
                onChange={this.handleChange('username')}
                type={'text'}
                label="User"
                value={username}
              />
              <TextField
                className={classes.inputs}
                id="outlined-adornment-password"
                variant="outlined"
                onChange={this.handleChange('password')}
                type={'password'}
                label="Password"
                value={password}
              />
              <TextField
                className={classes.inputs}
                id="outlined-adornment-firstname"
                variant="outlined"
                onChange={this.handleChange('firstName')}
                type={'text'}
                label="First Name"
                value={firstName}
              />
              <TextField
                className={classes.inputs}
                id="outlined-adornment-email"
                variant="outlined"
                onChange={this.handleChange('email')}
                type={'text'}
                label="E-mail"
                value={email}
              />
              <TextField
                className={classes.inputs}
                id="outlined-adornment-country"
                variant="outlined"
                onChange={this.handleChange('country')}
                type={'text'}
                label="Country"
                value={country}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.buttons}
                onClick={()=> this.saveUser()}>
                Save
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

}

export const mapStateToProps = ({
  register: {
    message
  },
}) => ({
  message
})

export const mapDispatchToProps = dispatch => bindActionCreators(
  { registerUser },
  dispatch,
)

RegisterComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  registerUser: PropTypes.func,
  message: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterComponent))
