class Cookie {
  constructor({type, flour, additives, glutenFree}) {
  	this.type = type;
    this.flour = flour;
    this.additives = additives;
    this.glutenFree = glutenFree; 
  }
}

class CookieMonster {
	constructor(name, maxCookieCount = 3, glutenAllergy = false, hungry = true) {
  	this.hungry = hungry;
    this.cookiesInBelly = 0;
    this.glutenAllergy = glutenAllergy; 
    this.name = name; 
    this.maxCookieCount = maxCookieCount; 
  }
  
  digestFood () {
  	setInterval( () => {
    	this.cookiesInBelly -= 1; 
      console.log(this.cookiesInBelly); 
    }, 1000);
  }
  
  checkCookiesInBelly () {
  	setInterval( () => {
      if (this.cookiesInBelly <= 0) {       
       console.log(`${this.name} says, "Me hungry, me want cookie!"`);
      }
    }, 500)
  }
  
  eatACookie (cookie) {
  	if (this.glutenAllergy === true && cookie.glutenFree === true) { 
    	console.log(`${this.name} says, "Me have gluten allergy, me love dis cookie!"`);
      this.cookiesInBelly++; 
		} else if (this.glutenAllergy === false) {
    	console.log(`${this.name} says, "Me love dis cookie!"`); 
      this.cookiesInBelly++;     
    } else {
       console.log(`${this.name} says, "Me no like ${cookie.type} cookie!"`);
     }
   
    return console.log(`Belly Cookie Count: ${this.cookiesInBelly}` )
   }
}


let peanutButterCookie = new Cookie({type: 'peanutbutter', flour: 'wheat', additivites: 'peanutButter', glutenFree: true}); 
let chocolateChipCookie = new Cookie({type: 'chocolate_chip', flour: 'white', additivites: 'chips', glutenFree: false}); 

let Bob = new CookieMonster('Bob', true);
let Linda = new CookieMonster('Linda', false); 

Bob.eatACookie(peanutButterCookie); 
Linda.eatACookie(chocolateChipCookie); 

var groupOfMonsters = [];
groupOfMonsters.push(Bob); 
groupOfMonsters.push(Linda); 

console.log(groupOfMonsters);