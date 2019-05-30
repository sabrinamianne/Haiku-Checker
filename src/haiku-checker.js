function Haiku (poem)
{
  this.poem = poem;
}

Haiku.prototype.checkHaiku = function()
{
  var newPoem = this.poem.split('/n');
  if(newPoem.length == 3)
  {
    return true;
  }

  return false;
}


Haiku.prototype.couy


exports.haikuModule = Haiku;
