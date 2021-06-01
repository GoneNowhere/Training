function XYZToHSV(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);    
}