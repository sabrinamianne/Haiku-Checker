var Haiku = require ('./../src/haiku-checker.js').haikuModule;

describe ('Haiku', function(){


  it ('should check whether haiku has three lines', function(){
    var haiku = new Haiku('Green and speckled legs,/n Hop on logs and lily pads/nSplash cool water');
    expect(haiku.checkHaiku()).toEqual(true);
  });

});
