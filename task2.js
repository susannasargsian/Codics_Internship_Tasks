//Task #2

function Validate() {
var str = document.getElementById('input').value;
let pairs={ "(": ")", "{": "}", "[":"]"};


let arr = [];
function open_bracket(a){
    return (Object.keys(pairs).includes(a));
        
}
function close_bracket(a){
    return (Object.values(pairs).includes(a));
        
}
function correct_pair(a, b) {
    return (pairs[a] == b);
}


let correct = true;
for(let i=0; i<str.length;i++){
    if(open_bracket(str[i])){
        arr.push(str[i]);
    } 
    else if(close_bracket(str[i])){
        if(arr.length == 0){
            correct = false;
            break;
        } 
        else {
            let t = arr.pop();
            if(correct_pair(t, str[i])){
                continue;
            } 
            else {
                correct = false;
                break;
            }
        }
    }
    else {
        correct=false;
        break;
    }
    
}
if(arr.length!=0) correct = false;
 

correct ? document.getElementById('result').innerHTML = "Hurray, String is Valid!" 
        : document.getElementById('result').innerHTML = "String is NOT Valid!";

}


