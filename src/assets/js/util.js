

// i18n
function setLanguage(_this) {
	_this._i18n.locale = localStorage.getItem('lang') || 'en'
	_this.$t('web')
}
function GetQueryString(name) {
	var url = window.location.href;
	if (new RegExp(".*\\b" + name + "\\b(\\s*=([^&]+)).*", "gi").test(url)) {
		return RegExp.$2;
	} else {
		return null;
	}
}



module.exports = {
  GetQueryString: GetQueryString,
  setLanguage: setLanguage

}
