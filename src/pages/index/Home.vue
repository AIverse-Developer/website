<template>
  <div class="page langCom">
    <Header :isShow="logoShow"></Header>
    <div class="bg-container">
      <div style="width: 100%;min-width: 1440px;height: 100%;overflow: hidden;position: relative;">
        <video v-if="videoShow" :style="'transform: scale('+videoExtent+');opacity:'+ videoOpacity " ref="videoref" id="v1"
          autoplay loop muted>
          <source :src="videoSrc" ref="videoSource" type="video/mp4" />
        </video>
        <div class="homebox">
          <div v-if="homeShowOne" class="title_line">
            <div class="p_div"  >
              <p class="home_title Barlow">Metauniverse Double-chain</p>
            </div>
            <div class="p_div" style="height: 62px;">
              <p class="home_title Barlow">Computing Engine</p>
            </div>
            <div class="p_div"  >
              <p class="home_title_se Barlow u-margin-top-19">Distributed AI Computing Networks </p>
            </div>
            <div class="p_div"  >
              <p class="home_title_se Barlow">and the Open World</p>
            </div>
          </div>
          <div v-else-if="transition1" class="title_line1">
            <div class="p_div"  >
              <p class="home_title Barlow">Metauniverse Double-chain</p>
            </div>
            <div class="p_div" style="height: 62px;">
              <p class="home_title Barlow">Computing Engine</p>
            </div>
            <div class="p_div"  >
              <p class="home_title_se Barlow u-margin-top-19">Distributed AI Computing Networks </p>
            </div>
            <div class="p_div"  >
              <p class="home_title_se Barlow">and the Open World</p>
            </div>
          </div>
          <div v-if="homeShowTwo" class="title_line">
            <div class="tran_div"  >
              <p class="home_title Barlow">Aiv</p>
            </div>
            <div class="tran_div"  >
              <p class="home_title_se Barlow u-margin-top-19">NFT Virtual Idol Based on Aiv Network </p>
            </div>
            <div class="tran_div"  >
              <p class="home_title_se Barlow">and Belongs to Beyond Me</p>
            </div>
          </div>
          <div v-else-if="transition2" class="title_line1">
            <div class="p_div"  >
              <p class="home_title Barlow">Aiv</p>
            </div>
            <div class="p_div"  >
              <p class="home_title_se Barlow u-margin-top-19">NFT Virtual Idol Based on Aiv Network </p>
            </div>
            <div class="p_div"  >
              <p class="home_title_se Barlow">and Belongs to Beyond Me</p>
            </div>
          </div>
          <div class="home_progress">
            <div class="progress_w" @click="changeCarousel(0)">
              <el-progress color="rgba(255, 255, 255, 0.4)" :stroke-width="4" :percentage="homeProgressOne"
                :show-text="false"></el-progress>
            </div>
            <div class="progress_w" @click="changeCarousel(1)">
              <el-progress color="rgba(255, 255, 255, 0.4)" :stroke-width="4" :percentage="homeProgressTwo"
                :show-text="false"></el-progress>
            </div>
          </div>

        </div>
      </div>

      <div class="nodebox">
        <div class="nodetext">
          <p class="home_title Barlow">Integrate Billions of Hardware Nodes</p>
          <p class="home_title_se Barlow u-margin-top-19">Provide Infrastructure Services for the Future Computing Power
          </p>
          <div class="text_1">
            In the past 6 years, the amount of computing used in AI Training has increased by more than 300,000 times.
            It is estimated that the scale of the computing industry will exceed US$2 trillion by 2023. The computing
            industry has reached a key node, and AI computing will become the mainstream.
          </div>
          <div class="u-flex">
            <div class="text_486">
              We need more than 1 million times computing than now, not just a few-fold increase. The world needs more
              computing power, and the demand of metaverse is unlimited.
            </div>
            <div class="text_486" style="margin-left: 124px;">
              AIVerse believes that we need to integrate global high-performance and idle hardware to move towards the
              era of distributed AI computing.
            </div>
          </div>
        </div>
      </div>
      <div class="aibox">
        <div>
          <div class="u-flex">
            <div class="text_486">AIverse is not a public chain in the traditional sense. It provides key underlying
              services to the metasverse, along with the amazing NFT open world and NFT digital surrogate engine. </div>
            <div class="home_title_se Barlow text_583">Outerverse & Beyond Me Realized Through Deep Technology
              Collaboration</div>
          </div>
          <div class="u-flex-bot text_2">
            <div class="text_486">AIverse provides systematic methodology, underlying technology and advanced services,
              and continues to explore and practice in the aspects of decentralization, open source engine, shared
              co-creation, digital art, social governance, digital survival rules, collective belief, and the original
              meaning of life.</div>
            <div class="text_486">AIverse's contribution to the metasverse is going to be as much as Ethereum's
              innovation to blockchain.</div>
          </div>
        </div>

      </div>
      <div class="aibox">
        <div>
          <div style="margin: 120px;">
            <img src="../../../static/images/index/meta.png" />
          </div>
        </div>
      </div>
      <div class="citybox">
        <div>
          <p class="home_title Barlow">Make the Rules for the Future World</p>
          <p class="home_title_se Barlow u-margin-top-19 u-margin-bottom-72">Provide Spiritual Guidance and Technical Value for Metaverse</p>
          <div class="u-flex">
            <div class="text_384 u-margin-right-228">The metaverse seems to be a combination of the Internet, games, and social interactions. It is essentially the construction and experience of an infinite variety of goals and makes the participation process as pleasant, artistic and non-homogeneous as possible, so that life can continue to feel the joy of creation. To welcome the baptism of literature and art in the new dimension.</div>
            <div class="text_384 ">The AIVerse provides guidance and force for the infinite creation and experience of the future. The creation of the AIVerse is also the will of life and the universe and is a historical necessity.</div>
          </div>
        </div>

      </div>
      <div class="aibox">
        <div>
          <div style="margin:140px 120px;">
            <img src="../../../static/images/index/eeco.png" />
          </div>
        </div>
      </div>
      <div class="nftbox">
        <div>
          <div>
            <div>
              <div class="home_title Barlow u-margin-bottom-72">Programmable NFT</div>
              <div class="text_486">Universal NFT protocol and one-click NFT asset interface for low Gas charges accelerate NFT of all things assets.</div>
            </div>
            <div>
              <div class="text_486 u-margin-bottom-24">Currently, the Gas cost of issuing an NFT asset on Ethereum can be as high as tens or even hundreds of dollars. AIVERSE's NFT asset issuance service can reduce the cost hundreds of times, which is the technical basis for normalizing and popularizing the metasverse NFT. In addition, with the open world application of Beyond Me and Outerverse, the next generation 3D display and complex interaction of NFT assets can be realized, and the level of digital art collection and viewing can be improved qualitatively.</div>
              <div class="text_486">Everything can be NFT does not mean that all are valuable. Low-quality and indiscriminate NFT works will be gradually replaced by programmable NFT entertainment works with application value.</div>
            </div>
          </div>
          <div>
            <div class="nft_left">
              <div class="leftmask">
                Dynamic, 3D, programmable NFT assets can be applied to other metaverse projects
              </div>
            </div>
            <div class="nft_right">
              <img class="rightimg" src="../../../static/images/index/leftpoint.png" />
              <div class="rightmask">
                Static, flat, non-interactive NFT assets
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="allbox">
        <div>
          <div class="title_line">
            <div class="all_title text_486 home_title Barlow u-margin-bottom-72">Comprehensive Make Things Easier</div>
            <div class="text_486">Spanning blockchain, AI, fog computing, art, live streaming, social and gaming Comprehensive make AIVERSE the driving engine of the metauniverse.</div>
          </div>
          <div class="imgbox Barlow" style="color: #FFFFFF;font-size: 12px;">
            <div class="imgbox_clo">
              <div class="blochainbox">
                <div class="rotatecss">Blockchain</div>
              </div>
            </div>
            <div class="imgbox_clo flex-end">
              <div class="AIbox">
                <div class="rotatecss">AI</div>
              </div>
            </div>
            <div class="imgbox_clo flex-sb-column">
              <div class="fogbox">
                <div class="rotatecss">Fog Computing</div>
              </div>
              <div class="artbox">
                <div class="rotatecss">Art</div>
              </div>
            </div>
            <div class="imgbox_clo flex-end">
              <div class="livebox">
                <div class="rotatecss">Live Streaming</div>
              </div>
            </div>
            <div class="imgbox_clo flex-center-column" >
              <div class="Socialbox">
                <div class="rotatecss">Social</div>
              </div>
            </div>
            <div class="imgbox_clo flex-end">
              <div class="gamebox">
                <div class="rotatecss">Game</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>
<script>
  import {
    accAdd,
    accSub,
    accMul,
    accDiv
  } from '../../assets/js/number.util.js';
  import Header from '../../components/common/header.vue';
  export default {
    name: 'Home',
    components: {
      Header
    },
    data() {
      let i;
      let myPath = '';
      let intervalID = '';
      return {
        currentType:0,
        transition1: false,
        transition2: false,
        videoExtent: 1.2,
        videoSrc: '../../../static/images/index/homeOne.mp4',
        homeShowOne: false,
        homeShowTwo: false,
        videoShow: false,
        addShow: false,
        loadShow: true,
        isReady: false,
        logoShow: false,
        opacityValue: 1,
        opacityValue1: 1,
        inter: '',
        progressTime: '',
        progressTimeNext: '',
        imgWidth: 100,
        homeProgressOne: 0,
        homeProgressTwo: 0,
        videoOpacity: 0,
        videoOn:'',
        videoEx:'',
      }
    },
    created() {
      let _this = this;
    },
    mounted() {
      let _this = this;
      _this.$nextTick(() => {
        // Temporary use
        _this.logoShow = true
        _this.homeShowOne = true
        _this.videoShow = true
        _this.home1Progress()
        //
      })

    },
    methods: {
      changeCarousel(type){
        let _this = this;
        if(_this.currentType==type)return
        if(_this.videoOn){
          clearInterval(_this.videoOn)
        }
        if(_this.videoEx){
          clearInterval(_this.videoEx)
        }
        if(type==0){
          _this.twoTimeControl()
        }else if(type==1){
          _this.firstTimeControl()
        }
      },
      firstTimeControl(){
        let _this = this;
        _this.videoExtent = 1
        clearInterval(_this.progressTime)
        _this.homeShowOne = false
        _this.transition1 = true
        _this.videoOpacity = 1
        var videochange = setInterval(function() {
          _this.videoOpacity = accSub(_this.videoOpacity, 0.033)
        }, 10)
        var videoOff = setInterval(function() {
          _this.videoExtent = accAdd(_this.videoExtent, 0.0066)
        }, 10)
        setTimeout(function() {
          _this.videoShow = false
          clearInterval(videochange)
          clearInterval(videoOff)
          _this.videoOpacity = 0
        }, 300)
        setTimeout(function() {
          _this.home2Progress()
        }, 400)
        setTimeout(function() {
          _this.videoSrc = '../../../static/images/index/homeTwo.mp4',
            _this.videoShow = true
          _this.homeShowTwo = true
          _this.homeProgressOne = 0
          _this.videoOpacity = 0
          _this.transition1 = false
        }, 600)
      },
      twoTimeControl(){
        let _this = this;
        _this.videoExtent = 1
        clearInterval(_this.progressTimeNext)

        _this.homeShowTwo = false
        _this.transition2 = true
        _this.videoOpacity = 1
        var videochange = setInterval(function() {
          _this.videoOpacity = accSub(_this.videoOpacity, 0.033)
        }, 10)
        var videoOff = setInterval(function() {
          _this.videoExtent = accAdd(_this.videoExtent, 0.0066)
        }, 10)
        setTimeout(function() {
          _this.videoShow = false
          clearInterval(videochange)
          clearInterval(videoOff)
          _this.videoOpacity = 0
        }, 300)
        setTimeout(function() {
          _this.home1Progress()
        }, 400)
        setTimeout(function() {
          _this.videoSrc = '../../../static/images/index/homeOne.mp4',
            _this.videoShow = true
          _this.homeShowOne = true
          _this.homeProgressTwo = 0
          _this.transition2 = false
        }, 600)
      },
      home1Progress() {
        let _this = this;
        _this.currentType = 0
        _this.transitionStartControl()
        _this.progressTime = setInterval(function() {
          if (_this.homeProgressOne >= 100) {
            _this.firstTimeControl()
            return
          }
          _this.homeProgressOne = accAdd(_this.homeProgressOne, Number(2))
        }, 100)
      },
      home2Progress() {
        let _this = this;
        _this.currentType = 1
        _this.transitionStartControl()
        _this.progressTimeNext = setInterval(function() {
          if (_this.homeProgressTwo >= 100) {
            _this.twoTimeControl()
            return
          }
          _this.homeProgressTwo = accAdd(_this.homeProgressTwo, Number(2))
        }, 100)
      },
      transitionStartControl(){
        let _this = this;
        _this.videoOn = setInterval(function() {
          _this.videoOpacity = accAdd(_this.videoOpacity, 0.02)
        }, 10)
        _this.videoEx = setInterval(function() {
          _this.videoExtent = accSub(_this.videoExtent, 0.004)
        }, 10)
        setTimeout(function() {
          clearInterval(_this.videoOn)
          clearInterval(_this.videoEx)
        }, 500)
      }

    },

  };
</script>
<style>
  .el-progress .el-progress-bar .el-progress-bar__outer {
    background-color: #000000 !important;
    border: 0.5px solid #FFFFFF;
  }

  .langCom {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "SF Pro Text", "SF UI Text", "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;
  }
</style>
<style scoped>
  .gamebox{
    background: url(../../../static/images/index/Game.png) no-repeat;
    background-size: 100%;
    width: 180px;
    height: 136px;
  }
  .Socialbox{
    background: url(../../../static/images/index/Social.png) no-repeat;
    background-size: 100%;
    width: 180px;
    height: 136px;
  }
  .rotatecss{
    transform:rotate(90deg);position: relative;bottom: -100px;left: -65px;
  }
  .livebox{
    background: url(../../../static/images/index/live.png) no-repeat;
    background-size: 100%;
    width: 180px;
    height: 296px;
  }
  .artbox{
    width: 180px;
    height: 136px;
    background: url(../../../static/images/index/art.png) no-repeat;
    background-size: 100%;
  }
  .fogbox{
    width: 180px;
    height: 136px;
    background: url(../../../static/images/index/fog.png) no-repeat;
    background-size: 100%;
  }
  .flex-sb-column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .flex-end{
    display: flex;
    align-items: flex-end;
  }
  .imgbox_clo{
    height: 456px;
    width: 180px;
  }
  .AIbox{
    background: url(../../../static/images/index/ai.png) no-repeat;
    background-size: 100%;
    width: 180px;
    height: 296px;
  }
  .blochainbox{
     background: url(../../../static/images/index/blockchain.png) no-repeat;
     background-size: 100%;
     width: 180px;
     height: 296px;
  }
  .imgbox{
    margin: 0 120px;
    display: flex;
    justify-content: space-between;
  }
  .title_line{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 120px;
  }
  .all_title{
    margin-right: 89px;
  }
  .allbox>div {
    width: 1440px;
    margin-top: 120px;
    margin-bottom: 280px;
  }
  .allbox{

    width: 100%;
    min-width: 1440px;
    min-height: 906px;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, .7);
  }
  .rightimg{
    width: 228px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .rightmask{
    width: 384px;
    height: 64px;
    background: rgba(38, 115, 251, 0.7);
    backdrop-filter: blur(8px);
    box-sizing: border-box;
    padding: 20px 32px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    color: #FFFFFF;
  }
  .leftmask{
    box-sizing: border-box;
    padding: 20px 32px;
    width: 384px;
    height: 112px;
    background: rgba(183, 33, 255, 0.7);
    backdrop-filter: blur(8px);
    position: absolute;
    bottom: 0px;
    right: 0px;
    color: #FFFFFF;
  }
  .nft_right{
    width: 610px;
    height: 650px;
    background: url(../../../static/images/index/flat.png) no-repeat;
    background-position: 100% 94%;
    background-size: 353px 255px;
    position: relative;
  }
  .nft_left{
    position: relative;
    width: 588px;
    height: 650px;
    background: url(../../../static/images/index/nftgirl.png) no-repeat;
    background-size: 100%;
  }
  .nftbox>div {
    width: 1440px;
  }
  .nftbox>div>div {
    margin:0 120px;
    display: flex;
    justify-content: space-between;
  }
  .nftbox{
    margin-top: 140px;
    margin-bottom: 140px;
    width: 100%;
    min-width: 1440px;
    min-height: 906px;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, .7);
  }
  .u-margin-right-228{
    margin-right: 228px;
  }
  .u-margin-bottom-72{
    margin-bottom: 72px;
  }
  .u-margin-bottom-24{
    margin-bottom: 24px;
  }
  .citybox>div {
    width: 1440px;
  }
  .citybox>div>p {
    margin-left: 222px;
  }
  .citybox>div>div {
    margin-left: 222px;
  }
  .citybox{
    margin-top: 160px;
    margin-bottom: 140px;
    width: 100%;
    min-width: 1440px;
    min-height: 906px;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, .7);
    background: url(../../../static/images/index/city.png) no-repeat;
    background-size: 100%;
    background-position: bottom;
  }
  .u-flex-bot {
    display: flex;
    align-items: flex-end;
  }
  .aibox img{
    width: 1199px;
    height: 709px;
  }
  .aibox {
    width: 100%;
    min-width: 1440px;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, .7);
  }

  .aibox>div {
    width: 1440px;
  }

  .aibox>div>div {
    margin-left: 120px;
  }

  .text_486 {
    width: 486px;
  }
  .text_384{
    width: 384px;
  }

  .text_583 {
    width: 583px;
    margin-left: 126px;
  }

  .text_2 div {
    width: 486px;
  }

  .text_2 div:first-of-type {
    margin-right: 124px;
  }

  .nodetext .text_1 {
    width: 486px;
    margin-top: 72px;
    margin-bottom: 24px;
  }

  .nodetext>div {
    margin-left: 120px;
  }

  .nodetext>p {
    margin-left: 120px;
  }

  .nodetext {
    width: 1440px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, .7);
  }

  .progress_w {
    width: 64px;
    height: 20px;
  }

  .progress_w:first-of-type {
    margin-right: 24px;
  }

  .home_progress {
    position: absolute;
    bottom: 50px;
    width: 1440px;
    display: flex;
    justify-content: center;
  }

  .p_div {
    position: relative;
    height: 62px;
    overflow: hidden;
  }

  .tran_div {
    position: relative;
    height: 60px;
    overflow: hidden;
  }

  .u-margin-top-19 {
    margin-top: 19px;
  }

  video {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 100%;
    min-width: 1440px;
    height: 100%;
    /* height: auto; */
    width: auto;
    display: flex;
    justify-content: center;
    z-index: 0;

  }

  source {
    width: 100%;
    min-width: 1440px;
    height: 100%;
    /* height: auto; */
    width: auto;
  }

  .page::-webkit-scrollbar {
    width: 0 !important;
  }

  .page::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }

  .page {
    overflow-y: auto;
    background-color: #000000;
  }

  .headMask {
    width: 100%;
    height: 112px;
    background: #000000;
    z-index: 9999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .home_title_se {
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px #fff;
  }

  .home_title {
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 56px;

    color: #FFFFFF;
  }

  @keyframes example {
    0% {
      transform: scale(0);
      transform: translate(0px, 0px);
    }

    100% {
      transform: scale(1);
      transform: translate(0px, -60px);
    }
  }

  @keyframes example1 {
    0% {
      transform: scale(0);
      transform: translate(0px, 0px);
    }

    100% {
      transform: scale(1);
      transform: translate(0px, 62px);
    }
  }

  @keyframes example2 {
    0% {
      transform: scale(0);
      transform: translate(0px, 0px);
    }

    100% {
      transform: scale(1);
      transform: translate(0px, 62px);
    }
  }

  @keyframes example3 {
    0% {
      transform: scale(0);
      transform: translate(0px, 0px);
    }

    100% {
      transform: scale(1);
      transform: translate(0px, -62px);
    }
  }

  .title_line .p_div p {
    position: absolute;
    top: 60px;
    /* animation-name: example; */
    animation: example 0.3s;
    animation-fill-mode: forwards;
    /* animation-duration: 1s; */
    /* animation-delay:9s;
		-webkit-animation-delay:9s; */
    margin-left: 120px;
    /* animation-delay: 0s; */
  }

  .title_line .tran_div p {
    position: absolute;
    top: -60px;
    /* animation-name: example; */
    animation: example2 0.3s;
    animation-fill-mode: forwards;
    /* animation-duration: 1s; */
    /* animation-delay:9s;
		-webkit-animation-delay:9s; */
    margin-left: 120px;
    /* animation-delay: 0s; */
  }

  .title_line1 .p_div p {
    position: absolute;
    /* animation-name: example; */
    animation: example1 0.3s;
    animation-fill-mode: forwards;
    /* animation-duration: 1s; */
    /* animation-delay:9s;
  	-webkit-animation-delay:9s; */
    margin-left: 120px;
    /* animation-delay: 0s; */
  }

  .title_line1 .tran_div p {
    position: absolute;
    animation: example3 0.3s;
    animation-fill-mode: forwards;
    margin-left: 120px;
  }

  .nodebox {
    width: 100%;
    min-width: 1440px;
    height: 100%;
    min-height: 810px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../../../static/images/index/nodeBackgroundImg.png) no-repeat;
    background-position: 100%;
    background-size: 53%;

  }

  .homebox {
    width: 100%;
    min-width: 1440px;
    height: 100%;
    min-height: 810px;
    /* padding-top: 272px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .homebox .title_line div {
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .homebox .title_line1 div {
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .mask {
    background: #000000;
    z-index: 9999;
    position: fixed;
    left: 0;
    right: 0;
    top: 112px;
    bottom: 0;
    width: 100%;
    min-width: 1440px;
    height: 100%;

  }

  .unmask {
    display: none;
  }

  .transition_test {
    text-align: left;
    padding-bottom: 300px;
  }

  .shop_cart {
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: 9999;
    position: fixed;
    left: 0;
    right: 0;
    top: 112px;
    bottom: 0;
  }

  .shop_cart .add {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 300px;
  }

  .shop_cart .add button {
    position: absolute;
    z-index: 99;
  }

  .shop_cart .add_img {
    width: 100px;
    position: absolute;
    left: -700px;
    top: -390px;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(1);
      transform: translate(650px, 390px);
    }

    100% {
      transform: scale(.5);
      transform: translate(0px, 0px);
    }
  }

  .shop_cart-enter-active {
    animation: bounce-in 2s;
  }

  .bg-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #000000;
  }
</style>
