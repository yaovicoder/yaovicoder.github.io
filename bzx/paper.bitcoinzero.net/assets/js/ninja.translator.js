ninja.translator = {
    currentCulture: "en",

    autodetectTranslation: function () {
        // window.navigator.language for Firefox / Chrome / Opera Safari
        // window.navigator.userLanguage for IE
        var language = window.navigator.language || window.navigator.userLanguage;
        if (!ninja.translator.translate(language)) {
            // Try to remove part after dash, for example cs-CZ -> cs
            language = language.substr(0, language.indexOf('-'));
            ninja.translator.translate(language);
        }
    },
    // this function was renamed "translateLegacy"
    translateLegacy: function (culture) {
        var dict = ninja.translator.translations[culture];
        if (dict) {
            // set current culture
            ninja.translator.currentCulture = culture;
            // update menu UI
            for (var cult in ninja.translator.translations) {
                document.getElementById("culture" + cult).setAttribute("class", "");
            }
            document.getElementById("culture" + culture).setAttribute("class", "selected");
            // apply translations for each know id
            for (var id in dict) {
                if (document.getElementById(id) && document.getElementById(id).value) {
                    document.getElementById(id).value = dict[id];
                } else if (document.getElementById(id)) {
                    document.getElementById(id).innerHTML = dict[id];
                }
            }
            return true;
        }
        return false;
    },

    /**
     *
     * Select bootstrap-select value based on language
     *
     * rewritten by yaovicoder.github.io to support language switcher
     * var culture = language that should be set
     * var cult = current language
     *
     * @param culture
     * @returns {boolean}
     */
    translate: function (culture) {
        var dict = ninja.translator.translations[culture];
        if (dict) {
            // set current culture
            ninja.translator.currentCulture = culture;
            const optionValue = "?culture=";
            $('#language-switch').val(optionValue + culture);

            // apply translations for each know id
            for (var id in dict) {
                if (document.getElementById(id) && document.getElementById(id).value) {
                    document.getElementById(id).value = dict[id];
                } else if (document.getElementById(id)) {
                    document.getElementById(id).innerHTML = dict[id];
                }
            }
            return true;
        }
        return false;
    },


    get: function (id) {
        var translation = ninja.translator.translations[ninja.translator.currentCulture][id];
        return translation;
    },

    staticID: [
        "defaultTitle",
        "title",
        "brainalertpassphrasewarning",
        "brainalertpassphrasetooshort",
        "brainalertpassphrasedoesnotmatch",
        "bulkgeneratingaddresses",
        "bip38alertincorrectpassphrase",
        "bip38alertpassphraserequired",
        "detailconfirmsha256",
        "detailalertnotvalidprivatekey",
        "securitychecklistrandomOK",
        "securitychecklistrandomNOK",
        "securitychecklistofflineNOK",
        "securitychecklistofflineOK",
        "paperwalletback",
    ],

    translations: {
		﻿"en"
:
{
    "defaultTitle"
:
    "WalletGenerator.net - Universal Paper wallet generator for Bitcoin and other cryptocurrencies",
        "title"
:
    "Paper Wallet Generator",
        "bulkgeneratingaddresses"
:
    "Generating addresses... ",
        "brainalertpassphrasetooshort"
:
    "The passphrase you entered is too short.\n\n",
        "brainalertpassphrasewarning"
:
    "Warning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your coins.",
        "brainalertpassphrasedoesnotmatch"
:
    "The passphrase does not match the confirm passphrase.",
        "detailalertnotvalidprivatekey"
:
    "The text you entered is not a valid Private Key",
        "detailconfirmsha256"
:
    "The text you entered is not a valid Private Key!\n\nWould you like to use the entered text as a passphrase and create a Private Key using a SHA256 hash of the passphrase?\n\nWarning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your coins.",
        "bip38alertincorrectpassphrase"
:
    "Incorrect passphrase for this encrypted private key.",
        "bip38alertpassphraserequired"
:
    "Passphrase required for BIP38 key",
        "securitychecklistrandomOK"
:
    "Your browser is capable of generating cryptographically random keys using window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Your browser does NOT support window.crypto.getRandomValues(), which is important for generating the most secure random numbers possible. Please use a more modern browser.",
        "securitychecklistofflineNOK"
:
    "You appear to be running this generator off of a live website, which is not recommended for creating valuable wallets. Instead, use the download link at the bottom of this page to download the ZIP file from GitHub and run this generator offline as a \'local\' HTML file.",
        "securitychecklistofflineOK"
:
    "You are running this generator from your own download.",
        "paperwalletback"
:
    "<ul><li>To deposit funds to this paper wallet, send cryptocurrency to its public address, anytime.</li><li>Verify your balance by searching for the public address using a blockchain explorer such as blockchain.info.</li><li><b>DO NOT REVEAL THE PRIVATE KEY</b> until you are ready to import the balance on this wallet to a cryptocurrency client, exchange or online wallet.</li></ul><b>Amount :</b> ___________ &nbsp; &nbsp; &nbsp; <b>Date :</b> ________________<br /><b>Notes :</b> ______________________________________",
}
,
"fr"
:
{
    "choosecurrency"
:
    "Choisissez une monnaie",
        "singlewallet"
:
    "Porte-Monnaie Simple",
        "paperwallet"
:
    "Porte-Monnaie Papier",
        "bulkwallet"
:
    "Porte-Monnaie En Vrac",
        "brainwallet"
:
    "Porte-Monnaie Cerveau",
        "detailwallet"
:
    "Détails du Porte-Monnaie",
        "donate"
:
    "Soutien",
        "generatelabelbitcoinaddress"
:
    "Génération d'une nouvelle adresse...",
        "generatelabelmovemouse"
:
    "Bougez votre souris sur la partie GRISE pour ajouter de l'entropie...",
        "generatelabelkeypress"
:
    "OU tapez des lettres aléatoires dans le champ texte",
        "skipMessage"
:
    "Vous pouvez ignorer cette étape si vous ne souhaitez pas utiliser le générateur d'entropie aléatoire.",
        "singlelabelbitcoinaddress"
:
    "Adresse publique",
        "singleshare"
:
    "PUBLIQUE",
        "singlelabelprivatekey"
:
    "Clé privée (format WIF)",
        "singlesecret"
:
    "SECRET",
        "securitystep0title"
:
    "Étape 0. Suivez les recommandations de la liste de sécurité",
        "securitystep0"
:
    "La première étape est de <strong>télécharger</strong> ce site à partir de <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a> et d'ouvrir le fichier index.html directement sur votre ordinateur. Il est beaucoup trop facile d'ajouter du code malicieux dans les 6000+ lignes de javascript pour transmettre votre clé privée, et vous ne voulez pas voir vos fonds volés, n'est-ce pas ? Le versionnage de code source rend bien plus facile la vérification par des personnes extérieures du code qui est exécuté. Pour une sécurité supplémentaire, <strong>débranchez votre accès Internet</strong> pendant la génération de votre porte-monnaie.",
        "securitystep1title"
:
    "Étape 1. Générez une nouvelle adresse",
        "securitystep1"
:
    "Choisissez votre monnaie et cliquez sur le bouton \"Générer une nouvelle adresse\".",
        "securitystep2title"
:
    "Étape 2. Imprimez votre porte-monnaie",
        "securitystep2"
:
    "Cliquez sur l'onglet \"Porte-Monnaie Papier\" et imprimez la page en haute qualité. <strong>Ne sauvegardez jamais la page au format PDF, car un fichier est plus susceptible d'être piraté qu'une feuille de papier.</strong>",
        "securitystep3title"
:
    "Étape 3. Pliez le porte-monnaie papier",
        "securitystep3"
:
    "Pliez votre nouveau porte-monnaie papier en suivant les lignes.\n<img src=\"images/foldinginstructions.png\" alt=\"Pliez en deux dans le sens de la longueur, puis en trois dans le sens de la largeur.\"><br>\nVous pouvez insérer un coté dans l'autre pour fermer le porte-monnaie.",
        "securitystep4title"
:
    "Étape 4. Partagez votre adresse publique",
        "securitystep4"
:
    "Transmettez votre adresse publique pour recevoir de l'argent d'autres utilisateurs de cette monnaie. Vous pouvez partager l'adresse publique autant que vous voulez.",
        "securitystep5title"
:
    "Étape 5. Gardez votre clé privée secrète",
        "securitystep5"
:
    "Votre clé privée est littéralement la clé pour accéder à votre argent. Si quelqu'un y accédait, il pourrait utiliser tous les fonds actuellement sur le porte-monnaie, ainsi que tous les fonds qui seront déposés dans le futur.",
        "securitystep6"
:
    "Faites un essai avec un montant faible avant de recevoir des paiements importants.",
        "securitystep7title"
:
    "Pourquoi pas faire un don ?",
        "securitystep7"
:
    "Ce service est gratuit et le sera toujours, sans publicité ni pistage Peut-être voulez-vous <a href=\"#\" onclick=\"ninja.tabSwitch(document.getElementById('donate'));\">faire un don</a> pour nous aider ainsi que les personnes qui ajoutent des nouvelles monnaies ?",
        "securitychecktitle"
:
    "Liste de sécurité :",
        "securitychecklivecd"
:
    "Utilisez vous un système d'exploitation garanti sans malware ou virus, comme par exemple un live-CD Ubuntu ?",
        "supportedcurrencylbl"
:
    "monnaies supportées !",
        "paperlabelencrypt"
:
    "Chiffrer en BIP38 ?",
        "paperlabelBIPpassphrase"
:
    "Phrase de passe:",
        "bulklabelstartindex"
:
    "Index de départ:",
        "bulklabelrowstogenerate"
:
    "Quantité à générer:",
        "bulklabelcompressed"
:
    "Compresser les adresses ?",
        "bulklabelcsv"
:
    "Valeurs Séparées Par Des Virgules (CSV): Index, Adresse, Clé privée (WIF)",
        "brainlabelenterpassphraselbl"
:
    "Phrase de passe:",
        "brainlabelconfirmlbl"
:
    "Confirmer la phrase de passe:",
        "brainalgorithm"
:
    "Algorithme: SHA256(phrase de passe)",
        "brainlabelbitcoinaddress"
:
    "Adresse publique",
        "brainlabelprivatekey"
:
    "Clé privée (format WIF):",
        "detaillabelenterprivatekey"
:
    "Entrez votre clé privée",
        "qrcaminstructiontitle"
:
    "Scannez votre QR code avec votre webcam",
        "paperqrnotsupported"
:
    "Désolé, mais votre navigateur ne supporte pas les contrôles de webcam HTML5. Essayez avec une version récente de Firefox (recommandé), de Chrome ou d'Opera",
        "paperqrpermissiondenied"
:
    "<p>Permission refusée. Votre navigateur devrait afficher un message demandant l'autorisation d'accéder à votre webcam. Cliquez sur le bouton \"Autoriser\" pour activer la webcam.</p>",
        "detaillabelpassphrase"
:
    "Phrase de passe BIP38",
        "detaillabelnote1"
:
    "Votre clé privée est un nombre secret unique que seul vous connaissez. Elle peut être encodé selon différents formats. Ci-dessous s'affiche l'adresse publique et la clé publique qui correspond à votre clé privée, ainsi que votre clé privée dans les formats les plus populaires (WIF, WIFC, HEX, B64).",
        "detaillabelbitcoinaddress"
:
    "Adresse publique",
        "detaillabelbitcoinaddresscomp"
:
    "Adresse publique compressée",
        "detaillabelpublickey"
:
    "Clé publique (130 caractères [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Clé publique compressée (66 caractères [0-9A-F]):",
        "detaillabelprivwif"
:
    "Clé privée WIF<br>51 caractère Base58",
        "detaillabelprivwifcomp"
:
    "Clé privée WIF compressée<br>52 caractères Base58",
        "detaillabelprivhex"
:
    "Clé privée en hexadécimal (64 caractères [0-9A-F]):",
        "detaillabelprivb64"
:
    "Clé privée en Base64 (44 caractères):",
        "detaillabelprivmini"
:
    "Clé privée au format MINI (22, 26 or 30 caractères):",
        "detaillabelprivb6"
:
    "Clé privée en Base6 (99 caractères [0-5]):",
        "detaillabelprivbip38"
:
    "Clé privée chiffrée au format BIP38 (58 caractères Base58):",
        "detaillabelq1"
:
    "Comment générer un porte-monnaie avec des dés ? Qu'est-ce que la Base6 (B6) ?",
        "detaila1"
:
    "Une partie importante de la création d'un porte-monnaie pour les monnaies cryptographiques est de s'assurer que les nombres aléatoires utilisés pour la génération sont réellement aléatoires. L'aléatoire d'origine physique est bien meilleur que le pseudo-aléatoire généré par un ordinateur. La façon la plus facile de générer de l'aléatoire physique est d'utiliser des dés. Pour générer une clé privée, vous avez uniquement besoin d'un dé à 6 faces que vous allez lancer 99 fois. Arrêtez-vous après chaque lancé pour noter la valeur. Pour noter la valeur, suivez les règles suivantes: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. En faisant ça, vous générez un grand nombre aléatoire, votre clé privée, en Base6 (B6). Vous pouvez ensuite entrer les 99 caractères B6 de votre clé privée dans le champs texte au dessus et cliquer sur \"View Details\". Vous verrez ensuite l'adresse publique associée à cette clé privée. Vous devrez également noter votre clé privée au format WIF, car il est plus courant d'usage que la clé privée brute.",
        "donatetextfooter"
:
    "Pour soutenir le développement de ce générateur de porte-monnaie, vous pouvez faire une donation grâce aux adresses suivante. Quand le support pour une monnaie a été ajouté par un contributeur externe au projet, les donations lui parviennent directement.",
        "footersupport"
:
    "Soutenir WalletGenerator.net",
        "footerlabelgithub"
:
    "Télécharger (dépôt GitHub)",
        "footerlabelcopyright2"
:
    "Les licences javascript sont incluses dans le code source.",
        "footerlabelnowarranty"
:
    "Aucune garantie.",
        "defaultTitle"
:
    "Générateur de porte-monnaie papier universel pour Bitcoin et autres monnaies cryptographiques",
        "title"
:
    "Générateur de porte-monnaie papier",
        "brainalertpassphrasewarning"
:
    "Attention: choisir une passe de phrase forte est important pour éviter les attaques par bruteforce, pour deviner votre phrase de passe et voler vos fonds.",
        "brainalertpassphrasetooshort"
:
    "La phrase de passe entrée est trop courte.",
        "brainalertpassphrasedoesnotmatch"
:
    "Les deux phrases de passe ne correspondent pas.",
        "bulkgeneratingaddresses"
:
    "Génération en cours des adresses...",
        "bip38alertincorrectpassphrase"
:
    "Phrase de passe incorrecte pour cette clé privée chiffrée.",
        "bip38alertpassphraserequired"
:
    "Phrase de passe requise pour une clé chiffrée BIP38.",
        "detailconfirmsha256"
:
    "Le texte que vous avez entré n'est pas une clé privée valide !\nVoulez vous utiliser le texte comme une phrase de passe et générer une clé privée en prenant un hash SHA256 de cette phrase ?\nAttention: Choisir un mot de passe solide est important pour vous protéger des attaques bruteforce visant à trouver votre mot de passe et voler vos fonds.",
        "detailalertnotvalidprivatekey"
:
    "Le texte que vous avez entré n'est pas une clé privée valide",
        "securitychecklistrandomOK"
:
    "Votre navigateur est capable de générer des clés cryptographiques sécurisés en utilisant window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Votre navigateur ne supporte PAS window.crypto.getRandomValues(), ce qui est important pour générer des portes-monnaies les plus sécurisé possible. Utilisez un navigateur plus moderne.",
        "securitychecklistofflineNOK"
:
    "Il semble que vous utilisez ce générateur directement depuis le site web, ce qui n'est pas recommandé pour générer des portes-monnaie. A la place, utilisez le lien de téléchargement en bas de cette page pour télécharger une archive ZIP depuis Github et lancez ce générateur hors-ligne comme un fichier HTML local.",
        "securitychecklistofflineOK"
:
    "Vous exécutez ce générateur depuis votre propre téléchargement.",
        "thisOrThat"
:
    "Ou",
        "keepKeysPrivateNotice"
:
    "Toutes les informations apparaissant sur fond <b>ROUGE</b> sur cette page sont <u><b>CONFIDENTIELLES</b></u>. <br/>  Elles ne doivent en AUCUN CAS etre communiquees a un tiers!",
        "genProcessBrowser"
:
    "La creation de votre addresse <b>BZX</b> se fait dans votre navigateur. Nous n'enregistrons <b>JAMAIS</b>  vos cles sur nos serveurs!",
        "paperwalletback"
:
    "<ul><li>Pour transférer des fonds sur ce porte-monnaie, envoyez des fonds à l'adresse publique, à n'importe quel moment.</li><li>Vérifier votre solde en cherchant l'adresse publique dans un explorateur de Blockchain.</li><li><b>NE REVELEZ PAS VOTRE CLE PRIVEE</b> jusqu'au moment où vous voudrez importer votre solde dans un porte-monnaie logiciel.</li></ul><b>Montant :</b> ___________       <b>Date :</b> ________________<br /><b>Notes :</b> ______________________________________",
},
﻿"de"
:
{
    "choosecurrency"
:
    "Kryptowährung Auswahl",
        "singlewallet"
:
    "einfache Geldbörse",
        "paperwallet"
:
    "Papier Geldbörse",
        "bulkwallet"
:
    "Geldbörse(n) Tabelle",
        "brainwallet"
:
    "Gedächtnis Geldbörse",
        "detailwallet"
:
    "Geldbörse Details",
        "donate"
:
    "Spende!",
        "generatelabelbitcoinaddress"
:
    "Generiere neuen Schlüssel...",
        "generatelabelmovemouse"
:
    "BEWEGEN Sie bitte Ihre Maus für etwas Entropie...",
        "generatelabelkeypress"
:
    "ODER tippen Sie etwas zufälligen Text in diese Textbox",
        "skipMessage"
:
    "Sie können diesen Schritt überspringen, falls Sie nicht den Zufallsgenerator verwenden möchten.",
        "singlelabelbitcoinaddress"
:
    "öffentliche Adresse",
        "singleshare"
:
    "ÖFFENTLICH",
        "singlelabelprivatekey"
:
    "Privater Schlüssel (Format: WIF)",
        "singlesecret"
:
    "GEHEIM",
        "securitystep0title"
:
    "Folgen Sie der Sicherheits Checkliste",
        "securitystep0"
:
    "Zu Beginn <strong>downladen</strong> Sie dieses Programm von der <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a> Webseite und öffnen die Datei index.html direkt auf Ihrem Computer, Notebook oder Tablet. Angreifer könnten anderenfalls auf einer Webseite möglicherweise den mehr als 6000 Zeilen umfassenden Code verändern und Ihren privaten Schlüssel abgreifen. Für zusätzliche Sicherheit unterbrechen Sie die Verbindung zum Internet, während Sie Ihre Geldbörse(n) generieren.",
        "securitystep1title"
:
    "Schritt 1: Generierung eines neuen Schlüssels",
        "securitystep1"
:
    "Wählen Sie eine Kryptowährung und wählen Sie \"Generiere neuen Schlüssel\".",
        "securitystep2title"
:
    "Schritt 2: Ausdruck Ihrer Papier Geldbörse",
        "securitystep2"
:
    "Klicken Sie auf die Tabelle \"Papier Geldbörse\" und drucken Sie die Seite in hoher Qualität aus. Empfehlung: Verwenden Sie nach Möglichkeit hochwertiges Papier. <strong>Hinweis:</strong> Speichern Sie die Druckausgabe nicht im PDF-Format, weil diese Datei ansonsten später von Angreifern abgegriffen und Ihr Guthaben gestolen werden könnte.",
        "securitystep3title"
:
    "Schritt 3: Ausdruck Papier Geldbörse falten",
        "securitystep3"
:
    "Falten Sie Ihre neue Papier Geldbörse an folgenden Linien.\n<img src=\"images/foldinginstructions.png\" alt=\"Falten Sie einmal quer und zweimal längs.\"><br>\nDie öffentliche Adresse liegt zum Schutz auf dem privaten Schlüssel, beide Schlüssel schützen Sie mit der Deckfaltung von rechts.",
        "securitystep4title"
:
    "Schritt 4: Teilen Sie Ihre öffentliche Adresse",
        "securitystep4"
:
    "Verwenden Sie Ihre öffentliche Adresse, um eingehende Zahlungen von anderen Nutzern der ausgewählten Kryptowährung zu erhalten. Ihre öffentliche Adresse können Sie nach belieben teilen. Mit Ihrer öffentlichen Adresse können Sie zudem jederzeit Ihr Guthaben über einen öffentlichen Block-Explorer überprüfen.",
        "securitystep5title"
:
    "Schritt 5: Privaten Schlüssel Geheim halten",
        "securitystep5"
:
    "Halten Sie Ihren privaten Schlüssel geheim. Nur mit Ihrem privaten Schlüssel können Sie Zahlungen aus Ihrer Papier Geldbörse leisten.<br>\n<strong>Achtung:</strong>Falls jemand Dritter Ihren privaten Schlüssel erlangt, kann er all Ihr Guthaben aus der Papier Geldbörse stehlen.",
        "securitystep6"
:
    "Bitte testen Sie die Papier Geldbörse mit kleinen Beträgen, bevor Sie große Geldsummen auf die Papier Geldbörse buchen.",
        "securitychecktitle"
:
    "Sicherheits Checkliste :",
        "securitychecklivecd"
:
    "Verwenden Sie nur ein Betriebssystem, dass garantiert frei von Spyware und Viren ist, beispielsweise eine sichere Ubuntu LiveCD.",
        "supportedcurrencylbl"
:
    "unterstützte Crypto-Währungen !",
        "paperlabelencrypt"
:
    "Verschlüsselung mit BIP38 ?",
        "paperlabelBIPpassphrase"
:
    "BIP38 Kennwort:",
        "bulklabelstartindex"
:
    "Start Index:",
        "bulklabelrowstogenerate"
:
    "zu generierende Zeilen:",
        "bulklabelcompressed"
:
    "Komprimierte Schlüssel ?",
        "bulklabelcsv"
:
    "Komma separierte Werte (CSV): Index, öffentliche Adresse, private Schlüssel (WIF)",
        "brainlabelenterpassphraselbl"
:
    "Passwort Phrase (z. B. Satz mit Minus-Zeichen verbunden):",
        "brainlabelconfirmlbl"
:
    "Passwort Phrase bestätigen:",
        "brainalgorithm"
:
    "Algorithmus: SHA256(Passwort Phrase)",
        "brainlabelbitcoinaddress"
:
    "Öffentliche Adresse",
        "brainlabelprivatekey"
:
    "Privater Schlüssel (WIF Format):",
        "detaillabelenterprivatekey"
:
    "Geben Sie Ihren privaten Schlüssel ein",
        "qrcaminstructiontitle"
:
    "Scannen Sie Ihren QR-Code mit Ihrer Webcam",
        "paperqrnotsupported"
:
    "Fehler. Ihr Web Browser unterstützt nicht den HTML5 Kamerazugriff. Verwenden Sie bitte nach Möglichkeit einen aktuellen Browser von Firefox, Chrome oder Opera.",
        "paperqrpermissiondenied"
:
    "<p>Zugriff verweigert. Ihr Browser sollte eine Warnmeldung anzeigen, die den Zugriff auf Ihre Webcam authorisiert. Klicken Sie bitte auf \"Autorisieren\", um Ihre Webcam zu aktivieren.</p>",
        "detaillabelpassphrase"
:
    "BIP38 Passwort Phrase eingeben",
        "detaillabelnote1"
:
    "Ihr privater Schlüssel ist ein weltweit einmaliger Schlüssel, den nur Sie kennen. Dieser kann in verschiedenen Format encodiert werden. Unterhalb wird die öffentliche Adresse, der dazugehörige öffentliche Schlüssel und Ihr privater Schlüssel in den häufig verwendeten Formaten (WIF, WIFC, HEX, B64) dargestellt.",
        "detaillabelbitcoinaddress"
:
    "Öffentliche Adresse",
        "detaillabelbitcoinaddresscomp"
:
    "Öffentliche Adresse komprimiert",
        "detaillabelpublickey"
:
    "Öffentliche Adresse (130 Zeichen [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Öffentliche Adresse komprimiert (66 Zeichen [0-9A-F]):",
        "detaillabelprivwif"
:
    "Privater Schlüssel WIF<br>51 Zeichen Base58",
        "detaillabelprivwifcomp"
:
    "Privater Schlüssel WIF komprimiert<br>52 Zeichen Base58",
        "detaillabelprivhex"
:
    "Privater Schlüssel hexadezimal (64 Zeichen [0-9A-F]):",
        "detaillabelprivb64"
:
    "Privater Schlüssel Base64 (44 Zeichen):",
        "detaillabelprivmini"
:
    "Privater Schlüssel MINI Format (22, 26 oder 30 Zeichen):",
        "detaillabelprivb6"
:
    "Privater Schlüssel Base6 (99 Zeichen [0-5]):",
        "detaillabelprivbip38"
:
    "Privater Schlüssel BIP38 Format (58 Zeichen Base58):",
        "detaillabelq1"
:
    "Wie erstelle ich eine zufällige Geldbörse? Was ist Base6 (B6)?",
        "detaila1"
:
    "Voraussetzung für die sichere Erstellung eine Cryptowährungs-Geldbörse ist die Verwendung von zufälligen Zeichen, die verwendet werden, um eine sichere Geldbörse zu generieren. Physikalische Zufallsgeneratoren sind in der Regel hochwertiger, wie von Computern berechnete Pseudo-Zufallszahlen. Physikalischer Zufall lässt sich zum Beispiel mit einem Würfel erzeugen. Um einen privaten Schlüssel einer Kryptowährung zu generieren, müssen Sie einen Standardwürfel mit sechs Ziffern 99 Mal werfen. Notieren Sie hierbei jedes Würfelergebnis. Bei der Aufzeichnung verwenden Sie folgende Regel: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Dadurch generieren Sie manuell eine lange, zufällige Zahl: Ihren privaten Schlüssel im B6 oder Base6 Format. Sie können anschließend die 99 Zeichen als Base6 privater Schlüssel in das obere Textfeld einfügen und anschließend auf \"Details darstellen\" klicken. Anschließend wird Ihnen die öffentliche Adresse zu Ihrem privaten Schlüssel dargestellt. Notieren Sie bitte Ihren privaten Schlüssel auch im WIF Format, da dieses häufig verwendet wird.",
        "donatetextfooter"
:
    "Um die Entwicklung von diesem Kryptogeldbörsen-Generator zu unterstützen, bitten wir Sie um eine Spende an eine der folgenden Adressen. Falls die Unterstützung für eine Kryptowährung von einem externen Programmierer beigetragen wurde, erhält dieser direkt Ihre Spende.",
        "footersupport"
:
    "Unterstützen Sie WalletGenerator.net",
        "footerlabelgithub"
:
    "Download (GitHub Depot)",
        "footerlabelcopyright2"
:
    "JavaScript Copyright Rechte sind im Quelltext inkludiert.",
        "footerlabelnowarranty"
:
    "Nutzung auf eigene Gefahr. Haftungsausschluss für etwaige Schäden.",
        "defaultTitle"
:
    "WalletGenerator.Net - Universeller Papier Geldbörsen Generator für Kryptowährungen wie Bitcoin und andere",
        "title"
:
    "Papier Geldbörse für Kryptowährung",
        "brainalertpassphrasewarning"
:
    "Achtung: Die Verwendung einer möglichst langen und sicheren Passwort Phrase ist wichtig, weil anderenfalls Ihr Passwort erraten und damit Ihr Guthaben gestolen werden kann.",
        "brainalertpassphrasetooshort"
:
    "Die von Ihnen eingegebene Passwort Phrase ist zu kurz.",
        "brainalertpassphrasedoesnotmatch"
:
    "Die zwei von Ihnen eingegebenen Passwort Phrasen stimmen nicht überein.",
        "bulkgeneratingaddresses"
:
    "Generiere Schlüssel...",
        "bip38alertincorrectpassphrase"
:
    "Falsche Passwort Phrase für diesen privaten Schlüssel.",
        "bip38alertpassphraserequired"
:
    "Passwort Phrase wird benötigt für BIP38 gesicherten Schlüssel.",
        "detailconfirmsha256"
:
    "Ihr eingegebener Text ist kein gültiger privater Schlüssel!\nMöchten Sie den eingegebenen Text als Passwort Phrase verwenden, um mittels SHA256 Hash-Funktion einen privaten Schlüssel zu erstellen?\nAchtung: Die Verwendung einer möglichst langen und sicheren Passwort Phrase ist wichtig, weil anderenfalls Ihr Passwort erraten und damit Ihr Guthaben gestolen werden kann.",
        "detailalertnotvalidprivatekey"
:
    "Ihr eingetragener Text ist kein gültiger privater Schlüssel",
        "securitychecklistrandomOK"
:
    "Ihr Browser kann kryptografische Zufallszahlen mit der Funktion wie folgt generieren: window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Ihr Browser unterstützt NICHT die Funktion window.crypto.getRandomValues(), die benötigt wird um möglichst sichere zufällige Zahlen zu generieren. Bitte verwenden Sie einen aktuelleren Browser...",
        "securitychecklistofflineNOK"
:
    "Warnung: Sie verwenden diesen Generator von einer Live Webseite. Dies ist nicht empfohlen. Bitte laden Sie möglichst eine Kopie des Quelltextes von GitHub auf einen geschützten Computer, falls Sie beabsichtigen wertvolle Geldbeträge auf Ihre generierte(n) Papiergeldbörse(n) zu übertragen.",
        "securitychecklistofflineOK"
:
    "OK: Sie verwenden eine lokale Kopie dieses Programmes zur Erstellung einer Papier Geldbörse für Kryptowährungen.",
        "paperwalletback"
:
    "<ul><li>Verwenden Sie Ihre öffentliche Adresse, um Zahlungen auf diese Geldbörse zu überweisen.</li><li>Kontrollieren Sie Ihr Guthaben durch Eingabe Ihrer öffentlichen Adresse mit Hilfe eines Online Blockchain-Explorers. z.B. https://chainz.cryptoid.info</li><li><b>NIEMALS DEN PRIVATEN SCHLÜSSEL PREISGEBEN!</b> Importieren Sie den privaten Schlüssel erst in eine Online-Geldbörse, wenn Sie Ihr Guthaben ausgeben möchten.</li></ul><b>Guthaben:</b> _____________ <b>Datum:</b> ________________<br /><b>Notizen:</b> ______________________________________",
}
,
"nl"
:
{
    "choosecurrency"
:
    "Kies Valuta",
        "singlewallet"
:
    "Enkelvoudige Portomonee",
        "paperwallet"
:
    "Papieren Portomonee",
        "bulkwallet"
:
    "Meerdere Portomonees",
        "brainwallet"
:
    "Brein Portomonee",
        "detailwallet"
:
    "Portomonee Details",
        "donate"
:
    "Steun ons",
        "generatelabelbitcoinaddress"
:
    "Genereren van een nieuw adres...",
        "generatelabelmovemouse"
:
    "BEWEEG je muis in de rondte om wat willekeurigheid toe te voegen...",
        "generatelabelkeypress"
:
    "OF type wat willekeurige karakters in deze textbox",
        "skipMessage"
:
    "Je kunt deze stap overslaan als je geen gebruik wilt maken van de willekeurige sleutel generator",
        "singlelabelbitcoinaddress"
:
    "Publiek Adres",
        "singleshare"
:
    "DELEN",
        "singlelabelprivatekey"
:
    "Prive Sleutel (Portomonee Import Formaat)",
        "singlesecret"
:
    "GEHEIM",
        "securitystep0title"
:
    "Stap 0. Volg de veiligheids controlelijst aanbevelingen",
        "securitystep0"
:
    "De eerste stap is om deze website te <strong>downloaden</strong> van <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a> en vervolgens het bestand index.html direct vanaf je computer te openen. Het is voor hackers gewoon te makkelijk om kwaadaardige code tussen de 6000+ regels javascript toe te voegen en om je prive sleutel uit te lezen, en je wilt natuurlijk niet zien hoe je fondsen gestolen worden. Versiebeheer maakt het makkelijk om te controleren wat er daadwerkelijk gerunt wordt. Om er extra zeker van te zijn dat je veilig bezig bent kun je het beste connectie met het internet verbreken.",
        "securitystep1title"
:
    "Stap 1. Geneer een nieuw adres",
        "securitystep1"
:
    "Kies een valuta en klik op de \"Generate new address\" knop.",
        "securitystep2title"
:
    "Stap 2. Print de Papieren Portomonee",
        "securitystep2"
:
    "Klik de Papieren Portomonee tab en print de pagina in hoge kwaliteit uit.",
        "securitystep3title"
:
    "Stap 3. Vouw de Papieren Portomonee",
        "securitystep3"
:
    "Vouw je nieuwe Papieren Portomonee langs de aangegeven lijnen. \n<img src=\"images/foldinginstructions.png\" alt=\"Vouw het eerst om in één lange deel in de lengte, en daarna in drie delen in de breedte\"><br>",
        "securitystep4title"
:
    "Stap 4. Deel je publiek adres",
        "securitystep4"
:
    "Gebruik je publiek adres om geld van andere crypto-currency gebruikers te ontvangen. Je kunt je publieke sleutel zoveel delen als je maar wilt.",
        "securitystep5title"
:
    "Stap 5. Bewaar je prive sleutel op een veilige plek",
        "securitystep5"
:
    "De prive sleutel is letterlijk de sleutels tot je portomonee, als iemand deze zou weten te bemachtigen, dan zouden ze fondsen die er op dat moment in zitten kunnen opnemen, en alle fondsen die eventueel nog gestort zouden worden.",
        "securitystep6"
:
    "Probeer eerst een klein bedrag te storten voordat je grote bedragen overmaakt.",
        "securitychecktitle"
:
    "Beveiligings controlelijst :",
        "securitychecklivecd"
:
    "Gebruik je een beveiligd besturingssysteem die gegarandeerd vrij is van spyware en virussen, bijvoorbeeld een Ubuntu LiveCD?",
        "supportedcurrencylbl"
:
    "Ondersteunde munten !",
        "paperlabelencrypt"
:
    "BIP38 Encrypt?",
        "paperlabelBIPpassphrase"
:
    "Wachtwoordzin:",
        "bulklabelstartindex"
:
    "Start index:",
        "bulklabelrowstogenerate"
:
    "Rijen om te genereren:",
        "bulklabelcompressed"
:
    "Gecomprimeerde addressen?",
        "bulklabelcsv"
:
    "Komma gescheiden waardes: Index,Address,Private Key (WIF)",
        "brainlabelenterpassphraselbl"
:
    "Voer wachtwoordzin in:",
        "brainlabelconfirmlbl"
:
    "Bevestig wachtwoordzin:",
        "brainalgorithm"
:
    "Algorithm: SHA256(wachtwoordzin)",
        "brainlabelbitcoinaddress"
:
    "Publiek Adres:",
        "brainlabelprivatekey"
:
    "Prive sleutel (Portomonee Import Formaat):",
        "detaillabelenterprivatekey"
:
    "Voeg prive sleutel toe",
        "qrcaminstructiontitle"
:
    "Scan QR code in door gebruik te maken van je webcam",
        "paperqrnotsupported"
:
    "Sorry, maar je webbrowser heeft geen ondersteuning voor HTML5 camera controls. Probeer het nog een keer via een nieuwe versie van Firefox (aanbevolen), Chrome of Opera.",
        "paperqrpermissiondenied"
:
    "<p>Toegang afgewezen. Je browser zou een bericht moeten tonen waarbij toegang tot je webcam wordt gevraagd. Klik alsjeblief op de \"Allow\" knop om je webcam toegang te geven.</p>",
        "detaillabelpassphrase"
:
    "Voeg een BIP38 wachtwoordzin toe",
        "detaillabelnote1"
:
    "Je prive sleutel is een unieke geheime nummer waarvan alleen jij op de hoogte bent. Het kan encoded worden in een aantal verschillende formaten. Hieronder laten we de Publiek adres en Publieke sleutel zien dat correspondeerd met je prive sleutel zowel als je prive sleutel in de meest populaire encoding formaten (WIF, WIFC, HEX, B64).",
        "detaillabelbitcoinaddress"
:
    "Publiek Adres",
        "detaillabelbitcoinaddresscomp"
:
    "Publiek Adres gecomprimeerd",
        "detaillabelpublickey"
:
    "Publieke Sleutel (130 karakters [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Publieke Sleutel (gecomprimeerd, 66 karakters [0-9A-F]):",
        "detaillabelprivwif"
:
    "Prive Sleutel WIF<br>51 karakters Base58",
        "detaillabelprivwifcomp"
:
    "Prive Sleutel WIF Gecomprimeerd<br>52 karakters Base58",
        "detaillabelprivhex"
:
    "Prive Sleutel Hexadecimal Formaat (64 characters [0-9A-F]):",
        "detaillabelprivb64"
:
    "Prive Sleutel Base64 (44 karakters):",
        "detaillabelprivmini"
:
    "Prive Sleutel Mini Formaat (22, 26 or 30 karakters):",
        "detaillabelprivb6"
:
    "Prive Sleutel Base6 Formaat (99 karakters [0-5]):",
        "detaillabelprivbip38"
:
    "Prive Sleutel BIP38 Formaat (58 karakters Base58):",
        "detaillabelq1"
:
    "Hoe maak ik een portomonee aan met een dobbelsteen? Wat is B6?",
        "detaila1"
:
    "Een belangrijk onderdeel bij het maken van een cryto-currency portomonee, is om er zeker van te zijn dat de willekeurig gegenereerde nummers die gebruikt zijn om de portomonee te genereren daadwerkelijk willekeurig zijn. Fysieke willekeurigheid is beter dan computer gegenereerde pseudo-willekeurigheid. De meest eenvoudige manier om fysieke willekeurigheid te creëren is met dobbelstenen. Om een crypto-currency private key te genereren heb je alleen een zes zijdige dobbelsteen nodig welke je 99 keer rolt. Waarbij je elke keer stopt om de gerolde waarde te noteren. Bij het noteren de de waardes volg je de volgende regels: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Door dit te doen noteer je de grote willekeurige nummer, je prive sleutel, in B6 of base 6 formaat. Je kunt dan vervolgens de 99 karakters base 6 prive sleutel toevoegen in het veld boven en door View Details te klikken. Je zult dan je publiek adres gerelateerd aan je prive sleutel zien. Je zou het beste ook een notitie kunnen maken van je prive sleutels in WIF format, aangezien dit meer gebruikt wordt.",
        "donatetextfooter"
:
    "Om het development van deze wallet te steunen, kun je een donatie maken naar de volgende addressen. Als ondersteuning voor een valuta toe wordt gevoegd door een externe inbrenger, zal hij of zij de donaties zelf ontvangen.",
        "footersupport"
:
    "Steun WalletGenerator.net",
        "footerlabelgithub"
:
    "Download (GitHub Repository)",
        "footerlabelcopyright2"
:
    "JavaScript copyrights zijn toegevoegd in de code.",
        "footerlabelnowarranty"
:
    "Geen garantie.",
        "defaultTitle"
:
    "WalletGenerator.net - Universeel Papieren portomonee generator voor Bitcoin en andere cyrptocurrencies",
        "title"
:
    "Papieren Portomonee Generator",
        "brainalertpassphrasewarning"
:
    "Waarschuwing: Het kiezen van een sterk wachtwoordzin is belangrijk om geforceerde inbraak pogingen om je wachtwoordzin te raden en het stelen van je munten te voorkomen.",
        "brainalertpassphrasetooshort"
:
    "De wachtwoordzin die je ingevuld hebt is te kort.",
        "brainalertpassphrasedoesnotmatch"
:
    "De wachtwoordzin komt niet overeen met de bevestigde wachtwoordzin",
        "bulkgeneratingaddresses"
:
    "Genereerd adressen...",
        "bip38alertincorrectpassphrase"
:
    "Onjuiste wachtwoordzin voor deze versleutelde prive sleutel.",
        "bip38alertpassphraserequired"
:
    "Wachtwoordzin vereist voor BIP38 sleutel",
        "detailconfirmsha256"
:
    "De tekst die je ingevuld hebt is niet een valide Prive Sleutel!\nZou je gebruik willen maken van de ingevulde tekst als wachtwoordzin en daarbij het aanmaken van een Prive Sleutel die gebruik maakt van SHA256 hash van de wachtwoordzin?\nWaarschuwing: Het kiezen van een sterk wachtwoordzin is belangrijk om geforceerde inbraak pogingen te vermijden, zodat inbrekers er niet met je munten van door kunnen.",
        "detailalertnotvalidprivatekey"
:
    "De tekst die je hebt ingevuld is niet een geldigde Prive Sleutel",
        "securitychecklistrandomOK"
:
    "Je browser heeft de mogelijkheid om wllekeurige crypto sleutels te genereren door het gebruik van window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    " Jouw browser heeft geen ondersteuning voor window.crypto.getRandomValues(), welke belangrijk wordt voor het genereren van de meest veilige willekeurige numbers mogelijk. Gebruik een moderne browser om dit mogelijk te maken.",
        "securitychecklistofflineNOK"
:
    "Het lijkt er op dat je gebruik maakt van deze generator terwijl je connectie hebt met de website, wij raden je aan dit niet te doen bij het aanmaken van waardevolle protomonees. Inplaats daarvan kun je gebruik maken de download link onderaan deze pagina om het zip bestand van GitHub te downloaden en 'lokaal' de HTML bestanden te openen.",
        "securitychecklistofflineOK"
:
    "Je bent deze generator van je eigen lokale download aan het draaien.",
        "paperwalletback"
:
    "<ul><li>Om fondsen naar deze portomonee over te maken, kun je munten naar dit publiek adres sturen, wanneer je  maar wilt.</li><li>Bevestig je fondsen door een publieke blockchain explorers te kijken in zoals blockchain.info.</li><li><b>LAAT NOOIT JE PRIVE SLEUTEL ZIEN</b> totdat je bereid bent de balans van deze portomonee te importeren in deze client portomonee, een exchange of een online portomonee.</li></ul><b>Hoeveelheid :</b> ___________       <b>Datum :</b> ________________<br /><b>Notities :</b> ______________________________________",
}
,
"pt"
:
{
    "choosecurrency"
:
    "Escolha a moeda",
        "singlewallet"
:
    "Carteira Única",
        "paperwallet"
:
    "Carteira de Papel",
        "bulkwallet"
:
    "Carteira em Massa",
        "brainwallet"
:
    "Carteira Brain",
        "detailwallet"
:
    "Detalhes da Carteira",
        "donate"
:
    "Apoie",
        "generatelabelbitcoinaddress"
:
    "Gerando novo endereço...",
        "generatelabelmovemouse"
:
    "MOVA seu mouse por aí para aumentar um pouco a aleatoriedade...",
        "generatelabelkeypress"
:
    "OU digite alguns caracteres aleatórios nessa caixa de texto",
        "skipMessage"
:
    "Você pode pular esse passo caso você não planeje usar o gerador de chave aleatória.",
        "singlelabelbitcoinaddress"
:
    "Endereço público",
        "singleshare"
:
    "COMPARTILHE",
        "singlelabelprivatekey"
:
    "Chave Privada (Formato de Importação da Carteira)",
        "singlesecret"
:
    "SEGREDO",
        "securitystep0title"
:
    "Passo 0. Siga a lista de recomendações de segurança",
        "securitystep0"
:
    "O primeiro passo é <strong>baixar</strong> esse website do <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a> e abrir o arquivo index.html diretamente de seu computador. É simplesmente muito fácil de esconder algum código malicioso em mais de 6000 linhas de JavaScript para vazar sua chave privada, e você não quer ver seus fundos serem roubados. O controle de versão de código torna muito mais fácil verificar de forma intercalada o que realmente executa. Para segurança extra, <strong>desconecte seu acesso a internet</strong> enquanto gerando sua carteira.",
        "securitystep1title"
:
    "Passo 1. Gere um endereço novo",
        "securitystep1"
:
    "Escolha sua moeda e clique no botão \"Generate new address\" (gerar novo endereço).",
        "securitystep2title"
:
    "Passo 2. Imprima a Carteira de Papel",
        "securitystep2"
:
    "Abra a aba da Carteira de Papel e imprima a página na opção de alta qualidade de impressão. <strong>Nunca salve a página como um arquivo PDF para imprimi-lo depois já que um arquivo é mais fácil ser hackeado do que um pedaço de papel.</strong>",
        "securitystep3title"
:
    "Passo 3. Dobre a Carteira de Papel",
        "securitystep3"
:
    "Dobre sua nova Carteira de Papel seguindo as linhas.\n<img src=\"images/foldinginstructions.png\" alt=\"Dobre no meio horizontalmente (em vermelho) e então em três partes, verticalmente.\"><br>\nVocê pode colocar um lado dentro do outro para \"travar\" a carteira.",
        "securitystep4title"
:
    "Passo 4. Compartilhe seu endereço público",
        "securitystep4"
:
    "Use seu endereço público para receber dinheiro de outros usuários da cripto-moeda. Você pode compartilhar seu endereço público o quanto você quiser.",
        "securitystep5title"
:
    "Passo 5. Mantenha sua chave privada em segredo",
        "securitystep5"
:
    "Sua chave privada é literalmente a chave para seu dinheiro, se alguém conseguisse ela, este conseguiria fazer um saque de seus fundos atualmente na sua carteira, e também quaisquer fundos que seriam depositados na carteira.",
        "securitystep6"
:
    "Por favor, teste gastar uma pequena quantidade de dinheiro antes de receber grandes pagamentos.",
        "securitystep7title"
:
    "Considere nos apoiar",
        "securitystep7"
:
    "Esse serviço é gratuito e permanecerá gratuito, sem propagandas ou qualquer tipo de rastreamento. Por favor, considere <a href=\"#\" onclick=\"ninja.tabSwitch(document.getElementById('donate'));\">fazer uma doação</a> para nos apoiar e apoiar as pessoas que adicionam suporte para novas moedas.",
        "securitychecktitle"
:
    "Checklist de Segurança:",
        "securitychecklivecd"
:
    "Você está usando um sistema operacional seguro, garantido de estar livre de spyware e vírus, como por exemplo, um Ubuntu LiveCD?",
        "supportedcurrencylbl"
:
    "Moedas suportadas!",
        "paperlabelencrypt"
:
    "Criptografar com BIP38?",
        "paperlabelBIPpassphrase"
:
    "Senha:",
        "bulklabelstartindex"
:
    "Índice inicial:",
        "bulklabelrowstogenerate"
:
    "Quantas linhas gerar:",
        "bulklabelcompressed"
:
    "Endereços comprimidos?",
        "bulklabelcsv"
:
    "Valores separados por vírgulha: Índice,Endereço,Chave Privada(WIF)",
        "brainlabelenterpassphraselbl"
:
    "Insira a Senha:",
        "brainlabelconfirmlbl"
:
    "Confirme a Senha:",
        "brainalgorithm"
:
    "Algoritmo: SHA256(senha)",
        "brainlabelbitcoinaddress"
:
    "Endereço público:",
        "brainlabelprivatekey"
:
    "Chave privada (Formato de Importação da Carteira):",
        "detaillabelenterprivatekey"
:
    "Insira a Chave Privada:",
        "qrcaminstructiontitle"
:
    "Escaneie o Código QR usando a sua câmera.",
        "paperqrnotsupported"
:
    "Desculpe, mas seu navegador não suporta os controles de câmera do HTML5. Tente usar uma versão recomendada do Firefox (recomendado), Google Chrome ou Opera.",
        "paperqrpermissiondenied"
:
    "<p>Permissão negada. Seu navegador deve mostrar uma mensagem requisitando o acesso a sua câmera. Por favor, clique no botão \"Permitir\" para habilitar a câmera.</p>",
        "detaillabelpassphrase"
:
    "Insira a Senha BIP38",
        "detaillabelnote1"
:
    "Sua Chave Privada é um segredo único que só você sabe. Ela pode ser codificada em diferentes formatos. A baixo está o Endereço Público e a Chave Pública que correspondem a sua Chave Privada, assim como sua Chave Privada na maioria dos formatos populares (WIF, WIFC, HEX, B64).",
        "detaillabelbitcoinaddress"
:
    "Endereço Público",
        "detaillabelbitcoinaddresscomp"
:
    "Endereço Público Comprimido",
        "detaillabelpublickey"
:
    "Chave Pública (130 caracteres [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Chave Pública (comprimida, 66 caracteres [0-9A-F]):",
        "detaillabelprivwif"
:
    "Chave Privada WIF<br>51 caracteres em Base58",
        "detaillabelprivwifcomp"
:
    "Chave Privada WIF comprimida<br>52 caracteres em Base58",
        "detaillabelprivhex"
:
    "Chave Privada no Formato Hexadecimal (64 caracteres [0-9A-F]):",
        "detaillabelprivb64"
:
    "Chave Privada em Base64 (44 caracteres):",
        "detaillabelprivmini"
:
    "Chave Privada em Formato Mini (22, 26 ou 30 caracteres):",
        "detaillabelprivb6"
:
    "Chave Privada em Base6 (99 caracteres [0-5]):",
        "detaillabelprivbip38"
:
    "Chave Privada no Formato BIP38 (58 caracteres em Base58):",
        "detaillabelq1"
:
    "Como faço uma carteira usando dados? O que é o B6?",
        "detaila1"
:
    "Uma parte importante da criação de uma carteira de uma cripto-moeda é garantir que os números usados para criar a carteira são verdadeiramente aleatórios. Aleatoriedade física é melhor que os números pseudo-aleatórios gerados pelo computador. O jeito mais fácil de gerar aleatoriedade física é usando um dado. Para criar uma chave privada de uma cripto-moeda você só precisa de um dado de 6 lados que você joga 99 vezes, parando cada vez para anotar o valor do dado. Quando anotando os valores, siga esse padrão de regras: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0 (apenas substitua o 6 por 0). Fazendo isso você está anotando o grande número aleatório, sua chave privada, no formato Base6 (ou B6). Então você pode inserir a chave privada de 99 caracteres em Base6 na caixa de texto acima e clicar em \"View Details\" (ver detalhes). Então você verá o endereço público associado com sua chave privada. Você também deve anotar sua chave privada no formato WIF pois esse formato é mais geralmente utilizado.",
        "donatetextfooter"
:
    "Para apoiar o desenvolvimento desse gerador de carteira, você pode doar para os seguintes endereços. Quando o suporte para uma moeda é adicionada por um colaborador ao projeto, ele recebe as doações diretamente.",
        "footersupport"
:
    "Apoie WalletGenerator.net",
        "footerlabelgithub"
:
    "Download (GitHub Repository)",
        "footerlabelcopyright2"
:
    "Avisos de Copyright do JavaScript estão incluídos no código-fonte.",
        "footerlabelnowarranty"
:
    "Sem garantias.",
        "defaultTitle"
:
    "WalletGenerator.net - Gerador Universal de Carteira de Papel para Bitcoin e outras Cripto-moedas.",
        "title"
:
    "Gerador de Carteira de Papel",
        "brainalertpassphrasewarning"
:
    "Aviso: Escolher uma senha forte é importante para evitar ataques de bruteforce para advinhar sua senha e roubar seus fundos.",
        "brainalertpassphrasetooshort"
:
    "A senha que você inseriu é pequena de mais.",
        "brainalertpassphrasedoesnotmatch"
:
    "A senha não coincide com a confirmação.",
        "bulkgeneratingaddresses"
:
    "Gerando endereços...",
        "bip38alertincorrectpassphrase"
:
    "Senha incorreta para essa chave privada criptografada.",
        "bip38alertpassphraserequired"
:
    "Senha necessária para chave BIP38",
        "detailconfirmsha256"
:
    "O texto que você inseriu não é uma chave privada válida!\nVocê gostaria de usar o texto inserido como uma senha e criar uma chave privada usando um hash SHA256 da senha?\nAviso: Escolher uma senha forte é importante para evitar ataques de bruteforce para advinhar sua senha e roubar seus fundos.",
        "detailalertnotvalidprivatekey"
:
    "O texto que você inseriu não é uma chave privada válida",
        "securitychecklistrandomOK"
:
    "Seu navegador suporta a geração de chaves criptograficamente aleatórias usando window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Seu navegador NÃO supota window.crypto.getRandomValues(), que é importante para gerar os números aleatórios mais seguros possíveis. Por favor, use um navegador mais moderno.",
        "securitychecklistofflineNOK"
:
    "Você aparenta estar usando esse gerador de um site online, o que não é recomendado para a criação de carteiras de valor. Ao invés disso, use o link de download no final da página para baixar o arquivo ZIP do GitHub e rodar esse gerador offline como um arquivo HTML local.",
        "securitychecklistofflineOK"
:
    "Você está usando esse gerador de seu próprio download (offline).",
        "paperwalletback"
:
    "<ul><li>Para depositar fundos nessa Carteira de Papel, envie dinheiro para seu endereço público, a qualquer momento.</li><li>Verifique seu saldo pesquisando por seu endereço público usando um explorador de blockchain como o blockchain.info.</li><li><b>NÃO MOSTRE A CHAVE PRIVADA</b> até que você esteja pronto para importar o saldo para um cliente de cripto-moeda, casa de câmbio (exchange) ou carteira online.</li></ul><b>Valor: </b>___________       <b>Data: </b>_______________<br /><b>Notas :</b> ______________________________________",
}
,
"ru"
:
{
    "choosecurrency"
:
    "Выберите валюту",
        "singlewallet"
:
    "Единичный кошелек",
        "paperwallet"
:
    "Бумажный кошелек",
        "bulkwallet"
:
    "Несколько кошельков",
        "brainwallet"
:
    "\"Умственный\" кошелек",
        "detailwallet"
:
    "Подробности о кошельке",
        "donate"
:
    "Поддержка",
        "generatelabelbitcoinaddress"
:
    "Создается новый адрес...",
        "generatelabelmovemouse"
:
    "ПОДВИГАЙТЕ мышкой, чтобы сделать генерацию немного более случайной...",
        "generatelabelkeypress"
:
    "ИЛИ введите случайные символы в это поле для текста",
        "skipMessage"
:
    "Этот шаг можно пропустить, если вы не планируете использовать генератор случайных ключей",
        "singlelabelbitcoinaddress"
:
    "Открытый адрес",
        "singleshare"
:
    "ОТКРЫТЫЙ",
        "singlelabelprivatekey"
:
    "Закрытый ключ (в формате импорта в кошелек - WIF)",
        "singlesecret"
:
    "СЕКРЕТНЫЙ",
        "securitystep0title"
:
    "Шаг 0. Следуйте рекомендациям в \"Перечне безопасности\"",
        "securitystep0"
:
    "Первым делом <strong>скачайте</strong> этот веб-сайт с <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a>, распакуйте и откройте файл index.html непосредственно с Вашего компьютера. Cпрятать вредоносный код в 6000+ строках javascript, чтобы украсть Ваш закрытый ключ, довольно просто, а Вам вряд ли этого хочется. Система контроля версий позволяет значительно упростить взаимную проверку исполняемого кода. Для большей безопасности <strong>отключитесь от Интернета</strong> на время создания кошелька.",
        "securitystep1title"
:
    "Шаг 1. Создайте новый адрес",
        "securitystep1"
:
    "Выберите Вашу валюту и нажмите на кнопку \"Создать новый адрес\"",
        "securitystep2title"
:
    "Шаг 2. Распечатайте бумажный кошелек",
        "securitystep2"
:
    "Нажмите на закладку \"Бумажный кошелек\" и распечатайте страницу в высоком качестве. <strong>Никогда не сохраняйте страницу как PDF файл для последующей печати, поскольку файл имеет гораздо более высокие шансы быть скомпрометированным, чем бумага.</strong>",
        "securitystep3title"
:
    "Шаг 3. Сверните бумажный кошелек",
        "securitystep3"
:
    " Сверните Ваш новый бумажный кошелек согласно линиям\n<img src=\"images/foldinginstructions.png\" alt=\"Согните пополам продольно, а потом каждую треть поперечно.\"><br>\nВы можете вставить одну часть внутрь другой, чтобы скрепить кошелек.",
        "securitystep4title"
:
    "Шаг 4. Делитесь Вашим открытым адресом",
        "securitystep4"
:
    "Используйте Ваш открытый адрес для получения денег от других пользователей крипто-валюты. Вы можете делиться открытым адресом сколько угодно раз.",
        "securitystep5title"
:
    "Шаг 5. Держите Ваш закрытый ключ в тайне",
        "securitystep5"
:
    "Закрытый ключ, по сути, и есть Ваши деньги - если кто-то получит к нему доступ, он сможет не только вывести деньги, которые будут там находиться на тот момент, но и выводить все средства, получаемые на этот кошелек в будущем.",
        "securitystep6"
:
    "Перед тем как получать значительные платежи, пожалуйста, попробуйте вывести с кошелька небольшие суммы.",
        "securitychecktitle"
:
    "Перечень безопасности :",
        "securitychecklivecd"
:
    "Используете ли Вы безопасную операционную систему, гарантированно чистую от различного рода шпионских программ и вирусов, например, такую как Ubuntu LiveCD?",
        "supportedcurrencylbl"
:
    "валют доступно !",
        "paperlabelencrypt"
:
    "Зашифровать с помощью BIP38?",
        "paperlabelBIPpassphrase"
:
    "Кодовая фраза:",
        "bulklabelstartindex"
:
    "Начальный индекс:",
        "bulklabelrowstogenerate"
:
    "Количество генерируемых строк:",
        "bulklabelcompressed"
:
    "Создавать сжатые адреса?",
        "bulklabelcsv"
:
    "Значения, разделенные запятой: Индекс,Адрес,Закрытый ключ (WIF)",
        "brainlabelenterpassphraselbl"
:
    "Введите кодовую фразу:",
        "brainlabelconfirmlbl"
:
    "Подтвердите кодовую фразу:",
        "brainalgorithm"
:
    "Алгоритм: SHA256(кодовая фраза)",
        "brainlabelbitcoinaddress"
:
    "Открытый адрес:",
        "brainlabelprivatekey"
:
    "Закрытый ключ (в формате импорта в кошелек - WIF):",
        "detaillabelenterprivatekey"
:
    "Введите закрытый ключ",
        "qrcaminstructiontitle"
:
    "Сосканируйте QR-код с помощью Вашей камеры",
        "paperqrnotsupported"
:
    "К сожалению, Ваш браузер не поддерживает возможности HTML5 по управлению камерой. Попробуйте использовать свежую версию Firefox (рекомендуется), Chrome или Opera.",
        "paperqrpermissiondenied"
:
    "<p>Доступ запрещен. Ваш браюзер должен отобразить сообщение с запросом доступа к Вашей камере. Пожалуйста, нажмите кнопку \"Разрешить\", чтобы предоставить доступ к Вашей камере.</p>",
        "detaillabelpassphrase"
:
    "Введите кодовую фразу BIP38",
        "detaillabelnote1"
:
    "Ваш закрытый ключ - это уникальный секретный номер, который знаете только Вы. Он может быть представлен в различных форматах. Ниже показаны открытый адрес и открытый ключ, соответствующие Вашему закрытому ключу, а также Ваш закрытый ключ в наиболее популярных форматах (WIF, WIFC, HEX, B64).",
        "detaillabelbitcoinaddress"
:
    "Открытый адрес",
        "detaillabelbitcoinaddresscomp"
:
    "Сжатый открытый адрес",
        "detaillabelpublickey"
:
    "Открытый ключ (130 символов [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Открытый ключ (сжатый, 66 символов [0-9A-F]):",
        "detaillabelprivwif"
:
    "Закрытый ключ WIF<br>51 символ Base58",
        "detaillabelprivwifcomp"
:
    "Сжатый закрытый ключ WIF <br>52 символа Base58",
        "detaillabelprivhex"
:
    "Закрытый ключ в шестнадцатеричном формате (64 символа [0-9A-F]):",
        "detaillabelprivb64"
:
    "Закрытый ключ Base64 (44 символа):",
        "detaillabelprivmini"
:
    "Закрытый ключ в мини-формате (22, 26 или 30 символов):",
        "detaillabelprivb6"
:
    "Закрытый ключ в формате Base6 (99 символов [0-5]):",
        "detaillabelprivbip38"
:
    "Закрытый ключ в формате BIP38 (58 символов Base58):",
        "detaillabelq1"
:
    "Как мне создать кошелек с помощью игрального кубика? Что такое B6?",
        "detaila1"
:
    "Важная чать в создании кошелька для крипто-валюты заключается в том, чтобы убедиться, что используются действительно случайные числа. Физическая случайность лучше, чем сгенерированные компьютером псевдо-случайные числа. Простейший способ сгенерировать физически случайные числа - игральный кубик. Для создания закрытого ключа нужен лишь 6-гранный кубик, который нужно будет кинуть 99 раз. Записывайте каждое значение, при этом следуйте следующему правилу: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Таким образом, Вы получите большое случайное число - Ваш закрытый ключ в формате B6, т.е. в шестиричном формате. Теперь Вы можете ввести 99-тисимвольный закрытый ключ в шестиричном формате в текстовое поле сверху и нажать кнопку \"Посмотреть подробности\". Вы увидите открытый адрес, соответствующий Вашему закрытому ключу. Обратите также внимание на Ваш закрытый ключ в формате WIF, поскольку этот формат является наиболее широко используемым.",
        "donatetextfooter"
:
    "Для поддержки разработчиков этого генератора кошельков используйте следующие адреса. Если поддержка для валюты добавлена внешним разработчиком, он получает Ваши пожертвования напрямую.",
        "footersupport"
:
    "Поддержать WalletGenerator.net",
        "footerlabelgithub"
:
    "Скачать (репозиторий на GitHub)",
        "footerlabelcopyright2"
:
    "Копирайты на JavaScript включены в исходники.",
        "footerlabelnowarranty"
:
    "Гарантии не предоставляются.",
        "defaultTitle"
:
    "WalletGenerator.net - Универсальный генератор бумажных кошельков для Bitcoin и других криптовалют",
        "title"
:
    "Генератор бумажных кошельков",
        "brainalertpassphrasewarning"
:
    "Внимание: Выбор сильной кодовой фразы очень важен для предотвращения взлома путем прямого перебора, совершаемого злоумышленниками с целью похитить Ваши деньги.",
        "brainalertpassphrasetooshort"
:
    "Введенная Вами кодовая слишком короткая.",
        "brainalertpassphrasedoesnotmatch"
:
    "Введенные кодовые фразы не совпадают.",
        "bulkgeneratingaddresses"
:
    "Создаются адреса...",
        "bip38alertincorrectpassphrase"
:
    "Неправильная кодовая фраза для данного закрытого ключа.",
        "bip38alertpassphraserequired"
:
    "Для закрытого ключа в формате BIP38 требуется кодовая фраза",
        "detailconfirmsha256"
:
    "Введенный Вами текст не является закрытым ключом!\nХотите использовать введенный текст в качестве кодовой фразы и создать закрытый ключ, используя SHA256 хэш этой кодовой фразы?\nВнимание: Выбор сильной кодовой фразы очень важен для предотвращения взлома путем прямого перебора, совершаемого злоумышленниками с целью похитить Ваши деньги.",
        "detailalertnotvalidprivatekey"
:
    "Введенный Вами текст не является закрытым ключом",
        "securitychecklistrandomOK"
:
    "Ваш браузер способен генерировать криптографически случайные ключи с помощью функции window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Ваш браузер НЕ поддерживает функцию window.crypto.getRandomValues(), которая важна для генерирования максимально безопасных случайных чисел. Пожалуйста, используйте более современный браузер.",
        "securitychecklistofflineNOK"
:
    "Похоже, что Вы запустили этот генератор с сайта, что не рекомендуется для создания ценных кошельков. Вместо этого, используйте ссылку внизу данной страницы для скачивания ZIP-файла с GitHub и запустите этот генератор из локального HTML-файла, отключив доступ к интернету.",
        "securitychecklistofflineOK"
:
    "Вы запустили генератор из локального файла.",
        "paperwalletback"
:
    "<ul><li>Для пополнения средств этого бумажного кошелька отправьте криптовалюту на его открытый адрес.</li><li>Проверьте Ваш баланс, найдя открытый адрес в просмотрщиках блокчейна, таких как blockchain.info.</li><li><b>НЕ РАССКРЫВАЙТЕ ЗАКРЫТЫЙ КЛЮЧ</b> пока Вы не будете готовы импортировать баланс этого кошелька в крипто-клиент, биржу или онлайн-кошелек.</li></ul><b>Сумма :</b> ___________       <b>Дата :</b> ________________<br /><b>Пометки :</b> ______________________________________",
}
,

"es"
:
{
    "choosecurrency"
:
    "Elige criptodivisa",
        "singlewallet"
:
    "Cartera única",
        "paperwallet"
:
    "Cartera de papel",
        "bulkwallet"
:
    "Múltiples carteras",
        "brainwallet"
:
    "Cartera mnemotécnica",
        "detailwallet"
:
    "Detalles de la cartera",
        "donate"
:
    "Ayúdanos",
        "generatelabelbitcoinaddress"
:
    "Generando nueva dirección...",
        "generatelabelmovemouse"
:
    "MUEVE el ratón para añadir aleatoriedad extra...",
        "generatelabelkeypress"
:
    "O escribe caracteres aleatorios en el cuadro de texto",
        "skipMessage"
:
    "Puedes saltar este paso si no planeas usar el generador aleatorio de claves.",
        "singlelabelbitcoinaddress"
:
    "Dirección Pública",
        "singleshare"
:
    "COMPARTIR",
        "singlelabelprivatekey"
:
    "Clave Privada (formato de importación de cartera, WIF)",
        "singlesecret"
:
    "SECRETO",
        "securitystep0title"
:
    "Paso 0. Sigue las recomendaciones de la lista de verificación de seguridad",
        "securitystep0"
:
    "El primer paso es <strong>descargar</strong> este website de <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a> y abrir el archivo index.html directamente desde tu ordenador. Simplemente, es muy sencillo colar algo de código maligno en el javascript de 6000+ líneas para filtrar tu clave privada, y no querrás ver tus fondos siendo robados. El código de control de versiones facilita mucho saber qué ha funcionado realmente hasta la fecha. Para mayor seguridad, <strong>desconecta tu acceso a internet</strong> mientras estás generando tu cartera.",
        "securitystep1title"
:
    "Paso 1. Genera una nueva dirección",
        "securitystep1"
:
    "Elige tu criptodivisa y haz click en el botón \"Generar nueva dirección\".",
        "securitystep2title"
:
    "Paso 2. Imprime la cartera de papel",
        "securitystep2"
:
    "Haz click en la pestaña Cartera de papel e imprime la página con la configuración de alta calidad. <strong>Nunca guardes la página como un archivo PDF para imprimirla más tarde porque un archivo es más facilmente hackeable que un trozo de papel.</strong>",
        "securitystep3title"
:
    "Paso 3. Pliega la cartera de papel",
        "securitystep3"
:
    "Pliega tu cartera de papel nueva siguiendo las líneas.\n<img src=\"images/foldinginstructions.png\" alt=\"Dobla por la mitad a lo largo, y después en tres a lo ancho.\"><br>\nPuedes introducir un extremo dentro del otro para cerrar la cartera.",
        "securitystep4title"
:
    "Paso 4. Comparte tu dirección pública",
        "securitystep4"
:
    "Utiliza tu dirección pública para recibir dinero de otros usuarios de criptodivisas. Puedes compartir tu dirección pública tanto como quieras.",
        "securitystep5title"
:
    "Paso 5. Mantén secreta tu clave privada",
        "securitystep5"
:
    "La clave privada es la llave a tus monedas, si alguien la obtuviera, podría retirar los fondos que se encontraran en la cartera en ese momento, y cualquier fondo que se depositara en esa cartera en un futuro.",
        "securitystep6"
:
    "Por favor, prueba a gastar una pequeña cantidad antes de recibir cualquier pago grande.",
        "securitychecktitle"
:
    "Lista de verificación de seguridad:",
        "securitychecklivecd"
:
    "Estás usando un sistema operativo seguro, garantizado de estar libre de spyware y virus, por ejemplo, un LiveCD de Ubuntu?",
        "supportedcurrencylbl"
:
    "criptodivisas soportadas!",
        "paperlabelencrypt"
:
    "Encriptación BIP38?",
        "paperlabelBIPpassphrase"
:
    "Contraseña:",
        "bulklabelstartindex"
:
    "Iniciar índice en:",
        "bulklabelrowstogenerate"
:
    "Líneas a generar:",
        "bulklabelcompressed"
:
    "Direcciones comprimidas?",
        "bulklabelcsv"
:
    "Valores separados por coma: Índice,Dirección,Clave privada (WIF)",
        "brainlabelenterpassphraselbl"
:
    "Introduce contraseña:",
        "brainlabelconfirmlbl"
:
    "Confirma la contraseña:",
        "brainalgorithm"
:
    "Algoritmo: SHA256(contraseña)",
        "brainlabelbitcoinaddress"
:
    "Dirección pública:",
        "brainlabelprivatekey"
:
    "Clave privada (formato de importación de cartera, WIF):",
        "detaillabelenterprivatekey"
:
    "Introduce la clave privada",
        "qrcaminstructiontitle"
:
    "Escanear código QR usando la cámara",
        "paperqrnotsupported"
:
    "Lo siento, pero tu navegador web no soporta los controles HTML5 para la cámara. Intenta usar una versión reciente de FireFox (recomendado), Chrome u Opera.",
        "paperqrpermissiondenied"
:
    "<p>Permiso denegado. Tu navegador debería mostrarte un mensaje solicitándote acceso a la cámara. Por favor, haz click en el botón \"Permitir\" para habilitar la cámara.</p>",
        "detaillabelpassphrase"
:
    "Introduzca la contraseña BIP38",
        "detaillabelnote1"
:
    "Tu clave privada es un número secreto único que sólo tú sabes. Puede codificarse en varios formatos. A continuación mostramos la dirección pública y la clave pública que corresponden a tu clave privada así como tu clave privada en los formatos de codificación más populares (WIF, WIFC, HEX, B64).",
        "detaillabelbitcoinaddress"
:
    "Dirección pública",
        "detaillabelbitcoinaddresscomp"
:
    "Dirección pública comprimida",
        "detaillabelpublickey"
:
    "Clave pública (130 caracteres [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Clave pública (comprimida, 66 caracteres [0-9A-F]):",
        "detaillabelprivwif"
:
    "Clave privada WIF<br>51 caracteres Base58",
        "detaillabelprivwifcomp"
:
    "Clave privada WIF Comprimida<br>52 caracteres Base58",
        "detaillabelprivhex"
:
    "Clave privada en formato Hexadecimal (64 caracteres [0-9A-F]):",
        "detaillabelprivb64"
:
    "Clave privada Base64 (44 caracteres):",
        "detaillabelprivmini"
:
    "Clave privada en formato Mini (22, 26 or 30 caracteres):",
        "detaillabelprivb6"
:
    "Clave privada en formato Base6 (99 caracteres [0-5]):",
        "detaillabelprivbip38"
:
    "Clave privada en formato BIP38 (58 caracteres Base58):",
        "detaillabelq1"
:
    "Cómo puedo crear una cartera usando dados? Qué  es B6?",
        "detaila1"
:
    "Una parte importante de la creación de una cartera para una criptomoneda es cerciorarse de que los números aleatorios utilizados para crearla son verdaderamente aleatorios. La aleatoriedad real es mucho mejor que la pseudo-aleatoriedad generada por ordenador. La manera más sencilla de generar aleatoriedad real es usando dados. Para crear una clave privada para una criptomoneda sólo necesitas un dado de 6 caras, que tirarás 99 veces, anotando cada vez el valor del dado. Cuando anotes los valores, sigue estas reglas: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Haciéndolo así estarás creando un gran número aleatorio, que será tu clave privada, en formato B6 o base 6. Si introduces tu clave privada de 99 caracteres en base 6 en el cuadro de texto de arriba y haces click en ver detalles, verás la dirección pública asociada a tu clave privada. Deberías anotarte también tu clave privada en formato WIF, porque su uso está más extendido.",
        "donatetextfooter"
:
    "Para apoyar el desarrollo de este generador de carteras, puedes hacer donaciones a las siguientes direcciones. Cuando el soporte para una criptodivisa ha sido añadido por un colaborador externo del proyecto, él recibe la donación directamente.",
        "footersupport"
:
    "Ayuda a WalletGenerator.net",
        "footerlabelgithub"
:
    "Descargar (Repositorio GitHub)",
        "footerlabelcopyright2"
:
    "Los copyrights del JavaScript se incluyen en el código fuente.",
        "footerlabelnowarranty"
:
    "Sin garantía.",
        "defaultTitle"
:
    "WalletGenerator.net - Generador universal de carteras de papel para Bitcoin y otras criptodivisas",
        "title"
:
    "Generador de carteras de papel",
        "brainalertpassphrasewarning"
:
    "Atención: Elegir una contraseña robusta es importante para evitar los intentos de adivinarla mediante la fuerza bruta y que te roben tus monedas.",
        "brainalertpassphrasetooshort"
:
    "La contraseña introducida es demasiado corta.",
        "brainalertpassphrasedoesnotmatch"
:
    "La contraseña no coincide con la contraseña de confirmación.",
        "bulkgeneratingaddresses"
:
    "Generando direcciones...",
        "bip38alertincorrectpassphrase"
:
    "Contraseña incorrecta para esta clave privada encriptada.",
        "bip38alertpassphraserequired"
:
    "Se necesita contraseña para esta clave BIP38",
        "detailconfirmsha256"
:
    "El texto introducido no es una clave privada válida!\n¿Quieres utilizar el texto introducido como contraseña y crear una clave privada usando un hash SHA256 de la contraseña?\nAtención: Elegir una contraseña robusta es importante para evitar los intentos de adivinarla mediante la fuerza bruta y que te roben tus monedas.",
        "detailalertnotvalidprivatekey"
:
    "El texto introducido no es una clave privada válida",
        "securitychecklistrandomOK"
:
    "Tu navegador es capaz de generar claves criptográficamente aleatorias utilizando window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Tu navegador NO soporta window.crypto.getRandomValues(), que es importante para generar los números aleatorios más seguros posibles. Utiliza un navegador más moderno.",
        "securitychecklistofflineNOK"
:
    "Pare que estás ejecutando este generador desde un sitio online, lo que no se recomienda si vas a crear carteras valiosas. En vez de esto, utiliza el enlace de descarga al final de esta página para descargar un archivo ZIP de GitHub y ejecuta este generador offline como un archivo HTML 'local'.",
        "securitychecklistofflineOK"
:
    "Estás ejecutando este generador de forma local.",
        "paperwalletback"
:
    "<ul><li>Para depositar fondos en esta cartera de papel, envía criptomonedas a su dirección pública, en cualquier momento.</li><li>Comprueba tu balance buscando la dirección pública en un explorador de bloques como blockchain.info.</li><li><b>NUNCA REVELES LA CLAVE PRIVADA</b> hasta que estés listo para importar el balance de esta cartera a un cliente de criptomoneda, portal de cambio o cartera online.</li></ul><b>Cantidad:</b> ___________       <b>Fecha:</b> ________________<br /><b>Notas:</b> ______________________________________",
}
,

﻿"it"
:
{
    "choosecurrency"
:
    "Scegli una valuta",
        "singlewallet"
:
    "Singolo portafogli",
        "paperwallet"
:
    "Paper Wallet",
        "bulkwallet"
:
    "Portafogli multipli",
        "brainwallet"
:
    "Brain Wallet",
        "vanitywallet"
:
    "Vanity Wallet",
        "detailwallet"
:
    "Dettagli portafogli",
        "singletip1"
:
    "<b>Un portafogli bitcoin</b> è composto semplicemente da una coppia di valori: l'indirizzo e la sua chiave privata. Un portafogli è stato appena generato sul tuo browser e mostrato sopra.",
        "singletip2"
:
    "<b>Per mettere in sicurezza questo portafogli</b> devi stampare o quantomeno salvare l'indirizzo bitcoin e la Chiave privata. È molto importante fare una copia di backup della chiave privata e conservarla in un posto sicuro. Questo sito non conosce la tua chiave privata. Se hai familiarità con PGP, puoi scaricare per intero questa pagina HTML e controllare la sua autentiticità. Puoi confrontare il codice SHA1 della pagina scaricata con il codice firmato dall'autore che trovi nella cronologia delle versioni (in fondo alla pagina). Se abbandoni/aggiorni la pagina web oppure premi il tasto Genera, un nuovo indirizzo sostituirà quello vecchio che non potrà più essere recuperato. La chiave privata dovrebbe essere tenuta segreta, chiunque conosca la chiave privata può avere accesso e spendere i tuoi bitcoin. Se stampi il tuo portafogli conservalo in una busta di plastica sigillata per tenerla al riparo dall'acqua. Tratta quanto stampato alla stregua di una banconota.",
        "singletip3"
:
    "<b>Ricevi fondi</b> su questo portafogli mostrando l'indirizzo bitcoin per il versamento.",
        "singletip4"
:
    "<b>Controlla il saldo</b> visitando blockchain.info o blockexplorer.com cercando il tuo indirizzo bitcoin.",
        "singletip5"
:
    "<b>Spendi i tuoi bitcoin</b> aprendo un account su blockchain.info o mtgox.com usando la chiave privata. Puoi anche spendere i tuoi bitcoin scaricando il popolare client p2p ed importando in esso il portafogli. Tieni presente che quando importi una chiave nel client p2p, nel momento in cui spendi le monete, la chiave viene raggruppata insieme alle altre presenti nel programma con i restanti bitcoin. Quando esegui una transazione gli spiccioli verranno invitati verso un altro indirizzo all'interno del tuo portafogli gestito dal client p2p. Quindi dovresti tenere un backup del portafogli contenuto nel client p2p e tenere questo in un posto sicuro fin tanto terrai dei bitcoin lì. Satoshi consiglia di non cancellare mai un portafogli. ",
        "tagline"
:
    "Open Source JavaScript Client-Side Multi Coin Wallet Generator",
        "donate"
:
    "Supporto",
        "generatelabelbitcoinaddress"
:
    "Generazione Indirizzo Bitcoin...",
        "generatelabelmovemouse"
:
    "MUOVI il tuo mouse per contribuire alla generazione dei numeri casuali...",
        "generatelabelkeypress"
:
    "OPPURE digitare lettere casuali nel campo di testo",
        "skipMessage"
:
    "È possibile saltare questo passaggio se non si desidera generare portafogli",
        "singlelabelbitcoinaddress"
:
    "Indirizzo Pubblico",
        "singleshare"
:
    "PUBBLICO",
        "singlelabelprivatekey"
:
    "Chiave Privata (formato WIF)",
        "singlesecret"
:
    "SEGRETO",
        "securitystep0title"
:
    "Passo 0. Seguire le raccomandazioni dell'elenco di sicurezza",
        "securitystep0"
:
    "Il primo passo è quello di <strong> scaricare </ strong> questo sito da <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a> ed aprire il file index.html direttamente nel computer.È troppo facile aggiungere codice dannoso alle oltre 6000 linee di script Java per intercettare la vostra chiave privata, e non vuoi vedere i tuoi fondi rubati, non è vero? La versione del codice sorgente rende molto più semplice verificare da parte di persone esterne il codice che viene eseguito. Per una maggiore sicurezza, <strong> scollegare l'accesso a Internet </ strong> durante la generazione del portafogli.",
        "securitystep1title"
:
    "Passo 1. Generare un nuovo indirizzo",
        "securitystep1"
:
    "Scegli la tua valuta e fai clic sul pulsante \"Generazione nuovo indirizzo\".",
        "securitystep2title"
:
    "Passo 2. Stampare il Vostro portafogli",
        "securitystep2"
:
    "Fai clic sulla scheda \"portafogli\" e stampa la pagina in alta qualità. <strong> Non salvare mai la pagina in formato PDF in quanto è più probabile che sia violato un file piuttosto che un foglio di carta.</strong>",
        "securitystep3title"
:
    "Passo 3. Piegare il portafogli",
        "securitystep3"
:
    "Piegate il vostro nuovo portafogli seguendo le linee.\n<img src=\"images/foldinginstructions.png\" alt=\"Piegare a metà longitudinalmente e poi in tre nella direzione della larghezza.\"><br>\nÈ possibile inserire un lato nell'altro per chiudere il portafogli.",
        "securitystep4title"
:
    "Passo 4. Condividi il tuo indirizzo pubblico",
        "securitystep4"
:
    "Invia il tuo indirizzo pubblico per ricevere denaro da altri utenti nella stessa valuta. Puoi condividere l'indirizzo pubblico quanto vuoi.",
        "securitystep5title"
:
    "Passo 5. Mantenere segreta la tua chiave privata",
        "securitystep5"
:
    "La chiave privata è letteralmente la chiave per accedere ai tuoi soldi. Se qualcuno dovesse accedervi, potrebbe utilizzare tutti i fondi attualmente nel portafogli, nonché tutti i fondi che saranno depositati in futuro.",
        "securitystep6"
:
    "Prima di ricevere grandi pagamenti fai alcune prove di piccolo importo.",
        "securitychecktitle"
:
    "Controllo di sicurezza :",
        "securitychecklivecd"
:
    "Utilizzi un sistema operativo garantito senza malware o virus, ad esempio un CD live-Ubuntu?",
        "supportedcurrencylbl"
:
    "valute supportate !",
        "paperlabelencrypt"
:
    "Crittografare in BIP38?",
        "paperlabelBIPPassphrase"
:
    "Frase d'accesso:",
        "bulklabelstartindex"
:
    "Indice iniziale:",
        "bulklabelrowstogenerate"
:
    "Righe da generare:",
        "bulklabelcompressed"
:
    "Indirizzo compresso?",
        "bulkgenerate"
:
    "Genera",
        "bulkprint"
:
    "Stampa",
        "bulklabelcsv"
:
    "Valori Separati da virgola: (CSV): Indice, Indirizzo, Chiave privata (WIF)",
        "brainlabelenterPassphraselbl"
:
    "Frase d'accesso:",
        "brainlabelconfirmlbl"
:
    "Conferma Frase d'accesso:",
        "brainalgorithm"
:
    "Algoritmo: SHA256(Frase d'accesso)",
        "brainlabelbitcoinaddress"
:
    "Indirizzo pubblico",
        "brainlabelprivatekey"
:
    "Chiave privata (formato WIF):",
        "detaillabelenterprivatekey"
:
    "Inserisci la Chiave Privata",
        "qrcaminstructiontitle"
:
    "Scansiona il tuo codice QR con la tua webcam",
        "paperqrnotsupported"
:
    "Spiacenti, ma il tuo browser non supporta i controlli della webcam HTML5. Provare con una versione recente di Firefox (consigliata), Chrome o Opera",
        "paperqrpermissiondenied"
:
    "<p>Permesso negato. Il tuo browser dovrebbe visualizzare un messaggio che richiede l'autorizzazione per accedere alla tua webcam. Fare clic sul pulsante \"Permetti\" per attivare la webcam.</p>",
        "detaillabelPassphrase"
:
    "Inserisci Passphrase BIP38",
        "detaillabelnote1"
:
    "La tua Chiave privata Bitcoin è rappresentata da un numero segreto, unico al mondo, che dovresti conoscere soltanto tu. Può essere codificato in molti formati differenti. Di seguito verrà mostrato l'indirizzo e la chiave pubblica, con la corrispondente chiave privata, nei più diffusi formati di codifica (WIF, WIFC, HEX, B64, MINI).",
        "detaillabelbitcoinaddress"
:
    "Indirizzo pubblico",
        "detaillabelbitcoinaddresscomp"
:
    "Indirizzo pubblico compresso",
        "detaillabelpublickey"
:
    "Chiave pubblica (130 caratteri [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Chiave pubblica compressa (66 caratteri [0-9A-F]):",
        "detaillabelprivwif"
:
    "Chiave privata WIF<br>51 caratteri base58, inizia per a",
        "detaillabelprivwifcomp"
:
    "Chiave privata WIF compressa<br>52 caratteri base58, inizia per 'a'",
        "detaillabelprivhex"
:
    "Chiave privata formato esadecimale (64 caratteri [0-9A-F]):",
        "detaillabelprivb64"
:
    "Chiave privata Base64 (44 caratteri):",
        "detaillabelprivmini"
:
    "Chiave privata formato mini (22, 26 or 30 caratteri, inizia per 'S'):",
        "detaillabelPassphrase"
:
    "Inserisci Passphrase BIP38",
        "detaildecrypt"
:
    "Decripta BIP38",
        "detaillabelprivb6"
:
    "Chiave privata Base6 (99 caratteri [0-5]):",
        "detaillabelprivbip38"
:
    "Chiave privata cifrata in formato BIP38 (58 caratteri Base58):",
        "detaillabelq1"
:
    "Come generare un portafoglio con dadi? Che cosa è Base6 (B6)?",
        "detaila1"
:
    "Una parte importante della creazione di un portafogli per le valute crittografiche è garantire che i numeri casuali utilizzati per la generazione siano effettivamente casuali. L'origine casuale fisica è migliore di quella pseudo-casuale generata da un computer. Il modo più semplice per generare un casuale fisico è quello di utilizzare i dadi. Per una chiave privata, è necessario solo un dado a 6 facciate che eseguirà 99 lanci. Arrestare dopo ogni lancio per registrare il valore. Per registrare il valore, seguire le seguenti regole: 1 = 1, 2 = 2, 3 = 3, 4 = 4, 5 = 5, 6 = 0. In questo modo, genera un numero casuale di grandi dimensioni, la chiave privata, in Base6 (B6). Potete inserire i 99 caratteri B6 della chiave privata nel campo di testo sopra e fare clic su \"View Details\". Vedrai poi l'indirizzo pubblico associato a questa chiave privata. Devi anche annotare la chiave privata in formato WIF, in quanto è più comune della chiave privata.",
        "donatetextfooter"
:
    "Per sostenere lo sviluppo di questo generatore di portafogli, è possibile effettuare una donazione tramite i seguenti indirizzi. Quando il contributo di una valuta è stato aggiunto da un collaboratore al di fuori del progetto, le donazioni lo raggiungono direttamente. ",
        "footerlabeldonations"
:
    "Donazioni:",
        "footerlabeltranslatedby"
:
    "F3de81",
        "footersupport"
:
    "Supportare WalletGenerator.net",
        "footerlabelgithub"
:
    "Repository GitHub",
        "footerlabelversion"
:
    "Cronologia Versioni",
        "footerlabelcopyright1"
:
    "Copyright bitaddress.org.",
        "footerlabelcopyright2"
:
    "Le note di copyright dei file JavaScript sono inclusi nei sorgenti stessi.",
        "footerlabelnowarranty"
:
    "Nessuna garanzia.",
        "defaultTitle"
:
    "Generatore universale di portafogli per Bitcoin e altre valute crittografiche",
        "title"
:
    "Generatore di PaperWallet",
        "brainalertPassphrasewarning"
:
    "Attenzione: La scelta di una Passphrase robusta è importante per evitare attacchi brute force in grado di indovinare la tua Passphrase e rubare i tuoi fondi",
        "brainalertPassphrasetooshort"
:
    "La Passphrase inserita è troppo corta.\n\n",
        "brainalertPassphrasedoesnotmatch"
:
    "La Passphrase non combacia con quella data per la conferma.",
        "bulkgeneratingaddresses"
:
    "Generazione indirizzi...",
        "bip38alertincorrectPassphrase"
:
    "Passphrase non corretta per questa chiave privata criptata.",
        "bip38alertPassphraserequired"
:
    "Passphrase richiesta per chiave BIP38",
        "detailconfirmsha256"
:
    "Il testo inserito non rappresenta una Chiave privata valida!\n\nVorresti usare il testo inserito come Passphrase e creare da questa un hash SHA256 e generare così una Chiave Privata?\n\nAvvertenza: La scelta di una Passphrase robusta è importante per evitare che attacchi di tipo \"brute force\" vadano a segno indovinando il testo segreto e di conseguenza far perdere i fondi.",
        "detailalertnotvalidprivatekey"
:
    "Il testo inserito non rappresenta una Chiave Privata valida",
        "securitychecklistrandomOK"
:
    "Il tuo browser è in grado di generare chiavi crittografiche sicure usando window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Il tuo browser NON supporta window.crypto.getRandomValues (), importante per generare i portafogli più sicuri. Utilizza un browser più moderno. ",
        "securitychecklistofflineNOK"
:
    "Sembra che utilizzi questo generatore direttamente dal sito web, che non è raccomandato per la generazione di portafogli. Utilizza invece il link di download in fondo a questa pagina per scaricare un archivio ZIP da Github e eseguire questo generatore offline come file HTML locale.",
        "securitychecklistofflineOK"
:
    "Esegui questo generatore dal tuo download.",
        "paperwalletback"
:
    "<ul><li>Per trasferire i fondi a questo portafogli, inviare i fondi all' indirizzo pubblico in qualsiasi momento.</li><li>Verificare il vostro saldo cercando l'Indirizzo pubblico in un Blockchain explorer.</li><li><b>NON RIVELARE LA CHIAVE PRIVATA</b> fino a quando non si desidera importare proprio saldo in un portafoglio software.</li></ul><b>Quantità :</b> ___________       <b>Data :</b> ________________<br /><b>Note :</b> ______________________________________",
        "paperlabelbitcoinaddress"
:
    "Indirizzo Bitcoin:",
        "paperlabelprivatekey"
:
    "Chiave privata (Wallet Import Format):",
        "paperlabelencryptedkey"
:
    "Chiave privata criptata (password richiesta)",
        "vanityinvalidinputcouldnotcombinekeys"
:
    "Dati inseriti non validi. Le chiavi non possono essere combinate.",
        "vanityalertinvalidinputpublickeysmatch"
:
    "Dati inseriti non validi. Entrambe le chiavi pubbliche combaciano. Devi inserire due chiavi differenti.",
        "vanityalertinvalidinputcannotmultiple"
:
    "Dati inseriti non validi. Impossibile moltiplicare due chiavi pubbliche. Seleziona 'Aggiungi' per inserire due chiavi pubbliche ed ottenere l'indirizzo Bitcoin.",
        "vanityprivatekeyonlyavailable"
:
    "Non disponibile quando vengono combinate due chiavi private",
        "vanityalertinvalidinputprivatekeysmatch"
:
    "Dati inseriti non validi. Entrambe le chiavi private combaciano. Devi inserire due chiavi differenti.",
}
,

"ua"
:
{
    "choosecurrency"
:
    "Оберіть валюту",
        "singlewallet"
:
    "Один гаманець",
        "paperwallet"
:
    "Паперовий гаманець",
        "bulkwallet"
:
    "Кілька гаманців",
        "brainwallet"
:
    "Розумний гаманець",
        "detailwallet"
:
    "Детальніше про гаманець",
        "donate"
:
    "Пожертвувати",
        "generatelabelbitcoinaddress"
:
    "Створюється нова адреса...",
        "generatelabelmovemouse"
:
    "РУХАЙТЕ мишкою, щоб збільшити випадковість...",
        "generatelabelkeypress"
:
    "АБО введіть будь-які випадкові символи у це текстове поле",
        "skipMessage"
:
    "Ви можете пропустити цей крок, якщо ви не плануєте використовувати генератор випадкових ключів",
        "singlelabelbitcoinaddress"
:
    "Публічна адреса",
        "singleshare"
:
    "ДЛЯ ПОШИРЕННЯ",
        "singlelabelprivatekey"
:
    "Приватний ключ (формат імпорту гаманця - WIF)",
        "singlesecret"
:
    "СЕКРЕТНИЙ (ЗАХОВАТИ)",
        "securitystep0title"
:
    "Крок 0. Дотримуйтесь рекомендацій \"Пам'ятки безпеки\"",
        "securitystep0"
:
    "Насамперед <strong>завантажте</strong> цей сайт з <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a>, розархівуйте його і безпосередньо з вашого комп'ютера відкрийте файл index.html. Це достатньо просто сховати деякий шкідливий код у 6000+ рядків javascript, щоб поцупити ваш приватний ключ, але ви ж не хочете довідатися, що ваші кошти вкрадено. Контроль версії кода дозволяє набагато простіше перевіряти діючу програму. Для забезпечення додаткової безпеки, <strong>відключіть доступ до Інтернету</strong> під час створення вашого гаманця.",
        "securitystep1title"
:
    "Крок 1. Створіть нову адресу",
        "securitystep1"
:
    "Оберіть вашу валюту й клацніть на кнопку \"Створити нову адресу\".",
        "securitystep2title"
:
    "Крок 2. Роздрукуйте паперовий гаманець",
        "securitystep2"
:
    "Клацніть на закладку \"Паперовий гаманець\" та роздрукуйте сторінку якнайякісніше. <strong>Ніколи не зберігайте сторінку як PDF файл, щоб роздрукувати її згодом, бо файл швидше буде зламаний хакерами ніж клаптик паперу.</strong>",
        "securitystep3title"
:
    "Крок 3. Складіть паперовий гаманець",
        "securitystep3"
:
    "Складіть ваш новий паперовий гаманець відповідно до ліній.\n<img src=\"images/foldinginstructions.png\" alt=\"Зігніть навпіл уздовж, а потім кожну третину поперечно.\"><br>\nВи можете вставити одну частину всередину іншої, щоб закріпити гаманець.",
        "securitystep4title"
:
    "Крок 4. Поширюйте вашу публічну адресу",
        "securitystep4"
:
    "Використовуйте свою публічну адресу, щоб отримувати гроші від інших користувачів криптовалюти. Ви можете поширювати свою публічну адресу без обмежень.",
        "securitystep5title"
:
    "Крок 5. Зберігайте ваш приватний ключ у таємниці",
        "securitystep5"
:
    "Приватний ключ фактично є ключем до ваших монет. Якщо хтось сторонній отримає цей ключ, він зможе безперешкодно вивести усі кошти, які будуть у гаманці; він також зможе виводити кошти, які в майбутньому надходитимуть на цей гаманець.",
        "securitystep6"
:
    "Перш ніж одержувати великі суми на гаманець, будь ласка спробуйте вивести з гаманця невеличкі кошти.",
        "securitychecktitle"
:
    "Пам'ятка безпеки :",
        "securitychecklivecd"
:
    "Чи використовуєте ви безпечну операційну систему, яка гарантує захист від шпигунських програм і вірусів, наприклад, таку як Ubuntu LiveCD?",
        "supportedcurrencylbl"
:
    "доступних валют !",
        "paperlabelencrypt"
:
    "Зашифрувати за допомогою BIP38?",
        "paperlabelBIPpassphrase"
:
    "Парольна фраза:",
        "bulklabelstartindex"
:
    "Початковий індекс:",
        "bulklabelrowstogenerate"
:
    "Кількість рядків, що буде створено:",
        "bulklabelcompressed"
:
    "Чи створювати стиснуті адреси?",
        "bulklabelcsv"
:
    "Дані, що розділені комою: індекс, адреса, приватний ключ (WIF)",
        "brainlabelenterpassphraselbl"
:
    "Введіть парольну фразу:",
        "brainlabelconfirmlbl"
:
    "Повторіть парольну фразу:",
        "brainalgorithm"
:
    "Алгоритм: SHA256(парольна фраза)",
        "brainlabelbitcoinaddress"
:
    "Публічна адреса:",
        "brainlabelprivatekey"
:
    "Приватний ключ (формат імпорту гаманця - WIF):",
        "detaillabelenterprivatekey"
:
    "Введіть приватний ключ",
        "qrcaminstructiontitle"
:
    "Скануйте QR код, використовуючи вашу камеру",
        "paperqrnotsupported"
:
    "Вибачте, ваш переглядач не підтримує можливості HTML5 з управління камерою. Спробуйте використовувати останню версію Firefox (радимо), Chrome або Opera.",
        "paperqrpermissiondenied"
:
    "<p>Не дозволено. Ваш браузер повинен відобразити повідомлення із запитом на доступ до вашої камери. Будь ласка, клацніть на кнопку \"Дозволити\", щоб включити вашу камеру.</p>",
        "detaillabelpassphrase"
:
    "Введіть парольну фразу BIP38",
        "detaillabelnote1"
:
    "Ваш приватний ключ - це унікальний секретний номер, який знаєте лише ви. Він може бути закодований у кількох різних форматах. Нижче показано публічну адресу та публічний ключ, які відповідають вашому приватному ключу. Також показано ваш приватний ключ у найпопулярніших форматах кодування (WIF, WIFC, HEX, B64).",
        "detaillabelbitcoinaddress"
:
    "Публічна адреса",
        "detaillabelbitcoinaddresscomp"
:
    "Публічна адреса (стиснута)",
        "detaillabelpublickey"
:
    "Публічний ключ (130 знаків [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Публічний ключ (стиснутий, 66 знаків [0-9A-F]):",
        "detaillabelprivwif"
:
    "Приватний ключ WIF<br>51 знак Base58",
        "detaillabelprivwifcomp"
:
    "Приватний ключ WIF, стиснутий<br>52 знаки Base58",
        "detaillabelprivhex"
:
    "Приватний ключ, шістнадцятковий формат (64 знаки [0-9A-F]):",
        "detaillabelprivb64"
:
    "Приватний ключ Base64 (44 знаки):",
        "detaillabelprivmini"
:
    "Приватний ключ, міні формат (22, 26 або 30 знаків):",
        "detaillabelprivb6"
:
    "Приватний ключ, формат Base6 (99 знаків [0-5]):",
        "detaillabelprivbip38"
:
    "Приватний ключ, формат BIP38 (58 знаків Base58):",
        "detaillabelq1"
:
    "Як я можу створити гаманець за допомогою кубіків? Що таке B6?",
        "detaila1"
:
    "При створенні гаманця для криптовалюти, важливо переконатися, що використовуються випадкові числа. Фізична випадковість краща ніж згенеровані комп'ютером псевдо-випадкові числа. Найпростіший шлях згенерувати фізично випадкові числа - це гральний кубік. Щоб створити криптовалютний приватний ключ вам слід кинути шестигранний кубік 99 разів. Занотуйте кожне значення, дотримуючись наступного правила: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Таким чином ви одержите довге випадкове число - ваш приватний ключ у форматі B6. Тепер ви можете ввести ці 99 знаків вашого приватного ключа B6 у текстове поле зверху сторінки і клацніть на кнопку \"Показати подробиці\". Ви побачите публічну адресу, яка створена від відповідного приватного ключа. Зверніть увагу на ваш приватний ключ у форматі WIF, бо цей формат є найпоширенішим.",
        "donatetextfooter"
:
    "Для пожертв розробникам цього генератора гаманців, використовуйте наступні адреси. Якщо підтримка для валюти додана зовнішнім учасником проекту, він одержує пожертви напряму.",
        "footersupport"
:
    "Підтримати WalletGenerator.net",
        "footerlabelgithub"
:
    "Завантажити (репозиторій на GitHub)",
        "footerlabelcopyright2"
:
    "Авторські права на JavaScript включено у джерела.",
        "footerlabelnowarranty"
:
    "Гарантії не надаються.",
        "defaultTitle"
:
    "WalletGenerator.net - універсальний генератор паперових гаманців для біткойнів та інших криптовалют",
        "title"
:
    "Генератор паперових гаманців",
        "brainalertpassphrasewarning"
:
    "Увага: Вибір складної парольної фрази вельми важливий щоб запобігти шахраям поцупити ваші гроші.",
        "brainalertpassphrasetooshort"
:
    "Парольна фраза, що ви її ввели, є дуже короткою.",
        "brainalertpassphrasedoesnotmatch"
:
    "Ваша парольна фраза та її повтор не співпадають.",
        "bulkgeneratingaddresses"
:
    "Створюються адреса...",
        "bip38alertincorrectpassphrase"
:
    "Неправильна парольна фраза для цього зашифрованого приватного ключа.",
        "bip38alertpassphraserequired"
:
    "Для ключа у форматі BIP38 необхідна парольна фраза",
        "detailconfirmsha256"
:
    "Текст, що ви його ввели, не є приватним ключем!\nЧи ви бажаєте використовувати введений текст в якості парольної фрази і створити приватний ключ, використовуючи SHA256 геш цієї парольної фрази?\nУвага: Вибір складної парольної фрази вельми важливий щоб запобігти шахраям поцупити ваші гроші.",
        "detailalertnotvalidprivatekey"
:
    "Текст, що ви його ввели, не є дійсним приватним ключем",
        "securitychecklistrandomOK"
:
    "Ваш переглядач спроможен генерувати криптографічно випадкові ключі за допомогою window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Ваш переглядач НЕ підтримує window.crypto.getRandomValues(), що є необхідним для генерації найбезпечніших випадкових чисел. Будь ласка, використовуйте сучасніший переглядач.",
        "securitychecklistofflineNOK"
:
    "Здається, що ви запустили цей генератор із сайту, який не рекомендується для створення цінних гаманців. Замість цього, використовуйте посилання внизу цієї сторінки, щоб завантажити ZIP файл з GitHub та запустіть цей генератор із HTML файла на вашому комп'ютері, відключивши попередньо інтернет.",
        "securitychecklistofflineOK"
:
    "Ви запустили цей генератор із вашого власного завантаженого файла.",
        "paperwalletback"
:
    "<ul><li>Внести гроші на паперовий гаманець: відправте кошти на публічну адресу.</li><li>Перевірити стан рахунку: введіть публічну адресу гаманця в оглядач блокчейна (для біткойна це blockchain.info).</li><li><b>НІКОЛИ НІКОМУ НЕ ПОКАЗУЙТЕ ПРИВАТНИЙ КЛЮЧ</b>, аж поки ви не зберетесь імпортувати кошти з цього гаманця на інший будь-який гаманець.</li></ul><b>Кількість :</b> ___________      <b>Дата :</b> ____________<br /><b>Нотатки :</b> _______________________________",
}
,

"tr"
:
{
    "defaultTitle"
:
    "WalletGenerator.net - Bitcoin ve diger kripto para birimleri için Evrensel Kagit cüzdan üreticisi",
        "title"
:
    "Kagit Cüzdan Üreticisi",
        "bulkgeneratingaddresses"
:
    "Cüzdan Yaratiliyor... ",
        "brainalertpassphrasetooshort"
:
    "Girmis oldugunuz parola çok kisa.\n\n",
        "brainalertpassphrasewarning"
:
    "Uyari: Tahmini çok zor parola seçmeniz, brute force gibi yöntemler ile paranizin çalinmamasi için çok önemlidir.",
        "brainalertpassphrasedoesnotmatch"
:
    "Girdiginiz iki parola birbiri ile uyusmuyor.",
        "detailalertnotvalidprivatekey"
:
    "Girdiginiz key geçerli bir key degildir.",
        "detailconfirmsha256"
:
    "Girdiginiz metin geçerli bir Özel Anahtar degil!\n\nGirilen metni bir parola olarak kullanmak ve parolanın bir SHA256 karmasını kullanarak bir Özel Anahtar oluşturmak ister misiniz?\n\nUyari: Tahmini çok zor parola seçmeniz, brute force gibi yöntemler ile paranizin çalinmamasi için çok önemlidir.",
        "bip38alertincorrectpassphrase"
:
    "Bu sifreli özel anahtar için, yanlis sifre girdiniz.",
        "bip38alertpassphraserequired"
:
    "BIP38 anahtari için sifre gereklidir",
        "securitychecklistrandomOK"
:
    "Tarayıcınız window.crypto.getRandomValues kullanarak kriptografik olarak rastgele anahtarlar üretebilir.",
        "securitychecklistrandomNOK"
:
    "Tarayiciniz, mümkün olan en güvenli rasgele sayilari üretmek için önemli olan \'window.crypto.getRandomValues ()\' ögesini desteklemiyor!. Lütfen daha modern bir tarayici kullanin.",
        "securitychecklistofflineNOK"
:
    "Bu Cüzdan üretecini canli bir web sitesinden calistirdiginiz gorülüyor; Bu yontem degerli bir cuzdan yaratmak icin onerilmiyor. Bunun yerine, Bu sistemin bir kopyasini GitHub'dan indirmeniz ve Cevrim Disi bir \'YEREL\' HTML dosyasi olarak calistirmaniz oneriliyor. Asagidaki indirme linkini kullanin.",
        "securitychecklistofflineOK"
:
    "Bu Ureteci kendi yüklemenizden/bilgisayarinizdan çalistiriyorsunuz :).",
        "paperwalletback"
:
    "<ul><li>Bu kağıt cüzdanına para yatırmak için her zaman ortak adresine kripto para birimi gönderin.</li><li>Blockchain.info gibi bir blok gezgini site araciligi ile yerel adresinizdeki bakiyeyi dogrulayin</li><li><b>PRIVATE KEY KESINLIKLE YAYINLAMAYIN</b>Ta ki bu cüzdan üzerindeki bakiyeyi, bir sifreleme sunucusu, Borsa veya çevrimiçi cüzdan'a aktarmaya hazir olana kadar.</li></ul><b>Miktar :</b> ___________ &nbsp; &nbsp; &nbsp; <b>Tarih :</b> ________________<br /><b>Notlar :</b> ______________________________________",
}
,

﻿"pl"
:
{
    "choosecurrency"
:
    "Wybierz walutę",
        "singlewallet"
:
    "Pojedynczy portfel",
        "paperwallet"
:
    "Portfel papierowy",
        "bulkwallet"
:
    "Wiele portfeli",
        "brainwallet"
:
    "Brain Wallet",
        "detailwallet"
:
    "Szczegóły portfela",
        "donate"
:
    "Wsparcie",
        "generatelabelbitcoinaddress"
:
    "Generowanie nowego adresu...",
        "generatelabelmovemouse"
:
    "Losowo ruszaj myszką, aby zaszyfrować portfel...",
        "generatelabelkeypress"
:
    "lub wpisz losowe znaki w to pole",
        "skipMessage"
:
    "Możesz pominąć ten krok, jeżeli nie planujesz używać losowego generatora kluczy.",
        "singlelabelbitcoinaddress"
:
    "Adres publiczny",
        "singleshare"
:
    "UDOSTĘPNIJ",
        "singlelabelprivatekey"
:
    "Klucz prywatny (format WIF)",
        "singlesecret"
:
    "TAJNE",
        "securitystep0title"
:
    "Krok 0. Sprawdź listę zaleceń bezpieczeństwa.",
        "securitystep0"
:
    "Po pierwsze - <strong>pobierz</strong> tę stronę z <a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Githuba</a> i otwórz plik index.html bezpośrednio ze swojego komputera. Wprowadzenie złośliwego kodu do strony, która zawiera ponad 6000 linijek kodu javascript jest dość proste i może skutkować wyciekiem Twojego klucza prywatnego, a co za tym idzie, utratą wszystkich środków z portfela. Aby zapewnić dodatkowe bezpieczeństwo, należy <strong>odłączyć się od Internetu</strong> podczas generowania portfela dla bezpieczeństwa.",
        "securitystep1title"
:
    "Krok 1. Wygeneruj nowy adres",
        "securitystep1"
:
    "Wybierz swoją walutę i naciśnij przycisk \"Generate new address\".",
        "securitystep2title"
:
    "Krok 2. Wydrukuj papierowy portfel.",
        "securitystep2"
:
    "Kliknij zakładkę \”Portfel papierowy\” i wydrukuj stronę z ustawieniami wysokiej jakości druku. <strong>Nigdy nie zapisuj strony jako PDF. Zdecydowanie łatwiej jest zhakować plik, niż kartkę papieru</strong>",
        "securitystep3title"
:
    "Krok 3. Złóż swój portfel papierowy",
        "securitystep3"
:
    "Złóż swój nowy portfel papierowy, zgodnie z liniami.\n<img src=\"images/foldinginstructions.png\" alt=\"Zegnij w pół w długości, a później na trzy w szerokości.\"><br>\nMożesz włożyć jeden bok do drugiego, aby dodatkowo zabezpieczyć portfel.",
        "securitystep4title"
:
    "Krok 4. Udostępnij swój adres publiczny",
        "securitystep4"
:
    "Użyj swojego adresu publicznego, aby otrzymać pieniądze od innych użytkowników kryptowalut. Możesz udostępniać swój adres publiczny bez ograniczeń.",
        "securitystep5title"
:
    "Krok 5. Trzymaj swój klucz prywatny w tajemnicy",
        "securitystep5"
:
    "Klucz prywatny to dosłownie klucz do Twoich środków. Jeżeli ktoś go zdobędzie, będzie w stanie wypłacić wszystkie środki znajdujące się obecnie w portfelu oraz przejąć wszystkie środki, które zostaną na niego przelane w przyszłości.",
        "securitystep6"
:
    "Przed otrzymaniem pokaźnej ilości środków, przetestuj swój portfel, transferując na niego niewielką kwotę.",
        "securitystep7title"
:
    "Proszę rozważyć wspieranie nas.",
        "securitystep7"
:
    "Ten serwis jest darmowy i pozostanie darmowy bez reklam, ani skryptów śledzących, w jakiejkolwiek postaci. Rozważ proszę <a href=\"#\" onclick=\"ninja.tabSwitch(document.getElementById('donate'));\">złożenie darowizny,</a> aby wspomóc nas i ludzi, którzy dodają wsparcie dla nowych walut.",
        "securitychecktitle"
:
    "Lista zaleceń bezpieczeństwa :",
        "securitychecklivecd"
:
    "Czy korzystasz z bezpiecznego systemu operacyjnego, który jest wolny od oprogramowania szpiegującego i wirusów, na przykład Ubuntu LiveCD?",
        "supportedcurrencylbl"
:
    "Wspierane waluty !",
        "paperlabelencrypt"
:
    "Szyfrowanie BIP38?",
        "paperlabelBIPpassphrase"
:
    "Hasło:",
        "bulklabelstartindex"
:
    "Zacznij od numeru indeksu:",
        "bulklabelrowstogenerate"
:
    "Ilość rzędów:",
        "bulklabelcompressed"
:
    "Skompresowane adresy?",
        "bulklabelcsv"
:
    "Wartości oddzielone przecinkami: numer indeksu,adres,klucz prywatny (WIF)",
        "brainlabelenterpassphraselbl"
:
    "Podaj hasło:",
        "brainlabelconfirmlbl"
:
    "Potwierdź hasło:",
        "brainalgorithm"
:
    "Algorytm: SHA256(hasło)",
        "brainlabelbitcoinaddress"
:
    "Adres publiczny:",
        "brainlabelprivatekey"
:
    "Klucz prywatny (format WIF):",
        "detaillabelenterprivatekey"
:
    "Wprowadź klucz prywatny",
        "qrcaminstructiontitle"
:
    "Zeskanuj kod QR, używając kamerki",
        "paperqrnotsupported"
:
    "Niestety, Twoja przeglądarka nie wspiera obsługi kamerki za pomocą HTML5. Użyj najnowszej wersji Firefoksa (zalecane), lub Chrome’a albo Opery.",
        "paperqrpermissiondenied"
:
    "<p>Odmowa dostępu. Twoja przeglądarka powinna wyświetlić komunikat z prośbą o dostęp do kamerki. Naciśnij przycisk \”Zezwól\”, aby aktywować kamerkę.</p>",
        "detaillabelpassphrase"
:
    "Wprowadź hasło BIP38",
        "detaillabelnote1"
:
    "Twój klucz prywatny jest unikalnym tajnym numerem, który znasz tylko Ty. Może on zostać zaszyfrowany w różnych formatach. Poniżej przedstawiamy adres publiczny i klucz publiczny, odpowiadający Twojemu kluczowi prywatnemu, oraz Twój klucz prywatny w najpopularniejszych metodach szyfrowania (WIF, WIFC, HEX, B64).",
        "detaillabelbitcoinaddress"
:
    "Adres publiczny",
        "detaillabelbitcoinaddresscomp"
:
    "Skompresowany adres publiczny",
        "detaillabelpublickey"
:
    "Klucz publiczny (130 znaków [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "Klucz publiczny (skompresowany, 66 znaków [0-9A-F]):",
        "detaillabelprivwif"
:
    "Klucz prywatny WIF<br>51 znaków Base58",
        "detaillabelprivwifcomp"
:
    "Skompresowany klucz prywatny WIF<br>52 znaki Base58",
        "detaillabelprivhex"
:
    "Klucz prywatny w systemie szesnastkowym (64 znaki [0-9A-F]):",
        "detaillabelprivb64"
:
    "Klucz prywatny Base64 (44 znaki):",
        "detaillabelprivmini"
:
    "Klucz prywatny w formacie Mini (22, 26 lub 30 znaków):",
        "detaillabelprivb6"
:
    "Klucz prywatny w formacie Base6 (99 znaków [0-5]):",
        "detaillabelprivbip38"
:
    "Klucz prywatny w formacie BIP38 (58 znaków Base58):",
        "detaillabelq1"
:
    "Jak stworzyć portfel używając kości do gry? Czym jest B6?",
        "detaila1"
:
    "Istotną kwestią przy tworzeniu portfela do kryptowaluty jest upewnienie się, że losowe liczby, użyte do stworzenia portfela są rzeczywiście losowe. Fizyczne generatory losowości są lepsze, niż generowana komputerowo pseudo-losowość. Najłatwiejszym w użyciu fizycznym generatorem losowości jest kość do gry. Aby stworzyć klucz prywatny kryptowaluty, potrzebujesz jedynie sześciennej kości do gry, którą musisz rzucić 99 razy. Po każdym rzucie, zapisz wyrzuconą wartość. Przy zapisywaniu wartości, kieruj się tymi zasadami: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. W ten sposób, zapisujesz dużą, losową liczbę – Twój klucz prywatny w formacie B6 lub base 6. Możesz wtedy wpisać 99-znakowy klucz prywatny base 6 w pole powyżej i nacisnąć przycisk View Details. Zobaczysz wtedy adres publiczny, skojarzony z Twoim kluczem prywatnym. Powinieneś również zapisać swój klucz prywatny w formacie WIF, ponieważ jest on szerzej stosowany.",
        "donatetextfooter"
:
    "Aby wspomóc rozwój tego generatora portfeli, możesz przekazać darowiznę na następujące adresy. W przypadku, gdy wsparcie dla danej waluty zostało dodane przez zewnętrznego współautora, otrzyma on darowiznę bezpośrednio.",
        "footersupport"
:
    "Wspomóż WalletGenerator.net",
        "footerlabelgithub"
:
    "Pobierz (GitHub Repository)",
        "footerlabelcopyright2"
:
    "Prawa autorskie JavaScript są umieszczone w źródle",
        "footerlabelnowarranty"
:
    "Bez gwarancji.",
        "defaultTitle"
:
    "WalletGenerator.net – uniwersalny generator portfeli papierowych dla Bitcoina i innych kryptowalut",
        "title"
:
    "Generator portfeli papierowych",
        "brainalertpassphrasewarning"
:
    "Uwaga: użycie mocnego hasła jest istotne, aby zapobiec próbom odgadnięcia hasła poprzez metodę brute force, a co za tym idzie kradzieży Twoich środków.",
        "brainalertpassphrasetooshort"
:
    "Hasło, które wpisałeś jest zbyt krótkie.",
        "brainalertpassphrasedoesnotmatch"
:
    "Hasła różnią się.",
        "bulkgeneratingaddresses"
:
    "Generowanie adresów...",
        "bip38alertincorrectpassphrase"
:
    "Nieprawidłowe hasło.",
        "bip38alertpassphraserequired"
:
    "Wymagane hasło dla klucza BIP38",
        "detailconfirmsha256"
:
    "Wprowadzony tekst nie jest prawidłowym kluczem prywatnym!\nCzy chciałbyś użyć wprowadzonego tekstu, jako hasła i stworzyć klucz prywatny, używając hasha SHA256 dla danego hasła?\nUwaga: użycie mocnego hasła jest istotne, aby zapobiec próbom odgadnięcia hasła poprzez metodę brute force, a co za tym idzie kradzieży Twoich środków.",
        "detailalertnotvalidprivatekey"
:
    "Wprowadzony tekst nie jest prawidłowym kluczem prywatnym",
        "securitychecklistrandomOK"
:
    "Twoja przeglądarka jest w stanie generować kryptograficznie losowe klucze, używając window.crypto.getRandomValues",
        "securitychecklistrandomNOK"
:
    "Twoja przeglądarka NIE wspiera window.crypto.getRandomValues(). Jest to istotne dla generowania możliwie najbezpieczniejszych losowych liczb. Prosimy o użycie nowoczesnej przeglądarki.",
        "securitychecklistofflineNOK"
:
    "Wygląda na to, że używasz tego generatora, łącząc się z nim przez internet, czego nie rekomendujemy przy tworzeniu wartościowych portfeli. Zamiast tego, użyj linka na dole strony, aby pobrać plik ZIP z GitHuba i uruchomić ten generator offline jako “lokalny” plik HTML.",
        "securitychecklistofflineOK"
:
    "Używasz tego generatora w wersji offline.",
        "paperwalletback"
:
    "<ul><li> Aby wpłacić dodatkowe fundusze do tego portfela, wyślij bitcoiny na publiczny adres.</li><li> Sprawdź dostępne środki szukając publicznego adresu w usługach takich jak blockchain.info.</li><li><b>NIE ODSŁANIAJ KLUCZA PRYWATNEGO</b> dopóki nie jesteś gotowy na wydanie wszystkich środków, znajdujących się w tym portfelu.</li></ul><b>Wpłacona kwota :</b> ___________       <b>Data :</b> ________________<br /><b>Uwagi :</b> ______________________________________",
}
,
"zh"
:
{
    "choosecurrency"
:
    "選擇幣別",
        "singlewallet"
:
    "一般錢包",
        "paperwallet"
:
    "紙錢包",
        "bulkwallet"
:
    "批量錢包",
        "brainwallet"
:
    "腦錢包",
        "detailwallet"
:
    "錢包細節",
        "donate"
:
    "捐款支持",
        "generatelabelbitcoinaddress"
:
    "新錢包地址產生中......",
        "generatelabelmovemouse"
:
    "請四處移動滑鼠產生亂數",
        "generatelabelkeypress"
:
    "或在後方空格填寫隨機字符",
        "skipMessage"
:
    "若您不想產生隨機亂碼，您可以跳過此步驟。",
        "singlelabelbitcoinaddress"
:
    "公鑰",
        "singleshare"
:
    "地址",
        "singlelabelprivatekey"
:
    "私鑰(可導入電子錢包客戶端)",
        "singlesecret"
:
    "私鑰",
        "securitystep0title"
:
    "首先：安全檢查清單建議的步驟",
        "securitystep0"
:
    "請先自<a href=\"https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip\">Github</a>處<strong>下載</strong>這個網站，接著直接在您的電腦開啟index.html檔案。為了提高安全性，在生成錢包地址時，請<strong>斷開網路連結</strong>(例如拔除網路線或關閉wifi)。駭客很輕易能在6000多行javascript中找到你的私鑰，透過原始碼版本控制。可以交叉確認是否運行順利。",
        "securitystep1title"
:
    "第一步：產生新的地址",
        "securitystep1"
:
    "選擇欲產生的幣種，接著按下「產生新的地址」按鈕",
        "securitystep2title"
:
    "第二步：列印出紙錢包",
        "securitystep2"
:
    "選擇「紙錢包」頁籤，接著設定印表機以高品質列印出來。<strong>注意：絕對不要暫存為PDF檔以供列印，PDF檔比一張物理上的紙更容易被駭。</strong>",
        "securitystep3title"
:
    "第三步：摺疊紙錢包",
        "securitystep3"
:
    "根據圖片折疊紙錢包。\n<img src=\"images/foldinginstructions.png\" alt=\"先依長邊對折，再依摺線摺為三等分。\"><br>\nYou can insert one side inside the other to lock the wallet.",
        "securitystep4title"
:
    "第四步：使用公鑰地址",
        "securitystep4"
:
    "您可以將公鑰地址分享給其他加密貨幣使用者，不必擔心安全問題。",
        "securitystep5title"
:
    "第五步：將私鑰保存妥當",
        "securitystep5"
:
    "私鑰就是紙錢包的提款密碼，如果有人得到私鑰，就可以將錢包裡的金額提領一空，請勿比妥善保存於安全處。",
        "securitystep6"
:
    "在轉入大筆金額至紙錢包前，請先行測試，以小額資金轉入並測試是否可以透過該私鑰轉出。",
        "securitystep7title"
:
    "自由樂捐",
        "securitystep7"
:
    "本網站為免費提供，沒有廣告且不追蹤您的個資，或許您願意<a href=\"#\" onclick=\"ninja.tabSwitch(document.getElementById('donate'));\">贊助我們</a>以幫助我們及新加密貨幣的使用者。",
        "securitychecktitle"
:
    "安全檢查清單",
        "securitychecklivecd"
:
    "您是否使用安全、沒有電腦病毒及間諜軟體的的作業系統呢？(例如Ubuntu LiveCD)",
        "supportedcurrencylbl"
:
    "種加密貨幣都可以在本網站使用！",
        "paperlabelencrypt"
:
    "以BIP38加密？",
        "paperlabelBIPpassphrase"
:
    "密碼口令(Passphrase)：",
        "bulklabelstartindex"
:
    "起始編號：",
        "bulklabelrowstogenerate"
:
    "產生行數：",
        "bulklabelcompressed"
:
    "是否壓縮地址？",
        "bulklabelcsv"
:
    "以逗號分割為：編號、公鑰地址、私鑰 (WIF格式)",
        "brainlabelenterpassphraselbl"
:
    "輸入密碼口令(Passphrase)：",
        "brainlabelconfirmlbl"
:
    "再次確認密碼口令(Passphrase)：",
        "brainlabelbitcoinaddress"
:
    "公鑰：",
        "brainlabelprivatekey"
:
    "私鑰(可導入電子錢包客戶端)：",
        "detaillabelenterprivatekey"
:
    "輸入私鑰",
        "qrcaminstructiontitle"
:
    "使用鏡頭掃描QR code",
        "paperqrnotsupported"
:
    "很抱歉，您使用的瀏覽器不支援HTML5鏡頭控制，請改用最新版本的Firefox (建議使用)、Chrome或Opera。",
        "paperqrpermissiondenied"
:
    "<p>要求被拒，請在您瀏覽器跳出的視窗中選擇\"允許\"來開啟相機鏡頭。</p>",
        "detaillabelpassphrase"
:
    "輸入BIP38 Passphrase",
        "detaillabelnote1"
:
    "你的私鑰是唯一你知道的秘密號碼。它可以用許多不同的格式編碼。下面我們將展示與您的私鑰對應的公共地址和公鑰，以及常見的的編碼格式（WIF，WIFC，HEX，B64）。",
        "detaillabelbitcoinaddress"
:
    "公鑰地址",
        "detaillabelbitcoinaddresscomp"
:
    "經壓縮的公鑰地址",
        "detaillabelpublickey"
:
    "公鑰(130字節，使用 [0-9A-F]):",
        "detaillabelpublickeycomp"
:
    "公鑰地址(以壓縮為66字節 [0-9A-F]):",
        "detaillabelprivwif"
:
    "WIF格式私鑰<br>51字節，Base58",
        "detaillabelprivwifcomp"
:
    "壓縮後的WIF格式私鑰<br>52字節，Base58",
        "detaillabelprivhex"
:
    "16進位格式私鑰(64字節，使用 [0-9A-F])：",
        "detaillabelprivb64"
:
    "Base64格式私鑰 (44字節)：",
        "detaillabelprivb6"
:
    "Base6格式私鑰(99字節，使用 [0-5])：",
        "detaillabelprivbip38"
:
    "BIP38格式私鑰(58字節，Base58)：",
        "donatetextfooter"
:
    "謝謝您贊助本加密貨幣地址產生器網站，請捐款至以下地址。When the support for a currency has been added by an external contributor to the project, he receives the donation directly.",
        "footersupport"
:
    "贊助WalletGenerator.net",
        "footerlabelgithub"
:
    "下載(GitHub Repository)",
        "footerlabelcopyright2"
:
    "源代碼中包含JavaScript版權。",
        "defaultTitle"
:
    "WalletGenerator.net - 全球通用的比特幣及其他加密貨幣紙錢包產生器",
        "title"
:
    "紙錢包產生器",
        "brainalertpassphrasewarning"
:
    "警告：請選擇足夠強大的密碼短語，避免透過暴力破解竊取您的錢。",
        "brainalertpassphrasetooshort"
:
    "您輸入的密碼短語不夠長。",
        "brainalertpassphrasedoesnotmatch"
:
    "兩次輸入的密碼短語不相同。",
        "bulkgeneratingaddresses"
:
    "地址產生中......",
        "detailalertnotvalidprivatekey"
:
    "您輸入的私鑰無法辨識。",
        "securitychecklistrandomOK"
:
    "您的浏览器能够使用window.crypto.getRandomValues生成密码随机密钥",
        "securitychecklistrandomNOK"
:
    "您的浏览器不支持window.crypto.getRandomValues（），这对生成可能的最安全的随机数很重要。 请使用更现代的浏览器。",
        "securitychecklistofflineNOK"
:
    "您正透過網際網路使用本產生器網站，但這並不安全。請在網頁最底處前往GitHub並下載ZIP檔，接著在離網環境開啟您所下載的HTML檔案。",
        "securitychecklistofflineOK"
:
    "您正使用電腦中下載後的網頁。",
        "paperwalletback"
:
    "<ul><li>若您要使用這個紙錢包，您可以隨時的轉入加密貨幣到公鑰地址。</li><li>您可以透過blockchain.info等類似網站輸入公鑰查詢錢包餘額。在您準備將紙錢包餘額匯出或使用前，</li><li><b>絕對不要公開私鑰</b>。</li></ul><b>餘額：</b> ___________       <b>日期：</b> ________________<br /><b>備註：</b> ______________________________________",
}
,
}
}
;
