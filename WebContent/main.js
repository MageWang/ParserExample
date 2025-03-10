
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "Game2",
    "width": 300,
    "height": 200,
    "type": Phaser.AUTO,
    "backgroundColor": "#000",
    "parent": "game-container",
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    },
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	}
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
	}

	create() {
		this.scene.start("Scene1");
	}

}
