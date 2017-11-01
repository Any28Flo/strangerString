export default  function strangerString(str){

  let translation = str;
  //si la palabra termia en "ar", se le quitan
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2);
  }
  // Si la  palabra incia con "z", se le añade "pe" al final
  if(str.toLowerCase().startsWith('z')){
    translation += 'pe';
  }
  //si la palabra traducida tiene 10 o más letras
  //Se debe partir a la mitad y unir con guión del medio
  const length = translation.length;
  if(translation.length >=10){
    const firsHalf= translation.slice(0,Math.round(length/2));
    const secondHalf = translation.slice( Math.round(length/2))
    translation =  `${firsHalf}-${secondHalf}`
  }
    //Si la palabra original es un palindromo
    //ninguna regla anterior cuenta y se devuelve
    //la misma palabra intercalando mayúsculas y minúsculas
  if(str == reverse(str)){
    return aMayusculas(str);
  }
  return translation;

}
const aMayusculas = (str) => {
  const length = str.length;
  let translation = '';
  let capitalize = true;
  for(let i = 0 ; i< length ; i++){
    const char = str.charAt(i);
    translation += capitalize ? char.toUpperCase(): char.toLowerCase()
    capitalize = !capitalize;
  }
   return translation;
}
const aMinusculas = (str) =>{
  return str.toLowerCase();
}
const reverse = (str)=>{
  return  str.split('').reverse().join('')
}
