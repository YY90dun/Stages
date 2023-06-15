console.log("hi");

document.getElementById("s").addEventListener("click", SearchButtonClicked);

function SearchButtonClicked() {
  let name = document.getElementById("acr").value.toUpperCase();

  if (name == "LOL") {
    document.getElementById("a").innerHTML = "Laugh Out Loud";
  } else if (name == "GTG") {
    document.getElementById("a").innerHTML = "Got To Go";
  } else if (name == "G2G") {
    document.getElementById("a").innerHTML = "Got To(2) Go";
  } else if (name == "BRB") {
    document.getElementById("a").innerHTML = "Be Right Back";
  } else if (name == "OMW") {
    document.getElementById("a").innerHTML = "On My Way";
  } else if (name == "OMG") {
    document.getElementById("a").innerHTML = "Oh My God";
  } else if (name == "FR") {
    document.getElementById("a").innerHTML = "For Real";
  } else if (name == "IDK") {
    document.getElementById("a").innerHTML = "I Don't Know";
  } else if (name == "IK") {
    document.getElementById("a").innerHTML = "I Know";
  } else if (name == "SMH") {
    document.getElementById("a").innerHTML = "Shakin' My Head";
  } else if (name == "FPS") {
    document.getElementById("a").innerHTML = "enter 1 or 2 afterwards";
  } else if (name == "FPS1") {
    document.getElementById("a").innerHTML = "Frames Per Second";
  } else if (name == "FPS2") {
    document.getElementById("a").innerHTML = "First Person Shooter";
  } else if (name == "DPS") {
    document.getElementById("a").innerHTML = "Damage Per Second";
  } else if (name == "CPS") {
    document.getElementById("a").innerHTML = "Clicks Per Second";
  } else if (name == "CPU") {
    document.getElementById("a").innerHTML = "ComPUter";
  } else if (name == "OP") {
    document.getElementById("a").innerHTML = "OverPowered";
  } else if (name == "UP") {
    document.getElementById("a").innerHTML = "UnderPowered";
  } else if (name == "IMK") {
    document.getElementById("a").innerHTML = "I Might Know";
  } else if (name == "OFC") {
    document.getElementById("a").innerHTML = "OF Course";
  } else if (name == "MLG") {
    document.getElementById("a").innerHTML = "Major League Gamer";
  } else if (name == "ONG") {
    document.getElementById("a").innerHTML = "ON God";
  } else if (name == "OML") {
    document.getElementById("a").innerHTML = "On My Life";
  } else if (name == "BC") {
    document.getElementById("a").innerHTML = "BeCause";
  } else if (name == "BTW") {
    document.getElementById("a").innerHTML = "By The Way";
  } else if (name == "TBH") {
    document.getElementById("a").innerHTML = "To Be Honest";
  } else if (name == "NGL") {
    document.getElementById("a").innerHTML = "Not Gonna Lie";
  } else if (name == "DM") {
    document.getElementById("a").innerHTML = "Direct Message";
  } else if (name == "FTW") {
    document.getElementById("a").innerHTML = "For The Win";
  } else if (name == "FWIW") {
    document.getElementById("a").innerHTML = "For What It's Worth";
  } else if (name == "MIA") {
    document.getElementById("a").innerHTML = "Missing In Action";
  } else if (name == "NPC") {
    document.getElementById("a").innerHTML = "Non-Player Character";
  } else if (name == "IG") {
    document.getElementById("a").innerHTML = "I Guess";
  } else if (name == "ILY") {
    document.getElementById("a").innerHTML =
      "I Love You (also available by 143)";
  } else if (name == "143") {
    document.getElementById("a").innerHTML =
      "I Love You (also available by ILY)";
  } else if (name == "IMO") {
    document.getElementById("a").innerHTML = "In My Opinion";
  } else if (name == "IRL") {
    document.getElementById("a").innerHTML = "In Real Life";
  } else if (name == "JK") {
    document.getElementById("a").innerHTML = "Just Kidding";
  } else if (name == "LMK") {
    document.getElementById("a").innerHTML = "Let Me Know";
  } else if (name == "NP") {
    document.getElementById("a").innerHTML = "No Problem";
  } else if (name == "NVM") {
    document.getElementById("a").innerHTML = "NeVer Mind";
  } else if (name == "ROFL") {
    document.getElementById("a").innerHTML = "Rolling On Floor Laughing";
  } else if (name == "LOL") {
    document.getElementById("a").innerHTML = "Laugh Out Loud";
  } else if (name == "THX") {
    document.getElementById("a").innerHTML = "THan-ks(X)";
  } else if (name == "YOLO") {
    document.getElementById("a").innerHTML = "You Only Live Once";
  } else if (name == "!LMAO") {
    document.getElementById("a").innerHTML = "Laughing My Ass Off";
  } else if (name == "SOS") {
    document.getElementById("a").innerHTML = "Save Our Souls";
  } else if (name == "!BFFR") {
    document.getElementById("a").innerHTML = "Be Fucking For Real";
  } else if (name == "TMI") {
    document.getElementById("a").innerHTML = "Too Much Information";
  } else if (name == "!AF") {
    document.getElementById("a").innerHTML = "As Fuck";
  } else if (name == "AFK") {
    document.getElementById("a").innerHTML = "Away From Keyboard";
  } else if (name == "GG") {
    document.getElementById("a").innerHTML = "Good Game";
  } else if (name == "OG") {
    document.getElementById("a").innerHTML = "OriGinal | vanilla";
  } else if (name == "ASAP") {
    document.getElementById("a").innerHTML = "As Soon As Possible";
  } else if (name == "RLY") {
    document.getElementById("a").innerHTML = "RealLY";
  } else if (name == "EZ") {
    document.getElementById("a").innerHTML = "Ea-sy(Z)";
  } else if (name == "!GTFO") {
    document.getElementById("a").innerHTML = "Get The Fuck Out";
  } else if (name == "FYI") {
    document.getElementById("a").innerHTML = "For Your Infromation";
  } else if (name == "VIP") {
    document.getElementById("a").innerHTML = "Very Important Person";
  } else if (name == "RIP") {
    document.getElementById("a").innerHTML = "Rest In Peace";
  } else if (name == "!WTF") {
    document.getElementById("a").innerHTML = "What The Fuck";
  } else if (name == "1337") {
    document.getElementById("a").innerHTML =
      "leet (1=l 3=e 7=t) (Leet Means Elite)";
  } else if (name == "LME") {
    document.getElementById("a").innerHTML =
      "did you know that all the coins in all 5 levels of worlds hardest game 3 adds up to 1337? cool, right? so if you beat the game, you are leet (elite). ";
  } else if (name == "IQ") {
    document.getElementById("a").innerHTML = "Intelligence Quotient";
  } else if (name == "KB") {
    document.getElementById("a").innerHTML = "KiloBytes";
  } else if (name == "MB") {
    document.getElementById("a").innerHTML = "MegaBytes";
  } else if (name == "GB") {
    document.getElementById("a").innerHTML = "GigaBytes";
  } else if (name == "TB") {
    document.getElementById("a").innerHTML = "TeraBytes";
  } else if (name == "TSF") {
    document.getElementById("a").innerHTML = "Terra Swoop Force";
  } else if (name == "KMH") {
    document.getElementById("a").innerHTML = "KiloMeters per Hour";
  } else if (name == "AP") {
    document.getElementById("a").innerHTML = "Ability Points";
  } else if (name == "NC") {
    document.getElementById("a").innerHTML = "No Comment";
  } else if (name == "MC") {
    document.getElementById("a").innerHTML = "MineCraft";
  } else if (name == "MCC") {
    document.getElementById("a").innerHTML = "MineCraft Championships";
  } else if (name == "MCD") {
    document.getElementById("a").innerHTML = "MC Donalds";
  } else if (name == "GD") {
    document.getElementById("a").innerHTML = "Geometry Dash";
  } else if (name == "GDDP") {
    document.getElementById("a").innerHTML = "Geometry Dash Demon Progression";
  } else if (name == "KFC") {
    document.getElementById("a").innerHTML = "Kentucky Fried Chicken";
  } else if (name == "DK") {
    document.getElementById("a").innerHTML = "enter 1 or 2 afterwards";
  } else if (name == "DK1") {
    document.getElementById("a").innerHTML = "Donkey Kong";
  } else if (name == "DK2") {
    document.getElementById("a").innerHTML = "Drift King";
  } else if (name == "BK") {
    document.getElementById("a").innerHTML = "Burger King";
  } else if (name == "DQ") {
    document.getElementById("a").innerHTML = "Dairy Queen";
  } else if (name == "BP") {
    document.getElementById("a").innerHTML = "enter 1 or 2 afterwards";
  } else if (name == "BP1") {
    document.getElementById("a").innerHTML = "Boston Pizza";
  } else if (name == "BP2") {
    document.getElementById("a").innerHTML = "Baden Powel";
  } else if (name == "NA") {
    document.getElementById("a").innerHTML = "Not Applicable";
  } else if (name == "#1") {
    document.getElementById("a").innerHTML = "pee";
  } else if (name == "#2") {
    document.getElementById("a").innerHTML = "poo";
  } else if (name == "#3") {
    document.getElementById("a").innerHTML = "extra hair! haha";
  } else if (name == "!#1") {
    document.getElementById("a").innerHTML = "piss";
  } else if (name == "!#2") {
    document.getElementById("a").innerHTML = "shit";
  } else if (name == "PG") {
    document.getElementById("a").innerHTML = "Parental Guidance";
  } else if (name == "PR") {
    document.getElementById("a").innerHTML = "Personal Record";
  } else if (name == "PB") {
    document.getElementById("a").innerHTML = "Personal Best";
  } else if (name == "WR") {
    document.getElementById("a").innerHTML = "World Record";
  } else if (name == "RNG") {
    document.getElementById("a").innerHTML = "enter 1 or 2 afterwards";
  } else if (name == "RNG1") {
    document.getElementById("a").innerHTML = "RaNGe";
  } else if (name == "RNG2") {
    document.getElementById("a").innerHTML = "Random Number Generator";
  } else if (name == "HP") {
    document.getElementById("a").innerHTML = "Health Points";
  } else if (name == "KDR") {
    document.getElementById("a").innerHTML = "Kill/Death Ratio";
  } else if (name == "KD") {
    document.getElementById("a").innerHTML = "Kraft Dinner";
  } else if (name == "VFD") {
    document.getElementById("a").innerHTML =
      "Volunteer Fire Department (But people can say other things, OK?)";
  } else if (name == "VFDBOK") {
    document.getElementById("a").innerHTML =
      "yeah, it's a secret organization, alright?";
  } else if (name == "JS") {
    document.getElementById("a").innerHTML =
      "to this day we still don't know what it means...   ";
  } else if (name == "...") {
    document.getElementById("a").innerHTML = "...";
  } else if (name == ",,,") {
    document.getElementById("a").innerHTML = "WHAT? THAT'S SO CURSED!";
  } else if (name == "WHATTHATSSOCURSED") {
    document.getElementById("a").innerHTML =
      "Actually it is! Why did you do that? What was your thought process? Huh?";
  } else if (name == "AWWH") {
    document.getElementById("a").innerHTML = "Yeah, leave Earth. Now!";
  } else if (name == "YEN") {
    document.getElementById("a").innerHTML = "<a href='index2.html'>go!</a>";
  } else if (name == "TYSM") {
    document.getElementById("a").innerHTML = "Thank You So Much";
  } else if (name == "NAA") {
    document.getElementById("a").innerHTML =
      "Not An Acronym (You found the Easter Egg!)";
  } else if (name == "NAAYEE") {
    document.getElementById("a").innerHTML =
      "Not An Acronym (You found the Easter Egg!) (Oh my gOd aRe YoU SEriOus?)";
  } else if (name == "NAAYEEOORYUSEO") {
    document.getElementById("a").innerHTML =
      "NoT an acronym (yoU Found The eaSTer eGG!) (Oh my gOd aRe YoU SEriOus?) (You're Smarter Than I Thought) XD";
  } else if (name == "NTUFTSTGGOORYUSEOYSTITXD") {
    document.getElementById("a").innerHTML =
      "ok, you've beaten me and found the second easter egg, so here's a reward for you: https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else if (name == "QWXQ") {
    document.getElementById("a").innerHTML =
      "yes, now click the damn link already!";
  } else if (name == "RICKROLL") {
    document.getElementById("a").innerHTML =
      "oh, you fell for that huh? haha i lied you haven't beaten me at all!";
  } else if (name == "WASD") {
    document.getElementById("a").innerHTML =
      "that's for gaming lol, also arrow keys do that";
  } else if (name == "42") {
    document.getElementById("a").innerHTML =
      "Meaning Of Life (also available by MOL)";
  } else if (name == "MOL") {
    document.getElementById("a").innerHTML =
      "Meaning Of Life (also available by 42)";
  } else if (name == "69") {
    document.getElementById("a").innerHTML = "nice";
  } else if (name == "101") {
    document.getElementById("a").innerHTML = "_______mations";
  } else if (name == "111") {
    document.getElementById("a").innerHTML = "when you add 42 & 69 together";
  } else if (name == "42&69") {
    document.getElementById("a").innerHTML = "111";
  } else if (name == "420") {
    document.getElementById("a").innerHTML = "the weed number";
  } else if (name == "888") {
    document.getElementById("a").innerHTML = "my favourite number";
  } else if (name == "WYS") {
    document.getElementById("a").innerHTML = "Will You SnAIl";
  } else if (name == "WYSAI") {
    document.getElementById("a").innerHTML =
      "funny thing is, tons of ai is in it. (especially squid)";
  } else if (name == "SMP") {
    document.getElementById("a").innerHTML = "Survival MultipPlayer";
  } else if (name == "SMRDMSH") {
    document.getElementById("a").innerHTML =
      "Splitty, MR. Dance, Mama Squid, Helpy (the BEST one by FAR!)";
  } else if (name == "SMRDMSHBESTFAR") {
    document.getElementById("a").innerHTML =
      "yes, helpy is the best, ok? he is the one! helpy loves you.";
  } else if (name == "COOP") {
    document.getElementById("a").innerHTML =
      "CO-OPerative gamemode, (like black ops II zombies)";
  } else if (name == "COOPII") {
    document.getElementById("a").innerHTML =
      "trump, obam(n)a, and biden (the bois) played that at joe's first sleepover";
  } else if (name == "TV") {
    document.getElementById("a").innerHTML = "TeleVision";
  } else if (name == "DIY") {
    document.getElementById("a").innerHTML = "Do It Yourself";
  } else if (name == "CYOA") {
    document.getElementById("a").innerHTML = "Choose Your Own Adventure";
  } else if (name == "SMM") {
    document.getElementById("a").innerHTML = "SnowMan Mafia";
  } else if (name == "RN") {
    document.getElementById("a").innerHTML = "Right Now";
  } else if (name == "") {
    document.getElementById("a").innerHTML =
      "really, you're gonna leave it blank?";
  } else if (name == "CYHAHAGE") {
    document.getElementById("a").innerHTML =
      "what? no way! you win fr this time! ong you win! <a href='index3.html'>here</a>";
  } else {
    document.getElementById("a").innerHTML = "not an acronym";
  }
}