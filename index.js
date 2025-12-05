import{a as f,S as m,i}from"./assets/vendor-CNqCr-V-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const d="53409714-04280dc0b4d626ff41b2589e1",p="https://pixabay.com/api/";function y(e){return f.get(p,{params:{key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(){u.classList.remove("hidden")}function h(){u.classList.add("hidden")}const L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function w(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img
          src="${e.webformatURL}"
          alt="${e.tags}"
          class="gallery-image"
          loading="lazy"
        />
      </a>
      <ul class="info">
       <li class="info-item"><p class="info-name">Likes</p><p class="info-value">${e.likes}</p></li>
       <li class="info-item"><p class="info-name">Views</p><p class="info-value">${e.views}</p></li>
       <li class="info-item"><p class="info-name">Comments</p><p class="info-value">${e.comments}</p></li> 
       <li class="info-item"><p class="info-name">Downloads</p><p class="info-value">${e.downloads}</p></li> 
      </ul>
    </li>
  `}function v(e){return`${e.map(w).join("")}`}function b(e){c.innerHTML=v(e),L.refresh()}function S(){c.innerHTML=""}const l=document.querySelector(".form");l.addEventListener("submit",async e=>{e.preventDefault();const s=l.elements["search-text"].value.trim();if(!s){i.warning({title:"Oops",message:"Please enter a search query."});return}S(),g();try{const a=await y(s);if(!a.hits.length){i.error({title:"No results",message:"Sorry, there are no images matching your search query."});return}b(a.hits)}catch{i.error({title:"Error",message:"Something went wrong. Try again later."})}finally{h()}});
//# sourceMappingURL=index.js.map
