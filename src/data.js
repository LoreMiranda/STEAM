/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };


const filterData = (data, condition) => {
    const result = data.filter(element => {
        return element.feedlabel.includes(condition) === true;
    })
    return result;
}

 const sortData = (data, condition) => {
     const order = data.sort((a,b) => (a[condition] > b[condition]) ? 1 : -1);
     return order;

    //   let orderAz = data.sort((a,b) => {
    // return a[sortBy].localeCompare(b[sortBy]);
    //     })
    //   if (sortOrder === "order-za"){
    //   orderAz.reverse();
    //   }
    //   return orderAz;
    // }


    // const sortOrder = (data, condition) => {
    //     const order = data.sort((a, b) => (a[condition] > b[condition]) ? 1 : -1);
    //         return order;


//const computeStats = (data) => {

}

window.filterData = filterData;
window.sortData = sortData;
//window.computeStats = computeStats;
