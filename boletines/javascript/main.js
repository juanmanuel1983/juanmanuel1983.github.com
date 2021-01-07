  console.log("Hola mundo desde el archivo JS");

  let container = document.querySelector(".container");

  console.log(container);

  let tabla = document.querySelector(".table");

  console.log(tabla);

  let links = document.querySelectorAll("a");
  console.log(links);

  links.forEach(function(link) {
    console.log(link);
  });


  let td = document.querySelectorAll("td");

  td.forEach(function(td) {
    td.addEventListener("click",function(){
      console.log(this);
    });
  });

  let closes= document.querySelectorAll(".close");


  closes.forEach(function(close) {
    close.addEventListener("click",function(ev){
      /*no ejecuta el evento con su funcionamiento por defecto*/
      ev.preventDefault();

      let content = document.querySelector('.content');

      content.classList.remove("animate__animated");
      content.classList.remove("animate__fadeInDown");

      //animate__animated animate__fadeInDown

      content.classList.add("animate__fadeOutUp");
      content.classList.add("animate__animated");

      setTimeout(function(){
        location.href="../index.html";
      },600);
      //setInterval
      return false;
    });
  });

  /*let iconos = document.querySelectorAll("i");

  iconos.forEach(function (icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star");
  });*/
