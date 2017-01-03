myApp.controller('RouteCtl', function($scope, $rootScope, $location, $http) {
    //监听路由变换
    $scope.$on('$stateChangeSuccess', function() {

        //https://my.oschina.net/jack088/blog/479466
        //刷新浏览器，菜单栏也能切换。不要用location.hash或者其他，它是获取当前url而不是改变了的url
        // console.log($location.path());
        if ($location.path()) {
            var str = $location.path();
            var loc = new Array();
            loc = str.split('/');
            var name = loc[loc.length - 1];
            var flags = $('[ui-sref$=' + name + ']').find('a').hasClass('active');
            if (!flags) {
                $('[ui-sref$=' + name + ']').find('a').addClass('active');
                $('[ui-sref$=' + name + ']').siblings('li').find('a').removeClass('active');
            }
        }
    });
    //监听angularjs 渲染完成后
    $scope.$on('$viewContentLoaded', function() {
        //SyntaxHighlighter此插件必须在渲染成功后执行，插件执行前还未渲染完就无法起作用了。
        SyntaxHighlighter.defaults['quick-code'] = 'false';
        SyntaxHighlighter.defaults['html-script'] = 'true';
        SyntaxHighlighter.defaults['toolbar'] = 'false';
        SyntaxHighlighter.highlight('codes');
        $.material.init();
    });
    //给Model添加拦截过滤器,路由增加限制，实现用户登录状态判断
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

    });
});
myApp.controller('RouteListCtl', function($scope) {
    $scope.listBtn = [{
        id: 'one',
        type: 'btn-default',
        name: 'Default'
    }, {
        id: 'two',
        type: 'btn-primary',
        name: 'Primary'
    }, {
        id: 'three',
        type: 'btn-success',
        name: 'Success'
    }, {
        id: 'four',
        type: 'btn-info',
        name: 'Info'
    }, {
        id: 'five',
        type: 'btn-warning',
        name: 'Warning'
    }, {
        id: 'six',
        type: 'btn-danger',
        name: 'Danger'
    }, {
        id: 'seven',
        type: 'btn-link',
        name: 'Link'
    }];
    $scope.listTable = [
        { id: 'one', type: '基本', name: '' },
        { id: 'two', type: '条纹', name: 'table-striped' },
        { id: 'three', type: '边框', name: 'table-bordered' },
        { id: 'four', type: '悬停', name: 'table-hover' },
        { id: 'five', type: '精简', name: 'table-condensed' }
    ]
});
//----------------------------bootstrap字体---------------------------------------
myApp.controller('RouteFontCtrl', function($scope) {
    //字体
    $scope.listFont = ['asterisk', 'plus', 'euro', 'minus', 'cloud', 'envelope', 'pencil', 'glass', 'music',
        'search', 'heart', 'star', 'star-empty', 'user', 'film', 'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in',
        'zoom-out', 'off', 'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload',
        'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off', 'volume-down',
        'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print', 'camera', 'font', 'bold', 'italic',
        'text-height', 'text-width', 'align-left', 'align-center', 'align-right', 'align-justify', 'list', 'indent-left',
        'indent-right', 'facetime-video', 'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check',
        'move', 'step-backward', 'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward',
        'step-forward', 'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign',
        'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left',
        'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign',
        'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment',
        'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open'
    ]
    $scope.font2 = ['resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down',
        'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up',
        'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip',
        'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt',
        'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand',
        'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open'
    ];
    $scope.font3 = ['saved', 'import', 'export', 'send', 'disk', 'saved', 'floppy-remove', 'floppy-save', 'floppy-open',
        'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats',
        'sd-video', 'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1',
        'copyright-mark', 'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous'
    ];
    $scope.sizeChange = { fontSize: '20px', marginBottom: '16px' };
    $scope.changeshow = false;
    $scope.change = function(content) {
        // var code = document.getElementsByName("code");
        // // console.log(code);
        // for (var i = 0; i < code.length; i++) {
        //     angular.element(code[i]).on("click", function(event) {
        //         debugger;
        //         alert(event.target.innerHTML);
        //     });
        // }
        $scope.changeshow = true;
        $scope.mast = angular.copy(content);
    }

});
//------------------------------登录界面------------------------------------------
myApp.controller('loginControl', function($rootScope, $scope, $state, $http, $cookieStore, CkContentService) {
    //用户
    $scope.user = {
        'username': '',
        'password': ''
    };
    //是否选中记住账户
    $scope.isSelected = false;
    if ($cookieStore.get("person")) {
        var person = $cookieStore.get("person");
        $scope.hasLogined = true;
        $scope.user.username = person.name;
    } else if ($rootScope.username) {
        $scope.user.username = $rootScope.username;
        $scope.hasLogined = true;
    } else {
        $scope.hasLogined = false;
    }
    $scope.logIn = function() {
        // if(!$scope.form.$invalid){
        //     alert("验证通过")
        // }else{
        //     $scope.form.$setSubmitted(true);
        // }
        // $http({
        //     method: 'POST',
        //     url: 'http://localhost:8080/api/users',
        //     // data: {
        //     //     username: $scope.user.username,
        //     //     password: $scope.user.password
        //     // }
        // }).success(function(data) {
        //     if (data[0].username == $scope.user.username && data[0].userpwd == $scope.user.password) {
        //         $rootScope.username = $scope.user.username;
        //         $scope.hasLogined = true;
        //         if ($scope.isSelected) {
        //             $cookieStore.put("person", { name: $scope.user.username, pass: $scope.user.password });
        //         }
        //         $state.go('angular.config');
        //     } else {
        //         console.log('用户名或者密码不对');
        //     }

        // }).error(function(data) {
        //     console.log('登录失败');
        // })
        if ("hyacinthbaby" == $scope.user.username && "123qwe123" == $scope.user.password) {
            $rootScope.username = $scope.user.username;
            $scope.hasLogined = true;
            if ($scope.isSelected) {
                $cookieStore.put("person", { name: $scope.user.username, pass: $scope.user.password });
            }
        } else {
            alert("数据库服务还未启动wo");
        }
    };
    $scope.logout = function() {
        $scope.hasLogined = false;
        $scope.user = {
            'username': $scope.user.username,
            'password': $scope.user.password
        };
        $cookieStore.put("person", '');
    }

    $scope.getTextAreaValue = function() {
        return CKEDITOR.instances.ck_textarea1.getData(); //CKEDITOR.instances.控件ID.getData();
        // angular.element(document.getElementById('asign_ck')).html(content); 
    }

    $scope.getDataFromApi = function() {
        var content_1 = $scope.getTextAreaValue();
        var article = {
            articlename: 'mongodb的探究', 
            authorname: 'hyacinthbaby', 
            articlecontent: content_1, 
            articledate: '2016-11-30'
        }
        var promise_1 = CkContentService.postArtical(article);
        promise_1.then(function(success) {
            alert('成功');
        });
    }
    $scope.getArticleContent = function() {
        var id = '58590124ebe8930448d1391a';
        var promise_2 = CkContentService.getArtical(id);
        promise_2.then(function(success) {
            
        }); 
    }
    $scope.putArticleContent = function() {
        var content = {
            id:'586b3acbeecdf633d0640f0b',
            articlecontent:'sssssssssssss2017'
        }
        CkContentService.putArtical(content);
    }
});
//------------------------------angular配置界面------------------------------------------
myApp.controller('configControl', function($scope) {
    $scope.testModel = 'ng-model';
});

//-----------------------------javascript知识----------------------------------------------
myApp.controller('summaryControl', function($scope, $location, $anchorScroll) {
    //锚点移动
    $scope.gotoAnchor = function(id) {
        switch (id) {
            case '13section':
                $location.hash('13section');
                break;
            case '20section':
                $location.hash('20section');
                break;
            case '21section1':
                $location.hash('21section1');
                break;
            case '21section2':
                $location.hash('21section2');
                break;
            case '21section3':
                $location.hash('21section3');
                break;
            case '21section4':
                $location.hash('21section4');
                break;
            case '21section5':
                $location.hash('21section5');
                break;
            case '21section6':
                $location.hash('21section6');
                break;
        };
        $anchorScroll();
    };
});
