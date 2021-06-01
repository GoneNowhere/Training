function CMYToHex(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}