'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Hello Vue!',
            titleStyle: 'titleClass',
        }
    }
}).mount('#app');