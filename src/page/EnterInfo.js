/**
 * Created by lyy on 2017/9/18.
 */
import React from 'react'
import { createForm } from 'rc-form'
import { NavBar, Icon } from 'antd-mobile'
import SubHeader from '../components/SubHeader'

class EnterInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <NavBar
          leftContent={
            <Icon type="left" size="md" color="#da3a3f"/>
          }
          mode="light"
          iconName={false}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent=""
        >
          <span className="header-title">车险</span>
        </NavBar>
        <SubHeader carLicence={'川123456'} carOwner={'龙傲天'} current={2}/>
      </div>
    )
  }

}

export default createForm()(EnterInfo)