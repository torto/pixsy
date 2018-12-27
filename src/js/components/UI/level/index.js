import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  root:{
    width: '100%'
  },
  rootContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatar: {
    width: '80%',
    height: '100px',
    backgroundColor: '#008aab',
    marginTop: '20px'
  }
})

const strings = {
  user: 'User Level'
}

const LevelComponent = ({
  classes,
  data
}) => {
  const level = data.length ? data[0].level : 0
  return (
    <Card className={classes.root}>
      <CardContent className={classes.rootContent}>
        <Typography variant="h6">{strings.user}</Typography>
        <Avatar className={classes.avatar}>{level}</Avatar>
      </CardContent>
    </Card>
  )
}

LevelComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array
}

export default withStyles(styles)(LevelComponent)
