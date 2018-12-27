import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Container from '../UI/container'
import Congratulations from '../UI/congratulations'
import Levels from '../UI/informations'
import Modal from '../UI/modal'


const styles = () => ({
  root:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class MatchesComponent extends Component {

  constructor(props) {
    super(props)
  }

  isHasDataAndNotLevel(data){
    return data.length && !data[0].level
  }

  isLevel1(data) {
    return data[0].level && data[0].level >= 1
  }

  render() {
    const {
      classes,
    } = this.props

    return (
      <Container active={'matches'}>
        <div className={classes.root}>
          {this.renderContent()}
        </div>
      </Container>
    )
  }

  renderContent() {
    const {user: { data }, history, ModalProps} = this.props

    if(this.isLevel1(data)) return <Congratulations />
    if(this.isHasDataAndNotLevel(data)) return <Modal open={true} history={history} modalProps={ModalProps} />
    return <Levels />
  }
}

MatchesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
  ModalProps: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object
}

export const mapStateToProps = ({
  login: {
    user
  }
}) => ({user})

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)


export default withStyles(styles, { withTheme: true })(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchesComponent))
