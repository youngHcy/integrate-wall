'use strict';

import 'zepto';
import 'expose?cyberplayer!plugin/player/cyberplayer.js'
import Vue from 'vue';

export default {
    template: require('./video.tpl.html'),
    props: {
        fileUrl: {
            type: String,
            require: true
        }
    },
    ready () {
        cyberplayer('playercontainer').setup({
            width: '100%',
            height: '250',
            stretching: 'uniform',
            // backup file: 'http://gc6pn1qt8yzswiinafk.vod.e-web.com.cn/mda-ghdiv1x0g5sbjjah/mda-ghdiv1x0g5sbjjah.m3u8'
            file: this.fileUrl,
            //autostart: true,
            repeat: false,
            volume: 100,
            controls: true,
            ak: '010f860811cd4137ab994b27e5dde7f3'
        });
    }
}