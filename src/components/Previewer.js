/**
 * Created by lyy on 2017/9/8.
 */
import React, {Component} from 'react'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import UI from 'photoswipe/dist/photoswipe-ui-default'
import '../assets/css/photoswipe.css'
import '../assets/css/default-skin.css'
import objectAssign from 'object-assign'
import PropTypes from 'prop-types'

export default class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.imgList
    }
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    //
    let gallery;
    const _init = (index)=>{
      let pswpElement = document.querySelectorAll('.pswp')[0];

      // build items array
      let items = this.state.list

      // define options (if needed)
      let options = objectAssign({
        // history & focus options are disabled on CodePen
        history: false,
        // focus: false,
        shareEl: false,
        tapToClose: true,
        index: index
      },this.props.options);

      gallery = new PhotoSwipe( pswpElement, UI, items, options);
      gallery.listen('gettingData', function (index, item) {
        if(!item.w || !item.h || item.w < 1 || item.h < 1) {
          const img = new Image();
          img.onload = function () {
            item.w = img.width;
            item.h = img.height;
            gallery.updateSize(true)
          }
          img.src = item.src
        }
      })
      gallery.init()

    }
    const init = (index) => {
      const showItem = this.state.list[index]
      if(!showItem.w || !showItem.h || showItem.W < 5 || showItem.h < 5){
        const img = new Image()
        img.onload = function () {
          showItem.w = img.width
          showItem.h = img.height
          _init(index)
        }
        img.src = showItem.src
      }else {
        _init(index)
      }
    }
    this.show = (index)=>{
      init(index)
    }
    this.goTo = (index)=>{
      gallery.goTo(index)
    }
  }

  render() {
    return (
      <div>
        {/* Root element of PhotoSwipe. Must have className pswp. */}
        <div className="pswp vux-previewer" tabIndex="-1" role="dialog" aria-hidden="true">
          {/* Background of PhotoSwipe.
           It's a separate element as animating opacity is faster than rgba(). */}
          <div className="pswp__bg"></div>
          {/* Slides wrapper with overflow:hidden. */}
          <div className="pswp__scroll-wrap">
            {/* Container that holds slides.
             PhotoSwipe keeps only 3 of them in the DOM to save memory.
             Don't modify these 3 pswp__item elements, data is added later on. */}
            <div className="pswp__container">
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
            </div>
            {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                {/*  Controls are self-explanatory. Order can be changed. */}
                <div className="pswp__counter"></div>
                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button className="pswp__button pswp__button--share" title="Share"></button>
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                {/* Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR */}
                {/* element will get className pswp__preloader--active when preloader is running */}
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip"></div>
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
              <div className="pswp__caption">
                <div className="pswp__caption__center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    //图片列表更新
    console.log(nextProps)
    if(nextProps.imgList){
      this.setState({
        list: nextProps.imgList
      })
    }
  }
}

Previewer.PropTypes = {
  imgList: PropTypes.array.required
}