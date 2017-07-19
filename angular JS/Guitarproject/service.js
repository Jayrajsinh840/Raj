var app=angular.module("myapp");
app.factory("eventservice",function($resource){
    return {
           getEvent : function()
           {
           return $resource('/Guitarproject/files/:id', {id:'@id'}).get({id:'guitardata.json'});
           }
    };
});