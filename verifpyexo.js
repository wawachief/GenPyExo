/*
 * © Jean Diraison <jean.diraison@ac-rennes.fr> - 9 decembre 2017
 *   programme javascript sous licence GPLv3
 */

var editeur;

Sk.python3 = true;
var SkFuture = { print_function: true, division: true, absolute_import: null, unicode_literals: true,
		 // skulpt specific
		 set_repr: false, class_repr: false, inherit_from_object: true, super_args: true };
Sk.externalLibraries = {
	numpy : {
		path: 'https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/numpy/__init__.js',
		dependencies: ['https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/deps/math.js'] },
	"numpy.random" : {
		path: 'https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/numpy/random/__init__.js' },
	matplotlib : {
		path: 'https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/matplotlib/__init__.js' },
	"matplotlib.pyplot" : {
		path: 'https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/matplotlib/pyplot/__init__.js',
		dependencies: ['https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/deps/d3.min.js'] },
	pygal : {
		path: 'https://cdn.jsdelivr.net/gh/trinketapp/pygal.js@0.1.4/__init__.js',
		dependencies: ['https://cdn.jsdelivr.net/gh/highcharts/highcharts-dist@6.0.7/highcharts.js',
		               'https://cdn.jsdelivr.net/gh/highcharts/highcharts-dist@6.0.7/highcharts-more.js'] },
	processing : {
		path: 'https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/processing/__init__.js',
		dependencies: ['https://cdn.jsdelivr.net/gh/diraison/GenPyExo/external/deps/processing.js'] }
	};

Sk.domOutput = function(html) {
	return $("#dessin").append(html).children().last();
};

var etatExec = 0;		// indique l'etat du programme (0 a l'arret, 1 en marche, 2 a stopper)

function changeEtatExec(etat) {
	var msg = [ "Exécuter", "Arrêter" ];
	document.getElementById("execfb").innerHTML = (etat === 1 ? msg[1] : msg[0]);
	etatExec = etat;
}

function interruptHandler() {
	if (etatExec == 2) {
		changeEtatExec(0);
		throw new Error('Program stopped!');
	}
	return null;
}

function turtleAssets(nomfichier) {
	if (nomfichier.indexOf("://") !== -1)
		return nomfichier;
	if (nomfichier.length <= 10 && nomfichier.indexOf(".") === -1)
		return "https://diraison.github.io/GenPyExo/images/" + nomfichier + ".png";
	var urlpage = "" + window.location;
	var chemin  = urlpage.substr(0, urlpage.lastIndexOf('/'));
	return chemin + "/" + nomfichier;
}

function builtinRead(x) {
	if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
		throw "File not found: '" + x + "'";
	return Sk.builtinFiles["files"][x];
}

function entreef(prompt) {
	return window.prompt(prompt ? prompt : "?");
}

function sortief(text) { 
	var sortie = document.getElementById("sortie");
	sortie.innerHTML += text;
} 

// execute de le programme rentre par l'utilisateur
function executer() {
	if (etatExec === 0) {
		changeEtatExec(1);
	} else {
		changeEtatExec(2);
		return;
	}
	var prog = editeur.getValue()+"\n";
	var sortie = document.getElementById("sortie");
	var erreur = document.getElementById("erreur");
	var dessin = document.getElementById("dessin");
	document.getElementById("resultat").style.visibility = (visibilite ? "visible" : "hidden");
	sortie.innerHTML = '';
	erreur.innerHTML = '';
	if (dessin !== null)
		dessin.innerHTML = '';
	Sk.pre = "sortie";
	Sk.canvas = "dessin";
	Sk.configure({output:sortief, read:builtinRead, inputfun:entreef, inputfunTakesPrompt:true, __future__:SkFuture, killableWhile:true, killableFor:true});
	(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'dessin';
	Sk.TurtleGraphics.assets = turtleAssets;
	Sk.TurtleGraphics.width  = 501;
	Sk.TurtleGraphics.height = 401;
	Sk.availableWidth  = 520;		// pygal
	Sk.availableHeight = 400;
	var myPromise = Sk.misceval.asyncToPromise(function() {
			return Sk.importMainWithBody("<stdin>", false, prog, true);
	}, {'*': interruptHandler});
	myPromise.then(function(mod) {
			document.getElementById("erreur").innerHTML += 'success' + "<br>";
			changeEtatExec(0);
			//console.log('success');
		},
			function(err) {
			document.getElementById("erreur").innerHTML = err.toString() + "<br>";
			changeEtatExec(0);
			//console.log(err.toString());
	});
}

var pyresp = "";		// le programme qu'il faut realiser (la reponse)

var reponsesalltests = [];	// tableau de collecte des bonnes reponses a obtenir
var visibilite = false;		// masque l'affichage des reponses

var alltests = [];		// tableau de tous les tests a realiser
var alltestsindex = 0;		// index du test a realiser
var testi = 0;			// index de la donnee en courrante dans testd
var testd = [];			// contient les donnees d'un test : les entrees/substitutions et l'instruction finale (affichage de reponse)
var rapport = "";		// rapport a afficher a la fin de la verification des tests
var nbsucces = 0;		// decompte des tests reussis
var nbverifications = -1;	// compteur d'appui sur le bouton de verification

function entreef_(prompt) {
	if (testi == testd.length)
		return "";
	return testd[testi++];
}

function reecrireCode(str, data) {
	var tab = str.split("\n");
	for (var i = 0; i < tab.length; i++) {
		if (tab[i].indexOf("#?") == -1)		// aucune modification a apporter si absence de #?
			continue;
		if (tab[i].indexOf("=") != -1) {	// remplacer ce qui suit le signe = s'il existe
			var k = tab[i].indexOf("=");
			tab[i] = tab[i].substring(0,k+1) + (testi < data.length ? data[testi++] : "");
		} else {				// remplacer toute la ligne sinon
			tab[i] = (testi < data.length ? data[testi++] : "");
		}
	}
	return tab.join("\n");
}

// charge le programme passe en argument dans l'URL apres un hashtag
function chargerProgramme() {
	var code = window.location.hash.substring(1);
	document.getElementById("code").innerHTML = decodeURIComponent(code);
}

// sauvegarde le programme dans l'URL a la suite d'un hashtag
function sauverProgramme() {
	var programme = editeur.getValue();
	var baseURL = window.location.href.split("#")[0];
	var fullURL = baseURL + "#" + encodeURIComponent(programme);
	location.assign(fullURL);
}

// extrait l'image utile du bloc (id) au format png (encode en base64) ou au format svg
function recupererImage(id) {
	var dessins = document.getElementById(id).children;
	var image = "";
	if (dessins.length >= 2 && dessins[dessins.length-1].nodeName === "CANVAS") {
		image = dessins[dessins.length-1].toDataURL();		// CANVAS image
	} else if (dessins.length == 1 && dessins[0].nodeName === "svg") {
		image = document.getElementById(id).innerHTML;		// SVG (pyplot)
	} else if (dessins.length >= 1 && dessins[0].nodeName === "DIV") {
		var svg = dessins[0].getElementsByTagName("svg");
		image = (svg.length == 1 ? svg[0].outerHTML : image);	// SVG (pygal)
	} else if (dessins.length == 1 && dessins[0].nodeName === "CANVAS") {
		var canvasId = dessins[0].getAttribute("id");
		if (canvasId !== null && canvasId.substr(0,12) === "__processing") {
			image = dessins[0].toDataURL();			// CANVAS image (processing)
		}
	}
	return image;
}

// sauvegarde l'image donnee en argument ou l'image affichee en dessin
function sauverImage(image) {
	if (image == null)
		image = recupererImage("dessin");
	if (image === "")
		return;
	var extension = "png";
	if (image.substr(1,3) == "svg") {
		var imageblob = new Blob([image], {type:"image/svg+xml"});
		image = window.URL.createObjectURL(imageblob);
		extension = "svg";
	}
	var a = document.createElement("a");
	a.href = image;
	a.download = "image." + extension;
	a.style.display = "none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	window.URL.revokeObjectURL(image);
}

// lance la verification de l'ensemble des tests de alltests[]
function verifier() {
	if (etatExec === 0) {
		changeEtatExec(1);
	} else {
		changeEtatExec(2);
		return;
	}
	nbverifications++;
	document.getElementById("verifb").innerHTML = "Vérifier la réponse ("+nbverifications+")";
	document.getElementById("resultat").style.visibility = (visibilite ? "visible" : "hidden");
	if (nbverifications == 10) {
		editeur.getDoc().setValue(pyresp);
		alert("Voici une solution possible");
		changeEtatExec(0);
		return;
	}
	if (alltests.length == 0) {
		verifierSimple([]);
		return;
	}
	rapport = "";
	nbsucces = 0;
	alltestsindex = 0;
	testd = alltests[alltestsindex++];
	testi = 0;
	verifierSimple(testd);
}

// effectue le test alltests[alltestsindex] sur un programme Python
function verifierSimple(repl) {
	if (visibilite) {
		var prog = reecrireCode(editeur.getValue() + "\n" + repl.slice(-1) + "\n",repl);
	} else {
		var prog = reecrireCode(pyresp + "\n" + repl.slice(-1) + "\n",repl);
	}
	var sortie = document.getElementById("sortie");
	var erreur = document.getElementById("erreur");
	sortie.innerHTML = '';
	erreur.innerHTML = '';
	Sk.pre = "sortie";
	Sk.canvas = "dessin";
	Sk.configure({output:sortief, read:builtinRead, inputfun:entreef_, inputfunTakesPrompt:true, __future__:SkFuture, killableWhile:true, killableFor:true});
	(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'dessin';
	Sk.TurtleGraphics.assets = turtleAssets;
	Sk.TurtleGraphics.width  = 501;
	Sk.TurtleGraphics.height = 401;
	Sk.availableWidth  = 520;		// pygal
	Sk.availableHeight = 400;
	var myPromise = Sk.misceval.asyncToPromise(function() {
			return Sk.importMainWithBody("<stdin>", false, prog, true);
	}, {'*': interruptHandler});
	myPromise.then(finVerifierSimple,
		function(err) {
			document.getElementById("erreur").innerHTML = err.toString() + "<br>";
			changeEtatExec(0);
			//console.log(err.toString());
	});
}

// fonction appelee a la fin de l'execution du script s'il n'y a pas d'erreur d'execution
function finVerifierSimple(mod) {
	var sortie = document.getElementById("sortie");
	var texte = sortie.innerHTML.trim();
	var image = recupererImage("dessin");

	console.log("Test "+alltestsindex+":\nentree: "+testd.slice(0,testi)+"\nsortie: "+texte);

	// collecte les reponses attendues avec le programme correct (texte et image)
	if (!visibilite) {
		reponsesalltests.push([texte,image]);
		if (alltestsindex < alltests.length) {
			testd = alltests[alltestsindex++];
			testi = 0;
			verifierSimple(testd);
		} else {
			document.getElementById("verifb").disabled = false;
			document.getElementById("execfb").disabled = false;
			document.getElementById("dessin").innerHTML = "";
			visibilite = true;
		}
		changeEtatExec(0);
		return;
	}

	document.getElementById("erreur").innerHTML = 'success';

	// evalue les resultats du test par rapport aux bonnes reponses et met a jour le rapport
	var reponses = reponsesalltests[alltestsindex-1];

	if (texte == reponses[0] && image == reponses[1]) {
		nbsucces++;
	} else if (texte == reponses[0]) {
		if (reponses[1].substr(1,3) == "svg") {
			var svgreids = reponses[1].replace(RegExp("pplotchart","g"),"pplot"+alltestsindex+"-chart");
			rapport += "\n * la <span class=\"solution\">figure attendue<span>"+svgreids+"</span></span>";
		} else {
			rapport += "\n * la <span class=\"solution\">figure attendue<img src=\""+reponses[1]+"\" alt=\"solution\"></span>";
		}
		if (testi != 0)
			rapport += " avec " + testd.slice(0,testi);
		rapport += " est différente";
	} else {
		if (testi == 0) {
			rapport += "\n * ceci ne donne pas " + reponses[0];
		} else {
			rapport += "\n * " + testd.slice(0,testi) + " en entrée, ne donne pas " + reponses[0];
		}
	}

	var nbtests = alltests.length;

	// passe au test suivant s'il en reste
	if (alltestsindex < nbtests) {
		testd = alltests[alltestsindex++];
		testi = 0;
		verifierSimple(testd);
		return;
	}

	// dresse le bilan final et affiche le rapport s'il ne reste plus aucun test a passer
	sortie.innerHTML = "Vous avez réussi "+ nbsucces +" test(s) sur un total de "+ nbtests +".\n";
	if (nbsucces == nbtests) {
		sortie.innerHTML += "\nParfait !";
	} else {
		sortie.innerHTML += "Essayez encore, vous pouvez faire mieux.\n\nRapport :" + rapport;
	}

	changeEtatExec(0);
}

// cree la liste des bonnes reponses attendues
// appelee automatiquement au chargement de la page
function genererReponses() {
	reponsesalltests = [];
	visibilite = false;
	pyresp = document.getElementById("solution").textContent;
	verifier();
}

