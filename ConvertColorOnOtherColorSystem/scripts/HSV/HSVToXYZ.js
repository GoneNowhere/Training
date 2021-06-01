function HSVToXYZ(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToXYZ.apply(str);   
}