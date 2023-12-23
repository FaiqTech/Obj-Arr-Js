array.forEach((objects) => {
  img.src = objects.img;
  title.innerHTML += `<p class="product__item">${objects.title}</p>`;
});
