import { galleryItems } from "./gallery-items.js";

// const refs = {
//   gallery: document.querySelector(".gallery"),
// };

// const markup = ({
//   original,
//   preview,
//   description,
// }) => `<div class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>`;

// const render = () => {
//   const list = galleryItems.map((item) => markup(item)).join("");
//   refs.gallery.insertAdjacentHTML("beforeend", list);
// };

// render();

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div data-name="${description}" class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          loading="lazy"
        />
      </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onItemClick);

function onItemClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) return;
  // const parent = evt.target.closest("div").dataset.name;
  // console.log(parent);
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="1280">`
  );

  instance.show();

  window.addEventListener("keydown", onEscPress);

  function onEscPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}
