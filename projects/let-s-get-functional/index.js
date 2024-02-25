// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// set the result of filter to a variable 
    let males = _.filter(array, function(customer){
        // filter is creating an array this step fills the array with all the mals
        // in the object
        return customer.gender === 'male';
    });
    // since we're dealing with an array we can use .length to count
    return males.length
    };


var femaleCount = function(array){
    // use reduce to count the number of female customers
    let result = _.reduce(array, function(accum, current){
// if the current gender = female 
 if(current.gender === "female"){
 // then incrament the accumulater 
 accum++
 }
return accum
    },0)
    return result
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return current;
            } else {
            return accumulator;
            }
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return accumulator;
            } else {
            return current ;
            }
    
    })
    return youngest.name;
}
var averageBalance = function(array){
    let balance = _.reduce(array, function(accumulator, current){
        let totalBalance = current.balance.replace(/[$, ,]/g, "");
     let newNumbers = parseFloat(totalBalance);
    return newNumbers + accumulator;
    }, 0)
    return  balance / array.length
    };
    

var firstLetterCount = function(array){
    let friendLetter = _.filter(array, function(customer){
        if (customer.name[0].toUpperCase() === letter.toUpperCase()){
            return customer.name
        }
    })
    return friendLetter.length
};

var friendFirstLetterCount = function(array, customer, letter){
     //create a variable to store the count
 var count = 0;
 //create a variable to store the customer's friends
 var friends = array.filter(function(cust){
   return cust.name === customer;
 })[0].friends;
 //iterate through the friends array
 friends.forEach(function(friend){
   //if the first letter of the friend's name is equal to the letter
   if(friend.name[0].toUpperCase() === letter.toUpperCase()){
     //increment the count
     count++;
   }
 })
 //return the count
 return count;

}


var friendsCount = function(){};

var topThreeTags = function(){};

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
