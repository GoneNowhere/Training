function HexToRGB(str){
 let result = [];

   for(i=0;i<this[0].length;i+=2){
     result.push( ( GetNumberRepresentationFromUnicode( this[0][i]) << 4 ) + GetNumberRepresentationFromUnicode( this[0][i+1] ) );
   }

 return result.join(","); 
}

function GetNumberRepresentationFromUnicode(char){
 return (char <= "9")
               ? +char
               : Math.abs( String(char).charCodeAt() - 55 )
}
