function Haiku (poem)
{
  this.poem = poem;
}

Haiku.prototype.checkHaiku = function()
{
  var newPoem = this.poem.split('/n');
  var line1 = this.countSyllable(newPoem[0]);
  var line2 = this.countSyllable(newPoem[1]);
  var line3 = this.countSyllable(newPoem[2]);
  console.log(line1, line2,  line3);

  if(newPoem.length === 3 && line1 === 5 && line2 === 7 && line3 === 5)
  {
    return true;
  }

  return false;
}


Haiku.prototype.countSyllable = function(line)
{
  var res = 0;
  for (var i=0; i < line.length; i++)
  {
    if (line[i]==='a' || line[i]==='u' || line[i]==='i' || line[i]==='e' || line[i]==='o')
    {
      res += 1
    }
  }
  return res;
}


exports.haikuModule = Haiku;
