function reversString(str){

let splitString=str.split("");
let revString=splitString.reverse();
let finalString=revString.join();
return finalString;
}
console.log(reversString("Hallo"));

function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverseNumber(12345));

function deleteChar(str,poz){
    let str1=str.substring(0,poz);
    let str2=str.substring(poz+1,str.lenght);
    let finalS=str1.concat(str2);
    return finalS;
}

console.log(deleteChar("String",0));
console.log(deleteChar("String",4));

function div37(nr){
    if(nr%3==0)
    {   
       return true;
    }
    else if(nr%7==0)
{
    return true;
}   else return false;
}
console.log(div37(12));
console.log(div37(14));
console.log(div37(10));

function isNumeric(str)
{
    if(isNaN(str)){
        return false;
    }
    else return true;
}
console.log(isNumeric(23452));

function sum(array){
     let suma=0;
    
    for(let i=0;i<array.length;i++){
        if(!isNaN(array[i])){
            suma+=array[i];
        }
    }
return suma;
}
console.log(sum('fds'));

function checkProp(arg,prop){
if(arg.hasOwnProperty(prop)){
    return true;
}else return false;
}
console.log(checkProp({red: "red", green: "green", white: "white"}, "green"));
console.log(checkProp({red: "red", green: "green", white: "white"}, "black"));


function romanNumber(nr){
let roman="";
    if(!isNaN(nr)){
    
        while(nr>=1000){
            roman+="M";
            nr-=1000;
        }
        if(nr>=900){
            roman+="CM";
            nr-=900;
        }
        if(nr>=500){
            roman+="D";
            nr-=500;
        }
        if(nr>=400){
            roman="CD";
            nr-=400;
        }
        while(nr>=100){
            roman+="C";
            nr-=100;
        }
        if(nr>=90){
            roman+="XC";
            nr-=90;
        }
        if(nr>=50){
            roman+="L";
            nr-=50;
        }
        if(nr>=40){
            roman+="XL";
            nr-=40;
        }
        while(nr>=10){
            roman+="X";
            nr-=10;
        }
        if(nr>=9){
            roman+="IX";
            nr-=9;
        }
        if(nr>=5){
            roman+="V";
            nr-=5;
        }
        if(nr>=4){
            roman+="IV";
            nr-=4
        }
        while(nr>=1){
            roman+="I";
            nr-=1;
        }

    }else {
        roman= "Not an integer!"};
        return roman;
}
console.log(2900);
console.log(romanNumber(2900));
console.log(9765);
console.log(romanNumber(9765));
console.log(romanNumber("tdt"));
console.log(romanNumber({red:"red"}));