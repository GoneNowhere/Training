function HexToCMYK(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);     
}