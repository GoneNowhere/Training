function RGBToHSL(str){
    let r = this[0] / 255,
        g = this[1] / 255,
        b = this[2] / 255,
        Max = Math.max(r,g,b),
        Min = Math.min(r,g,b),
        discriminant = Max - Min,
        H,
        S,
        L;  
        
  // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!      
  r = (r <= 0 || r >= 1) ? +(r >= 1) : r;   
  g = (g <= 0 || g >= 1) ? +(g >= 1) : g; 
  b = (b <= 0 || b >= 1) ? +(b >= 1) : b;           
      
  L = ( Max + Min ) / 2;
  S = (discriminant == 0 ) ? 0 : discriminant / (1 - Math.abs( 2*L - 1) );

  switch(Max){  
        case r: H = 60 * ( ( (g - b) / discriminant ) % 6 );
               break;
        case g: H = 60 * ( (b - r) / discriminant + 2 );
               break; 
        case b: H = 60 * ( (r - g) / discriminant + 4 );  
               break; 
      default : H = 0;               
  }

  if( isNaN(H) ){
       H = 0;
  }  

  H = (H < 0) ? H + 360 : H;

  return `${ Math.round( H ) },${ (S * 100).toPrecision(3) },${ (L * 100).toPrecision(3) }`;
}