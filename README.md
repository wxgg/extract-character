# extract-character
为了解决前端项目中未先部署多语方案造成后续的大量人工调整，依赖强大的 ast 语法解析实现一个小型文本抽取工具，用于跟踪代码中的字符变量，并替换成相应的调用方法来实现多语化。现在只支持抽取汉字，后续建设会持续跟进。
## 完成度
前期规划以实现 cli 工具起步，同时开发一个简单的字符调用 API 如：
```js
  echlang.utils.getDefaultMessage({
    defaultMessage: "hello",
    id: "js.lang.massage.1",
  })
```
已发布 bate 版本的 cli 工具和 core 包，详细查看 https://www.npmjs.com/package/extract-character-cli

同时欢迎各种 issues 😘

## 整体规划
- extract-character-core
- extract-character-cli
- extract-character-for-react
- extract-character-for-vue
- extract-character-webpack-plugin
