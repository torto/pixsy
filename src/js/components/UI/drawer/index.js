import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import Content from './content'

const drawerWidth = 90

const styles = (theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
})

const DrawerComponent = ({
  classes,
  container,
  theme,
  mobileOpen,
  handleDrawerToggle,
  children,
  ModalProps,
  active
}) => {
  return (
    <nav className={classes.drawer}>
      <Hidden smUp={true} implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
            ...ModalProps
          }} >
          <div className={classes.toolbar} />
          <Divider />
          {children}
          <Content active={active}/>
        </Drawer>
      </Hidden>
      <Hidden xsDown={true} implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{...ModalProps}}
          variant="permanent"
          open>
          <div className={classes.toolbar} />
          <Divider />
          {children}
          <Content active={active}/>
        </Drawer>
      </Hidden>
    </nav>
  )
}

DrawerComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
  children: PropTypes.object,
  ModalProps: PropTypes.object,
  active: PropTypes.string
}

export default withStyles(styles)(DrawerComponent)
