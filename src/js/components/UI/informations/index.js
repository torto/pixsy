import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
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
  title: {
    marginBottom: '30px'
  },
  titleContent: {
    margin: '10px 0'
  }
})

const strings = {
  levelTitle: 'Levels',
  level1: 'Level 1',
  level2: 'Level 2',
  level31: 'Level 3.1',
  level32: 'Level 3.2',
  level33: 'Level 3.3',
  content1: `The user needs to put the correct information in these fields in the profile page:
- Email
- Name
- Country
After this verification user can open the Matches Page and in the user level change the 0 for 1`,
  content2: `The user needs to put the correct information in these fields in the profile page:
- Date of Birthday
- Phone
- Andress
After this verification user can open the Tackdown Page and in the user level change the 1 for 2.
Obs: To change the level it is important that this information increased with level 1 rules`,
  content31: `The user needs to complete all information in the Bio Page, Website field and send some fields to DocuSign, like:
- Agent Agreement
- Agent Confirmation
- Past invoice/license
After this verification user can open the Case Sub Page and in the user level change the 2 for 3.1.
Obs: To change the level it is important that this information increased with level 1 and 2 rules`,
  content32: `The user needs complete Utility/bill information and sends passport document
After this verification user can open the Legal Page and in the user level change the 3.1 for 3.2.
Obs: To change the level it is important that this information increased with level 1, 2, 3.1 rules`,
  content33: ` The user needs complete Payment Details and W8/W9 information
After this verification user can open the Payments Page and in the user level change the 3.2 for 3.2.
Obs: To change the level it is important that this information increased with level 1, 2, 3.1, 3.2 rules`
}

const CongratulationsComponent = ({
  classes
}) => {
  return (
    <Card className={classes.root}>
      <CardContent className={classes.rootContent}>
        <Typography variant="h3" className={classes.title}>{strings.levelTitle}</Typography>
        <Typography variant="title" className={classes.titleContent}>{strings.level1}</Typography>
        <Typography variant="body1">{strings.content1}</Typography>
        <Typography variant="title" className={classes.titleContent}>{strings.level2}</Typography>
        <Typography variant="body1">{strings.content2}</Typography>
        <Typography variant="title" className={classes.titleContent}>{strings.level31}</Typography>
        <Typography variant="body1">{strings.content31}</Typography>
        <Typography variant="title" className={classes.titleContent}>{strings.level32}</Typography>
        <Typography variant="body1">{strings.content32}</Typography>
        <Typography variant="title" className={classes.titleContent}>{strings.level33}</Typography>
        <Typography variant="body1">{strings.content33}</Typography>
      </CardContent>
    </Card>
  )
}

CongratulationsComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CongratulationsComponent)
