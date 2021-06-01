function HSVToHWB(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToHWB.apply(str);   
}