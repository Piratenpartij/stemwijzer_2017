/*
 * by Maarten van Gompel (proycon) for Piratenpartij Nederland
 * Licensed under the GNU Public License
 * */

subcaptions = ["digitale burgerrechten","een vrije informatiesamenleving","meer privacywaarborg","een open en transparante overheid","meer burgerparticipatie","patent- en copyrighthervorming", "vrije toegang tot onderwijs", "een hervormd Europa"]

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

statements = [
    "Er moet meer bescherming zijn op wat grote bedrijven als Google en Facebook met mijn data mogen doen",
    "Ik vind dat ik in de publieke ruimte niet overal gevolgd moet worden door (slimme) camera's",
    "Burgers moeten directer bij de democratie betrokken worden; techniek maakt dit mogelijk",
    "Ik vind dat de overheid te vaak geld verspilt aan grote mislukte ICT projecten",
    "Ik heb recht op vrije en veilige communicatie zonder meekijken van overheid of grote bedrijven",
    "Klokkenluiders als Snowden en Manning vervullen een belangrijke functie en moeten beschermd worden",
    "Onderwijs is de basis van onze (informatie)samenleving en moet open en toegankelijk zijn voor iedereen",
    "Wetenschap moet onafhankelijk, open en transparant zijn: open science, open access, open source",
    "Mijn patiëntgegevens in de zorg zijn privé en mogen nooit zonder expliciete toestemming gedeeld worden, ook niet aan zorgverzekeraars.",
    "Auteursrecht moet hervormd worden voor de 21e eeuw; creatieve innovatie moet aangemoedigd worden en artiesten/auteurs moeten een eerlijke boterham kunnen verdienen",
    "Patentrecht moet beperkt worden en innovatie bevorderen ipv. hinderen. Dure patenten in de farmaceutische industrie leiden bv. tot onnodig hoge medicijnkosten",
    "Ik vind het een slechte zaak dat steeds meer fabrikanten beperken wat we met gekochte producten kunnen doen en ben tegen Digital Rights Management en vóór zelf sleutelen",
    "Het internet kent geen grenzen; kunstmatige blokkades als filmpjes/sites niet buiten bepaalde landen kunnen kijken (geoblocking) is ongewenst.",
    "Drugsgebruik voor volwassenen valt onder zelfbeschikkingsrecht: Cannabis legaliseren dus!"
];
shuffle(statements);

agree = 0;
disagree = 0;
current = 0;

function gettime() {
  var pollclosetime = new Date(2017,2,15,21,0,0); //month is 0-indexed!
  var t = pollclosetime - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function setcountdown() {
    var t = gettime();
    if (t.total < 0) {
        return false;
    }

    var s = "";
    if (t.days > 1) {
        s += t.days + " dagen<br />";
    } else if (t.days == 1) {
        s += t.days + " dag<br />";
    }
    if (t.hours >= 1) {
        s += t.hours + " uur<br />";
    }
    if (t.minutes == 1) {
        s += t.minutes + " minuut<br />";
    } else {
        s += t.minutes + " minuten<br />";
    }
    if (t.seconds == 1) {
        s += t.seconds + " seconde<br />";
    } else {
        s += t.seconds + " seconden<br />";
    }
    $('#countdown .time').html("nog " + s);
}

function changesubcaption() {
    var idx = Math.floor((Math.random() * subcaptions.length));
    $('#subcaption').html(subcaptions[idx]);
}

function presentstatement() {
    if (current == statements.length) {
        //done
        var result = Math.ceil( (agree / (agree + disagree)) * 100);
        $('#result').html(result);
        if (result >= 75) {
            $('#duiding').html("Gefeliciteerd!");
        } else if (result <= 25) {
            $('#duiding').html("Jammer!");
        }
        $('#share').show(1000);
    } else {
        $('.seqnr').html("Stelling #" + (current+1) + " van " + statements.length);
        $('#statement blockquote').html(statements[current]);
        $('#statement').show(500);
    }
}


$(document).ready(function(){
    window.setInterval(setcountdown, 500);
    window.setInterval(changesubcaption, 10000);
    presentstatement();

    $('#agree').click(function(){
        $('#statement').hide(500);
        agree++;
        current++;
        presentstatement();
    });
    $('#disagree').click(function(){
        $('#statement').hide(250);
        disagree++;
        current++;
        presentstatement();
    });
});
