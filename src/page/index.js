/**
 * Created by lyy on 2017/9/17.
 */
import React from 'react'
import { createForm } from 'rc-form'
import { Carousel, NavBar, Icon, TabBar, List, Switch } from 'antd-mobile'
import './index.scss'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerData: [],
      initialHeight: 205,
      clearButtonShow: true
    }
  }

  componentDidMount() {
    this.setState({
      bannerData: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
    })
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {}
    const { getFieldProps, getFieldValue, setFieldsValue } = this.props.form
    return (
      <div className="index-page">
        <NavBar
          leftContent=""
          mode="light"
          iconName={false}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={<Icon type="check" color="#da3a3f" onClick={()=>{alert('查看消息') }} />}
        ><span className="header-title">车险</span></NavBar>
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          swipeSpeed={35}
        >
          {this.state.bannerData.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                width="100%"
                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className="use-tips">目前仅支持9座以下非营私家车</div>
        <div className="car-number_wrap">
          <span className="province">粤 <Icon type="down" color="#fff" size="xxs"/></span>
          <input type="text" placeholder="请输入车牌"/>
          {
            this.state.clearButtonShow ?
              <Icon className="clear-icon" type="cross-circle"/> :
              ''
          }
          <Icon className="camera-icon" type="cross"/>
        </div>
        <div className="check-new">
            <span>
              未上牌
            <Switch
              style={{marginLeft: '10px'}}
              {...getFieldProps('Switch2', {
                initialValue: false,
                valuePropName: 'checked',
              })}
              onClick={(checked) => { console.log(checked); }}
              platform="ios"
            /></span>
          <span>最近询价 <Icon type="right"/></span>
        </div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
          ></div>
          }
            selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
          ></div>
          }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="koubei-o" size="md" />}
            selectedIcon={<Icon type="koubei" size="md" />}
            title="订单"
            key="订单"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
            ></div>
          }
            selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
            ></div>
          }
            title="客户"
            key="客户"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default createForm()(Index)