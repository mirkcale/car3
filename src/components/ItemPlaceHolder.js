/**
 * Created by lyy on 2017/9/12.
 */
import React, {Component} from 'react'
const ItemPlaceHolder = props => (
  <div
    style={{
      backgroundColor: '#ebebef',
      color: '#bbb',
      textAlign: 'center',
      height: props['height'],
      lineHeight: '0.6rem',
      width: '100%',
    }}
    {...props}
  ></div>
);
export default ItemPlaceHolder