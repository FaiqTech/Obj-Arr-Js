var container = document.querySelector(".top12");

var array = [
  {
    img: "./img/koton.jpg",
    title: "Koton",
    price: "1.3.6 aylıqda oz qiymetine",
    text: "2% cashback",
  },
  {
    img: "./img/maxi.png",
    title: "Maxi.az",
    price: "6 aylıqda oz qiymetine",
    // text: "2% cashback",
  },

  {
    img: "./img/nike.jpeg",
    title: "Nike",
    price: "1.3.6 aylıqda oz qiymetine",
    text: "2% cashback",
  },
  {
    img: "./img/rayban.jpeg",
    title: "RayBan",
    price: "12 aylıqda oz qiymetine",
    text: "2% cashback",
  },
  {
    img: "./img/starbucks.png",
    title: "Strabucks",
    price: "3 aylıqda oz qiymetine",
    text: "14% cashback",
  },
  {
    img: "./img/levis.png",
    title: "Levi`s",
    price: "1.3.6 aylıqda oz qiymetine",
    text: "2% cashback",
  },
  {
    img: "./img/irshad.jpeg",
    title: "Irshad",
    price: "1.3.6 aylıqda oz qiymetine",
    text: "2% cashback",
  },
  {
    img: "./img/pullbear.png",
    title: "Pull & Bear",
    price: "1.3.6 aylıqda oz qiymetine",
    text: "2% cashback",
  },
];

array.forEach((objects) => {
  const div = document.createElement("div");
  container.appendChild(div);

  div.addEventListener("mouseover", function () {
    div.style.transform = "scale(1.06)";
  });

  div.addEventListener("mouseout", function () {
    div.style.transform = "scale(1)";
  });

  const img = document.createElement("img");
  img.src = objects.img;
  div.appendChild(img);

  const title = document.createElement("h2");
  title.textContent = objects.title;
  div.appendChild(title);

  const text = document.createElement("p");
  text.textContent = objects.text;
  div.appendChild(text);

  const price = document.createElement("p");
  price.textContent = objects.price;
  div.appendChild(price);
});

// img.src = array[0].img;
