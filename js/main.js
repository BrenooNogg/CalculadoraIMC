function calcular(){
	// Passe o trecho que conecta as variáveis aos elementos html para fora da function, assim como os elementos: valor1, valor2, valor3, valor4 e resultado, dessa forma você poderá utilizá-los em outras functions e de forma resumida. Ademais, não pegue apenas o valor do input ao mover o trecho.
	// Início do trecho
	let altura = document.getElementById('altura').value;
	let peso = document.getElementById('peso').value;
	// Fim do trecho
	let altura2 = altura*altura;
	let imc = Math.round(peso/altura2);
	if(altura <= 0 || peso <=0){
		alert('valores inválidos');
	}else{
		if(peso == "" || altura == ""){ 
			alert('campos vazios'); 
		}else{
			if(imc<18.5){
				// alert('Você é abaixo do peso! ' + imc);
				document.getElementById('valor1').innerHTML = 'Seu IMC é ' + imc;
				document.getElementById('valor2').innerHTML = 'Você está abaixo do peso!';
				document.getElementById('resultado').hidden = false;
			}else if(imc>=18.6 && imc<=24.9){
				// alert('Você está no peso normal! ' + imc);	
				document.getElementById('valor1').innerHTML = 'Seu IMC é ' + imc;
				document.getElementById('valor2').innerHTML = 'Você está no peso normal!'; 	
				document.getElementById('resultado').hidden = false;
			}else if(imc>=25 && imc<=29.9){
				// alert('Acima do peso(Sobrepeso) ' + imc);
				document.getElementById('valor1').innerHTML = 'Seu IMC é ' + imc;
				document.getElementById('valor2').innerHTML = 'Acima do peso(Sobrepeso)!';
				document.getElementById('resultado').hidden = false;
			}else if(imc>=30 && imc <=34.9){
				// alert('Obesidade I');
				document.getElementById('valor1').innerHTML = 'Seu IMC é ' + imc;
				document.getElementById('valor2').innerHTML = 'Obesidade I';
				document.getElementById('resultado').hidden = false;
			}else if(imc>=35 && imc<=39.9){
				// alert('Obesidade II ' + imc);
				document.getElementById('valor1').innerHTML = 'Seu IMC é ' + imc;
				document.getElementById('valor2').innerHTML = 'Obesidade II';
				document.getElementById('resultado').hidden = false;
			}else if(imc >= 40){
				// alert('Obesidade III ' + imc);
				document.getElementById('valor1').innerHTML = 'Seu IMC é ' + imc;
				document.getElementById('valor2').innerHTML = 'Obesidade III';
				document.getElementById('resultado').hidden = false;	
			}
			let pesoIdeal = altura2 * 18.5;
			//PI = h2 x IMC;
			imc = Math.round(peso/altura2);
			if(imc >= 18.5 || imc<=24.9){
				// alert('Seu peso Ideal é ' + pesoIdeal.toFixed(2)); 
				// alert('Seu IMC é ' + imc);			
				document.getElementById('valor3').innerHTML = 'Seu peso ideal é ' + pesoIdeal.toFixed(2);
				document.getElementById('valor4').innerHTML = 'Seu IMC é ' + imc;
			}
		}	
	}
}
