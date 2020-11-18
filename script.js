var planet = {
    name: 'Earth',
    age: "4.543 billion years",
    moons: 1,
    ispopulated: true,
    population: "7.594 billion", 
    neighboringplanets: ["Mars", "Venus"],
   
    LogFacts: function () {
        console.log(" This planet's name is " + this.name)
        console.log(" This plane's age is " + this.age)
    } 

}

planet.LogFacts()
console.log(planet.ispopulated)
// console.log(planet.population)
