var User = function(){

    var firstName = '';
    var lastName = '';

    var obj = {
        setFirstName:function(fName){
            firstName = fName;
        },
        getFirstName : function(){
                    return firstName;
        },
        setLastName : function(lName){
                    return lName;
        },
        getLastName: function(){
            return lastName;
        }
    }
    return obj;

}

var vinay = User();
vinay.setFirstName('Vinay');
//console.log(vinay.getFirstName());

var bill = function(original)
      {
          var tip = function(tipping){
              console.log(tipping+original);
          }
          return tip;
      }

      var billing = bill(3000);
      billing(20);

      