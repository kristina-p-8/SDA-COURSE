const a = [3,6,12,24,9,15,22,5,18,26 ];
a.pop();
console.log(a);

a.push(30);
console.log(a);

a[1]=0
console.log(a);

for(var i=0;i<a.length;i+=3){
    a[i]=1;
}
console.log(a);



