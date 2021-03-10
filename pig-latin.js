Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
	let vowels = ["a" , "e", "i" , "o" , "u"];

	function isVowel(letter) {
		return vowels.indexOf(letter);
	}

	for(let i = 0; i < str.length; i += 1) {
		let individualLetter = str[i];
		if(isVowel(individualLetter) != -1 && i === 0) {
			return str + "way";
		}
        
        if(isVowel(individualLetter) != -1) {
        	return str.slice(i) + str.slice(0, i) + "ay";
        }
	}
  return str + "ay";
}

translatePigLatin("consonant");