function XYZToHSL(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);    
}