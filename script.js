// Benny Shepherd
// JavaScript Problems 21-30
// May 4, 2020

function countEvens(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            count += 1;
        }
    }
    return count;
}

function countHi(str) {
    var count = 0;
    for(var i = 0; i < str.length-1; i++) {
        if(str[i] == "h" && str[i+1] == "i") {
            count += 1;
        }
    }
    return count;
}

function no14(arr) {
    if(!arr.includes(1) || !arr.includes(4)) {
        return true;
    } else {
        return false;
    }
}

function either24(arr) {
    var next2 = false;
    var next4 = false;
    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i] == 2 && arr[i+1] == 2) {
            next2 = true;
        }
        if(arr[i] == 4 && arr[i+1] == 4) {
            next4 = true;
        }
    }
    if(next2 == true && next4 == true) {
        return false;
    }
    if(next2 == true || next4 == true) {
        return true;
    }
    return false;
}

function makeChocolate(small, big, goal) {
    var smallBars = -1;
    var numBigPoss = Math.floor(goal / 5);
    if(numBigPoss <= big) {
        big = numBigPoss;
    }
    var left = goal - big * 5;
    if(left <= small) {
        smallBars = left;
    }
    return smallBars;
}

function luckySum(a, b, c) {
    if(a == 13) {
        return 0;
    }
    if(b == 13) {
        return a;
    }
    if(c == 13) {
        c = 0;
    }
    return a + b + c;
}

function maxBlock(str) {
    var count = 0;
    var newCount = 1;
    if (str.length == 0) {
        return 0;
    }
    for(var i = 0; i < str.length; i++) {
        if (i < str.length-1 && str[i] == str[i+1]) {
            newCount++;
        } else {
            newCount = 1;
        }
        if (newCount > count) {
            count = newCount;
        }
    }
    return count;
}

function linearIn(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++) {
        for(var j = 0; j < arr1.length; j++) {
            if(arr2[i] == arr1[j]) {
                break;
            }
            if(j == arr1.length - 1) {
                return false;
            }
        }
    }
    return true;
}

function countTriple(str) {
    var count = 0;
    for(var i = 0; i < str.length - 2; i++) {
        if(str[i] == str[i + 1] && str[i] == str [i + 2]) {
            count += 1;
        }
    }
    return count;
}

function sameEnds(str) {
    var commonEnds = "";
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        temp += str[i];
        if (i < Math.floor(str.length / 2) && temp == str.substr(str.length-temp.length, str.length)) {
            commonEnds = temp;
        }
    }
    return commonEnds;
}