 <!-- <div align=center>
  <a href="https://git.io/typing-svg" style="margin-left: 20px;">
    <img src="https://readme-typing-svg.demolab.com?font=Fira%20Code&center=true&width=440&height=45&color=754731&vCenter=true&duration=1&pause=1023&repeat=false&&lines=Nicol%C3%A1s+Perdomo" alt="Typing SVG" />
  </a>
</div>


   <div align=center>
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira%20Code&center=true&width=440&height=45&color=754731&vCenter=true&pause=1000&size=22&lines=Full+stack+web+developer+%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB;En+busqueda+de+nuevos+desaf%C3%ADos+%F0%9F%8E%AF+;Desarrollador+independiente+%F0%9F%90%92" alt="Typing SVG" />
  </a>
</div>

<p align="center">
  <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncDnWDctqjHHkxTnJvgFKfkjlDzZGSqmjlwtpmvPCncnbLZKzTsgjFdwpgTzFrbsLNxWW"><img width="32px" alt="Email" title="Email" src="https://github.com/EmuSTTM/EmuSTTM/blob/main/sources/email.png"/></a>
  &#8287;&#8287;&#8287;&#8287;&#8287;
  <a href="https://discord.com/channels/@me/507590597465473034" alt="Discord" title="EmuSTTM#6439"><img width="32px" src="https://github.com/EmuSTTM/EmuSTTM/blob/main/sources/discord.png"/></a>
  &#8287;&#8287;&#8287;&#8287;&#8287;
  <a href="https://www.instagram.com/nico.perdomo.03/"><img width="32px" alt="Instagram" title="Instagram" src="https://github.com/EmuSTTM/EmuSTTM/blob/main/sources/instagram-logo.png"></a>

</p> -->





<!-- <div > -->
<!-- <br> -->

## Anotaciones sobre el proyecto

La app está estructurada de la siguiente forma:
Root:
index.html en el root directory: tenemos control del archivo principal de nuestra web y desde allí aplicamos SEO, modificamos el title e inyectamos los scripts desde el archivo 'main.jsx' y los elementos dentro del 'div' con id 'root'.
Actualmente la app solo cuenta con dependencia de react: 'react', 'react-dom' y 'react-router-dom'.

Dentro del root tenemos: src, public y dist.
Public:
En este directorio se encuentran todos los assets (iconos, imagenes, favicon, etc).

Dist:
Es el build de toda la aplicación para poder subirlo a un host. El build con vite, a través del comando 'npm run build'.

Src: 
Dentro del archivo 'main.jsx' se ejecuta el archivo 'App.jsx', dentro del 'CustomProvider' proveido desde 'context.jsx' del directorio 'global' (todo dentro del StrictMode). También se toma información como la posición del cursor.
En el archivo 'App.jsx' se ejecuta el router que contiene el componente 'navbar' y todas las rutas posibles (handleando los error paths). En este archivo se importan y se muestra cada una de las screens.
Por último, en el root directory, tenemos el archivo 'index.css' que se encarga de hacer el reset porque está linkeado al archivo html principal.
Luego contamos con 4 directorios: components, data, context, styles y screens.
components: aqui están todos los componentes separados en un directorio cada uno (dentro su archivo .jsx y .scss correspondiente) y el archivo 'index.js' que se encarga de hacer la funcion de barrel y exportar todos los componentes de la misma forma.
data: aqui están todos los archivos '.json' que contienen la data usada en el sitio, separados en un archivo para cada una de las screens (skills, works y projects) y el archivo 'index.js' que se encarga de hacer la funcion de barrel y exportar toda la data de la misma forma.
context: se encuentra el archivo 'context.jsx' donde están definidas las funciones y custom hooks para que puedan usarse de manera global en todos los archivos.
screens: aqui están todas las screens (secciones) separadas en un archivo '.jsx' cada una. y el archivo 'index.js' que se encarga de hacer la funcion de barrel y exportar todas las screens de una misma forma.
styles: están todos los archivos scss que se usan para compilar al archivo styles.css que es el único que toma la app. está dividido en base (keyframes, responsive y global) y en components (todos los componentes)

Techs:
Todo este codigo está desarrollado en javascript, usando el framework react y el pre-procesador de css llamado SASS. Para la creación, desarrollo y ejecución del projecto de manera local se usa Vite.
El manejo de versiones es a través de Git, con 3 branches en total: 'main', 'development' y 'features'. Cada branch directamente relacionada con su entorno correspondiente: main (Prod) - development (Dev) - features (Sandbox). Todo el desarrollo, tanto micro desarrollo en cada componente, como macro desarollo en screens completas y arreglos en el codigo, se realiza en la branch 'development'. Una vez que el desarrollo está completo a cierto punto que puede conciderarse una actualización, se realiza un commit a la branch 'features'. A esa actualizacion se le realizan los test UAT, tanto unitarios como integrales. Tambien se realizan test de codigo.
Una vez que se testeó, fixeó y aprobó el commit hecho a features, se realizará el commit a 'main' (junto con sus tests correspondientes).
El projecto cuenta con un repositorio en linea hosteado en Github dividido exactamente en mismas branches. Cada branch está conectada con su propio deploy hecho en Vercel: main (Prod) - development (Dev) - features (Sandbox).


## Sobre mí

¡Qué tal! Soy un desarrollador web autodidacta de Argentina y hace un tiempo empecé a meterme de lleno en la programación. La verdad que me encanta lo que hago y siempre estoy buscando formas de seguir aprendiendo y mejorar mis habilidades técnicas. Me gusta estar al tanto de las últimas tendencias en tecnología y siempre estoy explorando nuevas herramientas para seguir creciendo como programador. 😊
 
Si tenés alguna duda o querés hablar sobre algún proyecto en el que podamos trabajar juntos, no dudes en contactarme por mi [correo electrónico](https://mail.google.com/mail/u/0/#inbox?) 
o por mi perfil de [Linkedin](https://www.linkedin.com/in/nicol%C3%A1s-perdomo-5b270b23a/). Estoy siempre dispuesto a hacer nuevas conexiones y a explorar oportunidades. 




</div>

<details> 
  <summary><h3>📘 Mis proyectos</h3></summary>

  <!-- <div align="center">
    <a href="https://github.com/EmuSTTM/Electronic-Components-Store">
      <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=EmuSTTM&repo=Electronic-Components-Store&theme=react&bg_color=754731&title_color=FCD757&hide_border=true&icon_color=F8D866&show_icons=false">
    </a>
   <a href="https://github.com/EmuSTTM/Mern-Context-Crud">
      <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=EmuSTTM&repo=Mern-Context-Crud&theme=react&bg_color=754731&title_color=FCD757&hide_border=true&icon_color=F8D866&show_icons=false">
    </a>
   <a href="https://github.com/EmuSTTM/Google-Translate-Clone">
      <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=EmuSTTM&repo=Google-Translate-Clone&theme=react&bg_color=754731&title_color=FCD757&hide_border=true&icon_color=F8D866&show_icons=false">
    </a>
   <a href="https://github.com/EmuSTTM/React-Gif-Search">
      <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=EmuSTTM&repo=React-Gif-Search&theme=react&bg_color=754731&title_color=FCD757&hide_border=true&icon_color=F8D866&show_icons=false">
    </a>

  </div>  -->

#
</details>


<details>

<summary><h3>🛠️ Mis herramientas</h3></summary>

- Lenguajes de programación: JavaScript, TypeScript, Python, HTML, CSS

- Frameworks: ReactJS, NodeJS, Express, NextJS

- Bases de datos: MongoDB, MySQL, PostgreSQL


#
</details>

<details>

<summary><h3>🙂 Habilidades blandas</h3></summary>

- Proactividad: Siempre estoy buscando desafiar mis conocimientos y tomo cada oportunidad para mejorar mis habilidades.

- Capacidad de aprendizaje: Tengo un buen uso de mis capacidades lógicas.

- Colaboración: Estoy abierto al trabajo en equipo y busco críticas constructivas del mismo.

- Resolución de problemas: Disfruto enfrentando desafíos lógicos y técnicos.


#
</details>


<!-- <p align='center'><a href='https://github.com/EmuSTTM'><img src='https://github-readme-streak-stats.herokuapp.com/?user=EmuSTTM&theme=flag-india'></a></p> -->



<p align=center >¡Gracias por visitar mi perfil de GitHub!</p> 


<!-- <div align=center> -->

<!-- ![](https://komarev.com/ghpvc/?username=EmuSTTM&style=for-the-badge&color=orange)
<img alt="followers" title="Follow me on Github" src="https://custom-icon-badges.demolab.com/github/followers/EmUSTTM?color=7c007c&labelColor=555555&style=for-the-badge&logo=person-add&label=Follow&logoColor=white"/></a> -->


<!-- </div> -->