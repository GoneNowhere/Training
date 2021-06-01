function HSLToHWB(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}