import Pagination from './components/pagination/index.js'
import Dialog from './components/dialog/index.js'
import Autocomplete from './components/autocomplete/index.js'
import Dropdown from './components/dropdown/index.js'
import DropdownMenu from './components/dropdown-menu/index.js'
import DropdownItem from './components/dropdown-item/index.js'
import Menu from './components/menu/index.js'
import Submenu from './components/submenu/index.js'
import MenuItem from './components/menu-item/index.js'
import MenuItemGroup from './components/menu-item-group/index.js'
import Input from './components/input/index.js'
import InputNumber from './components/input-number/index.js'
import Radio from './components/radio/index.js'
import RadioGroup from './components/radio-group/index.js'
import RadioButton from './components/radio-button/index.js'
import Checkbox from './components/checkbox/index.js'
import CheckboxButton from './components/checkbox-button/index.js'
import CheckboxGroup from './components/checkbox-group/index.js'
import Switch from './components/switch/index.js'
import Select from './components/select/index.js'
import Option from './components/option/index.js'
import OptionGroup from './components/option-group/index.js'
import Button from './components/button/index.js'
import ButtonGroup from './components/button-group/index.js'
import Table from './components/table/index.js'
import TableColumn from './components/table-column/index.js'
import DatePicker from './components/date-picker/index.js'
import TimeSelect from './components/time-select/index.js'
import TimePicker from './components/time-picker/index.js'
import Popover from './components/popover/index.js'
import Tooltip from './components/tooltip/index.js'
import MessageBox from './components/message-box/index.js'
import Breadcrumb from './components/breadcrumb/index.js'
import BreadcrumbItem from './components/breadcrumb-item/index.js'
import Form from './components/form/index.js'
import FormItem from './components/form-item/index.js'
import Tabs from './components/tabs/index.js'
import TabPane from './components/tab-pane/index.js'
import Tag from './components/tag/index.js'
import Tree from './components/tree/index.js'
import Alert from './components/alert/index.js'
import Notification from './components/notification/index.js'
import Slider from './components/slider/index.js'
import Loading from './components/loading/index.js'
import Icon from './components/icon/index.js'
import Row from './components/row/index.js'
import Col from './components/col/index.js'
import Upload from './components/upload/index.js'
import Progress from './components/progress/index.js'
import Spinner from './components/spinner/index.js'
import Message from './components/message/index.js'
import Badge from './components/badge/index.js'
import Card from './components/card/index.js'
import Rate from './components/rate/index.js'
import Steps from './components/steps/index.js'
import Step from './components/step/index.js'
import Carousel from './components/carousel/index.js'
import Scrollbar from './components/scrollbar/index.js'
import CarouselItem from './components/carousel-item/index.js'
import Collapse from './components/collapse/index.js'
import CollapseItem from './components/collapse-item/index.js'
import Cascader from './components/cascader/index.js'
import ColorPicker from './components/color-picker/index.js'
import Transfer from './components/transfer/index.js'
import Container from './components/container/index.js'
import Header from './components/header/index.js'
import Aside from './components/aside/index.js'
import Main from './components/main/index.js'
import Footer from './components/footer/index.js'
import Timeline from './components/timeline/index.js'
import TimelineItem from './components/timeline-item/index.js'
import Link from './components/link/index.js'
import Divider from './components/divider/index.js'
import Image from './components/image/index.js'
import Calendar from './components/calendar/index.js'
import Backtop from './components/backtop/index.js'
import InfiniteScroll from './components/infinite-scroll/index.js'
import PageHeader from './components/page-header/index.js'
import CascaderPanel from './components/cascader-panel/index.js'
import Avatar from './components/avatar/index.js'
import Drawer from './components/drawer/index.js'
import Popconfirm from './components/popconfirm/index.js'

import locale from 'element-ui/lib/locale'
import ja from 'element-ui/lib/locale/lang/ja'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

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
  Loading,
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
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  CollapseTransition
]

const install = function(Vue, opts = {}) {
  locale.use(opts.locale || ja)
  locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.use(component)
  })

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

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
