function CMYKToRGB(str){
  let C = +this[0] / 100,
      M = +this[1] / 100,
      Y = +this[2] / 100,
      K = +this[3] / 100,
      r,
      g,
      b;  

   // if variable < 0 => var = 0; if var > 1 => var = 1; Alse var = var!
    C = (C >= 1 || C <= 0) ? +(C >= 1) : C;  
    M = (M >= 1 || M <= 0) ? +(M >= 1) : M;  
    Y = (Y >= 1 || Y <= 0) ? +(Y >= 1) : Y;  
    K = (K >= 1 || K <= 0) ? +(K >= 1) : K;  

   r = (1 - C) * (1 - K) * 255;
   g = (1 - M) * (1 - K) * 255;
   b = (1 - Y) * (1 - K) * 255;   

 return `${ Math.floor(r) },${ Math.round(g) },${ Math.floor(b) }`;  
}