
//Header text english translations
function changeHeaderLanguageENG(){
  document.getElementById("title").innerHTML = "Skinnarila Padel Field";
  document.getElementById("socialMediaText").innerHTML = "Follow us";
  document.getElementById("mediumSocialMediaText").innerHTML = "Follow us";
  document.getElementById("smallSocialMediaText").innerHTML = "Follow us";
}

//All other text english translations
function changeBodyLanguageENG(){
  document.getElementById("introText").innerHTML = "<strong>Let's play<br> Padel!</strong>";
  document.getElementById("whatsApp").innerHTML = "Looking for people to play Padel with? Join our WhatsApp group!";
  document.getElementById("whatsAppLink").innerHTML = "Link for the WhatsApp-group: <a style='font-size: 50px; color:white' href='https://chat.whatsapp.com/DhrUilT7DuhKwryJxkOnYD'><span>CLICK HERE</span></a>";
  document.getElementById("timmiText").innerHTML = "You can make a reservation here: <a style='color:white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;' href='https://www.timmi4.lappeenranta.fi'>timmi4.lappeenranta.fi</a> . You can only make reservations through Timmi. Unfortunately the site is only available in Finnish. <br> <br> \n" +
    "\n" +
   "How to make a reservation: Liikuntatoimi --> Log in/register --> Varauskalenteri --> Search for: Skinnarilan Padelkenttä --> Pick your preferred time and fill in the required info.";
  document.getElementById("rulesResize").innerHTML = "Näytä enemmän / Show more";
  document.getElementById("rulesText").classList.add("rulesTextFade");
  document.getElementById("padelRulesTitle").innerHTML = "<strong>Forgot the rules?</strong>";
  document.getElementById("rulesText").innerHTML = "<strong>Matches</strong> are always played in doubles and the best of the three sets wins. The first to win six games wins the round, after they have a lead with a difference of two rounds. At the beginning of the game, the teams decide which side they'll play. The orientation lasts until the half-game, after which the sides can be changed.\n" +
  "\n" +
  "      <br><br><strong>Scoring</strong> is the same as in tennis (15, 30, 40 and the game; in a draw 40-40, two consecutive points are needed for a team to win the game). When the game is tied 6-6, the winners are decided by playing a tiebreaker, which is played until seven points, however again, with a lead of<span id=\"dots\">...</span><span id=\"more\"> two points.\n" +
  "\n" +
  "      <br><br><strong>The start of the game</strong> is made with a tap-off. The serve is decided by the winner of the tap-off. In the tap-off, all players are going to be hitting the ball once onto the opponent's field, after which the winners of the tap-off can decide which side they'll play and will perform the serve.\n" +
  "\n" +
  "      <br><br><strong>The Serve</strong> must bounce the ball on the ground within the service box in which they find themselves to carry out the serve. In the first instance the serve must go into the receiver’s box located at his left side. The height of the ball being served must be at or below the waist level at the moment of hitting it, and the player must have at least one foot in contact with the ground. The person serving has two attempts at making a successful serve.\n" +
  "\n" +
  "      The serve must bounce off the opponent's square. After the bounce, the ball can hit the glass wall, but not the net wall.If the serve hits the net but is otherwise correct, the player can have a second attempt. During the serve, the teammate must be close to the net.\n" +
  "\n" +
  "      The first point is served from the right-side square, after that from the left and then right back-and-forth again. After the end of a match, the serve passes to the opponent.\n" +
  "\n" +
  "      After the serve, all of the ground becomes the playing field.\n" +
  "\n" +
  "      The serve cannot be hit back instantly from the air, but only after the return of the serve, the ball may be hit directly from the air, after a bounce, either after a bounce from your own glass wall and directly from the air after it bounced off the opponent’s glass wall. The ball cannot be hit on the opponent's side through the net wall. During a ball rally, the ball may not touch the ground on the same side of the field more than once.\n" +
  "\n" +
  "      <br><br><strong>The game is played</strong> until the ball gets stuck in the net, the ball falls onto your own side after hitting the net, the ball bounces twice off the ground on the same side of the field, or the ball hits the glass wall or net on the opponent's side before first touching the ground.\n" +
  "\n" +
  "      <br><br><strong>Tie-break</strong> happens when the game is in a 6-6 situation. The serve in tie-break is made from the right-side square by the next player in the serve, who will hit for one point. After this, the serve is passed onto the opponent, who will hit for two points, from the opposite side's left square. The tie-break will go on until seven points are reached, with a two-point lead over the opponent. The serve changes every two points to the opponent and the first serve is always played from the second square.\n" +
  "\n" +
  "      <br><br><strong>Hitting the ball off the field.</strong> If a player hits the ball onto the opponent's field and it bounces off the court, the batsman will usually win the point. However, in some cases, you can go and run out of the doorways to try and hit the ball back into the court and have it land on the opponent’s field.</span></p>";
  document.getElementById("parkingHeader").innerHTML = "Moving by car...?";
  document.getElementById("parkingText").innerHTML = "Parking is only allowed in the deginated areas.\n" +
    "      You can freely park in the spots without heating poles in P4 and P8. Outside of 1.11. to 31.3. you are also allowed to freely use the spots with heating in P4.<br><br>\n" +
    "      For spots that require a parking disc, you are allowed to park for 3 hours at a time. If you wish to park on the designated guest spots, you must call the numbers shown on the P-sign and ask for permission.";
  document.getElementById("contactInfoTitle").innerHTML = "Contact Info";
}

//Header finnish translations
function changeHeaderLanguageFIN() {
  document.getElementById("title").innerHTML = "Skinnarilan Padelkenttä";
  document.getElementById("socialMediaText").innerHTML = "Seuraa meitä";
  document.getElementById("mediumSocialMediaText").innerHTML = "Seuraa meitä";
  document.getElementById("smallSocialMediaText").innerHTML = "Seuraa meitä";
}

//All other text finnish translations
function changeBodyLanguageFIN(){
  document.getElementById("introText").innerHTML = "<strong>Kaikki pelaamaan<br> Padelia!</strong>";
  document.getElementById("whatsApp").innerHTML = "Etsitkö pelikavereita? Liity meidän WhatsApp-ryhmään!";
  document.getElementById("whatsAppLink").innerHTML = "Linkki WhatsApp- ryhmään: <a style=\"font-size: 50px; color:white\" href=\"https://chat.whatsapp.com/DhrUilT7DuhKwryJxkOnYD\"><span>TÄSTÄ</span></a></a>";
  document.getElementById("timmiText").innerHTML = "Voit varata kentän itsellesi ja pelikavereillesi sivulta: <a style='color:white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;' href='https://www.timmi4.lappeenranta.fi'>timmi4.lappeenranta.fi</a> . Ajanvaraus Skinnarilan Padelkentälle toimii vain Timmin kautta. <br><br> \n" +
    "\n" +
    "Ajanvaraus: Liikuntatoimi --> Kirjaudu/Rekisteröidy --> Varauskalenteri --> Hae: Skinnarilan Padelkenttä --> Klikkaa haluaamasi aikaa ja täytä tiedot.";
  document.getElementById("rulesResize").innerHTML = "Näytä enemmän / Show more";
  document.getElementById("rulesText").classList.add("rulesTextFade");
  document.getElementById("padelRulesTitle").innerHTML = "<strong>Unohtuiko säännöt?</strong>";
  document.getElementById("rulesText").innerHTML = "<strong>Ottelut</strong> pelataan aina nelinpelinä ja paras kolmesta erästä voittaa. Ensimmäinen kuusi peliä voittanut voittaa erän, kun heillä on kahden erän erotus. Pelaajapari päättää erän alussa kumpaa puolta kumpikin pelaa. Puoli säilyy erän loppuun asti, jonka jälkeen puolta voi vaihtaa.\n" +
    "\n" +
    "      <br><br><strong>Pistelasku</strong> sama kuin tenniksessä (15, 30, 40 ja peli; tasatilanteessa 40-40 tarvitaan kaksi peräkkäistä pistettä pelin voittamiseksi). Pelien ollessa tasan 6-6, erävoitto ratkaistaan pelaamalla tie-break, joka pelataan 7 pisteeseen, kuitenkin kahden pisteen<span id=\"dots\">...</span><span id=\"more\"> erolla.\n" +
    "\n" +
    "      <br><br><strong>Pelin alussa pelataan aloituspallo.</strong> Syöttövuoron aloittaa aloituspallon voittanut pari. Aloituspallossa kunkin pelaajan on lyötävä pallo kerran vastustajan kenttäpuolelle, jonka jälkeen aloituspallon voittanut pari aloittaa ensimmäisen syöttövuoron tai valitsee kenttäpuolen.\n" +
    "\n" +
    "      <br><br><strong>Syöttö</strong> alakautta: Pallo pompautetaan syöttöviivan takana, lyönti vyötärön alapuolelta verkon toiselle puolelle ristiin ruutuun. Syöttäjällä on käytössään kaksi syöttöä.\n" +
    "\n" +
    "      Syötön tulee pompata vastustajan ruutuun. Pompun jälkeen syötössä pallo saa osua lasiseinään, mutta ei verkkoseinään. Jos syöttö osuu verkkonauhaan, mutta on muuten oikein, pelaaja saa uuden syötön. Syötössä pari sijoittuu lähelle verkkoa.\n" +
    "\n" +
    "      Ensimmäinen piste syötetään oikeanpuoleisesta ruudusta, tämän jälkeen vasemmasta ja oikeasta vuorotellen. Pelin päätyttyä syöttövuoro siirtyy vastustajalle.\n" +
    "\n" +
    "      Syötön jälkeen pelikenttänä on koko kenttä.\n" +
    "\n" +
    "      Syöttöä ei saa lyödä takaisin suoraan ilmasta, mutta syötönpalautuksen jälkeen pallon saa lyödä suoraan ilmasta, pompun kautta, pompun jälkeen oman lasiseinän kautta, ja suoraan ilmasta oman lasiseinän kautta vastustajan kenttään. Palloa ei saa lyödä verkkoseinän kautta vastustajan puolelle. Pallorallin aikana pallo saa osua samalla kenttäpuoliskolla maahan korkeintaan kerran.\n" +
    "\n" +
    "      <br><br><strong>Palloa pelataan</strong> kunnes se jää verkkoon, lyödään omalla puolella verkkoseinään, pomppaa samalla kenttäpuoliskolla maahan kaksi kertaa tai osuu vastustajan puolella ensin lasi- tai verkkoseinään.\n" +
    "\n" +
    "      <br><br><strong>Tie-break.</strong> Aloitettaessa 6-6 pelitilanteessa tie-break, syötön aloittaa oikeanpuoleisesta ruudusta seuraavaksi syöttövuorossa oleva pelaaja, joka syöttää yhden pisteen. Tämän jälkeen syöttö siirtyy syöttövuorossa olevalle vastustajalle, joka syöttää kaksi pistettä, ensimmäisen vasemmanpuoleisesta ruudusta. Tie-break jatkuu 7 pisteeseen asti, kahden pisteen erolla. Syöttövuoro vaihtuu kahden pisteen välein vastustajalle ja ensimmäinen syöttö pelataan aina kakkosruudusta.\n" +
    "\n" +
    "      <br><br><strong>Pallon lyöminen ulos kentältä.</strong> Jos pelaaja lyö pallon vastustajan kenttäpuoliskon kautta ulos kentältä, lyöjä voittaa yleensä pisteen. Pallon perään voi kuitenkin joissain tapauksissa juosta ulos oviaukoista lyödäkseen sen takaisin verkon yli vastustajan kenttäpuoliskolle.</span></p>";
  document.getElementById("parkingHeader").innerHTML = "Liikutko autolla?";
  document.getElementById("parkingText").innerHTML = "Pysäköinti on sallittu vain merkityillä pysäköintialueilla.\n" +
    "      Maksuttomia pysäköintialueita ovat P4- ja P8-alueiden tolpattomat paikat sekä P4-alueen tolppapaikat kausipysäköinnin 1.11.–31.3. ulkopuolella. <br><br>\n" +
    "      Kiekkopaikoilla saa pysäköidä kolme tuntia kerrallaan. Vieraspaikoille pysäköidessä täytyy soittaa P-alueen kyltissä olevaan numeroon luvan saamiseksi.";
  document.getElementById("contactInfoTitle").innerHTML = "Yhteystiedot";
}


//Functio to hide part of the rules and bring them back
function rulesMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var resizeText = document.getElementById("rulesResize");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    resizeText.innerHTML = "Näytä enemmän / Show more";
    moreText.style.display = "none";
    document.getElementById("rulesText").classList.add("rulesTextFade");
  } else {
    dots.style.display = "none";
    resizeText.innerHTML = "Näytä vähemmän / Show less";
    moreText.style.display = "inline";
    document.getElementById("rulesText").classList.remove("rulesTextFade");
  }
}
var egg = new Egg();
egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
    jQuery('#egggif').fadeIn(500, function() {
      window.setTimeout(function() { jQuery('#egggif').hide(); }, 5000);
    });
  }, "konami-code");
  egg.addHook(function(){
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
  });
  egg.listen();
