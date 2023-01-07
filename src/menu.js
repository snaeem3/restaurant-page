const contentDiv = document.querySelector('#content');

export default function loadMenu() {
  //   const appetizers = [
  //     ['Fried Calamari', 9],
  //     ['Garlic Bread', 6],
  //     ['Nachos', 7],
  //   ];
  //   const entrees = [
  //     ['Steak', 21],
  //     ['Spaghetti and Meatballs', 16],
  //     ['Burrito', 11],
  //   ];

  const menuItems = [
    {
      name: 'Fried Calamari',
      cost: 9,
      description: 'Crispy, beer-battered fried calamari',
      category: 'appetizer',
    },
    {
      name: 'Garlic Bread',
      cost: 6,
      description:
        'Cheesy delicious garlic bread made from fresh home-made bread',
      category: 'appetizer',
    },
    {
      name: 'Steak',
      cost: 21,
      description: 'Juicy steak',
      category: 'entree',
    },
  ];

  console.log(menuItems[0].category);
}
