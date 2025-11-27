import{a as f,S as d,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m="53409714-04280dc0b4d626ff41b2589e1",p="https://pixabay.com/api/";function y(e){return f.get(p,{params:{key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const u=document.querySelector(".gallery");let s=null;function g(){s||(s=document.createElement("div"),s.classList.add("loader","hidden"),document.body.appendChild(s)),s.classList.remove("hidden")}function h(){s&&s.classList.add("hidden")}const L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function v(e){return`
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
  `}function w(e){return`${e.map(v).join("")}`}function b(e){u.innerHTML=w(e),L.refresh()}function E(){u.innerHTML=""}const c=document.querySelector(".form");c.addEventListener("submit",async e=>{e.preventDefault();const a=c.elements["search-text"].value.trim();if(!a){n.warning({title:"Oops",message:"Please enter a search query."});return}E(),g();try{const o=await y(a);if(!o.hits.length){n.error({title:"No results",message:"Sorry, there are no images matching your search query."});return}b(o.hits)}catch{n.error({title:"Error",message:"Something went wrong. Try again later."})}finally{h()}});
//# sourceMappingURL=index.js.map
