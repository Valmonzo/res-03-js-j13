import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";

let App = {
    data() {

    },
    components: {
        Header,
        Main,
        Footer
    },
    template: `
    <Header />
    <Main />
    <Footer />
    `
};

export { App };
