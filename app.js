// Punto A - Sin conectores logicos

let vida = prompt('Ingrese su vida: ');


if(vida <= 0){
    alert(`Tu vida es de ${vida}. Estas muerto`);
}else if(vida <= 20){
    alert('Tu vida es muy baja sera mejor que huyas!!');
}else if(vida <= 50){
    alert('Modo defensivo activado');
}else if(vida <= 80){
    alert('Modo moderado activado');
}else if (vida <= 100){
    alert('Modo ofensivo activado');
}else(
    alert('Solo se puede ingresar valores entre 0 y 100. Vuelve a intentarlo')
)


// Punto B - Con conectores logicos

if(vida <= 0){
    alert(`Tu vida es de ${vida}. Estas muerto`);
}else if(vida >= 1 && vida <=20){
    alert('Tu vida es muy baja sera mejor que huyas!!');
}else if(vida >= 21 && vida <= 50){
    alert('Modo defensivo activado');
}else if(vida >= 51 && vida <= 80){
    alert('Modo moderado activado');
}else if (vida >= 81 && vida <= 100){
    alert('Modo ofensivo activado');
}else(
    alert('Solo se puede ingresar valores entre 0 y 100. Vuelve a intentarlo')
)
