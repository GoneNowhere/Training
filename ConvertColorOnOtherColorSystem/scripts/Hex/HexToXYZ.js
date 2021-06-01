function HexToXYZ(str){
    str = HexToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);      
}