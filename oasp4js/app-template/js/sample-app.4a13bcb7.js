angular.module("app",["ngRoute","oasp.templates","app.main","app.component1","app.component2"]).config(["$locationProvider",function(a){"use strict";a.html5Mode(!1)}]),angular.module("oasp.templates",[]).run(["$templateCache",function(a){a.put("html/component-2/dialog-b.html","<!DOCTYPE html>\n<html>\n<body>\n<h2>Hello from Dialog B!</h2>\n</body>\n</html>"),a.put("html/main/page-not-found.html",'<!DOCTYPE html>\n<html>\n<body>\n<div class="row">\n    <div class="col-md-12">\n        <h2>Page Not Found!</h2>\n        <p>The page you trying to reach could not be found.</p>\n    </div>\n</div>\n</body>\n</html>'),a.put("html/main/welcome.html",'<!DOCTYPE html>\n<html>\n<body>\n<div class="row">\n    <div class="col-md-12">\n        <h2>Welcome to OASP4JS application seed!</h2>\n        <p>Go to <a href="#/component-1/dialog-a">dialog A</a> of the component 1.</p>\n        <p>Go to <a href="#/component-2/dialog-b">dialog B</a> of the component 2.</p>\n    </div>\n</div>\n</body>\n</html>')}]),angular.module("app.main",["ngRoute","oasp.templates"]).config(["$routeProvider",function(a){"use strict";a.when("/",{redirectTo:"/main/welcome"}).when("/main/welcome",{templateUrl:"html/main/welcome.html"}).otherwise({templateUrl:"html/main/page-not-found.html"})}]),angular.module("app.component1",["app.main"]).config(["$routeProvider",function(a){"use strict";a.when("/component-1/dialog-a",{templateUrl:"html/component-1/dialog-a.html"})}]),angular.module("app.component2",["app.main"]).config(["$routeProvider",function(a){"use strict";a.when("/component-2/dialog-b",{templateUrl:"html/component-2/dialog-b.html"})}]);