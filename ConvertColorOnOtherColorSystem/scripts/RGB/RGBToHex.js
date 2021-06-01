function RGBToHex(str){
    let operant_One, operant_Two;
    
        for(i=0;i<this.length;i++){
            operant_One = +this[i] >> 4;
            operant_Two = +this[i] - ( operant_One << 4 );  
            this[i] = GetUnicode(operant_One) + GetUnicode(operant_Two);
        }   
        return this.join("");
    }
    
    function GetUnicode(int){
      return   (int > 9)
                    ? String.fromCharCode(55 + int)
                    : `${int}`
    }