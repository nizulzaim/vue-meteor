Package.describe({
  name: 'akryum:vue-ssr',
  version: '0.1.0',
  summary: 'Render Vue server-side',
  git: 'https://github.com/Akryum/meteor-vue-component',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.1');
  api.use([
    'isobuild:compiler-plugin@1.0.0',
    'ecmascript',
    'tracker',
    'minimongo',
    'underscore',
    'webapp',
    'mongo',
    'routepolicy',
    'url',
    'akryum:npm-check@0.0.3',
    'staringatlights:fast-render@2.16.2',
    'staringatlights:inject-data@2.0.4',
  ]);
  api.mainModule('server/index.js', 'server');
  api.export('VueSSR', 'server');
});

Npm.depends({
  'vue-server-renderer': '2.2.4',
  'vue-ssr-html-stream': '2.2.0',
  'cookie-parser': '1.4.1',
  'cheerio': '0.20.0',
})
