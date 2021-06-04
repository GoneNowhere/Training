//HEX

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

function HexToHSL(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);
}

function HexToHSV(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);
}

function HexToHWB(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}

function HexToXYZ(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);      
}

function HexToCMY(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}

function HexToCMYK(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);     
}



//RGB

function RGBToHex(str){
 let operant_One, operant_Two;

    for(i=0;i<this.length;i++){
        operant_One = +this[i] >> 4;
        operant_Two = +this[i] - ( operant_One << 4 );  
        this[i] = GetUnicode(operant_One) + GetUnicode(operant_Two);
    }   
 return this.join("");
}
    
function GetUnicode(int){
    return   (int > 9)
                ? String.fromCharCode(55 + int)
                : `${int}`
}

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

function RGBToHSV(str){  
    let r = +this[0] / 255,
        g = +this[1] / 255,
        b = +this[2] / 255,
        H,
        S,
        V,
        max,
        min,
        discriminant;

    // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!      
    r = (r <= 0 || r >= 1) ? +(r >= 1) : r;   
    g = (g <= 0 || g >= 1) ? +(g >= 1) : g; 
    b = (b <= 0 || b >= 1) ? +(b >= 1) : b;      

    max = Math.max(r,g,b),
    min = Math.min(r,g,b),
    discriminant = max - min;

  switch(max){
        case r: H = 60 * ( ( ( g - b ) / discriminant ) % 6 );
            break;
        case g: H = 60 * ( ( ( b - r ) / discriminant  ) + 2 );
            break;
        case b: H = 60 * ( ( ( r - g ) / discriminant  ) + 4 );
            break;  
    default : discriminant = 0;                      
    }
        
    if( isNaN(H) ){ 
    H = 0;
    }      

    H = (H < 0) ? H + 360 : H 
    S = (max == 0) ? 0 : discriminant / max
    V = max;

return `${ Math.round( H ) },${ ( S * 100 ).toPrecision(3) },${ ( V * 100 ).toPrecision(3) }`; 
}

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

function RGBToXYZ(str){
    let r = this[0] / 255,
        g = this[1] / 255,
        b = this[2] / 255,
        x,
        y,
        z;
        
     // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!       
     r = (r >= 1 || r <= 0) ? +(r >= 1) : r;  
     g = (g >= 1 || g <= 0) ? +(g >= 1) : g;  
     b = (b >= 1 || b <= 0) ? +(b >= 1) : b;
     
     r = (r > 0.04045 ) ? ( ( ( r + 0.055 ) / 1.055 ) ^ 2.4 ) * 100 : r / 12.92 * 100; 
     g = (g > 0.04045 ) ? ( ( ( g + 0.055 ) / 1.055 ) ^ 2.4 ) * 100 : g / 12.92 * 100;
     b = (b > 0.04045 ) ? ( ( ( b + 0.055 ) / 1.055 ) ^ 2.4 ) * 100 : b / 12.92 * 100;
   
     x = r * 0.4124 + g * 0.3576 + b * 0.1805;
     y = r * 0.2126 + g * 0.7152 + b * 0.0722;
     z = r * 0.0193 + g * 0.1192 + b * 0.9505;
   
 return `${ Math.round( x * 150 ) },${ Math.round( y * 100 ) },${ Math.round( z * 150 ) }`;  
}

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



//HSL

function HSLToRGB(str){
    let  h = +this[0],
         s = +this[1] / 100,
         l = +this[2] / 100,
         r = b = g = 0,
         C,
         X,
         M,
         H;
  
      // if variable <= 0 => var = 0; if var >= 360 => var = 1 * 360; Alse var = var!
      h = (h >= 360 || h <= 0) ? +(h >= 360) * 360 : h;
      // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!
      s = (s >= 1 || s <= 0) ? +(s >= 1) : s;
      l = (l >= 1 || l <= 0) ? +(l >= 1) : l;   
      
      C = (1 - Math.abs( 2 * l - 1 ) ) * s;
      H = h / 60;    
      X = C * (1 - Math.abs( H % 2 - 1 ) );
      M = l - C / 2;
          
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
   
      r += M;
      g += M;
      b += M;   
  
 return `${ Math.floor( r * 255 ) },${Math.round( g * 255 ) },${Math.ceil( b * 255 ) }`; 
}

function HSLToHex(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToHex.apply(str);
}

function HSLToHWB(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}

function HSLToHSV(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}

function HSLToXYZ(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);    
}

function HSLToCMY(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}

function HSLToCMYK(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}



//HWB

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

function HWBToHex(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}

function HWBToHSL(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);   
}

function HWBToHSV(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}

function HWBToXYZ(str){
    str = HWBToRGB.apply(this).split(",");
return RGBToXYZ.apply(str);    
}

function HWBToCMY(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}

function HWBToCMYK(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}



//HSV

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

function HSVToHex(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}

function HSVToHSL(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToHSL.apply(str); 
}

function HSVToHWB(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}

function HSVToXYZ(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);   
}

function HSVToCMY(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}

function HSVToCMYK(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}



//XYZ

function XYZToRGB(str){
    let x = this[0] / 100,
        y = this[1] / 100,
        z = this[2] / 100,
        r,
        g,
        b;  
  
    // if variable <= 0 => var = 0; if var >= 1 => var = 1; Alse var = var!       
    x = (x >= 1 || x <= 0) ? +(x >= 1) : x;  
    y = (y >= 1 || y <= 0) ? +(y >= 1) : y;  
    z = (z >= 1 || z <= 0) ? +(z >= 1) : z;       
  
    r = x *  3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y *  1.8758 + z *  0.0415;
    b = x *  0.0557 + y * -0.2040 + z *  1.0570;
  
    r = (r > 0.0031308 ) ? 1.055 * ( r ^ ( 1 / 2.4 ) ) - 0.055 :  12.92 * r;
    g = (g > 0.0031308 ) ? 1.055 * ( g ^ ( 1 / 2.4 ) ) - 0.055 :  12.92 * g;
    b = (b > 0.0031308 ) ? 1.055 * ( b ^ ( 1 / 2.4 ) ) - 0.055 :  12.92 * b;
   
 return `${ Math.round( r * 255 ) },${ Math.round( g * 255 ) },${ Math.round( b * 255 ) }`; 
}

function XYZToHex(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHex.apply(str);    
}

function XYZToHSL(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);    
}

function XYZToHWB(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}

function XYZToHSV(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);    
}

function XYZToCMY(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);    
}

function XYZToCMYK(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}



//CMY

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

function CMYToHex(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}

function CMYToHSL(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);  
}

function CMYToHWB(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}

function CMYToHSV(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}

function CMYToXYZ(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);    
}

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



//CMYK

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

function CMYKToHex(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}

function CMYKToHSL(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);   
}

function CMYKToHWB(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}

function CMYKToHSV(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}

function CMYKToXYZ(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);   
}

function CMYKToCMY(str){
    let c = this[0] / 100,
        m = this[1] / 100,
        y = this[2] / 100,
        k = this[3] / 100,
        C,
        M,
        Y;
  
    // if variable < 0 => var = 0; if var > 1 => var = 1; Alse var = var!
      c = (c >= 1 || c <= 0) ? +(c >= 1) : c;  
      m = (m >= 1 || m <= 0) ? +(m >= 1) : m;  
      y = (y >= 1 || y <= 0) ? +(y >= 1) : y;
      k = (k >= 1 || k <= 0) ? +(k >= 1) : k;   
  
     C = (c * (1 - k) + k);
     M = (m * (1 - k) + k);
     Y = (y * (1 - k) + k);
  
 return `${ Math.round(C * 100) },${ Math.round(M * 100) },${ Math.round(Y * 100) }`;     
}