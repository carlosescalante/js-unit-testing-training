/**
 * Created by eloy04685 on 11/20/13.
 */

describe("Directive sum", function(){
    var element;
    var $scope;
    beforeEach(module("directiveApp"))
    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope;
        element = angular.element("<div class='removeMe' add-class remove-class make-click>{{ 2 + 2 }}</div>");
        $compile(element)($rootScope)
    }))
    it("should equal 4", function(){
        $scope.$digest();
        expect(element.html()).toBe("4");
    })

    describe("addClass", function(){
        it("deberia agregar la clase plain", function(){
            expect(element.hasClass("plain")).toBe(true);
        })
    })

    describe("removeClass", function(){
        it("deberia quitar la clase removeMe", function(){
            expect(element.hasClass("removeMe")).toBe(false);
        })
    })

    describe("makeClick", function(){
        it("deberia hacer click al elemento", function(){
            browserTrigger(element, "click");
            expect(element.scope().clicked).toBe(true);
        })
    })

})