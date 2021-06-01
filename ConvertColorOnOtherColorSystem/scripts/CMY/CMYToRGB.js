function CMYToRGB(str){
 let r = this[0] / 255,
     g = this[1] / 255,
     b = this[2] / 255,
     c,
     m,
     y;
    
  // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!       
  c = (c >= 1 || c <= 0) ? +(c >= 1) : c;  
  m = (m >= 1 || m <= 0) ? +(m >= 1) : m;  
  y = (y >= 1 || y <= 0) ? +(y >= 1) : y;     

  c = 1 - r;
  m = 1 - g;
  y = 1 - b;
  
 return `${ Math.round( c * 100 ) },${ Math.round( m * 100 ) },${ Math.round( y * 100 ) }`;  
}