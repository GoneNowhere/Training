function HWBToCMYK(str){
    str = HWBToRGB.apply(this).split(",");
 return RGBToCMYK.apply(str);   
}