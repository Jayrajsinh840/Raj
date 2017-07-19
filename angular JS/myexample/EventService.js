app.factory("eventservice",function($resource){
    return {
           getEvent : function()
           {
           return $resource('/myexample/files/:id', {id:'@id'}).get({id:'guitardata.json'});
           }
    };
});