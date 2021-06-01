function HSLToXYZ(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);    
}