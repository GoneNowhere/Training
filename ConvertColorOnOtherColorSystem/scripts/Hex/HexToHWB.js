function HexToHWB(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}