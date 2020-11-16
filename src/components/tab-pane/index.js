import Component from 'element-ui/lib/tab-pane'

/*
  Tabsコンポーネント内部で、'ElTabPane'という名前で処理を分けている部分があったため、
  内部的な名前は'ElTabPane'のまま、使用時は'OTabPane'で使えるようにしておく。
*/
Component.install = function(Vue) {
  Vue.component(Component.name.replace(/^El/, 'O'), Component)
}

export default Component
