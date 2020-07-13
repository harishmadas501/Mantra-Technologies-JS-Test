var myObj=[{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}] ;

var filtered = myObj.filter(a=>a.type=="external");

document.write( JSON.stringify(filtered));