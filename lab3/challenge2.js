function consonantCounter(str1){
    
    var consonantList = `qwrtypsdfghjklzxcvmbnQWRTYPSDFGHJKLZXMCNVB`;
    
    var consonantCount = 0;

    for(var x = 0; x < str1.length ; x++){
        if (consonantList.indexOf(str1[x]) !== -1){
            consonantCount += 1;
        }
    }
    
    return consonantCount;
}

console.log (`The number of consonants you have are ${consonantCounter}!`)
