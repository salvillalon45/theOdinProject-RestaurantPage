!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);console.log("Inside index.js");let i=function(){const e=document.querySelector("#content");document.createElement("main");function n(){console.log("inside createHeader()");const n=document.createElement("header"),t=document.createElement("div"),i=document.createElement("div"),a=document.createElement("nav"),s=document.createElement("ul"),r=document.createElement("li"),o=document.createElement("li"),c=document.createElement("li"),d=document.createElement("li");t.classList.add("nav-container"),i.classList.add("logo-container"),a.classList.add("nav-links"),s.classList.add("menu"),r.classList.add("nav-link"),o.classList.add("nav-link"),c.classList.add("nav-link"),d.classList.add("nav-link"),i.innerHTML='<p class="logo">Sal\'s Kitchen</p>',d.innerHTML="Home",r.innerHTML="Our Story",o.innerHTML="Menu",c.innerHTML="Location",s.append(d),s.append(r),s.append(o),s.append(c),a.append(s),t.append(i),t.append(a),n.append(t),e.append(n)}function t(){console.log("Inside createFooter()");const n=document.createElement("footer");n.classList.add("footer"),n.innerHTML='<ul class="social-icons">\n                    <li><span>&copy; 2020 Made by Salvador Villalon</span></li>\n                    <li>\n                        <a href="https://www.linkedin.com/in/salvadorvillalon/" class="social-icon">\n                            <i class="fa fa-linkedin" aria-hidden="true"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href="https://salvillalon45.github.io/" class="social-icon">\n                            <i class="fa fa-user" aria-hidden="true"></i>\n                        </a>\n                    </li>\n                </ul>',e.append(n)}return{render:function(){n(),t()},createHeader:n,createFooter:t}}(),a=function(){const e=document.querySelector("#content"),n=document.createElement("main");return n.classList.add("index-page"),{render:function(){!function(){console.log("Inside createJumbotron()");const t=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");t.classList.add("jumbotron"),i.classList.add("overlay-container"),a.classList.add("jumbotron-text"),a.innerHTML="<h1>You Hungry? We got you with deals!</h1>\n<h2>Order in with pick up or free delivery!</h2>",i.append(a),t.append(i),n.append(t),e.append(n)}(),function(){console.log("Inside createOfferContainerText()");const t=document.createElement("div");t.classList.add("offer-container-text"),t.innerHTML="<h2>We got good offers this month!</h2>",n.append(t),e.append(n)}(),function(){console.log("Inside createOfferContainer()");const t=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div");t.classList.add("offer-container"),i.classList.add("offer-card"),a.classList.add("offer-card"),s.classList.add("offer-card"),i.innerHTML='<img src="../src/assets/images/burger.jpg">\n<h3>Burger</h3>\n<h4>Get two burgers</h4>\n<h4>for the price of one</h4>',a.innerHTML='<img src="../src/assets/images/pho.jpg">\n<h3>Pho</h3>\n<h4>Get one pho,</h4>\n<h4>get the second one free</h4>',s.innerHTML='<img src="../src/assets/images/tacos.jpg">\n<h3>Tacos de Carne Asada</h3>\n<h4>Get tacos and</h4>\n<h4>drink combo for a low price</h4>',t.append(i),t.append(a),t.append(s),n.append(t),e.append(n)}()}}}(),s=function(){const e=document.querySelector("#content"),n=document.createElement("main");return n.classList.add("our-story-page"),n.classList.add("hidden"),{render:function(){!function(){const t=document.createElement("div");t.classList.add("our-story-container"),t.innerHTML="<h1>Our Story</h1>\n            <p>Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Enim blandit volutpat maecenas volutpat blandit. Dui id ornare arcu odio. Arcu cursus euismod quis viverra nibh. Elementum tempus egestas sed sed risus pretium quam. Vulputate mi sit amet mauris commodo quis. Sapien eget mi proin sed libero enim. Proin gravida hendrerit lectus a. Ipsum dolor sit amet consectetur. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Nec dui nunc mattis enim ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. At quis risus sed vulputate. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Convallis convallis tellus id interdum velit. Diam quis enim lobortis scelerisque fermentum. Turpis massa tincidunt dui ut ornare lectus. Condimentum id venenatis a condimentum vitae sapien pellentesque.</p>\n            <br>\n            <p>Id aliquet lectus proin nibh nisl condimentum id venenatis a. Nec ultrices dui sapien eget mi proin. Integer feugiat scelerisque varius morbi enim. Elementum sagittis vitae et leo duis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Pretium fusce id velit ut tortor pretium. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Varius morbi enim nunc faucibus a pellentesque sit. Diam ut venenatis tellus in metus. Sem viverra aliquet eget sit amet tellus cras adipiscing. Lacus sed viverra tellus in. Accumsan tortor posuere ac ut consequat semper.</p>\n            <br>\n            <p>Lobortis scelerisque fermentum dui faucibus in ornare quam. Vitae aliquet nec ullamcorper sit amet. Adipiscing enim eu turpis egestas pretium aenean pharetra. Varius vel pharetra vel turpis nunc eget lorem dolor. Hendrerit dolor magna eget est lorem. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Gravida in fermentum et sollicitudin ac. Ultricies leo integer malesuada nunc vel. Ultricies lacus sed turpis tincidunt id aliquet risus. Turpis nunc eget lorem dolor. Quis commodo odio aenean sed adipiscing diam. Amet commodo nulla facilisi nullam. Nisl purus in mollis nunc sed id semper risus. Est velit egestas dui id ornare arcu odio.</p>\n            <br>\n            <p>Massa vitae tortor condimentum lacinia quis. Sed enim ut sem viverra aliquet eget. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Eget egestas purus viverra accumsan. Sem integer vitae justo eget magna fermentum iaculis eu non. Congue nisi vitae suscipit tellus. Sit amet mattis vulputate enim nulla. Eget aliquet nibh praesent tristique. Nulla at volutpat diam ut venenatis tellus. Turpis nunc eget lorem dolor. Turpis egestas integer eget aliquet.</p>",n.append(t),e.append(n)}()}}}(),r=function(){const e=document.querySelector("#content"),n=document.createElement("main");return n.classList.add("location-page"),n.classList.add("hidden"),{render:function(){!function(){const t=document.createElement("div");t.classList.add("location-container"),t.innerHTML="<h1>Locations</h1>\n<p>Calexico, CA</p>\n<br>\n<p>Chula Vista, CA</p>\n<br>\n<p>New York, NY</p>\n<br>\n<p>Chicago, IL</p>\n<br>\n<p>Irvine, CA</p>\n<br>\n<p>San Diego, CA</p>",n.append(t),e.append(n)}()}}}(),o=function(){const e=document.querySelector("#content"),n=document.createElement("main");return n.classList.add("menu-page"),n.classList.add("hidden"),{render:function(){!function(){console.log("Inside createMenu()");const t=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div");t.classList.add("menu-container-text"),i.classList.add("menu-container"),a.classList.add("menu-card"),s.classList.add("menu-card"),r.classList.add("menu-card"),o.classList.add("menu-card"),c.classList.add("menu-card"),d.classList.add("menu-card"),a.innerHTML='<img src="../src/assets/images/burger.jpg">\n<h3>Burger</h3>',s.innerHTML='<img src="../src/assets/images/pho.jpg">\n<h3>Pho</h3>',r.innerHTML='<img src="../src/assets/images/tacos.jpg">\n<h3>Tacos de Carne Asada</h3>',o.innerHTML='<img src="../src/assets/images/pancakes.jpg">\n<h3>Pancakes</h3>',c.innerHTML='<img src="../src/assets/images/steak.jpg">\n<h3>Steak</h3>',d.innerHTML='<img src="../src/assets/images/shrimps.jpg">\n<h3>Roasted Shrimp</h3>',t.innerHTML="<h1>Our Menu</h1>",i.append(a),i.append(s),i.append(r),i.append(o),i.append(c),i.append(d),n.append(t),n.append(i),e.append(n)}()}}}();function c(e){console.log(e);let n=document.querySelector(".index-page"),t=document.querySelector(".location-page"),i=document.querySelector(".menu-page"),a=document.querySelector(".our-story-page");a.classList.add("hidden"),t.classList.add("hidden"),i.classList.add("hidden"),"Our Story"===e?(a.classList.remove("hidden"),n.classList.add("hidden")):"Location"===e?(t.classList.remove("hidden"),n.classList.add("hidden")):"Home"===e?n.classList.remove("hidden"):(i.classList.remove("hidden"),n.classList.add("hidden"))}i.createHeader(),a.render(),s.render(),r.render(),o.render(),i.createFooter(),function(){let e=Array.from(document.querySelectorAll(".nav-link"));for(let n=0;n<e.length;n++){e[n].addEventListener("click",(function(){c(this.innerHTML)}))}}()}]);