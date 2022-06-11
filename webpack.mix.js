const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix.js('resources/js/app.js', 'assets/js').sass('resources/sass/app.scss', 'assets/css');

// mix.webpackConfig({
//     plugins: [
//         new BrowserSyncPlugin({
//             files: [
//                 '/**/*.html',
//                 'public/**/*.(js|css)'
//             ]
//         })
//     ]
// });

mix.browserSync({
    proxy: 'grupo-dragao.test',
    files: [
        '*.html',
        '**/*.(js|css)'
    ]
});