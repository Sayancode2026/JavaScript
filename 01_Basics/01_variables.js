const accountId=1233356
let accountEmail="sayan456@gmail.com";
var accountPassword="12345";
accountCity="Kolkata";
let accountState;//if not decalred then value print will be undefined 



//accountId=2 //not allowed in const once declared cannot be changed
 accountEmail="baban2026@google.com";
 accountPassword="12121212";
 accountCity="Bengaluru";


 console.log(accountId);
 
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

 /* 
 prefer not to use var 
 bacause  of issue in block scope and fuctional scope
 
Output:-
 1233356
┌─────────┬────────────────────────┐
│ (index) │ Values                 │
├─────────┼────────────────────────┤
│ 0       │ 1233356                │
│ 1       │ 'baban2026@google.com' │
│ 2       │ '12121212'             │
│ 3       │ 'Bengaluru'            │
│ 4       │ undefined              │
└─────────┴────────────────────────┘

 */