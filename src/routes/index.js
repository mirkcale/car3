/**
 * Created by admin on 2017/9/5.
 */
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from '../page/Login'
import ChooseInsure from '../page/ChooseInsure'
import Register from '../page/Register'
import Index from '../page/Index'
import EnterInfo from '../page/EnterInfo'

import ReduxExample from '../page/ReduxExample'
import PhotoSwiperTest from '../page/PhotoSwiperTest'
import ImgUpload from '../page/ImgUpload'


const Routes = () => {
  /*const requireAuth = (permission, component) => {
    console.log('此处进行权限认证')
   }*/
  return (
    <Router>
      <div>
        <Route path="/index" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/chooseInsure" component={ChooseInsure} />
        <Route path="/enterInfo" component={EnterInfo} />
        <Route path="/test" component={ReduxExample} />
        <Route path="/test1" component={PhotoSwiperTest} />
        <Route path="/imgUpload" component={ImgUpload} />
      </div>
    </Router>
  )
}
export default Routes

