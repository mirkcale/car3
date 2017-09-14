/**
 * Created by lyy on 2017/9/13.
 */
/* eslint-disable */
import React from 'react'
import Cropper from 'react-cropper'
import '../assets/css/cropper.css'
import './imgUpload.scss'
import SubHeader from  '../components/SubHeader'
import Previewer from '../components/Previewer'
import {compress} from '../assets/js/compress'


export default class ImgUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageOrigin: './hotmei.jpg',
      height: '',
      croppering: false,
      imgList: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505369820827&di=73dd2fa4ad9800c4f0a9a04ddf653926&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160719%2F10c5273ba9644ee8990c9aad9b6e3537_th.jpg'
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

  componentDidMount() {
    let base64 = ''
    this.setState({
      height: window.screen.height * 2
    })
    this.getImg = ()=> {
      const _this = this
      let file = this.refs.imgUpload.files[0]
      let fileReader = new FileReader()
      fileReader.onload = function () {
        base64 = this.result
      }
      fileReader.readAsDataURL(file)
    }
    this._cropper = () => {
      const cropperBase64 = this.refs.cropper.getCroppedCanvas().toDataURL()
      let img = new Image()
      const _this = this
      img.src = cropperBase64
      let compressData ={
        src: '',
        w: 0,
        h: 0
      }
      let origin = ''
      if (img.complete) {
        origin = compress(img)
        compressData.src = origin.base64
        compressData.w = origin.width
        compressData.h = origin.height
        this.state.imgList[0] = compressData
        this.setState({
          imgList: this.state.imgList,
          croppering: false
        })
      } else {
        img.onload = (function () {
          origin = compress(img)
          compressData.src = origin.base64
          compressData.w = origin.width
          compressData.h = origin.height
          _this.state.imgList[0] = compressData
          _this.setState({
            imgList: _this.state.imgList,
            croppering: false
          })
        });
      }
    }
    this.takePhoto = () => {
      console.log('重新拍照')
    }
    this.showCropper = ()=> {
      this.setState({
        croppering: true
      })
    }
    this.showPreview = (index)=> {
      this.refs.preview.show(index)
    }
  }

  render() {
    return (
      <div>
        {
          this.state.croppering ?
            <div>
              <Cropper
                ref="cropper"
                src={this.state.imageOrigin}
                style={{height: this.state.height, width: '100%'}}
                viewMode={1}
                autoCropArea={1}
                cropBoxMovable={false}
                aspectRatio={86 / 60}
                background={false}
                cropBoxResizable={false}
                dragMode={'move'}
              />
              <div className="croppr-btn">
                <span onClick={this.takePhoto}>重拍</span>
                <span onClick={this._cropper}>确定</span>
              </div>
            </div> :
            <div>
              <SubHeader carLicence="京a123" carOwner="龙傲天" current="4"/>
              <img width="100%" src={this.state.imgList[0].src} onClick={()=>{this.showPreview(0)}} alt=""/>
              <p onClick={this.showCropper}>车辆识别</p>
              <Previewer ref="preview" options={this.state.options} imgList={this.state.imgList}/>
            </div>
        }
      </div>
    )
  }
}