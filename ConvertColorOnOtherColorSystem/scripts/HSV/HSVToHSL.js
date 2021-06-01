function HSVToHSL(str){
    str = HSVToRGB.apply(this).split(",");
 return RGBToHSL.apply(str); 
}