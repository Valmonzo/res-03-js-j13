let Nav = {
    props: [
        "list"
    ],

    template: `
        <nav>
		    <ul>
		    <li  v-for="value in list"> {{ value.text }} </li>
	    	</ul>
		</nav>
	`
};

export { Nav };
