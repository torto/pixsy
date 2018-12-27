import React from 'react'
import PropTypes from 'prop-types'
import Reoder from '@material-ui/icons/Book'
import Image from '@material-ui/icons/Image'
import EventSeat from '@material-ui/icons/EventSeat'
import Gavel from '@material-ui/icons/Gavel'
import Face from '@material-ui/icons/Face'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const strings = {
  matches: 'Matches',
  img: 'Images',
  cases: 'Cases',
  take: 'Takedown',
  prof: 'Profile',
  logout: 'Logout'
}

const styles = () => ({
  ul:{
    width: '100%',
    listStyleType: 'none',
    padding: '0'
  },
  li: {
    width: '100%',
  },
  icons: {
    width: '50px',
    height: '40px',
    fill: '#999999'
  },
  text: {
    color: '#999999'
  },
  link: {
    '&:hover > *':{
      fill: '#616161',
      color: '#616161'
    },
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
    marginBottom: '10px'
  },
  linkActive: {
    '& > *': {
      fill: '#008aab',
      color: '#008aab'
    },
    '&:hover > *':{
      fill: '#008aab',
      color: '#008aab'
    },
  }
})
const DrawerContentComponent = ({classes, active}) => {

  const isLinkActive = (item) => {
    return item === active ? classes.link +' '+classes.linkActive : classes.link
  }

  return (
    <ul className={classes.ul}>
      <li className={classes.li}>
        <Link to="/app/matches" className={isLinkActive('matches')}>
          <Reoder className={classes.icons}/>
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            className={classes.text}>
            {strings.matches}
          </Typography>
        </Link>
      </li>
      <li className={classes.li}>
        <Link to="/app/images" className={isLinkActive('img')}>
          <Image className={classes.icons}/>
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            className={classes.text}>
            {strings.img}
          </Typography>
        </Link>
      </li>
      <li className={classes.li}>
        <Link to="/app/cases" className={isLinkActive('cases')}>
          <EventSeat className={classes.icons}/>
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            className={classes.text}>
            {strings.cases}
          </Typography>
        </Link>
      </li>
      <li className={classes.li}>
        <Link to="/app/takedown" className={isLinkActive('takedown')}>
          <Gavel className={classes.icons}/>
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            className={classes.text}>
            {strings.take}
          </Typography>
        </Link>
      </li>
      <li className={classes.li}>
        <Link to="/app/profile" className={isLinkActive('profile')}>
          <Face className={classes.icons}/>
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            className={classes.text}>
            {strings.prof}
          </Typography>
        </Link>
      </li>
      <li className={classes.li}>
        <Link to="/app/logout" className={classes.link}>
          <PowerSettingsNew className={classes.icons}/>
          <Typography
            variant="subtitle2"
            color="inherit"
            noWrap
            className={classes.text}>
            {strings.logout}
          </Typography>
        </Link>
      </li>
    </ul>
  )
}
DrawerContentComponent.propTypes = {
  classes: PropTypes.object,
  active: PropTypes.string
}

export default withStyles(styles)(DrawerContentComponent)
