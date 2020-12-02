function Sorting(symbols){
  return ConversionSymbolsToString(symbols);
}

  function ConversionSymbolsToString(symbols){
   let array = symbols.split(',');
    return Training(array)
  }

  function Training(array){
   let unicodeArray = [];
    array.map(  symbol =>  (symbol.length > 1)
                        ? unicodeArray.push( { original: symbol , unicode : SplitSymbol(symbol) }  )
                        : unicodeArray.push( { original: symbol , unicode : `${symbol}`.charCodeAt(0) } )
  );
  return Sort(unicodeArray);
  }

  function SplitSymbol(symbol){
   let resultSplit = [];
    for(let i=0;i<`${symbol}`.length;i++){
      resultSplit.push( symbol.slice(i,i+1) );
    }
  return GettingSumSymbolsUnicode(resultSplit);
  }

  function GettingSumSymbolsUnicode(resultSplit){
   let resultNum = 0;


  if( resultSplit[0] === "0" && resultSplit.length > 1 && resultSplit.indexOf(".") === -1){ //Sort numbers where first char equal 0(zero)

    resultSplit.map( (symbol,index) => (symbol[index] === "0")
                                    ? resultNum += `${symbol}`.charCodeAt(0)
                                    : resultNum += ( `${symbol }`.charCodeAt(0) + index ) / 1000 //1000 because rounding bypass number(if use 100 => js round-up number)
// input 010 => resultNum += 48(look step up) => resultNum += 49 / 1000 = 0.049  (1 have unicode - 49) => resultNUm += 48 / 1000 = 0.048 => resultNum = 48.097
                    )
  }else{

    resultSplit.map( (symbol,index) => (symbol.match(/[A-z]/g))
                      ?  ( symbol.match(/[A-Z]/g) ) //fix sort words where unicode sum equal. Example : Kol, kOl return equal unicode sum(294)!
                                      ? resultNum += `${symbol}`.charCodeAt(0) + index
                                      : resultNum += `${symbol}`.charCodeAt(0)
                      : ( symbol.indexOf(".") === false)
                                      ? resultNum += "." //Fix sort float number
                                      : resultNum += `${symbol}`.charCodeAt(0) + symbol // Fix sort numbers where unicode sum equal (Example : 20,11 => 2(50)0(48) = 98 , 1(49)1(49) = 98 )
                      )

  }

  return resultNum;
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
