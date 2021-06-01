function HexToHSV(str){
  str = HexToRGB.apply(this).split(",");
return RGBToHSV.apply(str);
}