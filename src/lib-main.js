import locale from 'element-ui/lib/locale'
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
import Button from './components/Button.vue'

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
