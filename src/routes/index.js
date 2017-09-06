/**
 * Created by admin on 2017/9/5.
 */
import React from 'react'
// import { Router, Route } from 'react-router'
import {HashRouter as Router, Route} from 'react-router-dom'
import App from '../App'
import FlexExample from '../page/Flex'
import Drawera from '../page/Drawer'
const Routes = () => {
  const requireAuth = (permission, component) => {
    console.log('此处进行权限认证')
  }
  return (
    <Router>
      <div>
        <Route path="/index" component={FlexExample} />
        <Route path="/login" component={App} />
        <Route path="/404" component={Drawera} />
      </div>
    </Router>
  )
}
export default Routes

