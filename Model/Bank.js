define(function() {
	var Bank = (function() {
        var balance = 0;
        
		return {
			deposit: function(amount) {
				return balance+=amount;
			}
		}
	}) ();

	return Bank;
});