/**
 * Created by lyy on 2017/9/13.
 */
import React from 'react'
import {Steps, Icon} from 'antd-mobile'


export default (props)=> {
  const Step = Steps.Step

  const steps = [{
    title: 'Finished',
    description: 'This is description',
  }, {
    title: 'In Progress',
    description: 'This is description',
  }, {
    title: 'Waiting',
    description: 'This is description',
  }].map((s, i) => <Step key={i} title={s.title} description={s.description} />)

  return (
    <Steps {...props} direction="horizontal">{steps}</Steps>
  )
}