//Array of current users
var current_users = ["Hamza", "Asif", "Ali", "Afnan", "Zaid"];
// Array of new users
var new_users = ["Adnan", "Afnan", "Ali", "Ziyam", "faisal"];
// loop through new users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    //Making a condition for username already and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using If else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
