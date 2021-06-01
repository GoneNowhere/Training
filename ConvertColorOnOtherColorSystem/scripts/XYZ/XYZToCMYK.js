function XYZToCMYK(str){
    str = XYZToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}