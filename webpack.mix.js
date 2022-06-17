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

mix.copy('node_modules/font-awesome-sass/assets/fonts/font-awesome/*', 'assets/fonts');
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts/*', 'assets/webfonts');

mix.copy('node_modules/font-awesome/css/font-awesome.min.css', 'assets/css');
mix.copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'assets/css/font-awesome-6.min.css');

mix.browserSync({
    proxy: 'grupo-dragao.test',
    files: [
        '*.html',
        '**/*.(js|css)'
    ]
});