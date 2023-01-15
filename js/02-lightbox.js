import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// const galleryEl = document.querySelector(".gallery");
// const itemsMarkup = createItemMarkup(galleryItems);
// galleryEl.insertAdjacentHTML("beforeend", itemsMarkup);

// //console.log(createItemMarkup(galleryItems));

// function createItemMarkup(items) {
//   return items
//     .map(
//       ({ preview, original, description }) => `
//       <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img
//             class="gallery__image"
//             src="${preview}"
//             alt="${description}"
//           />
//         </a>
//       </div>`
//     )
//     .join("");
// }

// galleryEl.addEventListener("click");

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;
  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("title", element.description);
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
