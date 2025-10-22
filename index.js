const automobiles = ['car', 'truck', 'motorcycle'];
automobiles.push('airplane', 'skateboard');
automobiles.unshift('helicopter', 'bike');

const automobilesCopy = `The current list of vehicles is: ${automobiles}`;
automobiles.pop();
automobiles.shift();

document.getElementById('result').innerHTML = automobiles
