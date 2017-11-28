/**
 * Created by admin on 2017/9/7.
 */
import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { List, InputItem, Icon } from 'antd-mobile'
import Previewer from '../components/Previewer'
import ItemPlaceHolder from '../components/ItemPlaceHolder'
// import { NavBar } from 'antd-mobile'
import { login, fetchCompanyConfig } from '../assets/js/service'
import md5 from 'md5'
import '../assets/css/common.scss'
import './login.scss'

class LoginPage extends Component {
  state = {
    focused: true,
    list: [
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017804&di=f52b0a60a3e15762cc8416e2b62a9f8d&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F285%2F24%2F586K2UOWHG9D.jpg',
        w: 600
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017803&di=0fd796b04109236b3397d35c21034f13&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
        w: 1200,
        h: 900
      }
    ],
    options: {
      getThumbBoundsFn (index) {
        // find thumbnail element
        let thumbnail = document.querySelectorAll('img')[index]
        // get window scroll Y
        let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
        // optionally get horizontal scroll
        // get position of element relative to viewport
        let rect = thumbnail.getBoundingClientRect()
        // w = width
        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
        // Good guide on how to get element coordinates:
        // http://javascript.info/tutorial/coordinates
      }
    },
    companyConfig: '',
    companyLogo: ''
  };

  onChange = (value) => {
    if ( value.replace(/\s/g, '').length < 11 ) {
      this.setState({
        hasError: true,
      })
    } else {
      this.setState({
        hasError: false,
      })
    }
    this.setState({
      value,
    })
  }

  componentDidMount() {
    let urlId = this.props.location.serach
    let getLogoUrl = async(companyId)=> {
      let logo = await fetchCompanyConfig(companyId)
      console.log(logo.data.url)
      setTimeout(()=> {
        this.setState({
          companyLogo: logo.data.url
        })
      }, 1000)
    }
    getLogoUrl(urlId)
    const body = document.getElementsByTagName('body')[0]
    body.className = 'login-page'

  }

  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0]
    body.className = ''
  }

  render() {
    const { getFieldProps, getFieldValue } = this.props.form
    let submit = async()=> {
      console.log(getFieldValue('mobile'), getFieldValue('password'))
      const result = await login({
        user: getFieldValue('mobile').replace(/\s/g, ''),
        pwd: md5(getFieldValue('password')),
        is: 1,
        agentCode: ''
      })
      console.log(result)
      if ( result.r ) {
        this.props.history.push('/index?a=sad')
      }
    }
    return (
      <div className="login-page">
        <div>
          {this.state.companyLogo ? <img src={this.state.companyLogo} width="100%" alt="logo"/> :
            <ItemPlaceHolder height="600px"/> }
        </div>
        <List>
          <InputItem
            {...getFieldProps('mobile')}
            clear
            placeholder="请输入11位手机号码"
            type="phone"
            autoFocus
          >
            <div
              style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }}></div>
          </InputItem>
          <InputItem
            {...getFieldProps('password')}
            clear
            type="password"
            placeholder="请输入您的密码"
          >
            <Icon type={require('../assets/svg/items_intro.svg')}/>
          </InputItem>
        </List>
        <Previewer ref="preview" options={this.state.options} imgList={this.state.list}/>
        <div onClick={()=>{ submit()}} className="next-button" style={{'margin': '66px auto 28px'}}>登录</div>
        <div className="user-fnc"><span>快速注册</span><span>忘记密码?</span></div>
      </div>
    )
  }
}

const Login = createForm()(LoginPage)
export default Login