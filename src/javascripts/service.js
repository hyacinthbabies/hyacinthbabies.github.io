myApp.factory('CkContentService', function($http, $q) {
    return {
        postArtical: function(content){
            var url = "http://localhost:8080/api/postContent";
            var deferred = $q.defer();
            $http.post(url, content).then(function success(respData){
                var contents = respData.data;
                deferred.resolve(contents);
            },function error(reason){
                deferred.reject(reason);
            });
            return deferred.promise;
        },
        getUser:function(){
            var url = "http://localhost:8080/api/user";
            var deferred = $q.defer();
            $http.get(url).then(function success(respData){
                var contents = respData.data;
                deferred.resolve(contents);
            },function error(reason){
                deferred.reject(reason);
            });
            return deferred.promise;
        },
        getArtical:function(userId){
            var url = "http://localhost:8080/api/queryContent/"+userId;
            var deferred = $q.defer();
            $http.get(url).then(function success(respData){
                console.log(respData);
                var contents = respData.data;
                deferred.resolve(contents);
            },function error(reason){
                deferred.reject(reason);
            });
            return deferred.promise;
        },
        putArtical:function(content){
            console.log(content);
            var url = "http://localhost:8080/api/updateContent";
            var deferred = $q.defer();
            $http.put(url,content).then(function success(respData){
                console.log(respData);
                var contents = respData.data;
                deferred.resolve(contents);
            },function error(reason){
                deferred.reject(reason);
            });
            return deferred.promise;
        }
    }
});
