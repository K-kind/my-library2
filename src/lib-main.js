import locale from 'element-ui/lib/locale'

// import pagination from './src/components/pagination/index.js'
// import dialog from './src/components/dialog/index.js'
// import autocomplete from './src/components/autocomplete/index.js'
// import dropdown from './src/components/dropdown/index.js'
// import dropdown-menu from './src/components/dropdown-menu/index.js'
// import dropdown-item from './src/components/dropdown-item/index.js'
// import menu from './src/components/menu/index.js'
// import submenu from './src/components/submenu/index.js'
// import menu-item from './src/components/menu-item/index.js'
// import menu-item-group from './src/components/menu-item-group/index.js'
// import input from './src/components/input/index.js'
// import input-number from './src/components/input-number/index.js'
// import radio from './src/components/radio/index.js'
// import radio-group from './src/components/radio-group/index.js'
// import radio-button from './src/components/radio-button/index.js'
// import checkbox from './src/components/checkbox/index.js'
// import checkbox-button from './src/components/checkbox-button/index.js'
// import checkbox-group from './src/components/checkbox-group/index.js'
// import switch from './src/components/switch/index.js'
// import select from './src/components/select/index.js'
// import option from './src/components/option/index.js'
// import option-group from './src/components/option-group/index.js'
// import button from './src/components/button/index.js'
// import button-group from './src/components/button-group/index.js'
// import table from './src/components/table/index.js'
// import table-column from './src/components/table-column/index.js'
// import date-picker from './src/components/date-picker/index.js'
// import time-select from './src/components/time-select/index.js'
// import time-picker from './src/components/time-picker/index.js'
// import popover from './src/components/popover/index.js'
// import tooltip from './src/components/tooltip/index.js'
// import message-box from './src/components/message-box/index.js'
// import breadcrumb from './src/components/breadcrumb/index.js'
// import breadcrumb-item from './src/components/breadcrumb-item/index.js'
// import form from './src/components/form/index.js'
// import form-item from './src/components/form-item/index.js'
// import tabs from './src/components/tabs/index.js'
// import tab-pane from './src/components/tab-pane/index.js'
// import tag from './src/components/tag/index.js'
// import tree from './src/components/tree/index.js'
// import alert from './src/components/alert/index.js'
// import notification from './src/components/notification/index.js'
// import slider from './src/components/slider/index.js'
// import loading from './src/components/loading/index.js'
// import icon from './src/components/icon/index.js'
// import row from './src/components/row/index.js'
// import col from './src/components/col/index.js'
// import upload from './src/components/upload/index.js'
// import progress from './src/components/progress/index.js'
// import spinner from './src/components/spinner/index.js'
// import message from './src/components/message/index.js'
// import badge from './src/components/badge/index.js'
// import card from './src/components/card/index.js'
// import rate from './src/components/rate/index.js'
// import steps from './src/components/steps/index.js'
// import step from './src/components/step/index.js'
// import carousel from './src/components/carousel/index.js'
// import scrollbar from './src/components/scrollbar/index.js'
// import carousel-item from './src/components/carousel-item/index.js'
// import collapse from './src/components/collapse/index.js'
// import collapse-item from './src/components/collapse-item/index.js'
// import cascader from './src/components/cascader/index.js'
// import color-picker from './src/components/color-picker/index.js'
// import transfer from './src/components/transfer/index.js'
// import container from './src/components/container/index.js'
// import header from './src/components/header/index.js'
// import aside from './src/components/aside/index.js'
// import main from './src/components/main/index.js'
// import footer from './src/components/footer/index.js'
// import timeline from './src/components/timeline/index.js'
// import timeline-item from './src/components/timeline-item/index.js'
// import link from './src/components/link/index.js'
// import divider from './src/components/divider/index.js'
// import image from './src/components/image/index.js'
// import calendar from './src/components/calendar/index.js'
// import backtop from './src/components/backtop/index.js'
// import infinite-scroll from './src/components/infinite-scroll/index.js'
// import page-header from './src/components/page-header/index.js'
// import cascader-panel from './src/components/cascader-panel/index.js'
// import avatar from './src/components/avatar/index.js'
// import drawer from './src/components/drawer/index.js'
// import popconfirm from './src/components/popconfirm/index.js'
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Loading,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  CollapseTransition
} from 'element-ui'

/* ラップされたコンポーネント */
import Button from './components/button/index.js'

const components = [
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  CollapseTransition
]

components.forEach(component => {
  component.name = component.name.replace(/^El/, 'O')
})

const install = function(Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(InfiniteScroll)
  Vue.use(Loading.directive)

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}

export default {
  version: '1.0.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm
}
