"use strict";

(window.onhashchange = ()=>{
  document.querySelectorAll("body > main > nav > a").forEach((a) => {
    if(a.getAttribute("href") == window.location.hash){
      a.setAttribute("active", "");
    }else{
      a.removeAttribute("active");
    }
  });

  let validHash = false;
  document.querySelectorAll("body > main > nav > a").forEach((item) => {
    if(item.getAttribute("href") == window.location.hash){
      validHash = true;
    }
  });
  if(validHash == false){
    window.location.hash = document.querySelector("body > main > nav > a:nth-child(1)").getAttribute("href");
  }
})();
