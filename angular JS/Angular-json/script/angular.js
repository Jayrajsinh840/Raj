var app= angular.module("myapp",[]); 

app.factory("mycacheService",function($cacheFactory)
{
	return $cacheFactory("mycacheObject",{capacity:3});
});