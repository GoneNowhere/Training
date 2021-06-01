function RGBToCMY(str){
 let c = this[0] / 100,
     m = this[1] / 100,
     y = this[2] / 100,
     r,
     g,
     b;

// if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!      
  c = (c <= 0 || c >= 1) ? +(c >= 1) : c;   
  m = (m <= 0 || m >= 1) ? +(m >= 1) : m; 
  y = (y <= 0 || y >= 1) ? +(y >= 1) : y; 
  
  r = 1 - c;
  g = 1 - m;
  b = 1 - y;
  
 return `${ Math.round( r * 255) },${ Math.round( g * 255) },${ Math.round( b * 255) }`; 
}