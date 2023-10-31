function scuberGreetingForFeet(feet){
  const messageFree = "This one is on me!";
  const messageTwenty = "That will be twenty bucks.";
  const messageThirty = "I will gladly take your thirty bucks."
  const messageNope = "No can do.";
  
  if (feet <= 400) {
    return messageFree;
  } else if (feet > 400 && feet <= 2000) {
    return messageTwenty;
  } else if (feet > 2000 && feet < 2500) {
    return messageThirty;
  } else if (feet >= 2500) {
    return messageNope;
  }
}

function ternaryCheckCity(city){
  const messageNYC = "Ok, sounds good.";
  const messageNotNYC = "No go.";

  return city === 'NYC'?
    messageNYC:
    messageNotNYC
}

function switchOnCharmFromTip(tip){
  const messageGenerous = 'Thank you so much.';
  const messageNotGenerous = 'Thank you.';
  const messageGeneral = 'Bye.';
  
  switch (tip) {
    case 'generous':
      return messageGenerous;
      break;
    case 'not as generous':
      return messageNotGenerous;
      break;
    default:
      return messageGeneral;
      break;
  }
}