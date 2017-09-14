/**
 * Created by admin on 2017/9/5.
 */
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from '../page/Login'
import ChooseInsure from '../page/ChooseInsure'

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
        <Route path="/index" component={()=>{
          return <div>123</div>
        }} />
        <Route path="/test" component={ReduxExample} />
        <Route path="/login" component={Login} />
        <Route path="/chooseInsure" component={ChooseInsure} />
        <Route path="/test1" component={PhotoSwiperTest} />
        <Route path="/imgUpload" component={ImgUpload} />
      </div>
    </Router>
  )
}
export default Routes

