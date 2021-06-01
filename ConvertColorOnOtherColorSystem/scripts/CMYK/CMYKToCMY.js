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