// Define data model for Menu page

const main_menu_items =
[
    {
        title: "Grilled Herb Chicekn",
        description: "Juicy grilled chicken breast marinated in fresh herbs and served with a lemon butter sauce.",
        price: "$18.99"
    },
    {
        title: "Steak Fries",
        description: "Tender sirloin steak cooked to perfection, paired with crispy seasoned fries.",
        price: "$24.99"
    },
    {
        title: "Vegan Buddha Bowl",
        description: "A vibrant bowl of quinoa, roasted veggies, avocado, and tahini dressing.",
        price: "$15.99"
    },
    {
        title: "Seafood Pasta",
        description: "Linguine pasta tossed with shrimp, scallops, and a garlic white wine sauce.",
        price: "$22.99"
    }
]

const side_menu_items = 
[
    {
        title: "Garlic Mashed Potatoes",
        description: "Creamy mashed potatoes with a hint of garlic.",
        price: "$5.99"
    },
    {
        title: "Roasted Brussels Sprouts",
        description: "Crispy Brussels sprouts with a balsamic glaze.",
        price: "$6.99"
    },
    {
        title: "Caesar Salad",
        description: "Classic Caesar salad with romaine lettuce, croutons, and Parmesan cheese.",
        price: "$7.99"
    },
    {
        title: "Sweet Potato Fries",
        description: "Crispy sweet potato fries with a dash of sea salt.",
        price: "$6.49"
    },
];

const beverage_menu_items = 
[
    {
        title: "Classic Lemonade",
        description: "Refreshing homemade lemonade.",
        price: "$3.99"
    },
    {
        title: "Iced Tea",
        description: "Brewed iced tea served with a lemon wedge.",
        price: "$2.99"
    },
    {
        title: "Craft Beer",
        description: "A selection of local craft beers.",
        price: "$5.99"
    },
    {
        title: "House Red Wine",
        description: "A smooth and full-bodied red wine.",
        price: "$7.99"
    },
];


function Menu()
{

    // Define category 1
    const get_main = () =>
    {
        const category = "Main";

        // Define items list
        const item_list = main_menu_items;

        return { category, item_list};
    }

    // Define category 2
    const get_sides = () =>
    {
        const category = "Sides";
    
        // Define items list
        const item_list = side_menu_items;
    
        return { category, item_list};
    }

    // Define category 3
    const get_beverages = () =>
    {
        const category = "Beverages";
        
        // Define items list
        const item_list = beverage_menu_items;
        
        return { category, item_list};
    }
    
    return { get_main, get_sides, get_beverages };
}


function MenuRender()
{
    const menu = Menu();

    const render = () =>
    {
        // Content div
        const content = document.getElementById("content");
        // Clear the div
        content.textContent = "";

        // Tester for getting info
        const description = document.createElement("h2");
        description.innerText = menu.get_main().category;

        content.appendChild(description);
    }

    return { render };
}

export { MenuRender };