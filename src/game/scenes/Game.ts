/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { EventBus } from '../EventBus';
/* END-USER-IMPORTS */

export default class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(512, 384, "background");
		background.alpha = 0.5;

		// text
		const text = this.add.text(513, 384, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Make something fun!\nand share it with us:\nsupport@phaser.io";
		text.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Arial Black", "fontSize": "38px", "stroke": "#000000", "strokeThickness":8});

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

        this.editorCreate();

        this.cameras.main.setBackgroundColor(0x00ff00);

        EventBus.emit('current-scene-ready', this);

	}

    changeScene ()
    {
        this.scene.start('GameOver');
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
