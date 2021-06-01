function HWBToRGB(str){
 let h = this[0] / 360,
	 w = this[1] / 100,
	 b = this[2] / 100,
	 i,
	 v,
	 f,
	 n,
	 R,
	 G,
	 B;

    // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!    
    h = (h <= 0 || h >= 1) ? +(h >= 1) : h;
    w = (w <= 0 || w >= 1) ? +(w >= 1) : w;
    b = (b <= 0 || b >= 1) ? +(b >= 1) : b;

    ratio = w + b;
	( ratio > 1 ) ? (w /= ratio ,b /= ratio) : (w,b);
	i = (6 * h) | 0;//analogue Math.floor(6 * h)
	v = 1 - b;
    f =(i & 1) ? 1 - (6 * h - i) :  6 * h - i;
	n = w + f * (v - w); // interpolation between w and v
  
        switch (i) {
            default:
             case 6:
             case 0: R = v; G = n; B = w; 
                    break;
             case 1: R = n; G = v; B = w; 
                    break;
             case 2: R = w; G = v; B = n; 
                    break;
             case 3: R = w; G = n; B = v; 
                    break;
             case 4: R = n; G = w; B = v; 
                    break;
             case 5: R = v; G = w; B = n;
                    break;
         }

 return `${ Math.round( R * 255 ) },${ Math.round( G * 255 ) },${ Math.round( B * 255 )}`;     
}