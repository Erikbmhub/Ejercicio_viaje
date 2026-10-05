const data = [
  {
    title: "Example Title 1",
    description: "Example Description 1",
    url_img: "../viajes/viajes-1.jpg",
  },
  {
    title: "Example Title 2",
    description: "Example Description 2",
    url_img: "../viajes/viajes-2.jpg",
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
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

for (let i = 0; i < data.length; i++) {
  let section = document.createElement("section");

  let img = document.createElement("img");
  img.src = data[i].url_img;

  let title = document.createElement("h2");
  title.appendChild(document.createTextNode(data[i].title));

  let description = document.createElement("p");
  description.appendChild(document.createTextNode(data[i].description));

  section.appendChild(img);
  section.appendChild(title);
  section.appendChild(description);

  main.appendChild(section);
}
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
for (let i = 0; i < cities.length; i++) {
  let option = document.createElement("option");
  option.appendChild(document.createTextNode(cities[i]));
  select.appendChild(option);
}
document.querySelector("main").appendChild(select);
