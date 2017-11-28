/**
 * Created by lyy on 2017/9/17.
 */
import React from 'react'
import { createForm } from 'rc-form'
import { NavBar, Icon, List, InputItem, Picker } from 'antd-mobile'
import '../assets/css/common.scss'
import './register.scss'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 2, //从url获取当前step
      data: [],
      cols: 1,
      asyncValue: []
    }
  }

  getCode() {
    alert('获取验证码')
  }

  render() {
    const { getFieldProps } = this.props.form
    const Item = List.Item
    return (
      <div className="register">
        {
          this.state.step === 1 ?
            <div>
              <NavBar
                leftContent={<Icon type="left" color="#da3a3f" />}
                mode="light"
                iconName={false}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent=""
              >快速注册</NavBar>
              <List>
                <div style={{paddingLeft: '30px'}}>
                  <InputItem
                    {...getFieldProps('mobile')}
                    clear
                    placeholder="请输入11位手机号码"
                    type="phone"
                    autoFocus
                  >
                  </InputItem>
                  <Item>
                    <input type="number" placeholder="请输入验证码" className="code-input"/>
                    <span onClick={()=>{this.getCode()}} className="auth-code">获取验证码</span>
                  </Item>
                  <InputItem
                    {...getFieldProps('authCode')}
                    clear
                    placeholder="请输入密码"
                    autoFocus
                    type="password"
                  >
                  </InputItem>
                </div>
              </List>
            </div> :
            <div>
              <NavBar
                leftContent={<Icon type="left" color="#da3a3f" />}
                mode="light"
                iconName={false}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent=""
              ><span className="header-title">完善身份信息</span></NavBar>
              <List>
                <InputItem
                  {...getFieldProps('name')}
                  clear
                  placeholder="真实姓名(按各渠道需求 可不填)"
                  type="text"
                  autoFocus
                >
                </InputItem>
                <InputItem
                  {...getFieldProps('name')}
                  clear
                  placeholder="身份证号(按各渠道需求 可不填)"
                  type="text"
                >
                </InputItem>
                <InputItem
                  {...getFieldProps('name')}
                  clear
                  placeholder="代理人编号(没有可不填)"
                  type="text"
                >
                </InputItem>
                <Picker
                  data={this.state.data}
                  cols={this.state.cols}
                  value={this.state.asyncValue}
                  onPickerChange={this.onPickerChange}
                >
                  <Item arrow="down" onClick={this.onClick}><span style={{color: '#bbb'}}>选择展业地区</span></Item>
                </Picker>
                <Picker
                  data={this.state.data}
                  cols={this.state.cols}
                  value={this.state.asyncValue}
                  onPickerChange={this.onPickerChange}
                >
                  <Item arrow="down" onClick={this.onClick}><span style={{color: '#bbb'}}>选择服务网点</span></Item>
                </Picker>
              </List>
            </div>
        }
        <div className="agree-ment">
          <Icon type="left" size="md" color="#da3a3f"/>同意<span className="user">《用户协议》</span>
        </div>
        <div className="next-button">下一步</div>
      </div>
    )
  }
}

export default createForm()(Register)