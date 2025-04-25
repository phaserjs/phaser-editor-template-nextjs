import { Scene } from 'phaser';

export default class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.pack('pack', 'assets/boot-asset-pack.json');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
