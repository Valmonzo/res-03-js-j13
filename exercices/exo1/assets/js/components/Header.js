import { Nav } from "./Nav.js"

let Header = {
    data() {
    return {
            li: [{
                    text: "Accueil",
                },
                {
                    text: "A propos",
                },
                {
                    text: "Contact"
                }
            ],

        }
    },

    components: {
        Nav
    },

    template: `
		<header>
		<Nav :list="this.li" />
		</header>
	`
};


export { Header };
