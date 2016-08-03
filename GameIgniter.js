"use strict";

	// main namespace
	var GameIgniter = {}


	// input singleton class 
   GameIgniter.InputManager = Class.extend({
       bindings: {},
       actions: {},
       mouse: {
          x:0,
          y: 0
      },

      init: function (canvas){
          this.bind(87, 'move-up');  this.bind(65, 'move-left'); this.bind(83, 'move-down'); this.bind(68, 'move-right');
          canvas.addEventListener('mousemove', this.onMouseMove);
          canvas.addEventListener('keydown', this.onKeyDown);
          canvas.addEventListener('keyup', this.onKeyUp); 
      },

      bind: function (key, action){
          this.bindings[key] = action;
      },

      onMouseMove: function (event) {

          GameIgniter.InputManager.mouse.x = event.clientX;
          GameIgniter.InputManager.mouse.y = event.clientY;
      },

      onKeyDown: function (event) {
          GameIgniter.InputManager.keyState(event, true);
      },

      onKeyUp: function (event) {
          GameIgniter.InputManager.keyState(event, false);
      },

      keyState:function (event, status) {

          action = this.bindings[event.keyId];
          if (action) {
             this.actions[action] = status;
         }
     }
 });

   GameIgniter.ScenesManager = Class.extend({
    scenes: [],
    currentScene: null,
    currentIndex: 0,

    addScene: function(name, scene){
        this.scenes[] = {name: name, scene: scene};
    },

    setCurrentScene: function (name){
        currentScene = this.scenes[name];
    },

    getCurrentScene:  function (){
        return currentScene;
    }

   });

   GameIgniter.SoundsManager = Class.extend({});
   GameIgniter.SpritsManager = Class.extend({});
   GameIgniter.FontsManager = Class.extend({
    draw: function(text){
        GameIgniter.ctx.font = "48px serif";
        GameIgniter.ctx.textBaseline = "hanging";
        GameIgniter.ctx.strokeText(text, 0, 100);
    }
   });
   GameIgniter.AssetsManager = Class.extend({});	 

   GameIgniter.BaseScene = Class.extend({


      onStart: function(){

      },

      onExit: function(){

      },

      start: function(){

      }

      loop: function(){

      },

      exit: function(){

      }
  });

   /* Base Entity Class that all entity inherted of */
   GameIgniter.BaseEntity = Class.extend({
      pos: {
         x:0,
         y:0,
         z:0,
     },

     update: function (time){
     },

     draw: function(ctx){
     }
 });
   /* */

   /* Enginee core class that up and run */
   GameIgniter.Core = Class.extend({

    canvas: null,
    
    width: 400,
    height: 400,

    ctx: null,

     scenesManager: null,
     inputsManager: null,
     soundsManager: null,
     spritesManager: null,
     fontsManager: null,
     asstesManager: null,
     cameraManager: null,
     physicsManager: null,

     init: function(){
        this.canvas = document.getElementById('gamecanvas');
        this.ctx = document.getElementById('gamecanvas').getContext('2d');
     }

     loop: function(){
        
     }
 });




   var input = new Input(canvas);
