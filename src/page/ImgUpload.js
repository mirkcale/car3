/**
 * Created by lyy on 2017/9/13.
 */
import React from 'react'
import Cropper from 'react-cropper'
import '../assets/css/cropper.css'
import './imgUpload.scss'


export default class ImgUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageOrigin: './hotmei.jpg',
      height: '',
      croppering: true,
      croppedBase64: ''
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
      this.setState({
        croppedBase64: cropperBase64,
        croppering: false
      })
    }
    this.takePhoto = () => {
      console.log('重新拍照')
    }
    this.showCropper = ()=>{
      this.setState({
        croppering: true
      })
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
              <img width="100%" src={this.state.croppedBase64} alt=""/>
              <p onClick={this.showCropper}>车辆识别</p>
            </div>
        }
      </div>
    )
  }
}