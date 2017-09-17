/**
 * Created by lyy on 2017/9/14.
 */
import React from 'react'
import { DatePicker, List, Icon, Switch, WhiteSpace, Picker, Modal } from 'antd-mobile'
import { createForm } from 'rc-form'
import moment from 'moment'
import classnames from 'classnames'
import './chooseInsure.scss'
import { fetchCarInfo } from '../assets/js/service'

const maxDate = moment('2016-12-03', 'YYYY-MM-DD').utcOffset(8)
const minDate = moment('2015-08-06', 'YYYY-MM-DD').utcOffset(8)
const Item = List.Item
const alert = Modal.alert

class ChooseInsure extends React.Component {
  constructor(props) {
    super(props)
    const time = window.sessionStorage.getItem('time')
    this.state = {
      forceStartDate: moment(time || moment(new Date()), "YYYY-MM-DD"),
      comStartDate: moment(new Date(), "YYYY-MM-DD"),
      force: true,
      commercial: {
        a0: true,
        b0: true,
        c0: '123',
        a1: true,
        b1: true,
        c1: '123',
        a2: true,
        b2: true,
        c2: '123',
        a3: true,
        b3: true,
        c3: '123',
        a4: true,
        b4: true,
        c4: '123',
        a5: true,
        b5: true,
        c5: '123',
        a6: true,
        b6: true,
        c6: '123',
        d6: '国产',
        a7: true,
        b7: true,
        c7: '123',
        a8: true,
        b8: true,
        c8: '123',
        a9: true,
        b9: true,
        c9: '123',
        a10: true
      },
      c2Visible: false,
      c2PickerValue: 500000,
      c3Visible: false,
      c3PickerValue: 500000,
      c4Visible: false,
      c4PickerValue: 500000,
      c5Visible: false,
      c5PickerValue: 500000,
      d6Visible: false,
      d6PickerValue: '国产'
    }
  }

  setDate = (date) => {
    console.log(date)
    this.setState({
      comStartDate: date
    })
  }

  switchChange = (key) => {
    console.log('点了开关' + key)
  }

  submit = ()=> {
    const { getFieldValue, getFieldsValue } = this.props.form
    console.log(moment(getFieldValue('forceStartDate')).format("YYYY-MM-DD"))
    console.log('a0=' + getFieldValue('a0'))
    // console.log(getFieldValue('forceSwitch'))
  }

  showInsureInfo = (e,name )=> {
    e.preventDefault()
    //showIntroduce
    window.alert(name)
  }

  showInsureConfirm = (name)=> {
    if ( ~~name.slice(-1) > 5 ) {
      //提醒用户选择车损险
    }
  }


  render() {
    const { getFieldProps, getFieldValue, setFieldsValue } = this.props.form
    const c2Array = [
      {
        value: 50000,
        label: '5万'
      },
      {
        value: 100000,
        label: '10万'
      },
      {
        value: 150000,
        label: '15万'
      },
      {
        value: 200000,
        label: '20万'
      },
      {
        value: 300000,
        label: '30万'
      },
      {
        value: 500000,
        label: '50万'
      },
      {
        value: 1000000,
        label: '100万'
      },
      {
        value: 1500000,
        label: '150万'
      },
      {
        value: 2000000,
        label: '200万'
      },
    ]
    const c3Array = [
      {
        value: 10000,
        label: '1万'
      },
      {
        value: 20000,
        label: '2万'
      },
      {
        value: 30000,
        label: '3万'
      },
      {
        value: 50000,
        label: '5万'
      },
      {
        value: 100000,
        label: '10万'
      },
      {
        value: 150000,
        label: '15万'
      },
      {
        value: 200000,
        label: '20万'
      },
      {
        value: 250000,
        label: '25万'
      },
      {
        value: 300000,
        label: '30万'
      },
      {
        value: 500000,
        label: '50万'
      },
    ]
    const c4Array = [
      {
        value: 10000,
        label: '1万'
      },
      {
        value: 20000,
        label: '2万'
      },
      {
        value: 30000,
        label: '3万'
      },
      {
        value: 50000,
        label: '5万'
      },
      {
        value: 100000,
        label: '10万'
      },
      {
        value: 150000,
        label: '15万'
      },
      {
        value: 200000,
        label: '20万'
      },
      {
        value: 250000,
        label: '25万'
      },
      {
        value: 300000,
        label: '30万'
      },
      {
        value: 500000,
        label: '50万'
      },
    ]
    const c5Array = [
      {
        value: 2000,
        label: '2千'
      },
      {
        value: 5000,
        label: '5千'
      },
      {
        value: 10000,
        label: '1万'
      },
      {
        value: 20000,
        label: '2万'
      },
    ]
    const d6Array = [
      {
        value: '国产1',
        label: '国产'
      },
      {
        value: '国产特殊1',
        label: '国产特殊'
      },
      {
        value: '进口1',
        label: '进口'
      },
      {
        value: '进口特殊1',
        label: '进口特殊'
      },
    ]
    const onInsureClicked = (name)=> {
      console.log( name, getFieldValue(name) )
      if ( /a/.test(name) && !/6|7|8|10/.test(name.slice(1)) ) {
        setFieldsValue({
          ['b' + name.slice(1)]: !getFieldValue(name)
        })
      }

      if ( /b/.test(name) && !getFieldValue(name) && !getFieldValue('a' + name.slice(1)) ) {
        setFieldsValue({
          ['a' + name.slice(1)]: !getFieldValue(name)
        })
      }

      if ( ~~name.slice(1) >= 5 && !getFieldValue('a0') && !getFieldValue(name) ) {
        ((name) => alert('此险种需要选择车损险', '是否选择', [
          { text: '取消', onPress: () => {
            setFieldsValue({
              ['a'+name.slice(1)]: false
            })
            if(!/6|7|8|10/.test(name.slice(1))){
              setFieldsValue({
                ['b'+name.slice(1)]: false
              })
            }

          }},
          { text: '确定', onPress: () => setFieldsValue({
            a0: true,
            b0: true,
          }) },
        ]))(name)
      }

      if ( name === 'a0' && getFieldValue('a0') ) {
        for ( let i = 5; i <= 10; i++ ) {
          console.log('a' + name.slice(1))
          setFieldsValue({
            ['a' + i]: false
          })
          if ( i !== 6 && i !== 7 && i !== 8 && i !== 10 )
            setFieldsValue({
              ['b' + i]: false
            })
        }
      }
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
                initialValue: this.state.force,
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
            onChange={(v)=>this.setDate(v)}
            {...getFieldProps('forceStartDate', {
              initialValue: this.state.forceStartDate,
            })}
            minDate={minDate}
            maxDate={maxDate}
          >
            <List.Item arrow="horizontal">保险起期</List.Item>
          </DatePicker>
        </List>
        <WhiteSpace size="md"/>
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
            onChange={v=>this.setDate(v)}
            {...getFieldProps('comStartDate', {})}
            minDate={minDate}
            maxDate={maxDate}
          >
            <Item arrow="horizontal">保险起期</Item>
          </DatePicker>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a0" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a0', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a0"
                       onClick={()=>{onInsureClicked('a0')}}
                />
                {
                  getFieldValue('a0') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                机动车辆损失险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={(event)=>{this.showInsureInfo(event,'a0')}}
                />
              </label>
              <div>
                <label htmlFor="b0">
                  <input type="checkbox"
                         className="choose-check"
                         id="b0"
                    {...getFieldProps('b0', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                         onClick={()=>{onInsureClicked('b0')}}
                  />
                  <span
                    className={classnames({
                      'checked': getFieldValue('b0'),
                      'ignore': true
                    })}
                  >不计免赔</span>
                </label>
                <span className="insure-amount">123456.33</span>
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a1" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a1', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a1"
                       onClick={()=>{onInsureClicked('a1')}}
                />
                {
                  getFieldValue('a1') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                盗抢险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <label htmlFor="b1">
                  <input type="checkbox"
                         className="choose-check"
                         id="b1"
                    {...getFieldProps('b1', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                         onClick={()=>{onInsureClicked('b1')}}
                  />
                  <span
                    className={classnames({
                      'checked': getFieldValue('b1'),
                      'ignore': true
                    })}
                  >不计免赔</span>
                </label>
                <span className="insure-amount">123456.33</span>
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a2" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a2', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a2"
                       onClick={()=>{onInsureClicked('a2')}}
                />
                {
                  getFieldValue('a2') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                三者险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <label htmlFor="b2">
                  <input type="checkbox"
                         className="choose-check"
                         id="b2"
                    {...getFieldProps('b2', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                         onClick={()=>{onInsureClicked('b2')}}
                  />
                  <span
                    className={classnames({
                      'checked': getFieldValue('b2'),
                      'ignore': true
                    })}
                  >不计免赔</span>
                </label>
                <span className="insure-amount"
                      onClick={()=>this.setState({c2Visible: true})}>{this.state.c2PickerValue}</span>
                <Picker
                  visible={this.state.c2Visible}
                  data={c2Array}
                  extra="请选择(可选)"
                  cols="1"
                  value={this.state.c2PickerValue}
                  onChange={v => this.setState({ c2PickerValue: v })}
                  onOk={() => this.setState({ c2Visible: false })}
                  onDismiss={() => this.setState({ c2Visible: false })}
                />
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a3" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a3', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a3"
                       onClick={()=>{onInsureClicked('a3')}}
                />
                {
                  getFieldValue('a3') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                司机险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <label htmlFor="b3">
                  <input type="checkbox"
                         className="choose-check"
                         id="b3"
                    {...getFieldProps('b3', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                         onClick={()=>{onInsureClicked('b3')}}
                  />
                  <span
                    className={classnames({
                      'checked': getFieldValue('b3'),
                      'ignore': true
                    })}
                  >不计免赔</span>
                </label>
                <span className="insure-amount"
                      onClick={()=>this.setState({c3Visible: true})}>{this.state.c3PickerValue}</span>
                <Picker
                  visible={this.state.c3Visible}
                  data={c3Array}
                  extra="请选择(可选)"
                  cols="1"
                  value={this.state.c3PickerValue}
                  onChange={v => this.setState({ c3PickerValue: v })}
                  onOk={() => this.setState({ c3Visible: false })}
                  onDismiss={() => this.setState({ c3Visible: false })}
                />
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a4" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a4', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a4"
                       onClick={()=>{onInsureClicked('a4')}}
                />
                {
                  getFieldValue('a4') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                乘客险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <label htmlFor="b4">
                  <input type="checkbox"
                         className="choose-check"
                         id="b4"
                    {...getFieldProps('b4', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                         onClick={()=>{onInsureClicked('b4')}}
                  />
                  <span
                    className={classnames({
                      'checked': getFieldValue('b4'),
                      'ignore': true
                    })}
                  >不计免赔</span>
                </label>
                <span className="insure-amount"
                      onClick={()=>this.setState({c4Visible: true})}>{this.state.c4PickerValue}</span>
                <Picker
                  visible={this.state.c4Visible}
                  data={c4Array}
                  extra="请选择(可选)"
                  cols="1"
                  value={this.state.c4PickerValue}
                  onChange={v => this.setState({ c4PickerValue: v })}
                  onOk={() => this.setState({ c4Visible: false })}
                  onDismiss={() => this.setState({ c4Visible: false })}
                />
              </div>
            </div>
          </Item>
        </List>
        <WhiteSpace size="md"/>
        <List>
          <Item>附加险</Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a5" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a5', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a5"
                       onClick={()=>{onInsureClicked('a5')}}
                />
                {
                  getFieldValue('a5') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                划痕险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <label htmlFor="b5">
                  <input type="checkbox"
                         className="choose-check"
                         id="b5"
                    {...getFieldProps('b5', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                         onClick={()=>{onInsureClicked('b5')}}
                  />
                  <span
                    className={classnames({
                      'checked': getFieldValue('b5'),
                      'ignore': true
                    })}
                  >不计免赔</span>
                </label>
                <span className="insure-amount"
                      onClick={()=>this.setState({c5Visible: true})}>{this.state.c5PickerValue}</span>
                <Picker
                  visible={this.state.c5Visible}
                  data={c5Array}
                  extra="请选择(可选)"
                  cols="1"
                  value={this.state.c5PickerValue}
                  onChange={v => this.setState({ c5PickerValue: v })}
                  onOk={() => this.setState({ c5Visible: false })}
                  onDismiss={() => this.setState({ c5Visible: false })}
                />
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a6" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a6', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a6"
                       onClick={()=>{onInsureClicked('a6')}}
                />
                {
                  getFieldValue('a6') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                玻璃险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <span className="insure-amount"
                      onClick={()=>this.setState({d6Visible: true})}>{this.state.d6PickerValue}</span>
                <Picker
                  visible={this.state.d6Visible}
                  data={d6Array}
                  extra="请选择(可选)"
                  cols="1"
                  value={this.state.d6PickerValue}
                  onChange={v => this.setState({ d6PickerValue: v })}
                  onOk={() => this.setState({ d6Visible: false })}
                  onDismiss={() => this.setState({ d6Visible: false })}
                />
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a7" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a7', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a7"
                       onClick={()=>{onInsureClicked('a7')}}
                />
                {
                  getFieldValue('a7') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                专修险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a8" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a8', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a8"
                       onClick={()=>{onInsureClicked('a8')}}
                />
                {
                  getFieldValue('a8') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                自燃险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <span className="insure-amount">123456.33</span>
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a9" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a9', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a9"
                       onClick={()=>{onInsureClicked('a9')}}
                />
                {
                  getFieldValue('a9') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                涉水险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
              <div>
                <label htmlFor="b9">
                  <input type="checkbox"
                         className="choose-check"
                         id="b9"
                    {...getFieldProps('b9', {
                      initialValue: true,
                      valuePropName: 'checked',
                    })}
                         onClick={()=>{onInsureClicked('b9')}}
                  />
                  <span
                    className={classnames({
                      'checked': getFieldValue('b9'),
                      'ignore': true
                    })}
                  >不计免赔</span>
                </label>
                <span className="insure-amount">123456.33</span>
              </div>
            </div>
          </Item>
          <Item>
            <div className="choose-insure_list">
              <label htmlFor="a10" className="icon-container">
                <input type="checkbox"
                       className="choose-check"
                  {...getFieldProps('a10', {
                    initialValue: true,
                    valuePropName: 'checked',
                  })}
                       id="a10"
                       onClick={()=>{onInsureClicked('a10')}}
                />
                {
                  getFieldValue('a10') ?
                    <Icon
                      type="check-circle"
                      color="#da3a3f"
                      size="xs"
                      className="checked-icon"
                    /> :
                    <span className="check-circle-o"/>
                }

                找不到第三方特约险
                <Icon
                  type={require('../assets/svg/items_intro.svg')}
                  size="xxs"
                  color="#ffa632"
                  className="info-icon"
                  onClick={this.showInsureInfo}
                />
              </label>
            </div>
          </Item>
        </List>
        <button onClick={this.submit}>登录</button>
      </div>
    )
  }
}

export default createForm()(ChooseInsure)