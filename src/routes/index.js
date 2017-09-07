/**
 * Created by admin on 2017/9/5.
 */
import React from 'react';
// import { Router, Route } from 'react-router'
import {HashRouter as Router, Route} from 'react-router-dom';
import ReduxExample from '../page/ReduxExample';
import Login from '../page/Login';


const Routes = () => {
  const requireAuth = (permission, component) => {
    console.log('此处进行权限认证');
  };
  return (
    <Router>
      <div>
        <Route path="/index" component={()=>{
          return <div>123</div>;
        }} />
        <Route path="/test" component={ReduxExample} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};
export default Routes;

