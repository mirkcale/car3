/**
 * Created by admin on 2017/9/7.
 */
import React, {Component} from 'react'
import {createForm} from 'rc-form'
import {List, InputItem} from 'antd-mobile'
import Previewer from '../components/Previewer'
import ItemPlaceHolder from '../components/ItemPlaceHolder'
import {NavBar, Icon} from 'antd-mobile';
import {login, fetchCompanyConfig} from '../assets/service';
import md5 from 'md5'

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
        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        // Good guide on how to get element coordinates:
        // http://javascript.info/tutorial/coordinates
      }
    },
    companyConfig: '',
    companyLogo: ''
  };

  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  componentDidMount() {
    let urlId = this.props.location.serach
    let getLogoUrl = async(companyId)=> {
      let logo = await fetchCompanyConfig(companyId)
      console.log(logo.data.url)
      setTimeout(()=>{
        this.setState({
          companyLogo: logo.data.url
        })
      },6000)
    }
    getLogoUrl(urlId)

  }

  render() {
    const {getFieldProps, getFieldValue} = this.props.form
    let submit = async()=> {
      console.log(getFieldValue('mobile'), getFieldValue('password'))
      const result = await login({
        user: getFieldValue('mobile').replace(/\s/g,''),
        pwd: md5(getFieldValue('password')),
        is: 1,
        agentCode: ''
      })
      console.log(result)
      if (result.r) {
        this.props.history.push('/index?a=sad')
      }
    }
    return (
      <div>
        <NavBar
          leftContent=""
          iconName={false}
          mode="light"
        >登录</NavBar>
        <div>
          {this.state.companyLogo ? <img src={this.state.companyLogo} width="640" /> : <ItemPlaceHolder height="600px"/> }
        </div>
        <List>
          <InputItem
            {...getFieldProps('mobile')}
            clear
            type="phone"
            placeholder="请输入11位手机号码"
            autoFocus
          >手机号</InputItem>
          <InputItem
            {...getFieldProps('password')}
            clear
            type="password"
            placeholder="请输入您的密码"
          >密码</InputItem>
        </List>
        <Previewer ref="preview" options={this.state.options} imgList={this.state.list}/>
        <button onClick={()=>{ submit()}}>登录</button>
        <div><span>快速注册</span><span>找回密码</span></div>
      </div>
    )
  }
}

const Login = createForm()(LoginPage)
export default Login