(this["webpackJsonpportfolio-bot-1"]=this["webpackJsonpportfolio-bot-1"]||[]).push([[0],[,,,,function(e,a,t){},function(e,a,t){},,function(e){e.exports=JSON.parse('[{"id":0,"url":"https://agustinmme.github.io/react-frontmentor-1/","image":"https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1613128397%2FChallenges%2Fluxbxwbgw9q8cj3i8d7l.jpg&w=828&q=75","name":"Crowdfunding product page","text":"Frontendmentor.io","type":["React","Chakra-ui"]},{"id":1,"url":"https://agustinmme.github.io/react-frontmentor-socialdashboard/","image":"https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1585840948%2FChallenges%2Fftdvklbtn6y7ydjxjjuj.jpg&w=828&q=75","name":"Social media dashboard","text":"Frontendmentor.io","type":["React","Chakra-ui"]},{"id":2,"url":"#","image":"https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1573656786%2FChallenges%2Ffnzuxyyl1wwyscqgaiyc.jpg&w=828&q=75","name":"(Proximamente)","text":"instagram","type":["React","Chakra-ui"]},{"id":3,"url":"#","image":"https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1584486415%2FChallenges%2Fag173wjmrf6agqxqqeoh.jpg&w=828&q=75","name":"(Proximamente)","text":"youtube","type":["React","Chakra-ui"]},{"id":4,"url":"https://play.google.com/store/apps/details?id=androidunlp.tpgrupo7.cuadrocromatico","image":"https://play-lh.googleusercontent.com/vcy-kTpU_LjtegCx6h4V25Mdi-udkJGvzhcyh_YEfaYI4N5x0OpcJU3B4SKlqluI2As=w1920-h937-rw","name":"Cuadro cromatico","text":"instagram","type":["Java","Android"]},{"id":5,"url":"https://agustinmme.github.io/react-chakra/","image":"https://play-lh.googleusercontent.com/vcy-kTpU_LjtegCx6h4V25Mdi-udkJGvzhcyh_YEfaYI4N5x0OpcJU3B4SKlqluI2As=w1920-h937-rw","name":"ToDo List","text":"instagram","type":["React","Chakra-ui"]},{"id":6,"url":"https://github.com/juanpabloch/tp-grupo6","image":"https://play-lh.googleusercontent.com/vcy-kTpU_LjtegCx6h4V25Mdi-udkJGvzhcyh_YEfaYI4N5x0OpcJU3B4SKlqluI2As=w1920-h937-rw","name":"Where\'s my books?(Backend)","text":"instagram","type":["Nodejs","MySql"]}]')},,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(6),i=t.n(r),s=(t(16),t(1)),c=t.n(s);t(19);function d(){return o.a.createElement("div",{className:"AvatarBot"})}t(4);function l(e){e.text;var a=e.name,t=e.img,n=e.type,r={Nodejs:"card-tag tag-normal nodejs",Javascript:"card-tag tag-normal  js",Java:"card-tag tag-normal  java",Android:"card-tag tag-normal  android",React:"card-tag tag-normal  react",MySql:"card-tag tag-normal  mysql","Chakra-ui":"card-tag tag-normal  chakra"};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"property-card"},o.a.createElement("span",null,o.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")"),height:"16em",width:"14em",padding:"1em 2em",position:"Absolute",top:"0px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},o.a.createElement("div",{className:"property-image-title"}))),o.a.createElement("div",{className:"property-description"},o.a.createElement("h5",null," ",a," "),o.a.createElement("div",{className:"card-info"},o.a.createElement("div",{className:"card-about"},n.map((function(e){return o.a.createElement("span",{key:e,className:r[e]},e)})))))))}var m=t(7);function u(){return o.a.createElement("div",{className:"card-container"},m.map((function(e){return o.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url},o.a.createElement(l,{className:"item-list",name:e.name,text:e.text,img:e.image,type:e.type}))})))}t(20);var g=function(e){var a=[{text:"Acerca de M\xcd",handler:e.actionProvider.handleAbout,id:1},{text:"Proyectos",handler:e.actionProvider.handleProyect,id:2},{text:"Conctacto",handler:e.actionProvider.handleContact,id:4},{text:"Redes",handler:e.actionProvider.handleRedes,id:5},{text:"Comandos",handler:e.actionProvider.handleCommand,id:6}].map((function(e){return o.a.createElement("button",{key:e.id,onClick:e.handler,className:"option-button"},e.text)}));return o.a.createElement("div",{className:"options-container"},a)};t(21);function h(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"social-links"},o.a.createElement("a",{className:"flex-center",href:"https://github.com/agustinmme"},o.a.createElement("span",{className:"social-btn flex-center",id:"github"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),o.a.createElement("span",null,"agustinmme"))),o.a.createElement("a",{className:"flex-center",href:"https://www.linkedin.com/in/agustinmme/"},o.a.createElement("span",{className:"social-btn flex-center",id:"linkedin"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})),o.a.createElement("span",null,"in/chancesquires")))))}var p={botName:"Agustin",customComponents:{botAvatar:function(e){return o.a.createElement(d,e)}},initialMessages:[Object(s.createChatBotMessage)("\xa1Hola! \xa1Soy ".concat("Agustin","! Contame, \xbfQue quieres saber de mi?"),{widget:"options"})],widgets:[{widgetName:"options",widgetFunc:function(e){return o.a.createElement(g,e)}},{widgetName:"challenges",widgetFunc:function(e){return o.a.createElement(u,e)}},{widgetName:"redes",widgetFunc:function(e){return o.a.createElement(h,e)}}]},v=t(9),f=t(10),y=t(2),w=function e(a,t){var n=this;Object(y.a)(this,e),this.greet=function(){var e=n.createChatBotMessage("\xa1Hola! Lindo d\xeda \xbfno?");n.addMessageToState(e)},this.ungreet=function(){var e=n.createChatBotMessage("\xa1Chau! \ud83d\udc4b  Me quedo ac\xe1 para ayudarte cuando necesites ");n.addMessageToState(e)},this.ty=function(){var e=n.createChatBotMessage("\xa1De nada! Estoy para ayudarte \ud83d\ude03");n.addMessageToState(e)},this.notFound=function(){var e=n.createChatBotMessage("Por el momento no cuento con esa informaci\xf3n. Tal vez pueda ayudarte con algo m\xe1s. ");n.addMessageToState(e)},this.handleJavascriptQuiz=function(){var e=n.createChatBotMessage("Fantastic. Here is your quiz. Good luck!",{widget:"javascriptQuiz"});n.addMessageToState(e)},this.handleProyect=function(){var e=n.createChatBotMessage("Dale, te pasos mis proyecto y challenges \ud83d\ude06",{widget:"challenges"});n.addMessageToState(e)},this.handleRedes=function(){var e=n.createChatBotMessage("Te dejo mis redes\ud83d\ude06",{widget:"redes"});n.addMessageToState(e)},this.handleNav=function(){var e=n.createChatBotMessage("\ud83e\udd16",{widget:"options"});n.addMessageToState(e)},this.handleHow=function(){var e=n.createChatBotMessage("\xa1Muy bien, gracias! \ud83d\ude0a Espero que vos tambi\xe9n \xa1Listo para ayudarte! ");n.addMessageToState(e)},this.handleContact=function(){var e=n.createChatBotMessage("Te dejo mi correo :\ud83d\udce7 agustinmansilla240@gmail.com ");n.addMessageToState(e)},this.handleCommand=function(){var e=n.createChatBotMessage("\ud83e\udd16 Mis comandos por ahora son: hola,chau,gracias,menu,redes,comandos");n.addMessageToState(e)},this.handleAbout=function(){var e=n.createChatBotMessage("Hola,soy un programador en b\xfasqueda de mi primer empleo en el \xe1rea IT en el cual pueda aprender y desarrollarme como profesional mientras termino la carrera. Me considero una persona perseverante con gran capacidad de adaptaci\xf3n y aprendizaje, en constante b\xfasqueda de nuevos conocimientos  y aprendizajes, con el objetivo de crecer como persona y como profesional. Disfruto de nuevos desaf\xedos para probar mi capacidad constantemente, me gusta conocer gente nueva, tanto para trabajar en equipo como para compartir historias y experiencias.");n.addMessageToState(e)},this.addMessageToState=function(e){n.setState((function(a){return Object(f.a)({},a,{messages:[].concat(Object(v.a)(a.messages),[e])})}))},this.createChatBotMessage=a,this.setState=t},b=t(8),x=function(){function e(a){Object(y.a)(this,e),this.actionProvider=a}return Object(b.a)(e,[{key:"parse",value:function(e){var a=e.toLowerCase(),t={hola:this.actionProvider.greet,chau:this.actionProvider.ungreet,"como estas":this.actionProvider.handleHow,comandos:this.actionProvider.handleCommand,menu:this.actionProvider.handleNav,gracias:this.actionProvider.ty,redes:this.actionProvider.handleRedes};["hola","chau","gracias","comandos","menu","redes"].includes(a)?t[a]():this.actionProvider.notFound()}}]),e}();t(5);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement(c.a,{config:p,actionProvider:w,messageParser:x})))};i.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.d5c4b444.chunk.js.map