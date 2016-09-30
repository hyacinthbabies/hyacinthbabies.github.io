routeApp.controller('RouteListCtl', function($scope) {
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
routeApp.controller('RouteDropdownCtl', function($scope) {});
routeApp.controller('RouteFontCtrl',function($scope){
    //字体
    $scope.listFont=['asterisk','plus','euro','minus','cloud','envelope','pencil','glass','music',
    'search','heart','star','star-empty','user','film','th-large','th','th-list','ok','remove','zoom-in',
    'zoom-out','off','signal','cog','trash','home','file','time','road','download-alt','download','upload',
    'inbox','play-circle','repeat','refresh','list-alt','lock','flag','headphones','volume-off','volume-down',
    'volume-up','qrcode','barcode','tag','tags','book','bookmark','print','camera','font','bold','italic',
    'text-height','text-width','align-left','align-center','align-right','align-justify','list','indent-left',
    'indent-right','facetime-video','picture','map-marker','adjust','tint','edit','share','check',
    'move','step-backward','fast-backward','backward','play','pause','stop','forward','fast-forward',
    'step-forward','eject','chevron-left','chevron-right','plus-sign','minus-sign','remove-sign','ok-sign',
    'question-sign','info-sign','screenshot','remove-circle','ok-circle','ban-circle','arrow-left',
    'arrow-right','arrow-up','arrow-down','share-alt','resize-full','resize-small','exclamation-sign',
    'gift','leaf','fire','eye-open','eye-close','warning-sign','plane','calendar','random','comment',
    'magnet','chevron-up','chevron-down','retweet','shopping-cart','folder-close','folder-open',
    'resize-vertical','resize-horizontal','hdd','bullhorn','bell','certificate','thumbs-up','thumbs-down',
    'hand-right','hand-left','hand-up','hand-down','circle-arrow-right','circle-arrow-left','circle-arrow-up',
    'circle-arrow-down','globe','wrench','tasks','filter','briefcase','fullscreen','dashboard','paperclip',
    'heart-empty','link','phone','pushpin','usd','gbp','sort','sort-by-alphabet','sort-by-alphabet-alt',
    'sort-by-order','sort-by-order-alt','sort-by-attributes','sort-by-attributes-alt','unchecked','expand',
    'collapse-down','collapse-up','log-in','flash','log-out','new-window','record','save','open',
    'saved','import','export','send','disk','saved','floppy-remove','floppy-save','floppy-open',
    'credit-card','transfer','cutlery','header','compressed','earphone','phone-alt','tower','stats',
    'sd-video','hd-video','subtitles','sound-stereo','sound-dolby','sound-5-1','sound-6-1','sound-7-1',
    'copyright-mark','registration-mark','cloud-download','cloud-upload','tree-conifer','tree-deciduous'];
    $scope.sizeChange={fontSize:'20px',marginBottom:'12px'};
})
