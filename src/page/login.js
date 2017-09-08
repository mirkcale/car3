/**
 * Created by admin on 2017/9/7.
 */
import React, {Component} from 'react'
import {createForm} from 'rc-form'
import {List, InputItem} from 'antd-mobile'

class LoginPage extends Component {
  state = {
    focused: true
  };

  render() {
    const {getFieldProps, getFieldValue} = this.props.form
    let ssubmit = ()=> {
      console.log(getFieldValue('mobile'), getFieldValue('password'))
    }
    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps('mobile')}
            clear
            placeholder="请输入11位手机号码"
            autoFocus
          >手机号</InputItem>
          <InputItem
            {...getFieldProps('password')}
            clear
            placeholder="请输入您的密码"
          >密码</InputItem>
        </List>
        <button onClick={()=>{ ssubmit()}}
        >提交</button>
      </div>
    )
  }
}

const Login = createForm()(LoginPage)
export default Login