function RGBToHWB(str){
    let R = this[0] / 255,
        G = this[1] / 255,
        B = this[2] / 255,
        max,
        min, 
        delta,
        h,
        w,
        b;

  // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!      
  R = (R <= 0 || R >= 1) ? +(R >= 1) : R;   
  G = (G <= 0 || G >= 1) ? +(G >= 1) : G; 
  B = (B <= 0 || B >= 1) ? +(B >= 1) : B;

  min = Math.min(R,G,B);
  max = Math.max(R,G,B);
  delta = max - min;
  
  if(delta === 0){
     h = 0;
  }else if(R === max){
     h = ((G-B) / delta ) % 6;
  }else if(G === max){
     h = ((B-R) /delta + 2 ) % 6;
  }else{
     h = ((R-G) / delta + 4 ) % 6;
  }

  w = min;
  b = 1 - max;
  
 return `${ Math.round( h * 60 ) },${ Math.round( w * 100 ) },${ Math.round( b * 100 ) }`;            
}