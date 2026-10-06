const data = [
  {
    title: "Example Title 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis labore harum beatae suscipit voluptates sapiente, natus voluptatem eaque repellat exercitationem. Laudantium nemo dicta cum harum, modi veniam. Repellat, asperiores?",
    url_img: "../viajes/viajes-1.jpg",
  },
  {
    title: "Example Title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis labore harum beatae suscipit voluptates sapiente, natus voluptatem eaque repellat exercitationem. Laudantium nemo dicta cum harum, modi veniam. Repellat, asperiores?",
    url_img: "../viajes/viajes-2.jpg",
  },
  {
    title: "Example Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis labore harum beatae suscipit voluptates sapiente, natus voluptatem eaque repellat exercitationem. Laudantium nemo dicta cum harum, modi veniam. Repellat, asperiores?",
    url_img: "../viajes/viajes-3.jpg",
  },
];

// y ahora los section de cada viaje se cuelgan en "viajes", como antes
/*PRIMERA IDEA, PERO NO TENIA OPCION DE colocar el titulo y el descript
const main = document.querySelector("main");
for(let i =0; i<data.length; i++){
    let section=document.createElement("section");
    section.appendChild(document.createTextNode(data[i].title));
    section.appendChild(document.createTextNode(data[i].description));
    //section.appendChild(document.createTextNode(data[i].url_img));
    let img =document.createElement("img");
    img.src = data[i].url_img;
    section.appendChild(img);
    main.appendChild(section);
} */
//CAMBIO EL ORDEN IMG/TITULO/DESCRIP EN LA OTRA NO HABIA FORMA DE MOVERLO

const main = document.querySelector("main");

/*let section = document.createElement("section");//Creo el section con id para poder separarlo en css
section.id="viajes";
let recomendaciones= document.createTextNode("Recomendaciones");
const titulo=document.createElement("h2");
document.querySelector("h2").appendChild(Recomendaciones)*/
let section = document.createElement("section");
section.id = "viajes";
document.querySelector("main").appendChild(section);
for (let i = 0; i < data.length; i++) {
  //creo article
  let article = document.createElement("article")
  //Crea imagen
  let img = document.createElement("img");
  img.src = data[i].url_img;
  //Crea titulo
  let title = document.createElement("h2");
  title.appendChild(document.createTextNode(data[i].title));
  //Crea description
  let description = document.createElement("p");
  description.appendChild(document.createTextNode(data[i].description));
  //Meto imagen,titulo y desc dentro del article
  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(description);
  //<eto article en section
  section.appendChild(article);
}
 main.appendChild(section);
const cities = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza",
]; 

/*MI OPCION, PERO ME PASABA LO MISMO QUE EN DATA, NO PODIA SELECIONAR LOS ELEMENTOS
const article = document.createElement("article")
document.querySelector("main").appendChild(article)


for (let i =0; i<cities.length; i++){
    let article= document.createElement("article");
    article.appendChild(document.createTextNode(cities[i]));
    main.appendChild(article)
} */
let select = document.createElement("select");
select.id="destinos"
for (let i = 0; i < cities.length; i++) {
  let option = document.createElement("option");
  option.appendChild(document.createTextNode(cities[i]));
  select.appendChild(option);
}
document.querySelector("main").appendChild(select);
