import { NavList } from "./NavList.js";

let Aside = {
    data() {
        return {
            navList: [{
                    title: "Utilisateurs",
                    links: [
                        "Liste des utilisateurs",
                        "Ajouter un utilisateur",
                        "Statistiques utilisateurs"
                    ]
                },
                {
                    title: "Produits",
                    links: [
                        "Liste des produits",
                        "Ajouter un produit",
                        "Statistiques des produits"
                    ]
                },
                {
                    title: "Catégories",
                    links: [
                        "Liste des catégories de produits",
                        "Ajouter une catégorie de produits"
                    ]
                }
            ]
        }

    },

    components: {
        NavList
    },

    template:
    `
    <aside>
        <NavList v-for="navItem in navList" :title="navItem.title" :links="navItem.links"/>
    </aside>
    `

}

export { Aside };