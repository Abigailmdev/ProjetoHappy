//create map
const map = L.map("mapid").setView([-3.1155031, -60.0308993], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);
});
// adicionar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //VERIFICAR SE O CAMPO ESTA VAZIO, SE SIM, NÃO ADICIONAR AO CONTAINER DE IMAGES//
  const input = newFieldContainer.children[0];

  console.log(input.value == "");

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao container de imagens//
  input.value = "";

  //adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deletField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//seleção do  sim e não
function toggleSelect(event) {
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querrySelector('[name="open_on_weekends"]');
  input.value = button.dataSet.value;
}

function validate(event) {
  //validar se lat e lng estão preenchidos
  const needsLatAndLng = true
  if(needsLatAndLng){
    
    event.preventDefault()
  alert('selecione um ponto no mapa')

  }
  
}
