function CMYKToHex(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}