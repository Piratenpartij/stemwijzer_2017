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

statements_extended = [
    "Burgerrechten staan onder druk tot toenemende surveillance van overheden én bedrijven; dit is een kwalijke ontwikkeling: privacy is een grondrecht",
    "Nederland moet in internationaal verband de hoogst mogelijke standaard van burgerrechten bepleiten en verdedigen.",
    "Er moet een verbod komen op de ongevraagde verkoop van persoonlijke informatie. Ook korting in ruil voor gegevens wordt verboden.",
    "Ik vind dat ik in de publieke ruimte niet overal gevolgd moet worden door (slimme) camera's; cameratoezicht moet worden beperkt",
    "Etnisch profileren werkt niet en moet bij wet verboden worden",
    "Als burgers hebben we het recht te weten waar, wanneer, door wie en welke gegevens over ons opgevraagd worden tijdens een onderzoek. Deze gevoelige systemen moeten beter gecontroleerd en beveiligd worden.",
    "Er mogen geen sleepnetmethodes worden gebruikt om informatie te verzamelen, hiermee wordt iedere burger tot een verdachte gemaakt.",
    "In principe zijn overheidsdocumenten openbaar, de Wet Open Overheid moet worden vormgegeven rondom uitzonderingen.",
    "Klokkenluiders (denk aan Snowden en Manning) vervullen een belangrijke maatschappelijke functie om misstanden aan het licht te brengen en moeten wettelijk beschermd worden",
    "De overheid moet de ontwikkeling van open source en open standaarden in de publieke en private sector faciliteren, opdat op termijn veel tijd en geld bespaard kan worden.",
    "E-democracy (burgerinspraak middels technologie) gebruiken om burgers een stem te geven aan het begin van beleidsvorming en als middel om politiek onderwerpen op de agenda te zetten.",
    "Het huidige raadgevend referendum moet veranderen in een bindend correctief referendum. Maar dit is slechts een noodrem en geen alternatief voor structurele burgerparticipatie middels E-Democracy.",
    "Besluitvorming moet in beginsel zo lokaal mogelijk plaatsvinden, ook in de EU.",
    "Er moet een constitutioneel hof ingevoerd worden die beleid toetst aan de grondwet, net als in bv. Duitsland",
    "Benoemingen in het openbaar bestuur moeten in een openbaar, transparant sollicitatieproces plaatsvinden.",
    "Breng democratie naar de burgers: Er moeten Burgertoppen georganiseerd worden waarbij willekeurige burgers worden uitgenodigd om bij elkaar te komen en in een interactieve workshop oplossingen te bedenken voor problemen in de samenleving. Ook binnen Europese context.",
    "Het aantal tweede kamerzetels is sinds 1956 gelijk maar moet worden verdubbeld om tot een betere representatie te komen, specialisatie te bevorderen, en vergaderdruk te verlichten.",
    "De eerste kamer vervult een belangrijke controlerende functie en moet blijven.",
    "Jongeren moeten actief gestimuleerd worden deel te nemen aan het democratisch proces, het gaat om hun toekomst. Kiesgerechtigde leeftijd wordt verlaagd naar 16 jaar",
    "Vrije toegang tot informatie moet een fundamenteel burgerrecht zijn: Huidige wetgeving omtrent auteursrecht, patentrecht, en intellectueel eigendom vormt echter vaak een belemmering en moet daarom radicaal hervormd worden.",
    "Bestaande informatiemonopolies moeten worden afgebroken, delen en creatief hergebruik moet worden bevorderd.",
    "Het gratis verspreiden van informatie voor niet-commercieel en educatief gebruik is toegestaan.",
    "Er moet forse verkorting komen van het commercieel auteursrecht tot een periode van maximaal vijf jaar. Deze termijn wordt per mediatype zodanig bepaald dat het werk zo snel mogelijk ook commercieel vrij beschikbaar komt en de sector zo snel mogelijk omschakelt naar nieuwe verdienmodellen.",
    "Privékopieën zijn geen bedreiging voor de uitgever en zijn daarom toegestaan.",
    "Journalistiek is essentieel voor de samenleving en democratie: publiek-gefinancierde media moet ‘uitzenden’ (content produceren) onder een vrije licentie, zodat hergebruik altijd toegestaan is.",
    "Persvrijheid moet altijd, onder alle omstandigheden gegarandeerd worden.",
    "Patenten hinderen innovatie en moeten op korte termijn sterk beperkt worden en op lange termijn volledig afgeschaft: Te beginnen met medische- en biologische patenten zoals DNA, zaden, geuren, kleuren, chemische stoffen, soorten, levende wezens en delen daarvan.",
    "Het kwekersrecht is een model dat voldoende bescherming biedt aan ontwikkelaars van biologische producten zonder innovatie te belemmeren. Nederland dient het kwekersrecht internationaal te bevorderen en boven het patentrecht te plaatsen.",
    "Voor het toekennen van patenten moeten hogere en zwaardere normen gelden. Patenten mogen bijvoorbeeld nooit worden verleend voor “uitvindingen” die niet uniek of niet substantieel zijn. Er mogen ook nooit patenten worden afgegeven voor computerprogramma's of businessmodellen. ",
    "Nieuwe informatie-monopolies in publieke sectoren moeten worden voorkomen en bestaande monopolies moeten worden beperkt. De oprichting van commons (gemeenschapsgoederen zoals vrije software, cultuur, octrooi-pools en educatief materiaal) moet worden bevorderd en wettelijk worden beschermd.",
    "De vanzelfsprekendheid dat we met onze eigen apparaten mogen doen wat we willen loopt gevaar: ik ben tegen Digital Rights Management en vóór de mogelijkheid zelf te sleutelen/repareren",
    "Het internet kent geen grenzen; kunstmatige blokkades als filmpjes/sites niet buiten bepaalde landen kunnen kijken (geoblocking) is ongewenst.",

    "Scheiding van Ministerie van Veiligheid en Justitie: Politie moet terug naar Binnenlandse Zaken",
    "Er moet meer in recherche worden geïnvesteerd om de pakkans te vergroten, er is een duidelijke scheiding tussen 'blauw op straat' en recherchewerk.",
    "Voorstellen tot mogelijke decryptieverplichting of inbouwen van zogenaamde 'achterdeurtjes' maakt software en hardware voor iedereen onveilig en is onwenselijk onder welke omstandigheden dan ook.",
    "Het recht op een adequate verdediging in de rechtbank moet hersteld worden, ook als iemand dat zelf niet kan betalen (betere rechtsbijstand).",
    "Het bestrijden van identiteitsfraude, online crimininaliteit en online pesten moet een hogere prioriteit krijgen.",
    "Er moet een Ministerie van Digitale Infrastructuur komen die toeziet op grote ICT projecten van de overheid; de overheid mist nu expertise en begaat hierdoor blunders. Hieronder komt ook een staatssecretaris Gegevensbescherming.",
    "Netneutraliteit en recht tot encryptie moet bij wet gegarandeerd zijn.",
    "De overheid heeft als taak de machtbalans tussen (international) bedrijven en burger zuiver te houden: er moeten grenzen gesteld worden aan data hongerige bedrijven.",
    "De vrije markt en de overheid hebben ieder een eigen rol in de digitale maatschappij. Er mag geen belangenverstrengeling plaatsvinden. Vrijheid van informatie en de privacy van burgers gaan vóór op commerciële belangen.",
    "Er komt een beloningssysteem voor het melden van kwetsbaarheden rondom persoonlijke gegevens bij de overheid door ethische hackers.",
    "Er moet worden ingezet op publiek vastgesteld, verplicht en toetsbaar IT onderwijs dat burgers de kennis en attitude meegeeft om de 21ste eeuw te kunnen navigeren.",
    "Geldcreatie moet op lange termijn voorbehouden zijn aan een onafhankelijk, transparant werkend orgaan zonder commercieel belang, ipv. bij banken met commerciële belangen.",
    "Banken dienen zich op te splitsen tot onderdelen, die zonder maatschappij-ontwrichtende gevolgen failliet kunnen gaan.",
    "Betalingsverkeer moet worden losgekoppelend van de kredietfunctie van banken: er moet een pure betaalbank opgericht worden die geen krediet verstrekt.",
    "Er moet een einde gemaakt worden aan de onevenredige invloed van lobbyisten en grote bedrijven op de politiek. MKB en zzp’ers moeten meer kansen geboden worden met innovatie te komen.",
    "Belastingafspraken met multinationals moeten transparant worden en grote bedrijven worden strenger gereguleerd om te voorkomen dat zij onze rechten schenden.",
    "Op lange termijn moeten we naar een onvoorwaardelijk basisinkomen toe; om bureaucratie te vereenvoudigen, verlies aan banen door automatisering op te vangen, en armoede te bestrijden. Dit moet serieus en kritisch onderzocht en getest worden.",
    "Om economische activiteit op een duurzame wijze te bevorderen wordt de belasting op arbeid verlaagd en de belasting op grondstoffen verhoogd.",
	"Iedereen krijgt de vrijheid om zelf te kiezen bij welk pensioenfonds hij aangesloten wil zijn.",
	"Woningcorporaties krijgen als primaire taak het beschikbaar stellen van voldoende betaalbare huurwoningen.",
	"De hypotheekrenteaftrek heeft kunstmatig de huizenprijzen verhoogd en moet worden afgetopt bij een plafond van 1.000.000,- euro, dit wordt geleidelijk verlaagd.",
    "Banken mogen geen negatieve rente rekenen over het saldo op spaarrekeningen van particulieren.",
	"Het democratisch verkozen Europese Parlement krijgt ook wetgevende macht en wordt eindverantwoordelijk voor EU-beleid.",
	"Elke afspraak tussen een lobbyist en een lid van het Europees Parlement of Europese Commissie komt in een openbaar te raadplegen agenda.",
 	"We zijn niet tegen handelsovereenkomsten; maar CETA, TTIP en TiSA beschermen grote multinationals ten koste van mens, milieu, democratie en onze rechtstaat. We zijn voor het Alternative Trade Mandate.",
	"(handels)verdragen dienen door de bevolking gesteund te worden via een referendum, voordat Nederland iets ondertekent.",
	"Robots zijn niet in staat tot humanitair denken en handelen en verlagen de drempel tot militair handelen. Er moet bij de VN een moratorium komen op de ontwikkeling en het bezit van autonome wapens (killer robots).",
	"Er is op dit moment te weinig capaciteit en te weinig kennis om onze digitale infrastructuur te beveiligen, hier dient meer geld besteed aan te worden",
	"Ook digitale wapens kunnen enorme schade aan industrie, mens en milieu opleveren en er moet daarom bij de VN een non-proliferatieverdrag voor deze wapens komen",
	"Nederland moet zich richten op het bewerkstelligen van veiligheid van mensen in conflictgebieden, want vluchtelingenstromen zijn beter te voorkomen dan te genezen.",
	"Het asielproces bij aankomst dient transparant, duidelijk en soepel te verlopen, zowel voor vluchtelingen als de lokale bevolking.",
	"Asielopvang moet kleinschalig en decentraal zijn, met goede lokale inspraak over de voorwaarden waaronder opvang mogelijk is.",
    "Drugsgebruik voor volwassenen valt onder zelfbeschikkingsrecht: Cannabis legaliseren, productie reguleren en uit het criminele circuit halen.",
	"Het verplichte eigen risico in de zorg is een straf op chronisch ziek zijn in de zorg en moet worden afgeschaft.",
    "Patiëntgegevens in de zorg zijn privé en mogen nooit zonder expliciete toestemming gedeeld worden, ook niet aan zorgverzekeraars.",
    "Onderwijs, op alle niveau's, is een burgerrecht en moet leeftijdsonafhankelijk en statusonafhankelijk (inkomen of achtergrond) toegankelijk zijn.",
	"Les- en leermateriaal alsmede hoorcollege's in het onderwijs moeten zoveel mogelijk vrij en online toegankelijk zijn; verplicht als het door de overheid bekostigd is.",
	"Onderwijsomgevingen worden met open source software ontwikkeld. Scholen mogen leerlingen nooit verplichten tot de aanschaf van een specifiek merk of type hardware.",
	"Wetenschap moet zo onafhankelijk en transparant mogelijk te werk gaan: publiceer altijd wie onderzoek gefinancierd heeft, alle relevantie informatie omtrent een onderzoek (open science), en maak wetenschappelijke publicaties vrij toegankelijk (open access)",
	"Ieder mens moet vrij zijn om te kunnen reizen zonder overheidsbemoeienis, het gedetailleerd, automatisch en systematisch in kaart brengen van het reisgedrag van identificeerbare burgers moet worden gestopt.",
	"Anoniem parkeren moet altijd mogelijk zijn zonder kentekenregistratie.",
	"Er komt geen kilometerheffing: daar zijn systemen voor nodig die privacy schenden.",
 	"Er moet een einde komen aan onze afhankelijkheid van fossiele brandstoffen en de bedrijven en staten die deze brandstoffen controleren.",
	"Er komt een Deltaplan duurzaamheid en lokale veerkracht: hierin worden maatregelen op het gebied van energievoorziening, energieopslag, voedsel, mobiliteit en wonen gezamenlijk aangepakt.",
	"Kortingen voor grootverbruikers van energie afschaffen.",
	"Nieuwbouw(woningen) energieneutraal maken en bestaande woningen renoveren en energiezuiniger maken.",
	"We sluiten zo snel mogelijk onze kolencentrales en er komen geen nieuwe kolencentrales of vergunningen voor nieuwe proefboringen naar fossiele brandstoffen. De gaswinning in Groningen dringen we verder terug.",
	"We voeren een stookbelasting in om de kosten van het opwekken van vuile energie bij energieleveranciers neer te leggen.",
	"We ondersteunen en stimuleren onderzoek naar alternatieve vormen van decentrale energieopwekking.",
	"Ontwikkelingshulp moet gericht zijn op het versterken van de positie van mensen in ontwikkelingslanden, in plaats van ze afhankelijk te maken van ontwikkelingshulp.",
]



statements = [
    "Er moet meer bescherming zijn op wat grote bedrijven als Google en Facebook met mijn data mogen doen",
    "Ik vind dat ik in de publieke ruimte niet overal gevolgd moet worden door (slimme) camera's",
    "Burgers moeten directer bij de democratie betrokken worden; techniek maakt dit mogelijk",
    "Ik vind dat de overheid te vaak geld verspilt aan grote mislukte ICT projecten",
    "Ik heb recht op vrije en veilige communicatie zonder meekijken van overheid of grote bedrijven",
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

function switchextended() {
	statements = statements_extended;
	agree = 0;
	disagree = 0;
	current = 0;
	presentstatement();
	$('#switchextended').hide();
}


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
        window.setTimeout(presentstatement, 500);
    });
    $('#disagree').click(function(){
        $('#statement').hide(250);
        disagree++;
        current++;
        window.setTimeout(presentstatement, 250);
    });
});
