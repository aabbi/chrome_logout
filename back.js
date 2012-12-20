var logout_exps=new Array("Sign Out","Sign out","sign out","signout","Signout","logout","log out","Logout","Log Out","Log out");
for(i=0;i<logout_exps.length;i++)
{
var x = $("a:contains('" + logout_exps[i] + "')");
if (x.length != 0)
break;
}
console.log(x);
if (x.length!=0)
document.location.href = x.attr('href');



