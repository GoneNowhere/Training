function HexToHSL(str){
    str = HexToRGB.apply(this).split(",");
return RGBToHSL.apply(str);
}