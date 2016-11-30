angular.module("introToAngular", []); // creating a module named introToAngular with no dependencies

angular
    .module("introToAngular")
    .controller("introController", intro)

function intro () {
    var introCtrl = this;
    
    var header = true;
    var list = true;
    
    introCtrl.btnClick = function() {
        console.log("The button works!!!");
        introCtrl.header = !introCtrl.header;
        console.log("introCtrl.header = " + introCtrl.header) 
    }
    
    introCtrl.showList = function() {
        introCtrl.list = !introCtrl.list;
    }
    
    console.log("controller works");
}