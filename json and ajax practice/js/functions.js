var carslist = document.getElementById('cars-list');

var request = new XMLHttpRequest();

request.open('Get', 'js/cars.json');

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

    htmlString += "<div class=\"row car-info\"><div class=\"col-md-12\">    <div class=\"col-md-6\">";

    htmlString += "<img src=\"" + data[i].pic_link + "\" alt=\"\" class=\"img-responsive img-rounded center-block\">";

    htmlString += "</div><div class=\"col-md-6\">";

    htmlString += "<div class=\"col-md-3\">Name: <br>" + data[i].name + "</div>";
    htmlString += "<div class=\"col-md-3\">Year: <br>" + data[i].year + "</div>";
    htmlString += "<div class=\"col-md-3\">HP / Top Speed: <br>" + data[i].hp + "/" + data[i].topspeed + "0-60 in" + data[i].zerotosixty + "</div>";
    htmlString += "<div class=\"col-md-3\">Price: <br>" + data[i].price + "</div>";

    htmlString += "</div></div></div>";

  }

  carslist.insertAdjacentHTML('beforeend', htmlString);
}
