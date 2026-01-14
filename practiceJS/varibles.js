const accountID = 147852
let accountEMAIL = "Rohitjaiswal@gmail.com"
var accountPassword = "123456"
accountCity = "raipur"
let accountState

// accountID =5 //NOT ALLOWED

console.log(accountID);

/*
   prefer not to use var
   becasuse of issue in block scope and functional scope
*/

accountEMAIL = "rohit.com"
accountPassword = "789456"
accountCity = "ram"

console.table([accountID,accountEMAIL,accountPassword,accountCity,accountState])
