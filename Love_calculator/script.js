function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    
    const name2 = document.getElementById("name2").value.trim();
    
if(name1==="" || name2 ===""){
alert("please enter both names");

}else{
    const LovePercentage = (Math.random() * 101);

    const result = document.getElementById("result");


    result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${LovePercentage}`;

    if(LovePercentage<30){
        result.innerHTML += "<br> Not a Great Match . Keep Looking!"
    }else if(LovePercentage>=30 && LovePercentage <70){
        result.innerHTML += "<br> There is potential . Give it a try!"
    }else{
        result.innerHTML += "<br> Great Match! Love is in the Air!"
    }



}



}