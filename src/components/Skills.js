import React from 'react'
import uniqid from 'uniqid'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import CardHeader from '@material-ui/core/CardHeader'

const InputForm = (props) => {
  return (
    <div>
      <Input id="skill" placeholder="Skill" />
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: '7px' }}
        onClick={() => props.submitNewSkill()}
      >
        Submit
      </Button>
    </div>
  )
}

const Skill = (props) => {
  return (
    <li style={{ display: 'flex' }}>
      <Typography variant="body1" style={{ lineHeight: '30px' }}>
        {props.skill}
      </Typography>
      <IconButton
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => props.deleteSkill(props.skillID)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  )
}

const Skills = (props) => {
  const skills = props.resumeData.skills
  const skillsList = skills.map((skill) => (
    <Skill
      key={uniqid()}
      skill={skill.skill}
      deleteSkill={props.deleteSkill}
      skillID={skill.skillID}
    />
  ))

  return (
    <div>
      <CardHeader title="Skills" />
      <InputForm submitNewSkill={props.submitNewSkill} />
      <ul>{skillsList}</ul>
    </div>
  )
}

export default Skills
