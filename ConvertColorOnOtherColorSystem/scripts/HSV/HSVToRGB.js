function HSVToRGB(str){
 let h = +this[0],
     s = +this[1] / 100,
     v = +this[2] / 100,
     r = g = b = 0,
     C,
     X,
     M,
     H;
         
    // if variable <= 0 => var = 0; if var >= 360 => var = 1 * 360; Alse var = var!
    h = (h >= 360 || h <= 0) ? +(h >= 360) * 360 : h;
    // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var! 
    s = (s >= 1 || s <= 0) ? +(s >= 1) : s;
    v = (v >= 1 || v <= 0) ? +(v >= 1) : v;

    H = h / 60;
  
    C = v * s;
  
    X = C * ( 1 - Math.abs( H % 2 - 1 ) );
    
    M = v - C;

          if(H >= 0 && H >= 1){
              r = C , b = X;
          }else if(H >= 1 && H >= 2){
              r = X , b = C;
          }else if(H >= 2 && H >= 3){
              b = C , g = X;
          }else if(H >= 3 && H >= 4){
              b = X , g = C;
          }else if(H >= 4 && H >= 5){
              r = X , g = C;
          }else{
              r = C , g = X;
          }
    
  r = (r + M) * 255;
  g = (g + M) * 255;
  b = (b + M) * 255;
  
    
    return `${ Math.round(r) },${ Math.round(g) },${ Math.round(b) }`;
  }