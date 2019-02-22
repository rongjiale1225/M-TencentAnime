
const gulp=require("gulp");
const sass=require('gulp-sass');
const webpack=require('webpack-stream');
const server=require('gulp-webserver');
const watch=require('gulp-watch');
const pathUtil=require('path');
const del = require('del');
// 解构出来的配置文件
const { 
    serverConfig,
    webPackConfig 
} = require('./config')

// 迁移HTML文件
gulp.task('copy-html',() => {
    return gulp.src('src/*.html')
               .pipe(gulp.dest('dist'))
})

// 迁移static文件夹
gulp.task('copy-static', () => {
    return gulp.src('src/static/**/*')
                .pipe(gulp.dest('dist/static'))
})

// 编译sass
gulp.task('compile-sass', () => {
    return gulp.src('src/stylesheets/**/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('dist/stylesheets'))
})

// server
gulp.task('server', () => {
    return gulp.src('dist')
            .pipe(server(serverConfig))
})

// 打包js
gulp.task('pakge-js', () => {
    return gulp.src('src/javascripts/**/*')
               .pipe(webpack(webPackConfig))
               .pipe(gulp.dest('dist/javascripts'))
})

// 监听文件变化
gulp.task('watch', () => {
    gulp.watch('src/*.html', ['copy-html'])
    gulp.watch('src/stylesheets/**/*.scss', ['compile-sass'])
    gulp.watch('src/javascripts/**/*', ['pakge-js'])

    // 监听静态资源变化
    watch('src/static/**/*', (v) => {
        if ( v.event === 'unlink' ) { // 如果是删除动作就删除对应的dist中的文件
            let _path = pathUtil.resolve('dist/static/', v.path.split('\\static\\')[1])
            del(_path)
        } else {
            // 如果是新增和更改，就将静态资源直接再次输出到打包路径
            gulp.start(['copy-static'])
        }
    })
})

gulp.task('default',[
    'copy-html',
    'copy-static',
    'compile-sass',
    'watch',
    'server',
    'pakge-js'
    ],
    () => {
    console.log("初始化");
})