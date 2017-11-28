/**
 * Created by lyy on 2017/9/17.
 */
import React from 'react'
// import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile'

const Header = (props)=>{
  return(
    <NavBar
      leftContent={<Icon type={props.leftIcon} color="#da3a3f" />}
      mode="light"
      iconName={false}
      onLeftClick={() => props.onLeftClick()}
      rightContent={props.rightContent}
    >{props.title}</NavBar>
  )
}
export default Header