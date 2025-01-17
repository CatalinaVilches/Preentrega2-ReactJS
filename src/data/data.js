const products = [
    {
        id: "pc01",
        name: "Pastel de chocolate",
        description: "Un suave y esponjoso pastel de chocolate, cubierto con un glaseado cremoso. Cada bocado combina dulzura y un toque amargo, ideal para los amantes del chocolate. Perfecto para cualquier ocasión.",
        stock: "10",
        price: "9.990",
        image: "/img/../assets/pastelDeChocolate.jpg",
        category: "pasteles"
    },
    {
        id: "pv02",
        name: "Pastel de Vainilla",
        description: "Un suave y esponjoso pastel de vainilla, delicadamente aromatizado y cubierto con un glaseado ligero. Cada bocado ofrece un sabor dulce y cremoso, perfecto para cualquier ocasión. Ideal para quienes buscan un clásico.",
        stock: "15",
        price: "8.990",
        image: "/img/pastelDeVainilla.png",
        category: "pasteles"
    },
    {
        id: "gc01",
        name: "galleta de chispas de chocolate",
        description: "Una deliciosa docena de galletas recién horneadas, crujientes por fuera y suaves por dentro, repletas de chispas de chocolate. Perfectas para compartir o disfrutar solas, son el bocado ideal para los amantes del chocolate.",
        stock: "10",
        price: "4.990",
        image: "/img/galletaChispasDeChocolate.jpg",
        category: "galletas"
    },
    {
        id: "gs02",
        name: "galletas surtidas",
        description: "Una deliciosa docena de galletas variadas, que incluye opciones de chocolate, vainilla, nuez y más. Cada bocado ofrece una mezcla de sabores y texturas, perfectas para satisfacer todos los antojos. Ideal para compartir en cualquier ocasión.",
        stock: "10",
        price: "6.990",
        image: "/img/galletasSurtidas.webp",
        category: "galletas"
    },
    {
        id: "cr01",
        name: "cupcake red velvet",
        description: "Un esponjoso cupcake red velvet, con un rico sabor a chocolate y un toque de vainilla, cubierto con un suave glaseado de queso crema. Cada bocado es una combinación perfecta de dulzura y textura, ideal para una ocasión especial o un capricho.",
        stock: "20",
        price: "1.990",
        image: "/img/upcakeRedvelvet.jpgC",
        category: "cupcakes"
    },
    {
        id: "cl02",
        name: "cupcake de limon",
        description: "Un refrescante cupcake de limón, ligero y esponjoso, con un delicado sabor cítrico. Cubierto con un glaseado de limón suave y cremoso, cada bocado es una explosión de frescura, perfecto para alegrar cualquier día. Ideal para los amantes de los sabores frutales.",
        stock: "20",
        price: "1.990",
        image: "/img/cupcakeDeLimon.webp",
        category: "cupcakes"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export { getProducts }