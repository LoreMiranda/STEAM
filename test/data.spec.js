global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('Funcion filterData', () => {
 const data = [{
   feedlabel: "Product Update",
   title: "Team Fortress 2 Update Released",
 },
{
   feedname: "eurogamer",
   title: "Team Fortress 2 mod reverts the game to 2008 - and it's coming to Steam"
}
]

 it('debería ser una función', () => {
   assert.deepEqual(typeof filterData, 'function');
 });

 it('debería retornar "Product Update" para title "Team Fortress 2 Update Released"', () => {
   assert.deepEqual(window.filterData(data, "Team Fortress 2 Update Released"), [{feedlabel: "Product Update", title: "Team Fortress 2 Update Released"}]);
 });
});