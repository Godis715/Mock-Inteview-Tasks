export default function cleaupUrl(url) {
   let previousSymb;
   let result='';
   if (url.startsWith('http://')){
      for (let i = 7; i < url.length; i++){
        if (url[i] === '/' && previousSymb === '/'){
         continue;
        }
        result += url[i];
        previousSymb = url[i];
      }
   } else if (url.startsWith('https://')){
      for (let i = 8; i < url.length; i++){
         if (url[i] === '/' && previousSymb === '/'){
            continue;
           }
           result += url[i];
           previousSymb = url[i];
      }
   } else {
      if (url[i] === '/' && previousSymb === '/'){
         result += url[i];
        previousSymb = url[i];
        }
        
   }
   if (url.startsWith('http://')){
      return ('http://' + result);
   } else if (url.startsWith('https://')) {
      return ('https://' + result);
   } else
  return result;
}

let url = "https://some-domain.com//account//settings";
let result = cleaupUrl(url);
console.log (result);
