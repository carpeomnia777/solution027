//write a function that takes an array of array pairs and gives them either senior or open status based on the values.
function openOrSenior(data){
    function membership(member){
        if (member[0] >= 55 && member[1] > 7){
            return "senior";
        }
        else{
            return "open";
        }
    }
    return data.map(membership);
}

//set a condtional in a function that checks for status so that i can input that function into a .map method