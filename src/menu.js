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
      category: 'Appetizer',
    },
    {
      name: 'Garlic Bread',
      cost: 6,
      description:
        'Cheesy delicious garlic bread made from fresh home-made bread',
      category: 'Appetizer',
    },
    {
      name: 'Steak',
      cost: 21,
      description: 'Sizzling steak',
      category: 'Entree',
    },
    {
      name: 'Hamburger',
      cost: 16,
      description: 'Juicy burger',
      category: 'Entree',
    },
    {
      name: 'Chocolate Cake',
      cost: 10,
      description: "A decadent, moist chocolate lover's dream",
      category: 'Dessert',
    },
    {
      name: 'Pumpkin Pie',
      cost: 9,
      description: 'A smooth fall-spiced pumpkin pie',
      category: 'Dessert',
    },
  ];

  // Sort menu items by category alphabetically
  // menuItems.sort((a, b) =>
  //   a.category > b.category ? 1 : b.category > a.category ? -1 : 0
  // );

  const categories = [];
  let currentCategory = menuItems[0].category;
  let currentCategoryDiv = document.createElement('div');
  let currentCategoryHeader = document.createElement('h2');

  currentCategoryDiv.setAttribute('id', currentCategory);
  currentCategoryHeader.textContent = currentCategory;
  for (let i = 0; i < menuItems.length; i++) {
    const menuItemDiv = document.createElement('div');
    const menuItemName = document.createElement('h3');
    const menuItemDescription = document.createElement('p');
    const menuItemCost = document.createElement('p');

    menuItemName.textContent = menuItems[i].name;
    menuItemDescription.textContent = menuItems[i].description;
    menuItemCost.textContent = menuItems[i].cost;

    menuItemDiv.append(menuItemName, menuItemDescription, menuItemCost);

    // create new category
    if (menuItems[i].category !== currentCategory) {
      contentDiv.append(currentCategoryHeader, currentCategoryDiv);
      currentCategory = menuItems[i].category;
      currentCategoryDiv = document.createElement('div');
      currentCategoryHeader = document.createElement('h2');
      currentCategoryDiv.setAttribute('id', currentCategory);
      currentCategoryHeader.textContent = currentCategory;
    }
    currentCategoryDiv.appendChild(menuItemDiv);
  }
  contentDiv.append(currentCategoryHeader, currentCategoryDiv);
}
