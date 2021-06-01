function HWBToHex(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToHex.apply(str);   
}