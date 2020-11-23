const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const Components = require('../components.json')
const config = require('./config')

module.exports = {
  mode: 'production',
  entry: Components,
  // entry: {
  //   pagination: "./node_modules/element-ui/packages/pagination/index.js"
  //   // app: ['./src/components/button/index.js']
  //   // "card": "./node_modules/element-ui/packages/card/index.js",
  // },
  // entry: {
  //   "pagination": "./node_modules/element-ui/packages/pagination/index.js",
  //   "dialog": "./node_modules/element-ui/packages/dialog/index.js",
  //   "autocomplete": "./node_modules/element-ui/packages/autocomplete/index.js",
  //   // "dropdown": "./node_modules/element-ui/packages/dropdown/index.js",
  //   "dropdown-menu": "./node_modules/element-ui/packages/dropdown-menu/index.js",
  //   "dropdown-item": "./node_modules/element-ui/packages/dropdown-item/index.js",
  //   // "menu": "./node_modules/element-ui/packages/menu/index.js",
  //   // "submenu": "./node_modules/element-ui/packages/submenu/index.js",
  //   "menu-item": "./node_modules/element-ui/packages/menu-item/index.js",
  //   "menu-item-group": "./node_modules/element-ui/packages/menu-item-group/index.js",
  //   "input": "./node_modules/element-ui/packages/input/index.js",
  //   "input-number": "./node_modules/element-ui/packages/input-number/index.js",
  //   "radio": "./node_modules/element-ui/packages/radio/index.js",
  //   "radio-group": "./node_modules/element-ui/packages/radio-group/index.js",
  //   "radio-button": "./node_modules/element-ui/packages/radio-button/index.js",
  //   "checkbox": "./node_modules/element-ui/packages/checkbox/index.js",
  //   "checkbox-button": "./node_modules/element-ui/packages/checkbox-button/index.js",
  //   "checkbox-group": "./node_modules/element-ui/packages/checkbox-group/index.js",
  //   "switch": "./node_modules/element-ui/packages/switch/index.js",
  //   "select": "./node_modules/element-ui/packages/select/index.js",
  //   "option": "./node_modules/element-ui/packages/option/index.js",
  //   "option-group": "./node_modules/element-ui/packages/option-group/index.js",
  //   "button-group": "./node_modules/element-ui/packages/button-group/index.js",
  //   // "table": "./node_modules/element-ui/packages/table/index.js",
  //   // "table-column": "./node_modules/element-ui/packages/table-column/index.js",
  //   "date-picker": "./node_modules/element-ui/packages/date-picker/index.js",
  //   "time-select": "./node_modules/element-ui/packages/time-select/index.js",
  //   "time-picker": "./node_modules/element-ui/packages/time-picker/index.js",
  //   "popover": "./node_modules/element-ui/packages/popover/index.js",
  //   // "tooltip": "./node_modules/element-ui/packages/tooltip/index.js",
  //   "message-box": "./node_modules/element-ui/packages/message-box/index.js",
  //   "breadcrumb": "./node_modules/element-ui/packages/breadcrumb/index.js",
  //   "breadcrumb-item": "./node_modules/element-ui/packages/breadcrumb-item/index.js",
  //   "form": "./node_modules/element-ui/packages/form/index.js",
  //   // "form-item": "./node_modules/element-ui/packages/form-item/index.js",
  //   // "tabs": "./node_modules/element-ui/packages/tabs/index.js",
  //   "tab-pane": "./node_modules/element-ui/packages/tab-pane/index.js",
  //   // "tag": "./node_modules/element-ui/packages/tag/index.js",
  //   // "tree": "./node_modules/element-ui/packages/tree/index.js",
  //   "alert": "./node_modules/element-ui/packages/alert/index.js",
  //   "notification": "./node_modules/element-ui/packages/notification/index.js",
  //   // "slider": "./node_modules/element-ui/packages/slider/index.js",
  //   "loading": "./node_modules/element-ui/packages/loading/index.js",
  //   "icon": "./node_modules/element-ui/packages/icon/index.js",
  //   "row": "./node_modules/element-ui/packages/row/index.js",
  //   "col": "./node_modules/element-ui/packages/col/index.js",
  //   // "upload": "./node_modules/element-ui/packages/upload/index.js",
  //   "progress": "./node_modules/element-ui/packages/progress/index.js",
  //   "spinner": "./node_modules/element-ui/packages/spinner/index.js",
  //   "message": "./node_modules/element-ui/packages/message/index.js",
  //   "badge": "./node_modules/element-ui/packages/badge/index.js",
  //   "card": "./node_modules/element-ui/packages/card/index.js",
  //   // "rate": "./node_modules/element-ui/packages/rate/index.js",
  //   // "steps": "./node_modules/element-ui/packages/steps/index.js",
  //   // "step": "./node_modules/element-ui/packages/step/index.js",
  //   // "carousel": "./node_modules/element-ui/packages/carousel/index.js",
  //   // "scrollbar": "./node_modules/element-ui/packages/scrollbar/index.js",
  //   // "carousel-item": "./node_modules/element-ui/packages/carousel-item/index.js",
  //   // "collapse": "./node_modules/element-ui/packages/collapse/index.js",
  //   // "collapse-item": "./node_modules/element-ui/packages/collapse-item/index.js",
  //   // "cascader": "./node_modules/element-ui/packages/cascader/index.js",
  //   // "color-picker": "./node_modules/element-ui/packages/color-picker/index.js",
  //   // "transfer": "./node_modules/element-ui/packages/transfer/index.js",
  //   // "container": "./node_modules/element-ui/packages/container/index.js",
  //   // "header": "./node_modules/element-ui/packages/header/index.js",
  //   // "aside": "./node_modules/element-ui/packages/aside/index.js",
  //   // "main": "./node_modules/element-ui/packages/main/index.js",
  //   // "footer": "./node_modules/element-ui/packages/footer/index.js",
  //   // "timeline": "./node_modules/element-ui/packages/timeline/index.js",
  //   // "timeline-item": "./node_modules/element-ui/packages/timeline-item/index.js",
  //   // "link": "./node_modules/element-ui/packages/link/index.js",
  //   // "divider": "./node_modules/element-ui/packages/divider/index.js",
  //   // "image": "./node_modules/element-ui/packages/image/index.js",
  //   // "calendar": "./node_modules/element-ui/packages/calendar/index.js",
  //   // "backtop": "./node_modules/element-ui/packages/backtop/index.js",
  //   // "infinite-scroll": "./node_modules/element-ui/packages/infinite-scroll/index.js",
  //   // "page-header": "./node_modules/element-ui/packages/page-header/index.js",
  //   // "cascader-panel": "./node_modules/element-ui/packages/cascader-panel/index.js",
  //   // "avatar": "./node_modules/element-ui/packages/avatar/index.js",
  //   // "drawer": "./node_modules/element-ui/packages/drawer/index.js",
  //   // "popconfirm": "./node_modules/element-ui/packages/popconfirm/index.js",
  //   "button": "./src/components/button/index.js"
  // },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    // alias: config.alias,
    modules: ['node_modules']
  },
  externals: config.externals,
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/element-ui/packages')
        ],
        // exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/variables.scss')
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
