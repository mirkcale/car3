/**
 * Created by lyy on 2017/9/8.
 */
import React, { Component } from 'react'
import Previewer from '../components/Preview'

export default class PhotoSwiperTest extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017804&di=f52b0a60a3e15762cc8416e2b62a9f8d&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F285%2F24%2F586K2UOWHG9D.jpg',
        w: 600,
        h: 400
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017803&di=0fd796b04109236b3397d35c21034f13&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
        w: 1200,
        h: 900
      }
    ]
    }
  }

  render(){
    return(
      <div>
        <button>打开</button>
        <Previewer imgList={this.state.list}/>
      </div>
    )
  }
}