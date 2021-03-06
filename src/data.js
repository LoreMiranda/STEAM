const filterData = (data, condition) => {
   const result = data.filter(element => {
        return element.feedlabel.includes(condition) === true;
   })
        return result;
}

const sortData = (data, condition) => {
   let order = data.sort((a,b) => (a[condition] > b[condition]) ? 1 : -1);
        return order;

}

const computeStats = (data, condition) => {
   let result = filterData(data, condition).length;
        return result;

     };


window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;