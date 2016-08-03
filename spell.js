var SpellChecker = require('simple-spellchecker');

function spell(input) {
if(SpellChecker.isMisspelled(word))
        return `${misspelled}`;
        if(misspelled) {
            var suggestions = dictionary.getSuggestions('maisonn');
            return `${suggestions}`;
        }
    }
});  

}
module.exports=spell;