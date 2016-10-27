// myApp.directive('star', function() {
//     return {
//         restrict: 'E',
//         replace: true,
//         scope: {},
//         template: '<canvas id="stars" style="transform: rotate(-9deg);position:relative;" width="100" height="100">' + 'Your browser does not support the canvas element .' + '</canvas>',
//         link: function(scope, element, attrs) {
//             scope.init = function() {
//                 //     var ctx = document.getElementById('stars').getContext('2d');
//                 //     ctx.fillStyle = "red";
//                 //     ctx.shadowColor = "#000000";
//                 //     ctx.shadowOffsetX = 6;
//                 //     ctx.shadowOffsetY = 6;
//                 //     ctx.shadowBlur = 9;
//                 //     ctx.beginPath();
//                 //     ctx.moveTo(15, 150);
//                 //     ctx.lineTo(100, 140);
//                 //     ctx.lineTo(170, 90);
//                 //     ctx.lineTo(230, 140);
//                 //     ctx.lineTo(315, 150);
//                 //     ctx.lineTo(230, 200);
//                 //     ctx.lineTo(300, 263);
//                 //     ctx.lineTo(170, 233);
//                 //     ctx.lineTo(30, 263);
//                 //     ctx.lineTo(100, 200);
//                 //     ctx.closePath();
//                 //     ctx.fill();
//                 var canvas = document.getElementById("stars");
//                 var context = canvas.getContext("2d");
//                 context.beginPath();
//                 //设置是个顶点的坐标，根据顶点制定路径   
//                 for (var i = 0; i < 5; i++) {
//                     context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * 10 + 50, -Math.sin((18 + i * 72) / 180 * Math.PI) * 10 + 50);
//                     context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * 4 + 50, -Math.sin((54 + i * 72) / 180 * Math.PI) * 4 + 50);
//                 }
//                 context.strokeStyle = "red";
//                  context.fillStyle = "red";
//                 // context.strokeStyle = "#F5270B";
//                 context.shadowColor = "#000";
//                 context.shadowOffsetX = 2;
//                 context.shadowOffsetY = 3;
//                 context.shadowBlur = 4;
//                 context.fill();
//                 context.stroke();

//                 context.closePath();
//                 //设置边框样式以及填充颜色   
//                 // context.lineWidth = "3";

//                 //圆
//                 context.fillStyle = 'red';
//                 context.beginPath();
//                 context.arc(50, 50, 2, 0, -1 * Math.PI);
//                 context.fill()
//                 context.stroke();
//                 context.closePath();
//                 //弧
//                 // arc(cx, cy, radius, start_angle, end_angle, direction); 
//                 context.fillStyle = 'red';
//                 context.beginPath();
//                 context.arc(50, 40, 1, 0, 2 * Math.PI);
//                 context.fill()
//                 context.stroke();
//                 context.closePath();
//             }
//             window.addEventListener('load', scope.init, false);
//         }
//     }
// });

myApp.directive('star', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: '<span style="transform: rotate(-9deg);color: red;text-shadow: 2px 1px 1px #000;" class= "glyphicon glyphicon-star" > ' + '</span>'
    }
})
myApp.directive('srow', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: '<canvas id="srow" style="transform: rotate(-58deg);position:absolute;" width="100" height="100">' + 'Your browser does not support the canvas element .' + '</canvas>',
        link: function(scope, element, attrs) {
            scope.init = function() {
                //     var ctx = document.getElementById('stars').getContext('2d');
                //     ctx.fillStyle = "red";
                //     ctx.shadowColor = "#000000";
                //     ctx.shadowOffsetX = 6;
                //     ctx.shadowOffsetY = 6;
                //     ctx.shadowBlur = 9;
                //     ctx.beginPath();
                //     ctx.moveTo(15, 150);
                //     ctx.lineTo(100, 140);
                //     ctx.lineTo(170, 90);
                //     ctx.lineTo(230, 140);
                //     ctx.lineTo(315, 150);
                //     ctx.lineTo(230, 200);
                //     ctx.lineTo(300, 263);
                //     ctx.lineTo(170, 233);
                //     ctx.lineTo(30, 263);
                //     ctx.lineTo(100, 200);
                //     ctx.closePath();
                //     ctx.fill();
                var canvas = document.getElementById("srow");
                var context = canvas.getContext("2d");

                //设置边框样式以及填充颜色   
                context.lineWidth = "2";
                //弧
                // arc(cx, cy, radius, start_angle, end_angle, direction); 
                context.fillStyle = 'red';

                context.beginPath();
                context.arc(40, 40, 30, 0, -1 * Math.PI);
                context.stroke();
                context.closePath();
            }
            window.addEventListener('load', scope.init, false);
        }
    }
});
// myApp.directive('brush', function() {
//     return {
//         restrict: 'E',
//         replace: true,
//         scope: {},
//         template: '<div style="display:inline-block;width:50%;background:#fff;padding:10px;">'+'<pre id="preId" class="brush: javascript;"> ' + '</pre>'+'</div>',
//         link: function(scope, element, attrs) {
//              document.getElementById('preId').innerHTML = element.context.innerHTML;
//         }
//     }
// })
//验证用户名是否存在
myApp.directive('ensureUnique', function($http) {
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, c) {
            scope.$watch(attrs.ngModel, function(n) {
                if (!n) return;
                $http({
                    method: 'POST',
                    url: 'http://g.cn',
                    data: {
                        field: attrs.ensureUnique,
                        value: scope.ngModel
                    }
                }).success(function(data) {
                    if (data.username == n) {
                        c.$setValidity('unique', data.isUnique);
                        console.log('存在此用户名');
                    }

                }).error(function(data) {
                    c.$setValidity('unique', false);
                })
            })
        }
    }
});
//失焦后显示验证信息
myApp.directive('ngFocus', [function() {
    var FOCUS_CLASS = 'ng-focused';
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$focused = false;
            element.bind('focus', function(evt) {
                element.addClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = true;
                });
            }).bind('blur', function(evt) {
                element.removeClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = false;
                });

            });
        }
    };

}]);
myApp.directive('errorMessage', ['$compile', function($compile) {
    return {
        restrict: 'A',
        scope: {
            title: '@'
        },
        require: 'ngModel',
        link: function(scope, element, attr, ngModel) {
            var parenNode = element.parent();
            parenNode.addClass("has-feedback");


            var subScope = scope.$new(true);
            subScope.errorsText = {
                required: "此项为必填",
                minlength:'最小长度为'+attr.minlength,
                maxlength:'最大长度为'+attr.maxlength,
            }

            subScope.hasError = function() {
                var re = (ngModel.$$parentForm.$submitted || ngModel.$dirty) && ngModel.$invalid;
                if (re) {
                    parenNode.addClass("has-error");
                } else {
                    parenNode.removeClass("has-error");
                }
                return re;
            }

            subScope.errors = function() {
                return ngModel.$error;
            }


            var errorElement = $compile(`
                <span   ng-if="hasError()"  class="glyphicon glyphicon-warning-sign form-control-feedback" ></span>
                <ul class="help-block" ng-if="hasError()">
                    <li ng-repeat="(error,wrong) in errors()" ng-bind="errorsText[error]">
                </ul>
                `)(subScope);

            element.after(errorElement)
        }
    };
}]);
