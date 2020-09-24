showZHCN()

function showZHCN() {
  echlang.init({
    langType: 'zh_CN',
    fileUrl: '../lang'
  }, () => {
    showDescription();
  });
}

function showENUS() {
  var lang = {
    "js.lang.massage.1": "Xiaoming",
    "js.lang.massage.2": "boy",
    "js.lang.massage.3": "{0} 是 {1}"
  };  
  echlang.addLang('en_US', lang, true);
  echlang.setLangType('en_US');
  showDescription();
}