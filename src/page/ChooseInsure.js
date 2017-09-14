/**
 * Created by lyy on 2017/9/14.
 */
import React from 'react'
import {DatePicker, List, WingBlank, Icon, Switch, WhiteSpace, Checkbox, Accordion} from 'antd-mobile'
import {createForm} from 'rc-form'
import moment from 'moment'
import './chooseInsure.scss'

const maxDate = moment('2016-12-03', 'YYYY-MM-DD').utcOffset(8)
const minDate = moment('2015-08-06', 'YYYY-MM-DD').utcOffset(8)
const Item = List.Item
const CheckboxItem = Checkbox.CheckboxItem

class ChooseInsure extends React.Component {
  constructor(props) {
    super(props)
    const time = window.sessionStorage.getItem('time')
    this.state = {
      forceStartDate: moment(time, "YYYY-MM-DD"),
      comStartDate: ''
    }
  }

  setDate = (date) => {
    console.log(date)
    this.setState({
      data: date
    })
  }

  switchChange = (key) => {
    console.log('点了开关' + key)
  }

  render() {
    const {getFieldProps, getFieldValue} = this.props.form
    const submit = ()=> {
      console.log(moment(getFieldValue('forceStartDate')).format("YYYY-MM-DD"))
      console.log(getFieldValue('a0'))
      // console.log(getFieldValue('forceSwitch'))
    }
    const setDate = (date) => {
      console.log(date)
      this.setState({
        data: date
      })
    }
    return (
      <div className="choose">
        <List>
          <Item>
            <span className="choose-a">推荐配置</span>
            <span className="choose-a">往年投保</span>
          </Item>
        </List>
        <List>
          <Item

            extra={<Switch
              platform="ios"
              {...getFieldProps('forceSwitch', {
                initialValue: true,
                valuePropName: 'checked',
              })}
              onClick={(checked) => { console.log(checked); }}
            />}
          >交强险</Item>
        </List>
        <List
          className="date-picker-list"
          style={{ backgroundColor: 'white' }}
        >
          <DatePicker
            mode="date"
            title=""
            className="date-pick"
            extra="交强险起期"
            formate={v=> v}
            onChange={this.setDate}
            {...getFieldProps('forceStartDate', {
              initialValue: this.state.forceStartDate,
            })}
            minDate={minDate}
            maxDate={maxDate}
          >
            <List.Item arrow="horizontal">保险起期</List.Item>
          </DatePicker>
        </List>
        <WhiteSpace size="md" />
        <List>
          <Item
            extra={<Switch
              platform="ios"
              {...getFieldProps('comSwitch', {
                initialValue: true,
                valuePropName: 'checked',
              })}
              onClick={(checked) => { console.log(checked); }}
            />}
          >商业险</Item>
        </List>
        <List
          className="date-picker-list"
          style={{ backgroundColor: 'white' }}
        >
          <DatePicker
            mode="date"
            title=""
            className="date-pick"
            extra="商业险起期"
            formate={v=> v}
            onChange={this.setDate}
            {...getFieldProps('comStartDate', {})}
            minDate={minDate}
            maxDate={maxDate}
          >
            <Item arrow="horizontal">保险起期</Item>
          </DatePicker>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a1">
                {
                  getFieldValue('a1') ?
                    <Icon
                      type={getFieldValue('a1') ? 'check-circle':''}
                      color="#da3a3f"
                    />:
                    <span>123</span>
                }
                <input type="checkbox"
                  {...getFieldProps('a1', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                  id="a1"
                />
                机动车辆损失险
                <Icon type={require('../assets/svg/items_intro.svg')} size="xxs" />
              </label>
              <div>
                <label htmlFor="b1">
                  <input type="checkbox"
                    id="b1"
                    {...getFieldProps('b1', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                  />
                  <span>不计免赔</span>
                </label>
                <span>不计免赔</span>
              </div>
            </div>
          </Item>
        </List>
        <button onClick={submit}>登录</button>
      </div>
    )
  }
}

export default createForm()(ChooseInsure)