var app = angular.module("demoApp");
app.service('CardValidationSV', _CardValidationService);

function _CardValidationService() {
    var _cardDetails = {
        cardType: "",
        isValid: false
    };

    this.validateCardDetails = function(cardNumber) {
        console.log("validate cardNumber ", cardNumber);
    }

    function _getCardType(){
      //TODO : card type get implementaion
      _checkCardLength(); // we need to call it here
    }

    function _checkCardLength(){
      //TODO : card length check implementaion on the basis of card type
    }

    function _validateLuhnAlgorithm(cardNumber) {
        //TODO : Luhn ALgorith implementaion
    }
}
