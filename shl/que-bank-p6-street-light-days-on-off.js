
//Mr. Woods an electrician for Timberland city, has made some faulty connections on eight street lights. 

// The error cause the street light to go OFF if the street lights adjacent
//to the light where both ON.(represents as 1). Or both OFF(represents as 0) on the previous night.****

//prev night 1 1 1 0 1 1 1 1
//next night 1 0 1 0 1 0 0 1  
//next night 0 0 0 0 0 1 1 0

//Otherwise the light will go On as normal.
//The two street lights at the end of the road only a single adjacent street light, so the light at the end can be assumed to be always OFF. 

//The state of the light on a particular day is considered for the following day not for the same day.

//Because of this fault, people are having difficulty driving on the road at night. They have filled a complaint to the head of the highway adminstration. 

//Based on this complaint the head ]has ordered a report of the state of street light after M days.
//Write an algorithm to output the state of the street light after
//the given M days.

/*
First line input: consists of an integer-currentState_size,
representing the number of street ligths(N).
Second line input: consists of N space-separated integers
currentState, representing the current state of the street
light(i.e 0, or 1).
The last line input: consists of an integer days representing
the number of day(M)
*/

/*Print eight space-separated integers representing
the state of the street light after M days.*/

// First Input: 8
// Second line input: 1 1 1 0 1 1 1 1
// Thirs line input: 2
// Output: 0 0 0 0 0 1 1 0


//base version v1
function getStateOfLight(currentState, totalDays){
    var processStateArray = (state) => {
        let processedState = [];
        for(let i =0; i<state.length; i++){
            if((i == 0 && state[i+1] === 0 ) || (i == state.length -1 && state[i-1] == 0)){
               processedState[i] = 0;
            }else {
                if((state[i+1] === 0 && state[i-1] === 0 )|| (state[i+1] ===1 && state[i-1] === 1 )){
                      processedState[i] = 0;
                }else{
                      processedState[i] = 1; 
                }
            }    
        }
        return processedState
    }
    let day = 0;
    let dayState = [...currentState];
    while(day < totalDays){
        dayState = processStateArray(dayState);
        day++
    }
    return dayState;
}


console.log(getStateOfLight([1 ,1, 1, 0, 1, 1, 1, 1], 2));







