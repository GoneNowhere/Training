function HexToCMY(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}