define(['Model/Bank', 'domready'], function(Bank) {
    test("Bank is defined", function() {
        ok(typeof Bank === "object");
    });
    
    test("Bank can deposit", function() {
        var value = Bank.deposit(30);
        equal(value, 30);
    });
    
    test("Bank can withdraw", function() {
        var value = Bank.withdraw(20);
        equal(value, -20);
    });

    QUnit.start();
});