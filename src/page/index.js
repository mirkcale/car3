/**
 * Created by lyy on 2017/9/17.
 */
import React from 'react'
import { createForm } from 'rc-form'
import { NavBar, Icon, TabBar } from 'antd-mobile'
import HomePage from '../components/HomePage'
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
    return (
      <div className="index-page">
        <NavBar
          leftContent=""
          mode="light"
          iconName={false}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={<Icon type="check" color="#da3a3f" onClick={()=>{alert('查看消息') }} />}
        ><span className="header-title">车险</span></NavBar>
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
            <HomePage bannerData={this.state.bannerData} />
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