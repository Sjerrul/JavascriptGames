﻿var KEY = { ENTER: 13, ESC: 27, SPACE: 32, PAGEUP: 33, PAGEDOWN: 34, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

Input = function (game, render) {
    this.render = render; //Input probably needs renderer object when clicks are involved
    this.render.canvas.addEventListener('click', this.handleClick.bind(this), false); //Add click-listener to the canvas, and set the this-scope to the Input Object (http://ryanmorr.com/understanding-scope-and-context-in-javascript/)

    document.addEventListener('keydown', this.onKey.bind(this, false), false);
    document.addEventListener('keyup', this.onKey.bind(this, true), false);


    //The state object holding relevant input infornation
    this.inputState = {
        //... Input-State information here

        reset: function () {
            //Reset the state information
        }
    }
}

Input.prototype = {
    handleClick: function (e) {
        /*
            Update InputState
            
            Interesting:
            e.pageX: X-coordinate of the page
            e.pageY: Y-coordinate of the page

            Use Canvas.offset.left and Canvas.offset.top to get coordinates on canvas
            e.pageX - this.render.canvas.offset.left;
            e.pageY - this.render.canvas.offset.top;
        */
    },

    onKey: function (up, ev) {
        switch (ev.keyCode) {
            case KEY.LEFT:  /* Update inputState*/ return false;
            case KEY.RIGHT: /* Update inputState*/ return false;
            case KEY.SPACE: /* Update inputState*/ return false;
        }
    }
}