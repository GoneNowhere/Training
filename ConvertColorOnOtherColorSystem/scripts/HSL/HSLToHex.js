function HSLToHex(str){
    str = HSLToRGB.apply(this).split(",");
 return RGBToHex.apply(str);
}