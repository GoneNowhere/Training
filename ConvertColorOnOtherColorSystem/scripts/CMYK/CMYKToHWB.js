function CMYKToHWB(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}