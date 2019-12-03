const Person = function(name, age, invite, drink, friends) {
    this.name = name;
    this.age = age;
    this.invite = invite;
    this.drink = drink;
    this.friends = friends
}
const drinks = ['Vodka', 'Whiskey', 'Brandy'];

const guest_list = [];

const person_1 = new Person('John', 34, true, drinks[0], ['Tom', 'Jim']);

Person.prototype.isInvited = function(){
  
    if (this.invite === true) {
        console.log(this.name + ' Is invited')
    } else {
        console.log(this.name + ' Is not invited')
    }
}

Person.prototype.canDrink = function(){
    if (this.age > 21) {
        return canDrink = 'Can Drink'
    } else {
        return cantDrink = 'Not old enough'
    }
}
Person.prototype.headCount = function() {
    if (this.friends.length > 0) {
        return guest = 'Has friends'
    } else {
        return noGuest = 'Has no friends'
    }
}

Person.prototype.guestTally = function(){
    if (this.invite === true && this.friends.length > 0) {
      return guest_list.push(this.friends)
    } 
}

function checkInv(drink) {
   return drink === 'Whiskey'
}

const menu = drinks.filter(checkInv);

console.log(person_1.friends)

const inv = person_1.isInvited()
person_1.guestTally();
console.log(guest_list)
console.log(person_1.canDrink())
console.log(person_1.headCount())




