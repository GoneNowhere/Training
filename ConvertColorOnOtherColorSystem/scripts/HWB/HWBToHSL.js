function HWBToHSL(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToHSL.apply(str);   
}