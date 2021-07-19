function validUserNames(usernames){
    let filtered=usernames.filter(function(username){
        return username.length<10;
    })
    return filtered;
}