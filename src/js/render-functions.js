import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");
let loader = null;

export function showLoader() {
  if (!loader) {
    loader = document.createElement("div");
    loader.classList.add("loader", "hidden"); 
    document.body.appendChild(loader);
  }
  loader.classList.remove("hidden");
}

export function hideLoader() {
  if (loader) loader.classList.add("hidden");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryItem(item) {
  return `
    <li class="gallery-item">
      <a href="${item.largeImageURL}">
        <img
          src="${item.webformatURL}"
          alt="${item.tags}"
          class="gallery-image"
          loading="lazy"
        />
      </a>
      <ul class="info">
       <li class="info-item"><p class="info-name">Likes</p><p class="info-value">${item.likes}</p></li>
       <li class="info-item"><p class="info-name">Views</p><p class="info-value">${item.views}</p></li>
       <li class="info-item"><p class="info-name">Comments</p><p class="info-value">${item.comments}</p></li> 
       <li class="info-item"><p class="info-name">Downloads</p><p class="info-value">${item.downloads}</p></li> 
      </ul>
    </li>
  `;
}

function createGalleryList(items) {
  return `${items.map(createGalleryItem).join("")}`;
}

export function createGallery(items) {
  galleryEl.innerHTML = createGalleryList(items);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = "";
}

