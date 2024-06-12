const cities = ['Neiva', 'Bogota', 'medellin', 'cartagena'];

for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    console.log('for',element)
}

cities.forEach(element => console.log('forEach', element));