function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2500) {
    return `No can do.`;
  } else if (distance > 2000) {
    return `I will gladly take your thirty bucks.`
  }
  }


function ternaryCheckCity(city){
  return (city === `NYC`) ? `Ok, sounds good.` :  `No go.`;
  } 


function switchOnCharmFromTip(amount){
  if (amount === `generous`) {
    return `Thank you so much.`;
  } else if (amount == `not as generous`) {
    return `Thank you.`;
  } else {
    return `Bye.`;
  }
}