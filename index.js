import{a as u,S as d,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="56434184-d7ae5a4d0d706843f04b89917",p="https://pixabay.com/api/";async function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await u.get(p,{params:o})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${e.likes}</p>
        <p class="info-item"><b>Views</b> ${e.views}</p>
        <p class="info-item"><b>Comments</b> ${e.comments}</p>
        <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("visible")}function w(){c.classList.remove("visible")}const f=document.querySelector(".form");f.addEventListener("submit",v);async function v(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search query",position:"topRight"});return}b(),L();try{const e=await y(o);e.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",iconColor:"#fff",close:!0,closeOnClick:!0}):h(e.hits)}catch(e){n.error({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",iconColor:"#fff"}),console.error(e)}finally{w(),f.reset()}}
//# sourceMappingURL=index.js.map
