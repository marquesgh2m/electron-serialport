let x=0;

var intervalo = setInterval(()=>
{   
    //grafico1(x++, ((Math.random()*20)-10));
    //grafico2(x++, ((Math.random()*2)-1));
    grafico1(x++, temperaturaInt);
    grafico2(x++, umidadeInt);
}
, 500);