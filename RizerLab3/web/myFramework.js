/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MakeAlphaFramework() {
    
    var app = {};
    
    app.$ = function(ele) {
        return document.getElementById(ele);
    };

    app.MakeAlpha = function(params) {
        params.id = params.id || "alpha";
        params.count = params.count || 0;
        params.direction = new Boolean(params.direction); // true is ++, false is --
        params.clickable = params.clickable || false;
        
        console.log(params.id + " " + params.direction);
        
        var eleRef = app.$(params.id);
        var count = params.count;
        var direction = params.direction;
        var alphabhet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var letterCase = true;
        
        function display() {
            if (letterCase === true) {
                eleRef.innerHTML = alphabhet[count];
            }
            else {
                eleRef.innerHTML = upper[count];
            }
        };
        
        this.iterate = function () {
            if (direction === true) {
                if (count === 25) {
                    count = 0;
                }
                else {
                    count++;
                }
            }
            else {
                if (count === 0) {
                    count = 25;
                }
                else {
                    count--;
                }
            }
            display();
        };
        
        this.capitalize = function() {
            console.log("capitalize");
            letterCase = !letterCase;
            display();
        };
        
        this.switchDirection = function() {
            direction = !direction;
            display();
        }
        
        eleRef.onclick = this.iterate;
    };
    
    return app;
    
}