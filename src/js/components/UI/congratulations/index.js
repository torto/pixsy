import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  root:{
    width: '50%'
  },
  rootContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  icon: {
    width: '150px',
    height: '150px',
    fill: '#46bf3c',
    marginTop: '30px'
  }
})

const strings = {
  congratulations: 'Congratulations'
}

const CongratulationsComponent = ({
  classes
}) => {
  return (
    <Card className={classes.root}>
      <CardContent className={classes.rootContent}>
        <Typography variant="h3">{strings.congratulations}</Typography>
        <CheckCircle className={classes.icon}/>
      </CardContent>
    </Card>
  )
}

CongratulationsComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CongratulationsComponent)
