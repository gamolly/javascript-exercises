const sumAll = function(nStart, nEnd) {

    nStartType = typeof nStart;
    nEndType = typeof nEnd;

    if (nStart <0 || nEnd < 0 || nStartType !='number' || nEndType != 'number') {
        return 'ERROR';
    }
    else if (nStart > nEnd){
        return Math.abs(0.5 * (nEnd ** 2 + nEnd - nStart ** 2 - nStart)-1);
    }
    return Math.abs(0.5 * (nEnd ** 2 + nEnd - nStart ** 2 + nStart));

};


// Do not edit below this line
module.exports = sumAll;
