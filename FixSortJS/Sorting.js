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
   let ressultSplit = [];
    for(i=0;i<`${symbol}`.length;i++){
      ressultSplit.push( symbol.slice(i,i+1) );
    }
  return GettingSumSymbolsUnicode(ressultSplit);
  }

  function GettingSumSymbolsUnicode(ressultSplit){
   let resultNum = 0;

  ressultSplit.map( (symbol,index) => (symbol.match(/[A-z]/g))
                    ?  ( symbol.match(/[A-Z]/g) ) //fix sort words where unicode sum equal. Example : Kol, kOl return equal unicode sum(294)!
                                    ? resultNum += `${symbol}`.charCodeAt(0) + index
                                    : resultNum += `${symbol}`.charCodeAt(0)
                    :  ( symbol.indexOf(".") == false)
                                    ? resultNum += "." //Fix sort float number
                                    : resultNum += `${symbol}`.charCodeAt(0)
                    )
  return resultNum;
  }

  function Sort(unicodeArray){
   let array = GettingOnlyUnicodes(unicodeArray);
   let inspector;

    do{
      inspector = false;
      for(i=0;i<array.length-1;i++){
            (array[i] > array[i+1])
            ? (Swap(array,array[i],array[i+1],i), inspector = true)
            : null;
      }
    }while(inspector)
  return ChangesUnicodeOnOriginal(array,unicodeArray)
  }

  function GettingOnlyUnicodes(unicodeArray){
   let array = [];

    for(i=0;i<unicodeArray.length;i++){
      array.push(unicodeArray[i].unicode)
    }
  return array;
  }

  function Swap(arr,currentValue, nextValue, index){
    arr[index] = nextValue;
    arr[index+1] = currentValue;
  }

  function ChangesUnicodeOnOriginal(array,unicodeArray){
    for(i=0;i<unicodeArray .length;i++){
      for(j=0;j<array.length;j++){
        if(array[i] == unicodeArray[j].unicode){
          array[i] = unicodeArray[j].original;
        }
      }
    }
    return array;
  }
