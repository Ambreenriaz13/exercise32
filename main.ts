//Array of current users
let current_users = ["Hamza", "Asif", "Ali", "Afnan", "Zaid"]
// Array of new users
let new_users =[ "Adnan", "Afnan","Ali","Ziyam","faisal"]

// loop through new users to check for usernames avaibility
new_users.forEach(new_one_user =>{
   
   //Making a condition for username already and save in our_condition variable
        let our_condition = current_users.some (current_one_user =>current_one_user.toLowerCase ()=== new_one_user.toLowerCase())
        
        // Print different messages using If else statement
        if(our_condition){
            console.log(`sorry ${new_one_user} is already taken!`)
         }else{
            console.log(`This Username ${new_one_user} is available`)
         }
    });