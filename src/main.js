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
              <p>Date: ${element.date}</p>
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
              <p>Date: ${element.date}</p>
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
              <p>Date: ${element.date}</p>
         <a href="#" class="card-link">${element.url}</a>
       </div>
     </div>
     </div>`

  })
})

//calculo

const calcule = document.getElementById('select-filter');
calcule.addEventListener('click', () =>{
let condition = calcule.value;
let result = window.computeStats(data,condition);
containerRoot.innerHTML+=`
<h3>Total</h3>
<p>${result}</p>`
})


// function timeConverter() {
//   let epoch = (data.date)
//   let a = newDate(epoch * 1000);
//   let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
//   let year = a.getFullYear();
//   let month = months[a.getMonth()];
//   let date = a.getDate();
//   let hour = a.getHours();
//   let min = a.getMinutes();
//   let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;
//   return time;
// containerRoot.innerHTML+=`
// <h3>Date</h3>
// <p>${time}</p>`
  

//  }

}
window.onload = showData(data);