function CMYToXYZ(str){
    str = CMYToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);    
}