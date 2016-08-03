var BaseEntity = Class.extend({
    pos: {x:0,y:0},
    size: {x:0,y:0},
    hsize:{w:0, h:0},
    zIndex:0,
    _killed: false,
    currentSpriteName:null,
    // overloaded by subclasses
    update: function () {},
    
    // draw for rendering an entity
    draw: function(ctx){
        if(this.currentSpriteName){
            drawSprite(this.currentSpriteName,
            this.pos.x.round() - this.hsize.w,
            this.pos.y.round() - this.hsize.h);
        }
    }
});