function HSLToCMYK(str){
  str = HSLToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}