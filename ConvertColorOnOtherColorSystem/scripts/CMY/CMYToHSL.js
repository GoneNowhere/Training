function CMYToHSL(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);  
}