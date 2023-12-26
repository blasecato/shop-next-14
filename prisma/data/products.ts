
const products = [
    {
        name: "Café Caramel con Chocolate",
        price: 59.9,
        image: "cafe_01",
        categoryId: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        weight: 150
      },
      {
        name: "Café Frio con Chocolate Grande",
        price: 49.9,
        image: "cafe_02",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        image: "cafe_03",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        image: "cafe_04",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Malteada Fria con Chocolate Grande",
        price: 54.9,
        image: "cafe_05",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Mocha Caliente Chico",
        price: 39.9,
        image: "cafe_06",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Mocha Caliente Grande con Chocolate",
        price: 59.9,
        image: "cafe_07",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Caliente Capuchino Grande",
        price: 59.9,
        image: "cafe_08",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Mocha Caliente Mediano",
        price: 49.9,
        image: "cafe_09",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Mocha Frio con Caramelo Mediano",
        price: 49.9,
        image: "cafe_10",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Mocha Frio con Chocolate Mediano",
        price: 49.9,
        image: "cafe_11",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Espresso",
        price: 29.9,
        image: "cafe_12",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Capuchino Grande con Caramelo",
        price: 59.9,
        image: "cafe_13",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Café Caramelo Grande",
        price: 59.9,
        image: "cafe_14",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 1
      },
      {
        name: "Paquete de 3 donas de Chocolate",
        price: 39.9,
        image: "donas_01",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Paquete de 3 donas Glaseadas",
        price: 39.9,
        image: "donas_02",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Dona de Fresa ",
        price: 19.9,
        image: "donas_03",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Dona con Galleta de Chocolate ",
        price: 19.9,
        image: "donas_04",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Dona glass con Chispas Sabor Fresa ",
        price: 19.9,
        image: "donas_05",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Dona glass con Chocolate ",
        price: 19.9,
        image: "donas_06",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Dona de Chocolate con MÁS Chocolate ",
        price: 19.9,
        image: "donas_07",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Paquete de 3 donas de Chocolate ",
        price: 39.9,
        image: "donas_08",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Paquete de 3 donas con Vainilla y Chocolate ",
        price: 39.9,
        image: "donas_09",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Paquete de 6 Donas",
        price: 69.9,
        image: "donas_10",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Paquete de 3 Variadas",
        price: 39.9,
        image: "donas_11",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Dona Natural con Chocolate",
        price: 19.9,
        image: "donas_12",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Paquete de 3 Donas de Chocolate con Chispas",
        price: 39.9,
        image: "donas_13",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Dona Chocolate y Coco",
        price: 19.9,
        image: "donas_14",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 4
      },
      {
        name: "Paquete Galletas de Chocolate",
        price: 29.9,
        image: "galletas_01",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 6
      },
      {
        name: "Paquete Galletas de Chocolate y Avena",
        price: 39.9,
        image: "galletas_02",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 6
      },
      {
        name: "Paquete de Muffins de Vainilla",
        price: 39.9,
        image: "galletas_03",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 6
      },
      {
        name: "Paquete de 4 Galletas de Avena",
        price: 24.9,
        image: "galletas_04",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 6
      },
      {
        name: "Galletas de Mantequilla Variadas",
        price: 39.9,
        image: "galletas_05",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 6
      },
      {
        name: "Galletas de sabores frutales",
        price: 39.9,
        image: "galletas_06",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 6
      },
      {
        name: "Hamburguesa Sencilla",
        price: 59.9,
        image: "hamburguesas_01",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "Hamburguesa de Pollo",
        price: 59.9,
        image: "hamburguesas_02",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "Hamburguesa de Pollo y Chili",
        price: 59.9,
        image: "hamburguesas_03",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "Hamburguesa Queso y  Pepinos",
        price: 59.9,
        image: "hamburguesas_04",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "Hamburguesa Cuarto de Libra",
        price: 59.9,
        image: "hamburguesas_05",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "Hamburguesa Doble Queso",
        price: 69.9,
        image: "hamburguesas_06",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "Hot Dog Especial",
        price: 49.9,
        image: "hamburguesas_07",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "Paquete 2 Hot Dogs",
        price: 69.9,
        image: "hamburguesas_08",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 2
      },
      {
        name: "4 Rebanadas de Pay de Queso",
        price: 69.9,
        image: "pastel_01",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 5
      },
      {
        name: "Waffle Especial",
        price: 49.9,
        image: "pastel_02",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 5
      },
      {
        name: "Croissants De la casa",
        price: 39.9,
        image: "pastel_03",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 5
      },
      {
        name: "Pay de Queso",
        price: 19.9,
        image: "pastel_04",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 5
      },
      {
        name: "Pastel de Chocolate",
        price: 29.9,
        image: "pastel_05",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 5
      },
      {
        name: "Rebanada Pastel de Chocolate",
        price: 29.9,
        image: "pastel_06",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 5
      },
      {
        name: "Pizza Spicy con Doble Queso",
        price: 69.9,
        image: "pizzas_01",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Jamón y Queso",
        price: 69.9,
        image: "pizzas_02",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Doble Queso",
        price: 69.9,
        image: "pizzas_03",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Especial de la Casa",
        price: 69.9,
        image: "pizzas_04",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Chorizo",
        price: 69.9,
        image: "pizzas_05",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Hawaiana",
        price: 69.9,
        image: "pizzas_06",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Tocino",
        price: 69.9,
        image: "pizzas_07",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Vegetales y Queso",
        price: 69.9,
        image: "pizzas_08",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Pepperoni y Queso",
        price: 69.9,
        image: "pizzas_09",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Aceitunas y Queso",
        price: 69.9,
        image: "pizzas_10",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      },
      {
        name: "Pizza Queso, Jamón y Champiñones",
        price: 69.9,
        image: "pizzas_11",
        weight: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rutrum sem. Nam pharetra vestibulum nunc, a molestie nisl cursus id. Quisque ac dolor a augue ornare maximus.",
        categoryId: 3
      }
]

export {
    products 
}