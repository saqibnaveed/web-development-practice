var carslist = document.getElementById('cars-list');

var request = new XMLHttpRequest();

request.open('Get', 'cars.json');

request.onload = function(){
  if(request.status >= 200 && request.status < 400){
    var data = JSON.parse(request.responseText);
    console.log("Response recieved.");
    renderList(data);
  } else {
    console.log("Server connected but returned an error!");
  }
};

request.onerror = function(){
  console.log("Connection failed");
}

request.send();

function renderList(data){
  var htmlString = "";

  for (var i = 0; i < data.length; i++) {
    htmlString += "<div> <p>Name: " + data[i].name + "</p></div>"
  }

  carslist.insertAdjacentHTML('beforeend', htmlString);
}
