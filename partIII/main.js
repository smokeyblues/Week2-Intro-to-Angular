angular.module("Part3", []);

angular.module('Part3')
    .controller("Part3Controller", part3);


function part3 () {
    console.log("Part3 controller is working");
    
    var part3ctrl = this;
    
    var popUp = true;
    
    part3ctrl.myPopUp = function() {
        console.log("Button works!!!")
        
        popUp = !popUp;
    }
}

