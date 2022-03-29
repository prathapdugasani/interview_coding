let element = document.getElementById("template");
let output = document.getElementById("output");
function fetchData() {
  window
    .fetch("ship-name.json")
    .then(data => {
      data
        .json()
        .then(value => {
          for (val of value) {
            element.innerHTML = ` ${element.innerHTML}<option value=${val}>${val}</option>`;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

fetchData();
function show(ele) {
  window
    .fetch("ship-content.json")
    .then(value => {
      value.json().then(res => {
        var option = ele.options[ele.selectedIndex];
        let dataValue = [...res].filter(x => {
          let data = option.value;

          return x.ship_id === data;
        });

        output.innerHTML = ` <div><img class="image" src="${dataValue[0]["image"]}" alt="image" ></div>
        <div class="data">
         <p >ShipName    :${dataValue[0]["ship_name"]}</p>
          <p>ShipType   :${dataValue[0]["ship_type"]}</p> 
          <p>Missions    :${dataValue[0]["missions"][0]['name']}</p> </div>`;

        console.log(dataValue);
      });
    })
    .catch(err => console.log(err));
}
