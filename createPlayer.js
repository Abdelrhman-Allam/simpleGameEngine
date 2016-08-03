var pad = new Player('id#name', 
{
	init: {
		x: 0,
		y: 0,
		health: 100,
		power: 20,
		special: new bouns()
	},
	draw: new box(100,300, '#cccfff'), 
	event: {
		lisent: function (event, player){
			if(event == input.UPKEY)
				player.y -= player.acclerateY;
			else if (event == input.DOWNKEY) 
				player.y += player.acclerateY;
			
			if(event == input.RIGHTKEY)
				player.x -= player.acclerateY;
			else if (event == input.LEFTKEY) 
				player.y += player.acclerateY;
		},
		hit: {
			test: function (entity, player, x, y, time){
				if (entity.id  == "id#ball") {
					entity.acclerateY = -entity.acclerateY;
					entity.acclerateX = -entity.acclerateX;

					if (player.special) {

					}
				}
			}
		}
	}
});