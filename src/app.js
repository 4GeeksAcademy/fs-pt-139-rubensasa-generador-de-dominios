import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let i,j,k,l;


window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronombre = ['Sr', 'El','nuestro'];
  let adj = ['bueno', 'grande','gran','tonto','hermoso','idiota'];
  let nombre = ['gato', 'perro','girafa','hombre',];
  let extension =['.com','.net','.net','.es','.us','.eu','.io'];
  
  for (i=0;i<pronombre.length;i++)
  {
    for (j=0;j<adj.length;j++)
    {
      for (k=0;k<nombre.length;k++)
      {
        for (l=0;l<extension.length;l++)
        {console.log(pronombre[i]+adj[j]+nombre[k]+extension[l]);}
      }
    }
  }

};
