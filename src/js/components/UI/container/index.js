import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '../drawer'

const styles = theme => ({
  root:{
    display:'flex'
  },
  content: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  }
})

class ContainerComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render() {
    const {
      theme,
      container,
      classes,
      ModalProps,
      active,
      children
    } = this.props

    const {
      mobileOpen
    } = this.state

    return (
      <div className={classes.root}>
        <Drawer
          ModalProps={ModalProps}
          theme={theme}
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          active={active}/>
        <main className={classes.content}>
          {children}
        </main>
      </div>
    )
  }

}

ContainerComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
  ModalProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  active: PropTypes.string
}

export default withStyles(styles, { withTheme: true })(ContainerComponent)
