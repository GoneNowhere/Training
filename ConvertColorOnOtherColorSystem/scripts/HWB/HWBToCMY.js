function HWBToCMY(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}