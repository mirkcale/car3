/**
 * Created by admin on 2017/9/7.
 */
import React, {Component} from 'react'
import {createForm} from 'rc-form'
import {List, InputItem} from 'antd-mobile'
import Previewer from '../components/Previewer'

class LoginPage extends Component {
  state = {
    focused: true,
    list:  [
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017804&di=f52b0a60a3e15762cc8416e2b62a9f8d&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F285%2F24%2F586K2UOWHG9D.jpg',
        w: 600,
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017803&di=0fd796b04109236b3397d35c21034f13&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
        w: 1200,
      }
    ]
  };

  render() {
    const {getFieldProps, getFieldValue} = this.props.form
    let submit = ()=> {
      console.log(getFieldValue('mobile'), getFieldValue('password'))
      this.props.history.push('/index')
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
        <Previewer ref="preview" imgList={this.state.list} />
        <button onClick={()=>{ submit()}}>提交</button>
      </div>
    )
  }
}

const Login = createForm()(LoginPage)
export default Login