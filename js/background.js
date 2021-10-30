const imageWidth = 1920;
const imageHeight = 1080;
const ACCESS_KEY = "gqbyXgfqTOQTG00mMa4zB5yTflJs7hOJeEdyfb2JKLM";
const url = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&query=landscape`;

fetch(url).then(response => response.json())
  .then(data => {
  const jsBody = document.querySelector("body");
  jsBody.style.backgroundImage = `url(${data.urls.full})`;
})