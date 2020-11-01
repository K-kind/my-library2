import Avatar from 'element-ui/lib/avatar'

Avatar.name = Avatar.name.replace(/^El/, 'O')
Avatar.install = function(Vue) {
  Vue.component(Avatar.name, Avatar)
}

export default Avatar
