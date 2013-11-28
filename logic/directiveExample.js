/**
 * Created by eloy04685 on 11/20/13.
 */

var app = angular.module("directiveApp", [])

app.directive("addClass", function(){
    return function(scope, element){
        element.addClass("plain");
    }
})

app.directive("removeClass", function(){
    return function(scope, element){
        element.removeClass("removeMe");
    }
})

app.directive("makeClick", function(){
    return function(scope, element){
        element.bind("click", function(){
            scope.clicked = true;
        })
    }
})