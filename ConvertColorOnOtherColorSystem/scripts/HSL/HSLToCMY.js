function HSLToCMY(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}