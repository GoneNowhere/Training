function XYZToHWB(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}