function XYZToCMY(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);    
}