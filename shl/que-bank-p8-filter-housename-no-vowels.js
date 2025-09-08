//PROBLEM  DIFFICULTY LEVEL = EASY
//In a town, the houses are marked with letters in the English alphabet.

//A town committee wants to renovate each house. 

//Because funds are limited, they decided to renovate only the houses marked with vowels.

//The committee head gives the list of houses to the members and ask them to identify the houses that will not be renovated.

//Write an algorith to help the commitee members find the list of houses that will not be renovated

//input
//The input consists of a string representing the sequence of house markings

//Print a string representing the list of houses that will not be renovated.

//If no such house is found then do not print anything.

//Input: Mynameisanthony
//Output: Mynmsnthny


function filterNonRenovatedHouse (houseString) {
    let arr = houseString.split('');
    arr = arr.filter((c)=>!['a','e','i','o','u'].includes(c));
    return arr;
}
console.log(filterNonRenovatedHouse('Mynameisanthony'));
