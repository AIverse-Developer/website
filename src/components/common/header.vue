<template>
	<div class="header font-size14 langCom">
		<div class="headdiv">
			<div class="u-flex">
				<div class="u-flex">
					<div class="header-logo flex">
						<img v-if="isShow" src="../../../static/images/index/logo.png" alt="">
					</div>
					<div class="title">
						AIVerse
					</div>
				</div>

				<div class="centerbox">
					<div  class="flex-center-column" :class="selectNum==index?'active':'noactive'" v-for="(item,index) in btnList" :key="index" @click="tochange(index)">
						<div>{{item.name}}</div>
					</div>
				</div>
			</div>

			<div class="header-text flex-right">
				<div class="flex-sb-center langbox">
					<el-dropdown placement="bottom" trigger="click" @command="handleCommand">
						<span class="el-dropdown-link">
							{{languageSelected}}
						</span>
						<el-dropdown-menu slot="dropdown" style="z-index: 999999999;">
							<el-dropdown-item v-for="(item,index) in langList" :key="index" :command="item">{{item.name}}
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<div class="cloline"></div>
					<img style="width: 24px;height: 24px;" src="../../../static/images/index/setting.png" />
				</div>
				<div class="connbox">
					Connect Wallet
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Vue from "vue";
	import {
		setLanguage,
		GetQueryString
	} from "@/assets/js/util.js";
	import {
		defaultLang,
		langs
	} from "../../addon/i18n/i18n.js";
	export default {
		name: 'Header',
		props: {
			title: {
				type: String,
				default: ''
			},
			url: {
				type: String,
				default: ''
			},
			isShow: {
				type: Boolean,
				default: false
			},
			selectNum: {
				type: Number,
				default: 0
			}
		},
		created() {
			let _this = this
		},
		data() {
			return {
				i18n: this.$t('web.header'),
				parameterValue: '',
				showLanguage: false,
				lang: localStorage.getItem("lang"),
				oldLang: '',
				langList: langs,
				languageSelected: '',
				btnList: [{
						name: 'Home',
					},
					{
						name: 'Swap'
					},
					{
						name: 'Explorer'
					},
					{
						name: 'Outerverse'
					},
          {
          	name: 'Bridge'
          },
					{
						name: 'Business Plan'
					},
					{
						name: 'Tech Paper',
					}
				]
			}
		},
		inject: ["reload"],
		mounted() {
			let _this = this;
			_this.switchLang(localStorage.getItem("lang"));
			setLanguage(_this);
		},
		methods: {
			handleCommand(command) {
				this.changelang(command.lang)
			},
			changelang(lang) {
				this._i18n.locale = lang;
				localStorage.setItem("lang", lang);
				this.reload();
			},
			tochange(index) {
				this.$emit('select', index);
			},
			switchLang(lang) {
				let _this = this
				if (_this.oldLang == "") {
					_this.oldLang = lang;
				} else {
					let newUrl = window.location.href.replace(
						"lang=" + _this.oldLang,
						"lang=" + lang
					);
					history.replaceState("", "newurl", newUrl);
				}
				for (let i = 0; i < _this.langList.length; i++) {
					if (lang == _this.langList[i].lang) {
						_this.langList[i].flag = true;

						_this.languageSelected = _this.langList[i].title;
					} else {
						_this.langList[i].flag = false;
					}
				}
			},
		}
	}
</script>
<style>
  .langCom {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "SF Pro Text", "SF UI Text", "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;
  }
	.el-popper .popper__arrow::after {
	  content: none !important;
	}
	.el-popper .popper__arrow {
	  border: none !important;
	}
	.el-dropdown-menu__item:not(.is-disabled):hover{
	  background-color:#000 !important;
	  color:#666 !important;
	}
	.el-dropdown-menu{
		width: 120px;
		background-color: rgba(10, 25, 51, 0.7) !important;
		backdrop-filter: blur(8px) !important;
		border-radius: 16px !important;
		border: none !important;

	}
	.el-dropdown-menu .el-dropdown-menu__item{
		text-align: center;
		color: #FFFFFF !important;
		font-style: normal;
		font-weight: 300;
	}
</style>
<style scoped >
	.flex-right{
		display: flex;
		justify-content: right;
		align-items: center;
	}

	.el-dropdown-link {
		color: #FFFFFF;
	}


	@media screen and (min-width:600px) {


		.connbox{
			width: 172px;
			height: 48px;
			background: #2673FB;
			border-radius: 16px;
      font-weight: 600;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: 32px;
		}
		.langbox{
			width: 80px;
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			color: #FFFFFF;
		}
		.cloline{
			width: 1px;
			height: 14px;
			background: rgba(255, 255, 255, .4);
		}
		.mobile_title {
			display: none;
		}
		.title{
			font-style: normal;
			font-weight: 600;
			font-size: 20px;
			color: #FFFFFF;
			margin-left: 12.5px;
		}
		.noactive {
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			color: #FFFFFF;
		}

		.active {
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			color: #FFFFFF;
		}

		.centerbox {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			color: #FFFFFF;
			display: flex;
			padding: 0 20px;
		}

		.centerbox>div>div {
			margin: 0 15px;
			cursor: pointer;
			position: relative;
			text-decoration: none;
		}
		.centerbox>div:first-of-type{
			margin-left: 30px;
		}
		.langActive {
			color: #013FCC;
		}

		.header {
			height: 112px;
			color: #FFFFFF;
			z-index: 999;
      background: linear-gradient(180deg, #000000 60.39%, rgba(0, 0, 0, 0) 100%);
			position: fixed;
			width: 100%;
			min-width: 1440px;
			top: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;
		}

		.headdiv {
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-width: 1376px;
			margin: 0 32px;
		}

		.header-logo {
			width: 51.5px;
		}

		.header-logo img {
			width: 51.5px;
		}

		.header-logo .title {
			font-size: 16px;
			font-weight: bold;
		}

		.iconShare {
			font-size: 22px;
		}

		.header-text {
			font-size: 14px;
			font-style: normal;
			font-weight: normal;
			cursor: pointer;
			margin-top: -8px;
		}

		.header-text img {
			width: 14px;
			height: 14px;
			margin-left: 8px;
		}

		.other_lang {
			overflow: hidden;
			transition: all 0.3s;
		}

		.pad_top_5 {
			padding-top: 10px !important;
		}

		.pad_5 {
			padding: 5px 0;
		}
	}

	@media screen and (max-width: 600px) and (min-width: 600px) {
		.mobile_title {
			display: none;
		}

		.noactive {
			width: 6px;
			height: 6px;
		}

		.active {
			width: 5px;
			height: 5px;
			background-color: #FFFFFF;
			border-radius: 50px;
		}

		.centerbox {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			color: #FFFFFF;
			display: flex;
			padding: 0 20px;
			display: none;
		}

		.centerbox div {
			margin: 0 15px;
			cursor: pointer;
			position: relative;
			text-decoration: none;
		}

		.el-dropdown-link {
			color: #FFFFFF;
			font-size: 15px;
		}

		.langActive {
			color: #013FCC;
		}

		.header {
			height: 45px;
			color: #FFFFFF;
			z-index: 999;
			background: #1E1C20;
			/* background-image: url(../../../static/images/index/head_bg.png); */
			/* background-repeat: no-repeat;
      background-size: 100% 100%; */
			/* padding: 0px 120px 0px 120px; */
			position: fixed;
			width: 100%;
			top: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;
		}

		.headdiv {
			width: 100%;
			padding: 0 23px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			/*  min-width: 1200px; */
		}

		.header-logo {
			width: 92px;
			height: 28px;
		}

		.header-logo img {
			width: 92px;
			height: 28px;
		}

		.header-logo .title {
			font-size: 16px;
			font-weight: bold;
		}

		.iconShare {
			font-size: 22px;
		}

		.header-text {
			font-size: 14px;
			font-style: normal;
			font-weight: normal;
			cursor: pointer;
		}

		.header-text img {
			width: 14px;
			height: 14px;
			margin-left: 8px;
		}

		.other_lang {
			overflow: hidden;
			transition: all 0.3s;
		}

		.pad_top_5 {
			padding-top: 10px !important;
		}

		.pad_5 {
			padding: 5px 0;
		}
	}

	@media screen and (max-width: 600px) {
		.mobile_title {
			display: none;
		}

		.noactive {
			width: 6px;
			height: 6px;
		}

		.active {
			width: 5px;
			height: 5px;
			background-color: #FFFFFF;
			border-radius: 50px;
		}

		.centerbox {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			color: #FFFFFF;
			display: flex;
			padding: 0 20px;
			display: none;
		}

		.centerbox div {
			margin: 0 15px;
			cursor: pointer;
			position: relative;
			text-decoration: none;
		}

		.el-dropdown-link {
			color: #FFFFFF;
			font-size: 15px;
		}

		.langActive {
			color: #013FCC;
		}

		.header {
			height: 45px;
			color: #FFFFFF;
			z-index: 999;
			/* background-image: url(../../../static/images/index/head_bg.png); */
			background-repeat: no-repeat;
			background-size: 100% 100%;
			/* padding: 0px 120px 0px 120px; */
			position: fixed;
			width: 100%;
			top: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;
		}

		.headdiv {
			width: 100%;
			padding: 0 23px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			/*  min-width: 1200px; */
		}

		.header-logo {
			width: 92px;
			height: 28px;
		}

		.header-logo img {
			width: 92px;
			height: 28px;
		}

		.header-logo .title {
			font-size: 16px;
			font-weight: bold;
		}

		.iconShare {
			font-size: 22px;
		}

		.header-text {
			font-size: 14px;
			font-style: normal;
			font-weight: normal;
			cursor: pointer;
		}

		.header-text img {
			width: 14px;
			height: 14px;
			margin-left: 8px;
		}

		.other_lang {
			overflow: hidden;
			transition: all 0.3s;
		}

		.pad_top_5 {
			padding-top: 10px !important;
		}

		.pad_5 {
			padding: 5px 0;
		}
	}
</style>
