const automobiles = ['car', 'truck', 'motorcycle'];
automobiles.push('airplane', 'skateboard');
automobiles.unshift('helicopter', 'bike');

automobiles.pop();
automobiles.shift();
const automobilesCopy = `The current list of vehicles is: ${automobiles}`;

document.getElementById('result').innerHTML = automobiles;
