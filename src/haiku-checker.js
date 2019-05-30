function Haiku (poem)
{
  this.poem = poem;
}

Haiku.prototype.checkHaiku = function()
{
  var checkSyllable = this.countSyllable()  ;
  console.log(checkSyllable[0], checkSyllable[1], checkSyllable[2]);
  var newPoem = this.poem.split('/n');
  if(newPoem.length === 3 && checkSyllable[0] === 5 && checkSyllable[1] === 7 && checkSyllable[2] === 5)
  {
    return true;
  }

  return false;
}


Haiku.prototype.countSyllable = function()
{
  var count=0;
  var res = [];
  var lines = this.poem.split('/n'); /// array of lines ['hop on logs', '...'];
  for (var i=0; i < lines.length; i++)
  {
    var line = lines[i]; // Each line in array of lines
    var words = line.split(" "); /// array of words in line ["hop", "word", "word"];
    for(var j=0; j<words.length; j++)
    {
      var word = words[j];//word in the current array of words in the current line
      for (var z = 0; z< word.length; z++) //word[z] each letter in the current word in the current line
      {
        if (word[z] ==='i')
        {
          count ++;
        }
        if (word[z] === 'e' && z !== word.length - 1 )
        {
         count ++;
        }
      }
    }
    res.push(count);
    count = 0;
  }
  return res;
}


exports.haikuModule = Haiku;
