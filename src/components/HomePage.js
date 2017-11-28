/**
 * Created by lyy on 2017/9/18.
 */
import React from 'react'
import { Carousel, Icon, Switch } from 'antd-mobile'
import { createForm } from 'rc-form'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {}
    const { getFieldProps } = this.props.form
    return (
      <div className="homepage-content">
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          swipeSpeed={35}
        >
          {this.props.bannerData.map(ii => (
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
        <div className="next-button">立即报价</div>
        <div className="content-bottom">
          <p>报价可选保险公司 <Icon type="right"/></p>
          <p>中国保监会互联网资格备案</p>
        </div>
      </div>
    )
  }
}

export default createForm()(HomePage)