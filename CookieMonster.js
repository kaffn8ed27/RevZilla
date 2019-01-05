/*
A class for creating a delicious cookie
Params: type:       string - the type of cookie being made
        flour:      string - type of flour used to make this cookie
        additives:  string - other ingredients used in the cookie
        glutenFree: boolean - if a CookieMonster has a gluten allergy, they will check this value. If 'true', a monster with an allergy can eat it.
*/
class Cookie {
  constructor({type, flour, additives, glutenFree}) {
    // set instance properties equal to constructor params
  	this.type = type;
    this.flour = flour;
    this.additives = additives;
    this.glutenFree = glutenFree; 
  }
}

/*
A class for a being that may or may not enjoy cookies
Params: name:           string - the cookie monster's name
        maxCookieCount: number - largest number of cookies a monster can have in his/her belly at once (not yet implemented)
        glutenAllergy:  boolean - if true, monster must eat gluten-free cookies. Otherwise, can eat any cookie given to it (all CookieMonsters get this set to false)
        hungry:         boolean - (not yet implemented)
*/
class CookieMonster {
	constructor(name, maxCookieCount = 3, glutenAllergy = false, hungry = true) {
  	this.hungry = hungry;
    this.cookiesInBelly = 0; // default to unfed monster
    this.glutenAllergy = glutenAllergy;
    this.name = name; 
    this.maxCookieCount = maxCookieCount; 
  }
  
  // Monster periodically digests a cookie
  digestFood () {
  	setInterval( () => {
    	this.cookiesInBelly -= 1; // is it OK to have less than 0 cookies?
      console.log(this.cookiesInBelly); 
    }, 1000); // rate: 1 cookie per second
  }
  
  // Monster periodically checks if it has cookies in its belly; i.e., if it's hungry
  checkCookiesInBelly () {
  	setInterval( () => {
    // adding use of maxCookieCount to set hungry boolean
    //   this.hungry = true          
      if (this.cookiesInBelly <= 0) {       
       console.log(`${this.name} says, "Me hungry, me want cookie!"`);
      } 
    //   else if (this.cookiesInBelly === maxCookieCount ) {
    //     this.hungry = false   
    //   }
    }, 500) // check every half second
  }
  
  // Give the monster a cookie and see if it can eat it
  eatACookie (cookie) {
    // adding use of hungry
    // if (this.hungry) {      
    // If the monster is allergic to gluten, check if the cookie is gluten-free
  	if (this.glutenAllergy === true && cookie.glutenFree === true) { 
        // gluten-free cookies can be eaten
        console.log(`${this.name} says, "Me have gluten allergy, me love dis cookie!"`);
      // add a cookie to the monster's belly
      this.cookiesInBelly++;
        // if monster is not allergic to gluten, doesn't matter what kind of cookie it is
		} else if (this.glutenAllergy === false) {
        console.log(`${this.name} says, "Me love dis cookie!"`); 
      // add a cookie to the monster's belly
      this.cookiesInBelly++;     
    } else { // monster has a gluten allergy and the cookie has gluten -> can't eat it
       console.log(`${this.name} says, "Me no like ${cookie.type} cookie!"`);
     }
     // If the monster is not hungry, he/she doesn't eat the cookie
    // } else {
    //        	console.log(`${this.name} says, "Me too full for cookie right now!"`); 
    // }
   
    return console.log(`Belly Cookie Count: ${this.cookiesInBelly}` )
   }
}

// peanut butter cookies are gluten free (bonus: made with wheat flour, so they're "healthy")
let peanutButterCookie = new Cookie({type: 'peanutbutter', flour: 'wheat', additivites: 'peanutButter', glutenFree: true}); 
// chocolate chipe cookies are not gluten free
let chocolateChipCookie = new Cookie({type: 'chocolate_chip', flour: 'white', additivites: 'chips', glutenFree: false}); 

// Bob is trying to tell us he has a gluten allergy, but we haven't passed enough arguments. 'maxCookieCount' takes the value of the second arg.
let Bob = new CookieMonster('Bob', true);
// Linda has no gluten allergy; same issue as Bob
let Linda = new CookieMonster('Linda', false); 

// peanut butter cookies are gluten free, so luckily we didn't accidentally kill Bob
Bob.eatACookie(peanutButterCookie); 
// Linda has no gluten allergy, so she can eat any cookies (in this case, the chocolate chip ones that DO have gluten)
Linda.eatACookie(chocolateChipCookie); 

// create an array to hold the monsters we've just created and fed
var groupOfMonsters = [];
// put Bob in the array
groupOfMonsters.push(Bob);
// put Linda at the end of the array
groupOfMonsters.push(Linda); 

// print our array of cookie monsters to the console
console.log(groupOfMonsters);
// [   CookieMonster {
//         hungry: true,
//         cookiesInBelly: 1,
//         glutenAllergy: false,
//         name: 'Bob',
//         maxCookieCount: true
//     },
//     CookieMonster {
//         hungry: true,
//         cookiesInBelly: 1,
//         glutenAllergy: false,
//         name: 'Linda',
//         maxCookieCount: false}]