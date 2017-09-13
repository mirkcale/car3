/**
 * Created by lyy on 2017/9/8.
 */
import React, {Component} from 'react'
import Previewer from '../components/Previewer'
// import {createForm} from 'rc-form'
import '../page/photoSwiperTest.less'

class PhotoSwiperTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017804&di=f52b0a60a3e15762cc8416e2b62a9f8d&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F285%2F24%2F586K2UOWHG9D.jpg',
          w: 600
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017803&di=0fd796b04109236b3397d35c21034f13&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
          w: 1200,
          h: 900
        }
      ],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  }
  changeList(){
    this.state.list.push({
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504875017803&di=0fd796b04109236b3397d35c21034f13&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
      w: 1200,
      h: 900
    })
    this.setState({
      list: this.state.list
    })
  }

  render() {
    const show = (index) => this.refs.preview.show(index)
    const cropper = ()=> {
      const inputFile = this.refs.cropper
      const _self = this
      const fileReader = new FileReader()
      fileReader.onload = function (event) {
        const base64Url = this.result
        console.log(inputFile)
      }
      fileReader.readAsDataURL(this.refs.cropper.files[0])
    }
    return (
      <div>
        <input ref="cropper" type="file" onChange={cropper}/>
        <p>我的字体大小应该是16px</p>
        {
          this.state.list.map((i, index)=> {
            return <img src={i.src} key={index} onClick={()=>{show(index)}} width="400" alt="t" />
          })

        }
        <button onClick={()=>{show(1)}}>打开</button>
        <button onClick={this.changeList.bind(this)}>增加图片</button>
        <p>{this.state.list.length}</p>
        <Previewer ref="preview" options={this.state.options} imgList={this.state.list} />
      </div>
    )
  }
}

export default PhotoSwiperTest
// export default createForm()(PhotoSwiperTest)