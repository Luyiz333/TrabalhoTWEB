/*-----------------------------header2-------------------------------------------*/

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "400px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
/*-----------------------------------header2-------------------------------------*/

/*Read Data*/

  var getSubmitBtn = document.getElementById("submit")
  getSubmitBtn.addEventListener("click", zonas)

  var zona1 = 1200
  var zona2 = 2000
  var zona3 = 2500


function zonas(){

  var tipologia = document.getElementById("tipologia").value
  var area = document.getElementById("area").value
  var idade = document.getElementById("idade").value
  var garagem = document.getElementById("garagem").value
  var transporte = document.getElementById("transporte").value
  var defesa = document.getElementById("meu").value

    if(area == "" || idade == "" || garagem == "" || transporte == "" || tipologia == "" || defesa == ""){
        alert("Preencha todos os campos por favor")
        location.reload()
    }

  var preco1 = Math.round(zona1*area*idade*garagem*transporte*100)/100
  var preco2 = Math.round(zona2*area*idade*garagem*transporte*100)/100 
  var preco3 = Math.round(zona3*area*idade*garagem*transporte*100)/100 


  document.getElementById("s1").innerHTML = preco1+"€"
  document.getElementById("s2").innerHTML = preco2+"€"
  document.getElementById("s3").innerHTML = preco3+"€"

  document.getElementById("tabela2").style.display = "flex"


  //if's

  if(idade == 1){
      idade = "têm 5 anos ou menos"
  } else if(idade == 0.95){
    idade = "têm entre 5 e 10 anos"
  }else{
    idade = "têm mais de 10 anos"
  }

  if(garagem == 1){
    garagem = "possui garagem"
  }else{
    garagem = "não possui garagem"
  }

  if(transporte == 1){
    transporte = "transportes perto"
  }else{
    transporte = "sem transportes perto"
  }

  if(defesa == 1){
    document.getElementById("def").style.display="block"
  }else{
    document.getElementById("def").style.display="none"
  }



  document.getElementById("zona_1").innerHTML = "tipologia = " + tipologia + "<br>" + "area = "+ area + "m<sup>2</sup>" + "<br>" + "idade = "+ idade + "<br>" +"garagem = "+garagem + "<br>" +"transporte = " + transporte
  document.getElementById("zona_2").innerHTML = "tipologia = " + tipologia + "<br>" + "area = "+ area + "m<sup>2</sup>" + "<br>" + "idade = "+ idade + "<br>" +"garagem = "+garagem + "<br>" +"transporte = " + transporte
  document.getElementById("zona_3").innerHTML = "tipologia = " + tipologia + "<br>" + "area = "+ area + "m<sup>2</sup>" + "<br>" + "idade = "+ idade + "<br>" +"garagem = "+garagem + "<br>" +"transporte = " + transporte
}
      


//Mousehover

var primeiro=document.getElementById("s1")
var segundo=document.getElementById("s2")
var terceiro=document.getElementById("s3")
var menu1=document.getElementById("zona_1")
var menu2=document.getElementById("zona_2")
var menu3=document.getElementById("zona_3")

primeiro.addEventListener("mouseover", function(){
    menu1.style.display = "block"
    menu1.style.visibility = "visible"

})
    primeiro.addEventListener("mouseout", function(){
    menu1.style.display = "none"
})

  segundo.addEventListener("mouseover", function(){
    menu1.style.display = "block"
    menu1.style.visibility = "hidden"
    menu2.style.display = "block"
    menu2.style.visibility = "visible"
})
    segundo.addEventListener("mouseout", function(){
    menu1.style.display = "none"
    menu2.style.display = "none"
})

  terceiro.addEventListener("mouseover", function(){
    menu1.style.display = "block"
    menu1.style.visibility = "hidden"
    menu2.style.display = "block"
    menu2.style.visibility = "hidden"
    menu3.style.display = "block"
})
    terceiro.addEventListener("mouseout", function(){
    menu1.style.display = "none"
    menu2.style.display = "none"
    menu3.style.display = "none"
})

var financiamento = document.getElementById("btn1")
financiamento.addEventListener("click", finanças1 )

  function finanças1(){


    var x = document.getElementById("tabela3");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    


    var tipologia = document.getElementById("tipologia").value
    var area = document.getElementById("area").value
    var idade = document.getElementById("idade").value
    var garagem = document.getElementById("garagem").value
    var transporte = document.getElementById("transporte").value
    
    var preco1 = Math.round(zona1*area*idade*garagem*transporte*100)/100
    var empresto = Math.round((preco1*0.8)*100)/100

    var spread1 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var spread2 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var spread3 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var taxa1 = 0.5 + spread1
    var taxa2 = 0.5 + spread2
    var taxa3 = 0.5 + spread3

    var inicial = Math.round((empresto * 0.001)*100)/100
    var prest = Math.round((empresto - inicial) * 0.0005*100)/100


  document.getElementById("fin1").innerHTML = "<h1>Santander</h1>" + "<br>" + "montante total = " + preco1 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa1 + "%" + "<br>" +"spread = "+ spread1 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  document.getElementById("fin2").innerHTML = "<h1>Caixa Geral</h1>" + "<br>" + "montante total = " + preco1 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa2 + "%" + "<br>" +"spread = "+ spread2 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  document.getElementById("fin3").innerHTML = "<h1>Montepio</h1>" + "<br>" + "montante total = " + preco1 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa3 + "%" + "<br>" +"spread = "+ spread3 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  }



  var financiamento = document.getElementById("btn2")
  financiamento.addEventListener("click", finanças2 )

  function finanças2(){
    var x = document.getElementById("tabela3");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    


    var tipologia = document.getElementById("tipologia").value
    var area = document.getElementById("area").value
    var idade = document.getElementById("idade").value
    var garagem = document.getElementById("garagem").value
    var transporte = document.getElementById("transporte").value
    
    var preco2 = Math.round(zona2*area*idade*garagem*transporte*100)/100
    var empresto = Math.round((preco2*0.8)*100)/100

    var spread1 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var spread2 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var spread3 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var taxa1 = 0.5 + spread1
    var taxa2 = 0.5 + spread2
    var taxa3 = 0.5 + spread3

    var inicial = Math.round((empresto * 0.001)*100)/100
    var prest = Math.round((empresto - inicial) * 0.0005*100)/100


  document.getElementById("fin1").innerHTML = "<h1>Santander</h1>" + "<br>" + "montante total = " + preco2 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa1 + "%" + "<br>" +"spread = "+ spread1 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  document.getElementById("fin2").innerHTML = "<h1>Caixa Geral</h1>" + "<br>" + "montante total = " + preco2 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa2 + "%" + "<br>" +"spread = "+ spread2 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  document.getElementById("fin3").innerHTML = "<h1>Montepio</h1>" + "<br>" + "montante total = " + preco2 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa3 + "%" + "<br>" +"spread = "+ spread3 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  }

  var financiamento = document.getElementById("btn3")
  financiamento.addEventListener("click", finanças3 )

  function finanças3(){
    
    var x = document.getElementById("tabela3");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    


    var tipologia = document.getElementById("tipologia").value
    var area = document.getElementById("area").value
    var idade = document.getElementById("idade").value
    var garagem = document.getElementById("garagem").value
    var transporte = document.getElementById("transporte").value
    
    var preco3 = Math.round(zona3*area*idade*garagem*transporte*100)/100
    var empresto = Math.round((preco3*0.8)*100)/100

    var spread1 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var spread2 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var spread3 = Math.round((Math.random()*(5 - 1)+1)*100)/100
    var taxa1 = 0.5 + spread1
    var taxa2 = 0.5 + spread2
    var taxa3 = 0.5 + spread3

    var inicial = Math.round((empresto * 0.001)*100)/100
    var prest = Math.round((empresto - inicial) * 0.0005*100)/100


  document.getElementById("fin1").innerHTML = "<h1>Santander</h1>" + "<br>" + "montante total = " + preco3 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa1 + "%" + "<br>" +"spread = "+ spread1 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  document.getElementById("fin2").innerHTML = "<h1>Caixa Geral</h1>" + "<br>" + "montante total = " + preco3 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa2 + "%" + "<br>" +"spread = "+ spread2 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  document.getElementById("fin3").innerHTML = "<h1>Montepio</h1>" + "<br>" + "montante total = " + preco3 + "€" + "<br>" + "valor do empréstimo (80% do total) = "+ empresto + "€" + "<br>" + "taxa de juro global = "+ taxa3 + "%" + "<br>" +"spread = "+ spread3 + "%" +"<br>" +"valor da entrada inicial = " + inicial + "€" + "<br>" + "valor mensal da prestação = " + prest + "€" 
  }
  