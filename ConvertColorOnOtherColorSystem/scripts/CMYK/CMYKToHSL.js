function CMYKToHSL(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);   
}