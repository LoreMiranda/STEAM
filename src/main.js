/* Manejo del DOM */

const data = STEAM.appnews.newsitems;
const containerRoot = document.getElementById("root");
const showData = (data) => {

        
       data.forEach(element => {
       containerRoot.innerHTML += `

<div class="row">
        <div class="col m10 m8">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${element.title}</span>
              <p>${element.contents}</p>
              <p>Gid N°: ${element.gid}</p>
              <p>Feedlabel: ${element.feedlabel}</p>
            </div>
            <div class="card-action">
              <a href="#">${element.url}</a>
            </div>
          </div>
        </div>
      </div> `

       })
}
window.onload = showData(data);