function HSVToHex(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}