// DEFINE YOUR FUNCTION BELOW:
function returnDay(number){
    let res=' ';
    switch(number){
        case 1:
            res='Monday';
            break;
        case 2:
            res= 'Tuesday';
            break;
        case 3:
            res='Wednesday';
            break;
        case 4:
            res='Thursday';
            break;
        case 5:
            res='Friday';
            break;
        case 6:
            res='Saturday';
            break;
        case 7:
            res='Sunday';
            break;
        default:
            res=null;
    }
    return res;
}