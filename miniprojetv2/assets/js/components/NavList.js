let NavList = {
    data() {
        return {
        open : false
        }
    },

    props: [
        "title",
        "links",
    ],

    methods: {

        showLi() {
            if(this.open === true) {
                this.open = false;
            }
            else {
                this.open = true;
            }
        }
    },
    template: `
    <nav>
        <h2 @click ="this.showLi()">{{ title }}<span aria-hidden="true" class="bi-caret-down"></span></h2>
        <ul v-if="this.open === true" class="show">
            <template v-for="link in links">
                <li>{{ link }}</li>
            </template>
        </ul>
        <ul v-else class=""></ul>
    </nav>
    `
};

export { NavList };
