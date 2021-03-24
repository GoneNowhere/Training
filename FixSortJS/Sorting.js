function Sorting(symbols){
  return ConversionSymbolsToString(symbols);
}

  function ConversionSymbolsToString(symbols){
   let array = symbols.split(',');
    return Training(array)
  }

  function Training(array){
   let unicodeArray = [];
      array.map(  symbol =>  unicodeArray.push( { original: symbol , unicode : SplitSymbol(symbol) } ) );   
             
  return Sort(unicodeArray);
  }

  function SplitSymbol(symbol){
   let resultSplit = [];
    for(let i=0;i<symbol.length;i++){
      resultSplit.push( symbol.slice(i,i+1) );
    }
  return GettingSumSymbolsUnicode(resultSplit);
  }

  function GettingSumSymbolsUnicode(resultSplit){
   let resultNum = 0;
    
   resultSplit.map( (symbol,index) => resultNum += (symbol.match(/[A-z]/g) !== null)// match if str have symbol return SYMBOl other => null
                      ?  GetCharUnicode(symbol,index) // treatman chars
                      :  GetNumberlUnicode(symbol,index) // treatman numbers
                   )           

  return resultNum;
  }

  function GetCharUnicode(symbol,index){
    return  ( symbol.match(/[A-Z]/g) !== null ) 
                    ? symbol.charCodeAt() + index //fix sort words where unicode sum equal. Example : Kol, kOl return equal unicode sum(294)!
                    : symbol.charCodeAt() - 31.9 //fix sort , where input => a,B,b,A get result => A,a,B,b
  }

  function GetNumberlUnicode(symbol,index){
    let result;
    //negative number logic
    result = (index === 0 && symbol === "-" || index === 0 && symbol === ".")
            ? symbol.charCodeAt()
            : symbol.charCodeAt() / 10**index
    // Fix sort numbers where unicode sum equal (Example : 20,11 => 2(50)0(48) = 98 , 1(49)1(49) = 98 )
    // input => A,1,c,D,a,B,2,3,0.1,0.254789,d,b,10 result => 0.1,0.254789,1,2,3,10,A,B,D,a,b,c,d

        if(symbol === "-" || symbol === "."){
            result -= 5;//balanced number where available char "-" or "."
        }
    return result;    
  }

  function Sort(unicodeArray){
   let array = GettingOnlyUnicode(unicodeArray);
   let inspector;

    do{
      inspector = false;
      for(let i=0;i<array.length-1;i++){
            (array[i] > array[i+1])
            ? (Swap(array,array[i],array[i+1],i), inspector = true)
            : null;
      }
    }while(inspector)
  return ChangesUnicodeOnOriginal(array,unicodeArray)
  }

  function GettingOnlyUnicode(unicodeArray){
   let array = [];

    for(let i=0;i<unicodeArray.length;i++){
      array.push(unicodeArray[i].unicode)
    }
  return array;
  }

  function Swap(arr,currentValue, nextValue, index){
    arr[index] = nextValue;
    arr[index+1] = currentValue;
  }

  function ChangesUnicodeOnOriginal(array,unicodeArray){
    for(let i=0;i<unicodeArray .length;i++){
      for(let j=0;j<array.length;j++){
        if(array[i] === unicodeArray[j].unicode){
          array[i] = unicodeArray[j].original;
        }
      }
    }
    return array;
  }
