# hyacinthbabies.github.io
个人博客（旧版）
使用AngularCSS动态加载CSS
$ npm install angular-css --save

1) Include the required JavaScript libraries in your index.html (ngRoute and UI Router are optional).

<script src="../javascripts/framefork/angular.min.js"></script>
<script src="../javascripts/framefork/angular-routes.min.js"></script>
<script src="../javascripts/framefork/angular-css.min.js"></script>
2) Add angularCSS as a dependency for your app.

var myApp = angular.module('myApp', ['ngRoute','angularCSS']);
NOTE: The module name "door3.css" is now deprecated.
ps:不同的文件中有不同使用方式，详细参考github上angular-css项目
