function CMYKToXYZ(str){
    str = CMYKToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);   
}