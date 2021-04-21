function DecimalToBinary(number,input,SelectTypeNumber){
    ++number._fraction_; 

   return (SelectTypeNumber) ? FractionNumberPreparation(number,input) : IntegerNumberPreparation(number,input);
}

function FractionNumberPreparation(number,input){
    number.sign = CheckerSign(input);

    if(number.sign === 1){
        input = DeleteMinus(input);
    }
 
    
    number.original = input;
    number.integer = GetBinary( input.slice(0, input.indexOf(".")) );
    number.fraction = `0${input.slice(input.indexOf("."), input.length)}`;

    return  GetFraction(number);
}

function CheckerSign(input){
    return (input.includes("-") ) ? 1 : 0;
}

function DeleteMinus(input){
    return input.slice(1,input.length);
}

function GetBinary(integer){   
    let Binary = "";

         while(integer){       

                if(integer & 1){//analogue => number % 2 == 1

                    integer   -= 1;                                                        
                    Binary    += "1";

                 }else{             
                          
                    Binary    += "0";      

        }
                    integer   /= 2;         
          
    }

return Binary;
}


function GetFraction(number){
    let Fractional = "",
        count;

        count = (+number.original < 1) 
                ? number._fraction_ - Math.ceil(  Math.log2(number.original)  ) // Math.ceil( -2.83) => -2 
                : number._fraction_ - number.integer.length;

                for(let i=0;i<count;i++){

                    (number._BitsSystem_ === 64) 
                           ? number.fraction = number.fraction * 2
                           : number.fraction = Math.fround(number.fraction) * 2;
                           //js use 64bit system . Math.fround - use 32 bit system
                    
                        if(number.fraction >= 1){
                            
                            number.fraction -= 1;
                            Fractional += "1";

                        }else{

                            Fractional += "0"; 
                }

         } 


number.fraction = Fractional.split("").reverse().join("");

return Comma(number);
}


function Comma(number){

    number.comma = (+number.original < 1) 
                    ? GetBinary( number._maxCommaInteger_ + Math.floor( (Math.log2(number.original) ) ) )//Math.ceil( -2.83) => -3 
                    : GetBinary( number._maxCommaInteger_ + (number.integer.length - 1));

                    
    if(number.comma.length < 8){//if number < 0 and > 1 (example: 0.1,0.2547...) need add 1 bit "0" 
        number.comma += "0";
    }                 

return CombineAllResult(number);
}

function CombineAllResult(number){
    let DeleteTrash = number._fraction_ - (number.fraction.length - 1);

    number.result = (+number.original < 1)
                    ? number.fraction.slice(0 , DeleteTrash - 2) + number.comma + number.sign
                    : number.fraction + number.integer.slice(0, number.integer.length -1) + number.comma + number.sign;         

return SplitNumber(number);
}

function SplitNumber(number){
number.result = number.result.split("");

    for(let i=0;i<number.result.length;i++){

        if(i % 8 === 0 && i > 0){
            number.result[i] = ` ${number.result[i]}`;
        }

    }

return number.result.join("");    
}


//Logic integer Number
function IntegerNumberPreparation(number,input){
    number.sign = CheckerSign(input);

    if( number.sign ){
        input = DeleteMinus(input);
        input = `${BigInt(input) - 1n}`;//After inversion the number is less than needed by 1 
    } 

    number.integer = GetBigBinary( BigInt(input) ).split("").reverse().join("");//flip the result for user readability
    number.lengthDifference = Math.abs( number.integer.length - number._BitsSystem_  );

    if(number.integer.length > number._BitsSystem_){
     //Imitation Overflow/Underflow
        //if number > variable number._number._BitsSystem_=> remove extra bits
        number.result = number.integer.slice( number.lengthDifference , number.integer.length );
        number.warning = "Overflow";//trigger shows text with caption "overflow"

        if(number.sign){//only negative number
            number.result = Inversion( number.result , 0 );
        }

    }else{//if number <= 2**31(4 byte) or 2**63(8 byte)
        number.result = FillOtherBits(number);  
    }


  return SplitNumber(number);
}

function GetBigBinary(BigInteger){
    let BigBinary = "";

         while(BigInteger){       

                if(BigInteger & 1n){  

                    BigInteger -= 1n;                                                        
                    BigBinary  += "1";

                 }else{             
                          
                    BigBinary  += "0";      

        }
            BigInteger /= 2n;  
    }

return BigBinary;
}


function FillOtherBits(number){
    let result = "";

    if(number.integer.length !== number._BitsSystem_){
        result += number.sign; // add sign number   
    }

    for(let i=0;i<number.lengthDifference-1;i++){//if amount bits < 32
           result += 0;
    }

    result += number.integer;// add the number itself

    return (number.sign) ? Inversion(result) : result;
}

function Inversion(result,start=1){
    result = result.split("");

    for(let i =start; i < result.length;i++){
        result[i] = (result[i] === "0") ? "1" : "0";
    }
    
    result = result.join("");

    return result;
} 