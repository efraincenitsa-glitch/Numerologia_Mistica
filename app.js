const valores={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};

const interpretaciones={
camino:{
1:"El Camino de Vida 1 representa liderazgo, iniciativa e independencia. Vienes a aprender a confiar en ti mismo, abrir caminos propios y desarrollar seguridad personal, evitando el ego o la impaciencia.",
2:"El Camino de Vida 2 habla de sensibilidad, cooperación y diplomacia. Tu misión es unir, armonizar y aprender a valorar tu intuición.",
3:"El Camino de Vida 3 simboliza creatividad, expresión y alegría. Viniste a comunicar, inspirar y transmitir emociones.",
4:"Orden, disciplina y construcción sólida. Tu aprendizaje es la constancia y la estabilidad.",
5:"Libertad, cambio y expansión. Necesitas movimiento y experiencias variadas.",
6:"Amor, responsabilidad y servicio. Vienes a crear armonía y cuidar a otros.",
7:"Búsqueda interior, sabiduría y espiritualidad profunda.",
8:"Poder personal, logros materiales y autoridad bien canalizada.",
9:"Humanismo, compasión y cierre de ciclos. Tu misión es trascender.",
11:"Intuición elevada y misión espiritual."
},
alma:{
1:"desea independencia y autoafirmación.",
2:"busca amor, paz y conexión emocional.",
3:"anhela expresarse libremente.",
4:"necesita seguridad y bases firmes.",
5:"desea libertad y aventura.",
6:"busca armonía y vínculos profundos.",
7:"anhela conocimiento interior.",
8:"desea reconocimiento y éxito.",
9:"busca ayudar y trascender lo personal."
},
personalidad:{
1:"proyecta liderazgo, seguridad e iniciativa.",
2:"se muestra amable y conciliadora.",
3:"irradia simpatía y carisma.",
4:"se percibe responsable y confiable.",
5:"se muestra inquieta y adaptable.",
6:"proyecta cuidado y cercanía.",
7:"se muestra reservada y analítica.",
8:"proyecta autoridad y firmeza.",
9:"se percibe solidaria y comprensiva."
}
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
 document.getElementById("textoResumen").innerHTML=`<h4>✨ Camino de Vida ${camino}</h4><p>${interpretaciones.camino[camino]}</p><h4>💖 Alma ${alma}</h4><p>En tu interior, tu alma ${interpretaciones.alma[alma]}</p><h4>🎭 Personalidad ${personalidad}</h4><p>Hacia el mundo, tu personalidad ${interpretaciones.personalidad[personalidad]}</p>`;
 document.getElementById("resumen").style.display="block";
}
