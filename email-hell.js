'use strict';

/**
Implement a module pattern that takes in the data below from our logs
that has a list of all the email addresses that emails were sent to,
and create a report of all of the unique e-mails and
the number of times an e-mail was sent to each address.
*/
var emailSorter = (function() {
  //var myData = JSON.parse(email);
  var myData = email.emails;
  var count = 0;
  var getMail = {
    get : _get
  };

  function _get() {
    var emailList = [];
    var duplicateArray = [];
    var inc = {
      increment : _increment
    };

    // loops through all of the objects in myData JSON file
    emailList.push(myData[0].email);
    alert('Total email: ' + myData.length);

    // loops through JSON data
    for ( var i = 0; i < myData.length; i++ ) {
      // finds out if date is unique
      var compare = myData[i].email;

      //loops through the emailList array
      if ( emailList.indexOf(compare) > -1 ) {
        emailList.push(compare);
      }

      else {
        var value = _increment(compare);

        //alert('This is it: '+ value);
      }
    }

    function _increment(parm) {
      duplicateArray.push(parm);
      count++;
      return count;
    }

  console.log(emailList);
    return inc;
  }

  _get();

  return getMail;
}());

//  console.log(email.emails);