cc.Class({
    extends: cc.Component,

    properties: {
        bgs: {
            default: [],
            type: [cc.SpriteFrame]
        },

        // 暂停按钮
        btnPause: {
            default: null,
            type: cc.Node
        },

        // 继续按钮
        btnPlay: {
            default: null,
            type: cc.Node
        },

        // 显示分数的RichText
        scoreText: {
            default: null,
            type: cc.Node,
        },

        // 记录钻石数目的结点
        diamondText: {
            default: null,
            type: cc.Node
        },

        // 按钮点击音效
        audioClick: {
            default: null,
            type: cc.AudioClip
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.loadRandomBg();
        this.addBtnEvents();
    },

    loadRandomBg () {
        // 加载一张随机的背景图片
        let index = parseInt(Math.random() * 4);
        
        this.node.getChildByName('background').getComponent(cc.Sprite).spriteFrame = this.bgs[index];
    },

    addBtnEvents () {
        this.btnPause.on('touchend', function(event) {
            cc.audioEngine.playEffect(this.audioClick, false, 1);
            this.btnPause.active = false;
            this.btnPlay.active = true;
            this.gamePaused = true;
            cc.director.pause();
        }, this);

        this.btnPlay.on('touchend', function(event) {
            cc.audioEngine.playEffect(this.audioClick, false, 1);
            this.btnPlay.active = false;
            this.btnPause.active = true;
            this.gamePaused = false;
            cc.director.resume();
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
