function HSVToCMYK(str){
  str = HSVToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}