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
                minlength: '最小长度为' + attr.minlength,
                maxlength: '最大长度为' + attr.maxlength,
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
//灰太狼canvas绘制
myApp.directive('hui', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: '<canvas id="hui" style="position:absolute;" width="200" height="300">' + 'Your browser does not support the canvas element .' + '</canvas>',
        link: function(scope, element, attrs) {
            scope.funLoad = function() {
                var cxt = document.getElementById('hui').getContext('2d');
                //缩小50%
                cxt.scale(0.5, 0.5);
                cxt.beginPath();
                cxt.lineWidth = 2;
                cxt.strokeStyle = 'green';
                cxt.moveTo(33, 43);
                //贝塞尔2次曲线
                cxt.quadraticCurveTo(55, 40, 124, 73);
                cxt.moveTo(33, 43);
                cxt.lineTo(68, 140);
                cxt.moveTo(33, 43);
                cxt.quadraticCurveTo(73, 92, 89, 130);
                cxt.quadraticCurveTo(75, 127, 81, 136);
                cxt.lineTo(73, 136);
                cxt.lineTo(74, 139);
                cxt.quadraticCurveTo(36, 164, 24, 213);
                //贝塞尔三次曲线
                cxt.bezierCurveTo(52, 215, 49, 223, 41, 233);
                cxt.quadraticCurveTo(61, 235, 76, 243);
                cxt.bezierCurveTo(88, 350, 290, 350, 309, 252);
                cxt.quadraticCurveTo(320, 239, 353, 234);
                cxt.bezierCurveTo(338, 223, 354, 215, 371, 214);
                cxt.quadraticCurveTo(360, 169, 325, 144);
                cxt.lineTo(333, 121);
                cxt.quadraticCurveTo(317, 100, 341, 97);
                cxt.lineTo(361, 43);
                cxt.quadraticCurveTo(307, 48, 266, 75);
                cxt.moveTo(361, 43);
                cxt.quadraticCurveTo(332, 72, 304, 133);
                cxt.quadraticCurveTo(318, 127, 313, 134);
                cxt.quadraticCurveTo(323, 132, 318, 140);
                cxt.quadraticCurveTo(324, 136, 325, 144)
                cxt.moveTo(266, 75);
                cxt.quadraticCurveTo(265, 90, 243, 94);
                cxt.lineTo(133, 112);
                cxt.quadraticCurveTo(90, 116, 107, 91);
                cxt.quadraticCurveTo(147, 29, 223, 27);
                cxt.quadraticCurveTo(272, 38, 266, 75);
                cxt.moveTo(107, 91);
                cxt.quadraticCurveTo(111, 110, 144, 100);
                cxt.lineTo(244, 80);
                cxt.quadraticCurveTo(264, 76, 267, 61);
                cxt.moveTo(196, 30);
                cxt.lineTo(176, 51);
                cxt.quadraticCurveTo(224, 43, 240, 66);
                cxt.quadraticCurveTo(252, 55, 264, 53);
                cxt.moveTo(186, 38);
                cxt.lineTo(198, 37);
                cxt.moveTo(176, 43);
                cxt.lineTo(190, 43);
                cxt.moveTo(186, 53);
                cxt.lineTo(194, 45);
                cxt.moveTo(200, 45);
                cxt.lineTo(196, 54);
                cxt.moveTo(210, 47);
                cxt.lineTo(205, 54);
                cxt.moveTo(219, 49);
                cxt.lineTo(213, 54);
                cxt.moveTo(229, 50);
                cxt.lineTo(222, 59);
                cxt.moveTo(237, 52);
                cxt.lineTo(232, 65);
                cxt.moveTo(244, 56);
                cxt.lineTo(250, 66);
                cxt.moveTo(252, 52);
                cxt.lineTo(261, 62);
                cxt.stroke();
                cxt.beginPath();
                cxt.lineWidth = 10;
                cxt.moveTo(99, 123);
                cxt.lineTo(169, 164);
                cxt.moveTo(220, 172);
                cxt.lineTo(291, 130);
                cxt.stroke();
                cxt.beginPath();
                cxt.lineWidth = 2;
                cxt.moveTo(88, 168);
                cxt.lineTo(174, 188);
                cxt.moveTo(212, 180);
                cxt.lineTo(297, 199);
                cxt.moveTo(87, 173);
                cxt.lineTo(126, 286);
                cxt.moveTo(80, 204);
                cxt.lineTo(108, 191);
                cxt.moveTo(91, 220);
                cxt.lineTo(111, 211);
                cxt.moveTo(96, 236);
                cxt.lineTo(114, 226);
                cxt.moveTo(106, 248);
                cxt.lineTo(119, 243);
                cxt.moveTo(106, 267);
                cxt.lineTo(124, 259);
                cxt.moveTo(117, 276);
                cxt.lineTo(126, 272);
                cxt.moveTo(106, 171);
                cxt.bezierCurveTo(109, 200, 142, 204, 159, 185);
                cxt.moveTo(230, 184);
                cxt.bezierCurveTo(233, 210, 267, 218, 284, 197);
                cxt.moveTo(123, 253);
                cxt.quadraticCurveTo(193, 275, 272, 253);
                cxt.bezierCurveTo(260, 300, 120, 290, 123, 253);
                cxt.stroke();
                cxt.beginPath();
                cxt.lineWidth = 1;
                cxt.moveTo(125, 260);
                cxt.lineTo(134, 263);
                cxt.lineTo(136, 259);
                cxt.lineTo(139, 265);
                cxt.lineTo(155, 270);
                cxt.moveTo(237, 270);
                cxt.lineTo(252, 266);
                cxt.lineTo(254, 258);
                cxt.lineTo(258, 264);
                cxt.lineTo(268, 261);
                cxt.stroke();
                cxt.beginPath();
                cxt.lineWidth = 2;
                cxt.fillStyle = 'green';
                cxt.save();
                cxt.translate(133, 179);
                cxt.rotate(Math.PI * 2 / 20);
                cxt.arc(0, 0, 5, 3, Math.PI * 2, true);
                cxt.fill();
                cxt.restore();
                cxt.beginPath();
                cxt.save();
                cxt.translate(254, 190);
                cxt.rotate(Math.PI * 2 / 20);
                cxt.arc(0, 0, 5, 3, Math.PI * 2, true);
                cxt.fill();
                cxt.restore();
                cxt.beginPath();
                cxt.moveTo(190, 212);
                cxt.bezierCurveTo(150, 214, 150, 246, 190, 246);
                cxt.bezierCurveTo(230, 246, 230, 214, 190, 212);
                cxt.fill();
                cxt.beginPath();
                cxt.fillStyle = '#fff';
                cxt.moveTo(162, 224);
                cxt.quadraticCurveTo(171, 212, 180, 224);
                cxt.quadraticCurveTo(171, 234, 162, 224);
                cxt.fill();
                cxt.beginPath();
                cxt.moveTo(119, 306);
                cxt.quadraticCurveTo(132, 334, 205, 363);
                cxt.quadraticCurveTo(256, 334, 264, 310);
                cxt.moveTo(110, 300);
                cxt.quadraticCurveTo(86, 334, 81, 370);
                cxt.quadraticCurveTo(67, 371, 66, 394);
                cxt.bezierCurveTo(60, 418, 71, 427, 76, 421);
                cxt.moveTo(76, 399);
                cxt.bezierCurveTo(70, 419, 85, 434, 89, 421);
                cxt.quadraticCurveTo(79, 414, 85, 399);
                cxt.moveTo(89, 421);
                cxt.bezierCurveTo(98, 430, 102, 430, 99, 400);
                cxt.moveTo(101, 410);
                cxt.quadraticCurveTo(119, 419, 112, 400);
                cxt.bezierCurveTo(105, 388, 114, 378, 101, 371);
                cxt.moveTo(100, 376);
                cxt.quadraticCurveTo(109, 324, 126, 315);
                cxt.moveTo(280, 299);
                cxt.quadraticCurveTo(310, 340, 312, 371);
                cxt.quadraticCurveTo(326, 376, 326, 398);
                cxt.bezierCurveTo(330, 415, 326, 426, 318, 420);
                cxt.moveTo(317, 399);
                cxt.bezierCurveTo(323, 419, 313, 433, 305, 422);
                cxt.moveTo(309, 400);
                cxt.bezierCurveTo(310, 425, 291, 442, 292, 403);
                cxt.moveTo(292, 410);
                cxt.bezierCurveTo(284, 416, 274, 413, 282, 397);
                cxt.quadraticCurveTo(280, 375, 293, 371);
                cxt.moveTo(294, 376);
                cxt.quadraticCurveTo(289, 338, 267, 314);
                cxt.stroke();
                cxt.beginPath();
                cxt.lineWidth = 3;
                cxt.moveTo(127, 319);
                cxt.bezierCurveTo(90, 470, 310, 460, 262, 317);
                cxt.moveTo(188, 389);
                cxt.lineTo(197, 399);
                cxt.moveTo(190, 402);
                cxt.lineTo(195, 391);
                cxt.stroke();
                cxt.beginPath();
                cxt.save();
                cxt.translate(194, 396);
                cxt.arc(0, 0, 10, 1, Math.PI * 2, false);
                cxt.restore();
                cxt.stroke();
                cxt.beginPath();
                cxt.lineWidth = 2;
                cxt.moveTo(144, 406);
                cxt.lineTo(127, 434);
                cxt.lineTo(136, 449);
                cxt.moveTo(152, 417);
                cxt.lineTo(142, 434);
                cxt.moveTo(139, 431);
                cxt.lineTo(151, 450);
                cxt.bezierCurveTo(110, 441, 90, 464, 105, 476);
                cxt.lineTo(156, 476);
                cxt.bezierCurveTo(175, 473, 170, 459, 151, 450);
                cxt.moveTo(126, 455);
                cxt.quadraticCurveTo(106, 456, 108, 474);
                cxt.moveTo(139, 457);
                cxt.quadraticCurveTo(121, 459, 125, 474);
                cxt.moveTo(244, 416);
                cxt.lineTo(252, 433);
                cxt.moveTo(255, 430);
                cxt.lineTo(245, 450);
                cxt.moveTo(254, 406);
                cxt.lineTo(269, 433);
                cxt.lineTo(261, 448);
                cxt.bezierCurveTo(218, 456, 220, 472, 234, 475);
                cxt.lineTo(289, 475);
                cxt.bezierCurveTo(304, 467, 302, 452, 261, 448);
                cxt.moveTo(255, 457);
                cxt.quadraticCurveTo(275, 461, 268, 474);
                cxt.moveTo(270, 455);
                cxt.quadraticCurveTo(291, 462, 285, 474);
                cxt.moveTo(198, 428);
                cxt.quadraticCurveTo(203, 453, 228, 458);
                cxt.moveTo(236, 453);
                cxt.bezierCurveTo(213, 440, 214, 437, 248, 448);
                cxt.bezierCurveTo(230, 430, 230, 428, 251, 433);
                cxt.moveTo(275, 450);
                cxt.quadraticCurveTo(287, 432, 287, 416);
                cxt.quadraticCurveTo(270, 420, 255, 412);
                cxt.stroke();
            }
            window.addEventListener('load', scope.funLoad, false);
        }
    }
});
//如果用angularload动态加载script，下载https://github.com/urish/angular-load插件，导入模块
//angularLoad.loadScript('./framefork/ckeditor/ckeditor.js').then(function() 
//参考http://www.cnblogs.com/zsmhhfy/p/3835820.html博客
//富文本编辑器
myApp.directive('ckeditor', function() {
    return {
        require : '?ngModel',
        link : function(scope, element, attrs, ngModel) {
            var ckeditor = CKEDITOR.replace(element[0], {
                //配置样式
                // skin: 'kama',
                language: 'zh-cn'
            });
            if (!ngModel) {
                return;
            }
            ckeditor.on('instanceReady', function() {
                ckeditor.setData(ngModel.$viewValue);
            });
            ckeditor.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ckeditor.getData());
                });
            });
            ngModel.$render = function(value) {
                ckeditor.setData(ngModel.$viewValue);
            };
        }
    };
});
