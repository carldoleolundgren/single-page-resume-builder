import React from 'react'
import uniqid from 'uniqid'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'

const styles = {
  editIcons: {
    padding: '0px 3px',
  },
  personalData: {
    display: 'inline-block',
    lineHeight: '30px',
    width: '325px',
  },
}

const Header = (props) => {
  //copy personalData array to later manipulate and to access data
  const personalData = props.resumeData.personalData

  function saveNewDatum(editKey, newValue) {
    props.setEditing({ ...props.editing, [editKey]: false })
    props.savePersonalDatum(editKey, newValue)
  }

  function saveAllData() {
    for (const property in personalData) {
      if (
        document.querySelector(`#${property}`) &&
        document.querySelector(`#${property}`).value
      ) {
        personalData[property] = document.querySelector(`#${property}`).value
      }
    }

    let careerObjective = props.resumeData.careerObjective

    if (document.querySelector('#careerObjective')) {
      careerObjective = document.querySelector('#careerObjective').value
    }

    props.saveAllPersonalData(personalData, careerObjective)
  }

  const personalDataList = [] //initiate array to hold all of the personal data input elements for later render
  const placeholders = {
    firstName: 'First Name',
    lastName: 'Last Name',
    title: 'Job Title',
    phone: 'Phone Number',
    email: 'Email Address',
    address: 'Physical U.S. Address',
    github: 'Link to Github Profile (leave out "https://")',
    careerObjective:
      'Describe your career objective in three to four sentences',
  }

  for (const property in personalData) {
    personalDataList.push(
      <div key={uniqid()}>
        {!props.resumeData.personalData[property] || props.editing[property] ? (
          <div>
            <Input
              id={property}
              placeholder={placeholders[property]}
              defaultValue={
                props.resumeData.personalData[property]
                  ? props.resumeData.personalData[property]
                  : ''
              }
              style={{ width: '325px' }}
            />
            <IconButton
              aria-label="save"
              size="small"
              style={styles.editIcons}
              color="primary"
              onClick={() => {
                saveNewDatum(
                  property,
                  document.querySelector(`#${property}`).value,
                )
              }}
            >
              <SaveIcon />
            </IconButton>
          </div>
        ) : (
          <div>
            <Typography variant="body1" style={styles.personalData}>
              {props.resumeData.personalData[property]}
            </Typography>
            <IconButton
              aria-label="edit"
              size="small"
              style={styles.editIcons}
              onClick={() =>
                props.setEditing({ ...props.editing, [property]: true })
              }
            >
              <EditIcon />
            </IconButton>
          </div>
        )}
      </div>,
    )
  }

  return (
    <div>
      <CardHeader title="Personal Data" />
      {personalDataList}
      {!props.resumeData.careerObjective || props.editing.careerObjective ? (
        <div>
          <TextField
            id="careerObjective"
            placeholder={placeholders.careerObjective}
            defaultValue={
              props.resumeData.careerObjective
                ? props.resumeData.careerObjective
                : ''
            }
            multiline
            rows={4}
            style={{ width: '650px' }}
          />
          <IconButton
            aria-label="save"
            size="small"
            style={styles.editIcons}
            color="primary"
            onClick={() =>
              saveNewDatum(
                'careerObjective',
                document.querySelector(`#careerObjective`).value,
              )
            }
          >
            <SaveIcon />
          </IconButton>
        </div>
      ) : (
        <div>
          <Typography
            variant="body1"
            style={{
              ...styles.personalData,
              width: '650px',
              lineHeight: '23px',
            }}
          >
            {props.resumeData.careerObjective}
          </Typography>
          <IconButton
            aria-label="edit"
            size="small"
            style={styles.editIcons}
            onClick={() =>
              props.setEditing({ ...props.editing, careerObjective: true })
            }
          >
            <EditIcon />
          </IconButton>
        </div>
      )}
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginTop: '7px' }}
        onClick={() => saveAllData()}
      >
        Submit All
      </Button>
    </div>
  )
}

export default Header
