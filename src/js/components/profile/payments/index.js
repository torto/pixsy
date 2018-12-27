import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
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
  }
})

const InnerPaymentsComponent = ({
  classes,
}) => {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent} />

        <CardActions>
          <Button variant="contained" color="primary" size="small">Save</Button>
        </CardActions>
      </Card>
    </div>
  )

}

InnerPaymentsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func,
  bio: PropTypes.string,
  website: PropTypes.string,
}

export default withStyles(styles)(InnerPaymentsComponent)
