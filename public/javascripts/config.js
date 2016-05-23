requirejs.config({
  baseUrl: '/javascripts/libs',
    paths: {
        app: '/javascripts',
        jquery: '//kendo.cdn.telerik.com/2016.2.504/js/jquery.min',
        k: '//kendo.cdn.telerik.com/2016.2.504/js',
        'jquery.easing': '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min',
        templates: '/templates',
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.9.0/lodash.min',
    },
    shim: {
        k: ['jquery'],
        'jquery.easing': ['jquery'],
    },
    waitSeconds: 600
});
