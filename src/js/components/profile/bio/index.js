import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
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

const InnerBioComponent = ({
  classes,
  onChangeValue,
  bio,
  website,
  updateUser
}) => {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <TextField
            id="bio"
            label="Bio"
            className={classes.textField}
            value={bio}
            onChange={onChangeValue('bio')}
            margin="normal"
            variant="outlined"
            multiline
            rowsMax="4"
          />
          <TextField
            id="website"
            label="Website"
            className={classes.textField}
            value={website}
            onChange={onChangeValue('website')}
            margin="normal"
            variant="outlined"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={() => updateUser()}>Save</Button>
        </CardActions>
      </Card>
    </div>
  )

}

InnerBioComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func,
  updateUser: PropTypes.func,
  bio: PropTypes.string,
  website: PropTypes.string,
}

export default withStyles(styles)(InnerBioComponent)
