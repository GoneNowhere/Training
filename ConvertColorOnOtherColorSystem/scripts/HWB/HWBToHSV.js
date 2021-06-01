function HWBToHSV(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToHSV.apply(str);   
}