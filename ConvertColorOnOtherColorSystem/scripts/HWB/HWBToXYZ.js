function HWBToXYZ(str){
     str = HWBToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);    
}