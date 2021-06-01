function CMYToCMYK(str){
 let c = this[0] / 255,
     m = this[1] / 255,
     y = this[2] / 255,
     k = 1;

  // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!       
  c = (c >= 1 || c <= 0) ? +(c >= 1) : c;  
  m = (m >= 1 || m <= 0) ? +(m >= 1) : m;  
  y = (y >= 1 || y <= 0) ? +(y >= 1) : y;   

   if(c < k){
       k = c;
   }else if(m < k){
       k = m;
   }else if(y < k){
       k = y; 
   }

   if(k === 0){
      c = m = y = 0;
   }else{
      c = (c - k) / (1 - k);
      m = (m - k) / (1 - k);
      y = (y - k) / (1 - k);
   }

 return `${ Math.round( c * 100 ) },${ Math.round( m * 100 ) },${ Math.round( y * 100 ) },${ Math.round( k * 100 ) }`;
}