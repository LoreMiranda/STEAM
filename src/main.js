/* Manejo del DOM */

const data = STEAM.appnews.newsitems;
const containerRoot = document.getElementById("root");
const showData = (data) => {


        
       data.forEach(element => {
       containerRoot.innerHTML += `
       <div class="row">
       <div class="card" style="width: 40rem;">
       <div class="card-body">
         <h5 class="card-title">${element.title}</h5>
         <p>${element.contents}</p>
              <p>Gid N°: ${element.gid}</p>
              <p>Feedlabel: ${element.feedlabel}</p>
         <a href="#" class="card-link">${element.url}</a>
       </div>
     </div>
     </div>`

       })
     
//FILTRO

document.getElementById("select-filter").addEventListener("change", () => {
  let condition = document.getElementById("select-filter").value;
  let result = window.filterData(data,condition);
  containerRoot.innerHTML = "";

  result.forEach(element => {
    containerRoot.innerHTML += `
    <div class="row">
       <div class="card" style="width: 40rem;">
       <div class="card-body">
         <h5 class="card-title">${element.title}</h5>
         <p>${element.contents}</p>
              <p>Gid N°: ${element.gid}</p>
              <p>Feedlabel: ${element.feedlabel}</p>
         <a href="#" class="card-link">${element.url}</a>
       </div>
     </div>
     </div>`


  })
})

//orden
document.getElementById("select-order").addEventListener("change", () => {
  let condition = document.getElementById("select-order").value;
  let dateOrder = window.sortData(data, condition);
  containerRoot.innerHTML = "";

  dateOrder.forEach(element => {
    containerRoot.innerHTML += `
    <div class="row">
       <div class="card" style="width: 40rem;">
       <div class="card-body">
         <h5 class="card-title">${element.title}</h5>
         <p>${element.contents}</p>
              <p>Gid N°: ${element.gid}</p>
              <p>Feedlabel: ${element.feedlabel}</p>
         <a href="#" class="card-link">${element.url}</a>
       </div>
     </div>
     </div>`

  })
})

}
window.onload = showData(data);