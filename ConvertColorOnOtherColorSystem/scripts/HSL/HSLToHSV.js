function HSLToHSV(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}