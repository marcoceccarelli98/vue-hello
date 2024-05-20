'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Hello Vue!',
            titleStyle: 'titleClass',
            image: './img/VueJs.svg',
            imgStyle: 'imgClass',
        }
    }
}).mount('#app');