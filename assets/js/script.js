const form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault(); //para não atualizar a pagina quando enviar os dados

    const weight = document.getElementById('weight').value; // pagando o peso
    const height = document.getElementById('height').value; // pegando altura

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('danger')

    document.getElementById('infos').classList.remove('hidden');
    

    if(bmi <18.5){
        description = 'cuidado você está abaixo do peso'
        value.classList.remove('danger')
        value.classList.add('alert')
    }else if(bmi >=18.5 && bmi <= 25){
        description= 'você está com peso ideal'
        value.classList.remove('alert')
        value.classList.remove('danger')
        value.classList.add('normal')
    }else if(bmi >=25 && bmi <= 30){
        description='você está com sobrepeso'
        value.classList.remove('danger')
        value.classList.add('alert')
    }else if(bmi >= 30 && bmi<=35){
        description='você está com obsidade moderada'
    }else if(bmi>= 35 && bmi <= 40){
        description = 'você está com obsidade severa'
    }else{
        description='você está com obsidade morbida'
    }

    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = description
});