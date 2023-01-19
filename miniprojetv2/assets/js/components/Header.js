import { Main } from "./Main.js";

let Header = {
    data() {
        hide : false
    },
    
    components: {
      Main  
    },
    

    methods : {
        hideAside() {
            if(hide === false) {
                hide = true;
            }
            else {
                hide = false
            }
        }
    },

    template: `
    <header>
            <section class="border-right">
                <button id="side-menu-btn" @click="this.hideAside()">
                    <span class="bi-chevron-bar-left"></span>
                </button>
                <figure>
                    <img src="https://res03.sites.3wa.io/assets/files/js/j5/demo/assets/logo.svg" alt="Logo représentant une rosace bleu et blanche">
                </figure>
            </section>
            <nav></nav>
        </header>`

}