function XYZToHex(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHex.apply(str);    
}