import account from '../business/account';


test('testing account', () => {
    console.log("hello from test");
    console.log(account);
    const ctrl = new account.AcctControls;
    ctrl.addAcct("Dave", 500);
    ctrl.addAcct("Larry", 100);
    ctrl.addAcct("Shiraz", 300);
    expect(ctrl.balanceForAcct("Dave")).toBe(500);
    expect(ctrl.balanceForAcct("Larry")).toBe(100);
    ctrl.depositToAcct("Dave", 200);
    expect(ctrl.balanceForAcct("Dave")).toBe(700);

    ctrl.acctArray.forEach(e => {
        console.log(e);
    })
    
        

});

