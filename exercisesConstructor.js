//Ejercicio1

var persona = { 
    nombre: "Pepe",
    edad: 23,
    cedula: 1053,
    mostrar: function()
    {
        console.log(this.nombre);
        console.log(this.edad);
        console.log(this.cedula);
    },
    es_mayor_de_edad: function()
    {
        if(this.edad<17)
        {
        console.log ("Es Menor de Edad")        
        } 
            else
            {
            console.log ("Es Mayor Edad")
            }
    }

}   

    persona.mostrar()
    persona.es_mayor_de_edad()
    
//Ejercicio2

var cuenta = { 
    validacion:true,
    titular: "",
    cantidad:0, 

    mostrar: function()
    {
        console.log(this.titular);
        console.log(this.cantidad);
    },

    solicitar_Datos: function(nombre,cantidad=0){
        if(nombre!="")
        {   
        this.titular=nombre;
        this.cantidad=cantidad;
        }
        else{
            alert("Debe Ingresar un Nombre")
        }      
        
    },
    
    solicitar: function(cantidad)
    {
        if(cantidad>=0)
        {
            this.cantidad=cantidad+this.cantidad;
        }
    },

    retirar: function(cantidad)
    {
        if(cantidad>=0)
        {
            this.cantidad=this.cantidad-cantidad;
        }
    }

}
var nombre = prompt("Ingrese su Nombre");
var cantidad = parseInt(prompt("Ingrese la Cantidad"));

cuenta.solicitar_Datos(nombre,cantidad);
cuenta.mostrar();
var cantidad2=parseInt(prompt("Ingrese la Cantidad Nueva"))
cuenta.solicitar(cantidad2)
cuenta.mostrar();


var cantidad3=parseInt(prompt("Ingrese la Cantidad a retirar"))
cuenta.retirar(cantidad3)
cuenta.mostrar();

//Ejercicio3

var formulas = {
    sumar:function(num1,num2){
        console.log(num1+num2)
    },

    fibo: function(cantidad){
        var limit = cantidad;
	    var fibo = [0,1];

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);		
	}
    console.log(fibo)
    },

    operacion_modulo: function(cantidad){
        var residuo = [];

        for(i=1; i <= cantidad; i++){
            if(i %2 ==0){
                residuo.push(i);
            }            
        }
        console.log(residuo)
    },

    primos: function(numero){        
        var numprimo = false;
        for (var i = 2; i < numero; i++) {

            if (numero % i === 0) {
                numprimo = true;
            }                    
          }
          if(numprimo==false){
              console.log("El numero es Primo")
          }
          else{
            console.log("El numero NO es Primo")
          }
    },
    
}
var num1=parseInt(prompt("Ingrese numero 1"))
var num2=parseInt(prompt("Ingrese numero 2"))
formulas.sumar(num1,num2) 

var cantidad= parseInt(prompt("Ingrese el limite"))
formulas.fibo(cantidad);

var residuo= parseInt(prompt("Ingrese un valor para mostar su residuo"))
formulas.operacion_modulo(residuo); 

var primo= parseInt(prompt("Ingrese el numero para validar si es Primo"))
formulas.primos(primo); 

//Ejercicio4

var persona = { 
    nombre: "Sebas",
    edad: 17,
    DNI: 1053,
    sexo: "j",
    peso: 64,
    altura: 1.68,
    
    calcularMC: function()
    {
        var totalpeso = (this.peso/(this.altura**2));
        if(totalpeso<20){
            console.log(-1)
        }
        if(totalpeso>=20 && totalpeso <= 25 ){
            console.log(0)
        }
        if(totalpeso>25){
            console.log(1)
        }
    },

    esMayorDeEdad: function()
    {
        if(this.edad>=18)
        {
        console.log (true)        
        } 
            else
            {
            console.log (false)            
            }
    },

    conmprobarSexo: function()
    {
        if(this.sexo== "M" || this.sexo== "F")
        {
            console.log (true)
        }
        else{
            console.log ("H")
        }
    }
}

persona.calcularMC()
persona.esMayorDeEdad()
persona.conmprobarSexo()


//Ejercicio5

var contrasena = { 
    password: "123asd",
    longitud: 10,
    
    esfuerte: function()
    {
        var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var minusculas ="abcdefghijklmnopqrstuvwxyz";
        var numeros ="0123456789";
        var contarminus = 0;
        var contarmayus = 0;
        var contarnum = 0;
        
            for (var x = 0; x < this.password.length; x++) {
              for (var i = 0; i < mayusculas.length; i++) {
            if(this.password[x]==mayusculas[i]){
            contarmayus+=1;
                }
              }
              for (var i = 0; i < minusculas.length; i++) {
                if(this.password[x]==minusculas[i]){
                contarminus+=1;
                    }
                  }
                  for (var i = 0; i < numeros.length; i++) {
                    if(this.password[x]==numeros[i]){
                    contarnum+=1;
                        }
                      }
            } 
            if(contarmayus>2 && contarminus >1 && contarnum >5)
            {
                console.log (true)
            }
            else
            {
                console.log (false)
            }
    },

    generarPasword: function()
    {
        var letrasNumeros = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        var newPassword =""

        for(var i = 0; i < this.longitud; i++){
            var positionString = parseInt(Math.random() * ((letrasNumeros.length - 1) - 0) + 0);
            newPassword = newPassword+letrasNumeros[positionString]
        }

        console.log(newPassword)
    },

    seguridadPaswword: function(){

        var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var numeros ="0123456789";
        var contarletras = 0;
        var contarnumeros = 0;

        for (var x = 0; x < this.password.length; x++) {
            for (var i = 0; i < letras.length; i++) {
          if(this.password[x]==letras[i]){
          contarletras+=1;
              }
            }
            for (var i = 0; i < numeros.length; i++) {
              if(this.password[x]==numeros[i]){
              contarnumeros+=1;
                  }
                }
          } 

          var caractEspeciales = this.password.length - (contarnumeros + contarletras)
        if(this.password.length<=6 &&  contarletras>0 && contarletras>0){
            console.log('debil')
        }
        if(this.password.length>6 && this.password.length<=10 &&  contarletras>0 && contarletras>0){
            console.log('medio')
        }
        if(this.password.length>10 &&  contarletras>0 && contarletras>0 && caractEspeciales>0){
            console.log('fuerte')
        }
        
    }
}
contrasena.esfuerte()
contrasena.generarPasword()
contrasena.seguridadPaswword()

//Ejercicio6

var contador = { 
    count: 0,
    ultimoTexto:"",


    valorActual: function(newvalor="")
    {
        if(newvalor==""){
            console.log(this.count)
        }
        else
        {
            this.count=newvalor
        }
    },

    reset: function()
    {
        this.count=0
    },

    incre:function()
    {
        this.count+=1
    },

    decre: function()
    {
        this.count-=1
    },

    ultimoComando: function(texto="")
    {
        if(texto=="")
        {
            console.log (this.ultimoTexto)
        }
        else
        {
            this.ultimoTexto=texto
        }        
    },

    //Ejercicio7
    recibirComandos: function()
    {
        var condicion = true
        while(condicion==true)
        {
            var comando = prompt("Ingrese Comando");            
            switch (comando) {
                case 'reset':
                  this.reset();
                  this.ultimoComando(comando);
                  this.valorActual()
                  break;
                case 'incremento':
                  this.incre();
                  this.ultimoComando(comando);
                  this.valorActual()
                  break;
                case 'decremento':
                  this.decre();
                  this.ultimoComando(comando);
                  this.valorActual()
                  break;
                case 'actualizacion':
                    var nuevaactualizacion = parseInt(prompt("Ingrese Nuevo Valor"))
                  this.valorActual(nuevaactualizacion);
                  this.ultimoComando(comando);
                  this.valorActual()
                  break;
                case 'ultimocomando':
                    this.ultimoComando();
                    break;
            }
        }
          
    }

}

contador.valorActual(10)
contador.incre()
contador.incre()
contador.decre()
contador.incre()
contador.valorActual()
contador.recibirComandos()

//Ejercicio8

function Chimuela(energiaActual) {

    this.energiaActual = energiaActual;

    this.comer = function (gramos) {

        this.energiaActual = this.energiaActual + (gramos * 4);

    }, this.volar = function (kilometros) {

        this.energiaActual = this.energiaActual - (kilometros);
        this.energiaActual = this.energiaActual - 10;

    }, this.energia = function () {

        return this.energiaActual;

    }
}

let chimuela = new Chimuela(0);

chimuela.comer(100)
chimuela.volar(10);
chimuela.volar(20);
console.log ('la energia actual es de: ' + chimuela.energia() + ' joules' )


//Ejercicio9

function Chimuela(energiaActual) {

    this.energiaActual = energiaActual;

    this.comer = function (gramos) {

        this.energiaActual = this.energiaActual + (gramos * 4);

    }, this.volar = function (kilometros) {

        this.energiaActual = this.energiaActual - (kilometros);
        this.energiaActual = this.energiaActual - 10;

    }, this.energia = function () {

        return this.energiaActual;

    }, this.estadoEnergia = function (dragon) {

        if (dragon.energiaActual <= 50) {

            return console.log('Chimuelo esta debil')

        } else if (dragon.energiaActual >= 50 && dragon.energiaActual <= 1000) {

            return console.log('Chimuelo esta Feliz')
        }
    }, this.cuantoQuiereVolar = function () {

        var km = (this.energiaActual / 5)

        if (this.energiaActual < 300) {

            return console.log('chimuela quiere volar ' + km)

        } else if (this.energiaActual >= 300 && this.energiaActual <= 400 && this.energiaActual % 20 != 0) {

            km = km + 10;

            return console.log('chimuela quiere volar ' + km + ' kms')

        } else if (this.energiaActual >= 300 && this.energiaActual <= 400 && this.energiaActual % 20 == 0) {

            km = km + 10 + 15

            return console.log('chimuela quiere volar ' + km + ' kms')
        }

    }

}

let chimuela = new Chimuela(0);

chimuela.comer(85)
chimuela.volar(10);
chimuela.volar(20);
console.log ('la energia actual es de: ' + chimuela.energia() + ' joules' )

chimuela.estadoEnergia(chimuela);
chimuela.cuantoQuiereVolar();


//Ejercicio10

class calculadora{
    cargar(numeroprincipalp){
        this.numeroprincipal=numeroprincipalp;
        return this.numeroprincipal
    }

    sumar(numerosumap){
this.numerosuma=numerosumap

this.numeroprincipal+=this.numerosuma
return this.numeroprincipal
    }

    restar(numerorestap){
this.numeroresta=numerorestap
this.numeroprincipal-=this.numeroresta
return this.numeroprincipal
    }
    multiplicar(numeromultip){
        this.numeroresta=numeromultip
        this.numeroprincipal*=this.numeroresta
        return this.numeroprincipal
    }

    valorActual(){
        return`La calculadora tiene el valor de ${this.numeroprincipal}`
    }

}