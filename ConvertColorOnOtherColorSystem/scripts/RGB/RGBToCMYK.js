function RGBToCMYK(str){
    let r = +this[0] / 255,
        g = +this[1] / 255,
        b = +this[2] / 255,
        C,
        M,
        Y,
        K;

  // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!      
  r = (r <= 0 || r >= 1) ? +(r >= 1) : r;   
  g = (g <= 0 || g >= 1) ? +(g >= 1) : g; 
  b = (b <= 0 || b >= 1) ? +(b >= 1) : b;          
   
   K = 1 - Math.max(r,g,b);

   if(K === 1){
       C = M = Y = 0;
   }else{
       C = (1 - r - K) / (1 - K);
       M = (1 - g - K) / (1 - K);
       Y = (1 - b - K) / (1 - K);
   } 

 
 return `${ Math.round(C * 100) },${ Math.round(M * 100) },${ Math.round(Y * 100) },${ Math.round(K * 100) }`;  
}