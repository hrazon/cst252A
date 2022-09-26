
let solarSystem = createSolarSystem();


solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "yellow";
sun.planetRadius = 50;
sun.orbitRadius = 0;

sun.newPlanet();
let earth = sun.planets[0];
earth.color = "blue";
earth.planetRadius = 25;
earth.orbitRadius = 200;

earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 30;


//ADD ADDITIONAL CODE HERE!
(solarSystem.planets[0]).newPlanet();
pluto.color = "pink";
pluto.planetRadius = 15;
pluto.orbitRadius = 60;
sun.color = "orange";




//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);
