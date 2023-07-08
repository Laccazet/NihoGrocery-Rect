import { v4 as uuidv4 } from 'uuid';

const storeItems = [
    {
        id: uuidv4(),
        name: "Vegetables",
        image: require("../assets/Items/Vegs/tomato.png"),
        products: [
            {
                id: uuidv4(),
                name: "Papper",
                price: 1.99,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Vegs/papper.webp"),
            },
            {
                id: uuidv4(),
                name: "Potato",
                price: 0.25,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Vegs/potato.png"),
            },
            {
                id: uuidv4(),
                name: "Beans",
                price: 1.99,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Vegs/beans.png"),
            },
            {
                id: uuidv4(),
                name: "Tomato",
                price: 2.99,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Vegs/tomato.png"),
            },
            {
                id: uuidv4(),
                name: "Cucumber",
                price: 1.49,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Vegs/cucumber.webp"),
            },
            {
                id: uuidv4(),
                name: "Onion",
                price: 0.69,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Vegs/onion.png"),
            },
            {
                id: uuidv4(),
                name: "Garlic",
                price: 1.39,
                gram: 250,
                unit: "gr",
                image: require("../assets/Items/Vegs/garlic.png"),
            },
            {
                id: uuidv4(),
                name: "Broccoli",
                price: 1.85,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Vegs/broccoli.webp"),
            },
            {
                id: uuidv4(),
                name: "Lettuce",
                price: 1.95,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Vegs/Lettuce.png"),
            },
            {
                id: uuidv4(),
                name: "Beetroot",
                price: 2.45,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Vegs/beetroot.png"),
            },
            {
                id: uuidv4(),
                name: "Carrot",
                price: 0.99,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Vegs/carrot.png"),
            },
            {
                id: uuidv4(),
                name: "Eggplant",
                price: 1.39,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Vegs/eggplant.png"),
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Fruits",
        image: require("../assets/Items/Fruits/apple.png"),
        products: [
            {
                id: uuidv4(),
                name: "Red Apple",
                price: 1.99,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Fruits/apple.png"),
            },
            {
                id: uuidv4(),
                name: "Banana",
                price: 1.49,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Fruits/banana.webp"),
            },
            {
                id: uuidv4(),
                name: "Strawberries",
                price: 2.24,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Fruits/strawberry.png"),
            },
            {
                id: uuidv4(),
                name: "Watermelon",
                price: 4.67,
                gram: 1,
                unit: "ct",
                image: require("../assets/Items/Fruits/watermelon.png"),
            },
            {
                id: uuidv4(),
                name: "Melon",
                price: 3.98,
                gram: 1,
                unit: "ct",
                image: require("../assets/Items/Fruits/melon.png"),
            },
            {
                id: uuidv4(),
                name: "Orange",
                price: 4.99,
                gram: 2,
                unit: "kg",
                image: require("../assets/Items/Fruits/orange.png"),
            },
            {
                id: uuidv4(),
                name: "Pineapple",
                price: 2.14,
                gram: 1,
                unit: "ct",
                image: require("../assets/Items/Fruits/pineapple.png"),
            },
            {
                id: uuidv4(),
                name: "Avacado",
                price: 0.98,
                gram: 1,
                unit: "ct",
                image: require("../assets/Items/Fruits/avacado.png"),
            },
            {
                id: uuidv4(),
                name: "Green Grapes",
                price: 5.36,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Fruits/green-grapes.png"),
            },
            {
                id: uuidv4(),
                name: "Kiwi",
                price: 4.97,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Fruits/kiwi.png"),
            },
            {
                id: uuidv4(),
                name: "Pear",
                price: 1.39,
                gram: 1,
                unit: "ct",
                image: require("../assets/Items/Fruits/pear.png"),
            },
            {
                id: uuidv4(),
                name: "Lemon",
                price: 3.92,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Fruits/lemon.png"),
            },
            {
                id: uuidv4(),
                name: "Peach",
                price: 1.45,
                gram: 1,
                unit: "ct",
                image: require("../assets/Items/Fruits/peach.png"),
            },
            {
                id: uuidv4(),
                name: "Blueberries",
                price: 6.82,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Fruits/blueberries.png"),
            },
            {
                id: uuidv4(),
                name: "Grapes",
                price: 5.13,
                gram: 1,
                unit: "kg",
                image: require("../assets/Items/Fruits/grapes.png"),
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Baked Goods",
        image: require("../assets/Items/Baked Goods/bagel.png"),
        products: [
            {
                id: uuidv4(),
                name: "Loaf Bread",
                price: 3.74,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Baked Goods/bread.png"),
            },
            {
                id: uuidv4(),
                name: "Bagel",
                price: 4.38,
                gram: 6,
                unit: "ct",
                image: require("../assets/Items/Baked Goods/bagel.png"),
            },
            {
                id: uuidv4(),
                name: "Bretzel",
                price: 4.18,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Baked Goods/bretzel.png"),
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Milk & Dairy",
        image: require("../assets/Items/Milk & Dairy/milk.png"),
        products: [
            {
                id: uuidv4(),
                name: "Milk",
                price: 1.89,
                gram: 1.5,
                unit: "L",
                image: require("../assets/Items/Milk & Dairy/milk.png"),
            },
            {
                id: uuidv4(),
                name: "Egg",
                price: 6.27,
                gram: 12,
                unit: "ct",
                image: require("../assets/Items/Milk & Dairy/egg.png"),
            },
            {
                id: uuidv4(),
                name: "Cheese",
                price: 3.86,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Milk & Dairy/cheese.webp"),
            },
            {
                id: uuidv4(),
                name: "Yogurt",
                price: 1.99,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Milk & Dairy/yogurt.png"),
            },
            {
                id: uuidv4(),
                name: "Butter",
                price: 4.38,
                gram: 500,
                unit: "gr",
                image: require("../assets/Items/Milk & Dairy/butter.webp"),
            },
            {
                id: uuidv4(),
                name: "Honey",
                price: 14.99,
                gram: 1.5,
                unit: "kg",
                image: require("../assets/Items/Milk & Dairy/honey.png"),
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Personal Care",
        image: require("../assets/Items/Personal Care/perfume.png"),
        products: [
            {
                id: uuidv4(),
                name: "Toothpaste",
                price: 6.26,
                gram: 100,
                unit: "gr",
                image: require("../assets/Items/Personal Care/toothpaste.webp"),
            },
            {
                id: uuidv4(),
                name: "Deodorant",
                price: 11.52,
                gram: 80,
                unit: "gr",
                image: require("../assets/Items/Personal Care/deodorant.png"),
            },
            {
                id: uuidv4(),
                name: "Toothbrush",
                price: 12.56,
                gram: 5,
                unit: "ct",
                image: require("../assets/Items/Personal Care/toothbrush.png"),
            },
            {
                id: uuidv4(),
                name: "Tissue",
                price: 4.50,
                gram: 256,
                unit: "Tissue Total",
                image: require("../assets/Items/Personal Care/tissue.png"),
            },
            {
                id: uuidv4(),
                name: "Perfume",
                price: 24.99,
                gram: 30,
                unit: "ml",
                image: require("../assets/Items/Personal Care/perfume.png"),
            },
            {
                id: uuidv4(),
                name: "Sunscreen",
                price: 9.99,
                gram: 200,
                unit: "ml",
                image: require("../assets/Items/Personal Care/sunscreen.png"),
            }
        ]
    }
]

export default storeItems;