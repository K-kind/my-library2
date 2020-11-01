import Autocomplete from 'element-ui/lib/autocomplete'

Autocomplete.name = Autocomplete.name.replace(/^El/, 'O')
Autocomplete.install = function(Vue) {
  Vue.component(Autocomplete.name, Autocomplete)
}

export default ElAutocomplete
