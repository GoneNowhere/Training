function BinaryToDecimal(number,input,SelectTypeNumber,UseSignBit){
    --number._BitsSystem_;
    
    return (SelectTypeNumber) ? BinNumberFractionPreparation(number,input) : BinNumberIntegerPreparation(number,input,UseSignBit);

}

// LOGIC FRACTION NUMBER
function BinNumberFractionPreparation(number,input){

    number.originalBin = input;
    number.signBin = number.originalBin[number.originalBin.length-1];//get sign
    number.currentBin = `${number.originalBin.slice(0, number._BitsSystem_)}0`;//make number positive
    number.commaBin =  GetDecimalIntegerBin( number.currentBin.slice( number._fraction_, number.currentBin.length ), number._BitsSystem_ ) - number._maxCommaInteger_;//get comma in decimal number

    if(+number.commaBin >= 0){
 
        number.integerBin =  GetDecimalIntegerBin(`${number.currentBin.slice(number._fraction_ - number.commaBin ,number._fraction_)}1`, number._BitsSystem_); 
        number.fractionalBin = GetDecimalFractionBin( `${number.currentBin.slice(0, number._fraction_ - number.commaBin)}`, number._BitsSystem_ );

    }else{
 
        number.integerBin =  0; 
        number.fractionalBin = `${number.currentBin.slice(0, number._fraction_)}1`;

        for(let i=0; i < ~number.commaBin; i++){
            number.fractionalBin += 0;
        }

        number.fractionalBin = GetDecimalFractionBin(number.fractionalBin, number._BitsSystem_);

    }

   return AllResultCombineBin(number);
}

function GetDecimalIntegerBin(int){
let decimalBin = 0;

    for(let i=0;i<int.length;i++){
        decimalBin += +int[i] * ( 2 ** i );
    }

return decimalBin;
}

function GetDecimalFractionBin(bin, BitsSystem){
let fractionalBin = 0;

bin = bin.split("").reverse().join("");

    for(let i=0;i<bin.length;i++){

        (BitsSystem === 64) 
                ? fractionalBin += bin[i] * ( 2 ** ~i )
                : fractionalBin += Math.fround( bin[i] * ( 2 ** ~i ) );


    }  
return fractionalBin;
}

function AllResultCombineBin(number){

number.resultBin = number.integerBin + number.fractionalBin;

    if(number.signBin === "1"){
        number.resultBin = `-${number.resultBin}`;
    }

return number.resultBin;
}

// LOGIC INTEGER NUMBER
function BinNumberIntegerPreparation(number,input,UseSignBit){
    number.originalBin = input;
    number.currentBin = GetBigDecimalIntegerBin( number.originalBin.split("").reverse().join("") );

    if(!UseSignBit){
        //If number signed
        number.signBin = number.originalBin[0];// get sign

        if(number.signBin === "1"){
            number.currentBin = number.currentBin - number._maxIntegerSystem_;
            //add minus to number
        }
    }

return number.currentBin;
}

function GetBigDecimalIntegerBin(intBig){
    let Bigdecimal = 0n;

        for(let i=0;i<intBig.length;i++){
            Bigdecimal += BigInt( +intBig[i] * ( 2 ** i ) );
        }

    return Bigdecimal;
}