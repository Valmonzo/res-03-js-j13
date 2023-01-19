import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { App } from "./components/App.js";

window.addEventListener("DOMContentLoaded", function(){
    createApp(App).mount('#app');
});