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
import { executeLogin } from '../../../modules/login/actions/login'

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

export class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      password: '',
      username: '',
      open: false
    }
    this.executeLogin = this.executeLogin.bind(this)
    this.openError = this.openError.bind(this)
  }

  openError = () => {
    this.setState({ open: true })
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  changeToMatches(){
    this.props.history.push('/app/matches')
  }

  changeToRegister(){
    this.props.history.push('/register')
  }

  executeLogin() {
    const {
      username,
      password
    } = this.state
    this.props.executeLogin({username, password})
  }

  render() {
    const {
      classes,
      user: {
        data,
        error
      }
    } = this.props

    const {
      username,
      password,
      open
    } = this.state

    if(error && !open) this.openError()
    if(data.length) this.changeToMatches()
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
              <Button
                variant="contained"
                color="primary"
                className={classes.buttons}
                onClick={()=>this.executeLogin()}>
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={()=>this.changeToRegister()}
                className={classes.buttons}>
                Register
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }


}

export const mapStateToProps = ({
  login: {
    user
  }
}) => ({
  user
})

export const mapDispatchToProps = dispatch => bindActionCreators(
  { executeLogin },
  dispatch,
)

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  executeLogin: PropTypes.func,
  user: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login))
