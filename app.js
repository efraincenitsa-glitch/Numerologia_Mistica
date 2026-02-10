const valores={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};

const interpretaciones={
camino:{1:"Liderazgo e independencia.",2:"Cooperación y sensibilidad.",3:"Creatividad y expresión.",4:"Orden y constancia.",5:"Libertad y cambio.",6:"Amor y responsabilidad.",7:"Sabiduría interior.",8:"Poder y logros.",9:"Servicio y cierre de ciclos.",11:"Intuición elevada."},
alma:{1:"desea independencia.",2:"busca armonía.",3:"anhela expresarse.",4:"necesita seguridad.",5:"desea libertad.",6:"busca vínculos.",7:"anhela conocimiento.",8:"desea éxito.",9:"busca trascender."},
personalidad:{1:"proyecta liderazgo.",2:"se muestra conciliadora.",3:"irradia simpatía.",4:"se percibe confiable.",5:"se muestra adaptable.",6:"proyecta cuidado.",7:"se muestra reservada.",8:"proyecta autoridad.",9:"se percibe solidaria."}
};

function reducir(n){while(n>9&&n!==11&&n!==22){n=n.toString().split('').reduce((a,b)=>a+ +b,0)}return n}
function calcularNombre(nombre){return reducir(nombre.toUpperCase().replace(/[^A-Z]/g,"").split('').reduce((s,l)=>s+(valores[l]||0),0))}

function calcular(){
 const nombre=document.getElementById('nombre').value.trim();
 const fecha=new Date(document.getElementById('fecha').value);
 if(!nombre||!fecha.getTime())return;
 const camino=reducir(fecha.getDate()+fecha.getMonth()+1+fecha.getFullYear());
 const expresion=calcularNombre(nombre);
 const alma=reducir(expresion+1);
 const personalidad=reducir(expresion+2);
 document.getElementById("resultados").innerHTML=`<p><strong>${nombre}</strong></p><p>Camino de Vida: ${camino}</p><p>Alma: ${alma}</p><p>Personalidad: ${personalidad}</p>`;
 document.getElementById("textoResumen").innerHTML=`<h4>✨ Camino ${camino}</h4><p>${interpretaciones.camino[camino]}</p><h4>💖 Alma ${alma}</h4><p>${interpretaciones.alma[alma]}</p><h4>🎭 Personalidad ${personalidad}</h4><p>${interpretaciones.personalidad[personalidad]}</p>`;
 document.getElementById("resumen").style.display="block";
}
