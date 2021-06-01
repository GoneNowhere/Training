function CMYToHWB(str){
  str = CMYToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}