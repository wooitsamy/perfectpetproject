console.log("loading");
var name = [
  "Oatmeal",
  "Ollie",
  "Duke",
  "Bear", 
  "Dolly",
  "Luna",
  "Coco",
  "Woody",
  "Millie" ]; 
  
var gender = ["female", "male"]; 

var age = [
  "3 weeks",
  "1 month",
  "3 months",
  "6 months",
  "1 years old",
  "1.5 years old", 
  "2 years old",
  "2.5 years old", 
  "3 years old"];

var species = [
  "unknown",
  "mix",
  "Snake",
  "Turtle"
  "Lizard",
  "Iguana", 
  "Gecko", 
  "Turtle", 
  "Turtle"]; 

var neutered = ["neutered", "not neutered"] 

var personality = [ 
  "fun, energetic", 
  "friendly, happy",
  "calm, mellow", 
  "outgoing, friendly", 
  "loyal, confident", 
  "shy, quiet",
  "protective, alpha",
  "playful, kid friendly",
  "cheeky, funny"]; 

var h = 0;
var i = 0;
var j= 0;
var k= 0; 

var randomGender = gender[Math.floor(Math.random() * gender.length)];
var randomNeutered = neutered[Math.floor(Math.random() * neutered.length)];

for (h = 0, i=0, j=0, k=0; h < name.length && i < age.length && j < breed.length && k < personality. length ; h++, i++, j++, k++){

  
    text += "<li> Name: " + name[h] + "</li>" +  "<br>" 
            "<li>" randomGender "</li>" + "<br>"
            "<li> Age: " + age[i] + "</li>" + "<br>"
            "<li> Species: " + species[j] + "/li>" + "<br>"
            "<li>" + randomNeutered + "</li>" + "<br>"
            "<li> Personality: " + personality[k] + "</li>" + "<br>";
}   

console.log(text); 

