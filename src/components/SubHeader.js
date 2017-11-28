/**
 * Created by lyy on 2017/9/13.
 */
import React from 'react'
import {WingBlank, Steps} from 'antd-mobile'
import './subHeader.scss'


export default (props)=> {
  const Step = Steps.Step

  const steps = [{
    title: '录入信息',
    description: '',
  }, {
    title: '选择险种',
    description: '',
  }, {
    title: '报价',
    description: '',
  }, {
    title: '核保',
    description: '',
  }, {
    title: '支付',
    description: '',
  }].map((s, i) => <Step key={i} title={s.title} description={s.description} />)

  return (
    <div className="sub-header_root">
      <WingBlank>
        <div className="sub-header_top">
          <span className="license">{props.carLicence}</span>
          <span className="owner">{props.carOwner}</span>
        </div>
        <Steps current={props.current} direction="horizontal">{steps}</Steps>
      </WingBlank>
    </div>
  )
}