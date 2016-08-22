	function parsePhrases(phrases, modelArray){
		var phrasesConcat = phrases.join(",");
		phrasesConcat = phrasesConcat.toUpperCase();
		var value = "";
		for(var j = 0; j < modelArray.length; j ++)		{
			var modelArrayStr = modelArray[j][1].toUpperCase().split(" ");
			
			var pickPhrase = true;
			for(var k = 0; k < modelArrayStr.length; k ++){
				if(phrasesConcat.indexOf(modelArrayStr[k]) == -1)
					pickPhrase = false;
			}
			
			if(pickPhrase){
				value = modelArray[j][0];
				break;
			}
		}
		return value; //WIG //GOD
	}