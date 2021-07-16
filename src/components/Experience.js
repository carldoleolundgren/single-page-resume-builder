import React, { useState } from 'react'
import uniqid from 'uniqid'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import CardHeader from '@material-ui/core/CardHeader'

const InputForm = (props) => {
  //let [arrOfIndexes, setArrOfIndexes] = useState([0])
  const emptyResponsibilitiesArr = [
    {
      index: 0,
      value: '',
    },
  ]

  let [responsibilitiesArr, setResponsibilitiesArr] = useState(
    emptyResponsibilitiesArr,
  )

  function updateResponsibilties(arr) {
    let responsibilitiesArrCopy = [...arr]

    setResponsibilitiesArr(responsibilitiesArrCopy)

    let numOfInputs = responsibilitiesArr.length

    for (let i = 0; i < numOfInputs; i++) {
      let currentIndex = ResponsibilityInputsList()[i].props.index
      let currentValue =
        document.querySelectorAll('.responsibilities')[i].firstElementChild
          .firstElementChild.value

      responsibilitiesArrCopy.find((x) => x.index === currentIndex).value =
        currentValue
    }

    setResponsibilitiesArr(responsibilitiesArrCopy)
  }

  function addInput() {
    let responsibilitiesArrCopy = [...responsibilitiesArr]

    let newValue = ''

    let newResponsibility = {
      index: `${responsibilitiesArrCopy.length}-${uniqid()}`,
      value: newValue,
    }

    responsibilitiesArrCopy.push(newResponsibility)

    updateResponsibilties(responsibilitiesArrCopy)
  }

  function removeInput(index) {
    if (responsibilitiesArr.length === 1) return

    let responsibilitiesArrCopy = responsibilitiesArr.filter(
      (x) => x.index !== index,
    )

    updateResponsibilties(responsibilitiesArrCopy)
  }

  const ResponsibilityInput = (props) => {
    return (
      <div>
        <TextField
          className="responsibilities"
          placeholder={`Enter work responsibility and/or accomplishment \n(template can fit approx. 8 to 12 bullets on average)`}
          multiline
          rows={2}
          style={{ width: '650px' }}
          defaultValue={props.value}
        />
        <IconButton //icon to add new responsibility input at end of list
          onClick={() => {
            addInput(props.index)
          }}
        >
          <AddIcon />
        </IconButton>
        <IconButton //icon to remove specific responsibility input
          onClick={() => {
            removeInput(props.index)
          }}
        >
          <RemoveIcon />
        </IconButton>
      </div>
    )
  }

  //create an array of input elements for later render
  const ResponsibilityInputsList = () => {
    let renderArr = []

    for (let i = 0; i < responsibilitiesArr.length; i++) {
      renderArr.push(
        <ResponsibilityInput
          key={uniqid()}
          index={responsibilitiesArr[i].index}
          value={responsibilitiesArr[i].value}
        />,
      )
    }

    return renderArr
  }

  return (
    <div>
      <Input
        id="company"
        placeholder="Company Name"
        style={{ width: '325px' }}
      />
      <br></br>
      <Input id="job" placeholder="Job Title" style={{ width: '325px' }} />
      <br></br>
      <Input
        id="jobLocation"
        placeholder="Location"
        style={{ width: '325px' }}
      />
      <br></br>
      <ResponsibilityInputsList />
      <br></br>
      <TextField
        id="start"
        label="Start Date"
        type="month"
        defaultValue=""
        InputLabelProps={{ shrink: true }}
      />
      <br></br>
      <TextField
        id="end"
        label="End Date"
        type="month"
        defaultValue=""
        InputLabelProps={{ shrink: true }}
      />
      <br></br>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginTop: '7px' }}
        onClick={() => {
          props.submitNewJob()
          setResponsibilitiesArr([emptyResponsibilitiesArr])
        }}
      >
        Submit
      </Button>
    </div>
  )
}

const Job = (props) => {
  const responsibiltiies = props.responsibilities
  const descriptionList = responsibiltiies.map((responsibility) => (
    <li key={uniqid()}>
      <Typography variant="body2">{responsibility.description}</Typography>
    </li>
  ))

  return (
    <li>
      <Typography variant="body1">{props.company}</Typography>
      <Typography variant="body1">{props.job}</Typography>
      <Typography variant="body1">{props.jobLocation}</Typography>
      <Typography variant="body1">
        {props.start} to {props.endDisplay}
      </Typography>
      <ul>{descriptionList}</ul>
      <IconButton
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => props.deleteJob(props.jobID)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  )
}

const Experience = (props) => {
  const jobs = props.resumeData.jobs
  const jobsList = jobs.map((job) => (
    <Job
      key={uniqid()}
      company={job.company}
      job={job.job}
      responsibilities={job.responsibilities}
      jobLocation={job.jobLocation}
      start={job.start}
      endDisplay={job.endDisplay}
      deleteJob={props.deleteJob}
      jobID={job.jobID}
    />
  ))

  return (
    <div>
      <CardHeader title="Work Experience" />
      <InputForm submitNewJob={props.submitNewJob} />
      <ul>{jobsList}</ul>
    </div>
  )
}

export default Experience

/* 
for (
      let i = 0;
      i < document.querySelectorAll('.responsibilities').length;
      i++
    ) {
      valuesArr.push(
        //Material-UI input element is actually a child of a child element
        document.querySelectorAll('.responsibilities')[i].firstChild.firstChild
          .value,
      )
    }
*/
