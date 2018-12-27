import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Container from '../UI/container'
import Profile from './profile'
import Bio from './bio'
import Payments from './payments'
import { updateUser } from '../../../modules/login/actions/updateUser'
import Toast from '../UI/toast'
import Level from '../UI/level'

const strings = {
  profile: 'Profile',
  bio: 'Bio',
  plans: 'Plans',
  payments: 'Payments',
  settings: 'Settings'
}
const styles = () => ({
  root:{
    width: '100%',
    height: '100%',
    minHeight: '400px',
  },
  content: {
    height: '100%',
    width: '69%',
    position: 'absolute'
  },
  level: {
    width: '15%',
    position: 'absolute',
    right: '35px',
    top: '100px',
  }
})

class ProfileComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      value: 0,
      firstName: '',
      lastName: '',
      country: '',
      phone: '',
      email: '',
      address: '',
      dateBirthday: '',
      id: '',
      bio: '',
      website: '',
    }
    this.onChangeValue = this.onChangeValue.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.updateFields()
  }

  componentDidUpdate(){
    const {
      user: {
        error
      }
    } = this.props
    if(error && !this.state.open) this.openToast()
  }

  onChangeValue = prop => event => {
    if(event.target.files) return this.setState({ [prop]: URL.createObjectURL(event.target.files[0]) })
    return this.setState({ [prop]: event.target.value })
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  updateFields() {
    const { user: { data } } = this.props
    if(data.length) return this.setState({
      firstName: data[0].firstName,
      lastName: data[0].lastName,
      country: data[0].country,
      phone: data[0].phone,
      email: data[0].email,
      address: data[0].address,
      dateBirthday: data[0].dateBirthday,
      id: data[0].id,
      bio: data[0].bio,
      website: data[0].website,
    })
  }

  openToast() {
    this.setState({open: true})
  }

  updateUser() {
    const {
      user: {
        data
      }
    } = this.props
    const {
      firstName,
      lastName,
      phone,
      email,
      address,
      country,
      dateBirthday,
      id,
      bio,
      website
    } = this.state

    const user = {
      username:  data[0].username,
      password: data[0].password,
      firstName,
      lastName,
      phone,
      email,
      address,
      country,
      dateBirthday,
      id,
      bio,
      website
    }
    this.props.updateUser(user)
  }

  render() {
    const {
      theme,
      classes,
      user:{
        data,
        error
      }
    } = this.props

    const {
      value,
      firstName,
      lastName,
      phone,
      email,
      address,
      country,
      dateBirthday,
      id,
      bio,
      website,
      open
    } = this.state

    return (
      <Container active={'profile'}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth >
              <Tab label={strings.profile} />
              <Tab label={strings.bio} />
              <Tab label={strings.plans} />
              <Tab label={strings.payments} />
              <Tab label={strings.settings} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={this.handleChangeIndex}
            className={classes.content}>
            <Profile
              onChangeValue={this.onChangeValue}
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              email={email}
              address={address}
              country={country}
              dateBirthday={dateBirthday}
              id={id}
              updateUser={this.updateUser} />
            <Bio
              onChangeValue={this.onChangeValue}
              bio={bio}
              website={website}
              updateUser={this.updateUser} />
            <div dir={theme.direction}>Item Two</div>
            <Payments />
          </SwipeableViews>
          <div className={classes.level}>
            <Level data={data} />
          </div>
        </div>
        <Toast open={open} message={error}/>
      </Container>
    )
  }
}

ProfileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
  ModalProps: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object.isRequired,
  updateUser: PropTypes.func,
}

export const mapStateToProps = ({ login: { user } }) => ({ user })

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateUser
  },
  dispatch
)


export default withStyles(styles, { withTheme: true })(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileComponent))
