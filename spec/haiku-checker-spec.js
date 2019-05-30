var Haiku = require ('./../src/haiku-checker.js').haikuModule;

describe ('Haiku', function(){

  it ('should check whether haiku has three lines', function(){
    var haiku = new Haiku('Gre lipinipi i/nii mee iei Hoi /n ieeei');
    expect(haiku.checkHaiku()).toEqual(true);
  });

  it('should checl whether lines have correct ammount of syllables', function(){
    var haiku = new Haiku("Great I'm so happy to meet you Maiesy /n yeeeeeeeh /n yiiiii");
    expect(haiku.checkHaiku()).toEqual(true);
  });

  it ('should count syllables with i', function(){

    var haiku = new Haiku ('Hop on logs/n ai /n lese');

    expect(haiku.countSyllable()).toEqual([0,1,1]);
  });

});
