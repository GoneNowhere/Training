function CMYKToHSV(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}