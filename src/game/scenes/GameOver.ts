// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { EventBus } from '../EventBus';
/* END-USER-IMPORTS */

export default class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(512, 384, "background");
		background.alpha = 0.5;
		background.alphaTopLeft = 0.5;
		background.alphaTopRight = 0.5;
		background.alphaBottomLeft = 0.5;
		background.alphaBottomRight = 0.5;

		// textgameover
		const textgameover = this.add.text(512, 384, "", {});
		textgameover.setOrigin(0.5, 0.5);
		textgameover.text = "Game Over";
		textgameover.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Arial Black", "fontSize": "64px", "stroke": "#000000", "strokeThickness":8});

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

        this.cameras.main.setBackgroundColor(0xff0000);

        EventBus.emit('current-scene-ready', this);

	}

    changeScene ()
    {
        this.scene.start('MainMenu');
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
