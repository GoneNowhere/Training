function CMYToHSV(str){
  str = CMYToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}