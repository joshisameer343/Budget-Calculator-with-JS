let sum=0;
let obj={};
let inc={};
let exp={};
function enter()
{
    
    let x=document.getElementById("salary").value;
    if(x!="")
    {
        const salary=Number(x);
     sum=salary;
    console.log(salary);
    console.log(sum);
    document.getElementById("salary").readOnly=true;
    document.getElementById("salbut").disabled=true;
    balance();

    }
    else{
        alert("Enter Salary Amount");
        document.location.reload(true);
    }
    
    
}

function addmoney()
{
    let x=document.getElementById("addbox").value;
    let i=document.getElementById("addinfo").value;
    let y=Number(x);
    obj[i]=(`+ ${y}`);
    inc[i]=(y);
    sum=sum+y;
    console.log(sum);
    document.getElementById("addbox").value="";
    document.getElementById("addinfo").value="";
    let a=[];
    for (var element in inc)
    {
        a.push(` ${element} - ${inc[element]}\n`);
        
    }
    document.getElementById("incomeinfo").innerHTML=(a);
    balance();
    
}


function withmoney()
{
    let x=document.getElementById("withbox").value;
    let i=document.getElementById("withinfo").value;
    let y=Number(x);
    obj[i]=(`- ${y}`);
    exp[i]=(y);
    sum=sum-y;
    console.log(sum);
    document.getElementById("withbox").value="";
    document.getElementById("withinfo").value="";
    let a=[];
    for (var element in exp)
    {
        a.push(` ${element} - ${exp[element]}\n`);
        
    }
    document.getElementById("expenseinfo").innerHTML=(a);
    balance();
    
    
}

function balance()
{
    document.getElementById("balanceinfo").style.display="block";
    document.getElementById("balanceinfo").innerHTML=`Balance : ${sum}`;

}
function income()
{
    let a=[];
    for (var element in inc)
    {
        a.push(` ${element} - ${inc[element]}\n`);
        
    }
    document.getElementById("incomeinfo").innerHTML=(a);
    

}
function expense()
{
    let a=[];
    for (var element in exp)
    {
        a.push(` ${element} - ${exp[element]}\n`);
        
    }
    document.getElementById("expenseinfo").innerHTML=(a);
    
    
}

function reset()
{
    document.location.reload(true);

}