function HSVToCMY(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToCMY.apply(str);   
}