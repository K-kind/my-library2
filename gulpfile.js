const path = require('path')
const fs = require('fs')
const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  const varsPath = 'node_modules/element-ui/packages/theme-chalk/src/common/var.scss'
  const customVarsPath = path.resolve(process.cwd(), 'src/custom-variables.scss')
  fs.writeFileSync(varsPath, fs.readFileSync(customVarsPath), 'utf-8')

  // return src('copied-thalk-src/*.scss')
  return src('node_modules/element-ui/packages/theme-chalk/src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./theme'))
}

function copyfont() {
  // return src('copied-thalk-src/fonts/**')
  return src('node_modules/element-ui/packages/theme-chalk/src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./theme/fonts'))
}

exports.default = series(compile, copyfont)
