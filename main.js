const userDay = document.getElementById('day');
const userMonth = document.getElementById('month');
const userYear = document.getElementById('year');
const submit = document.querySelector('.submit-btn');
const date = new Date();

submit.addEventListener( "click" ,()=>{
    let userDate = new Date();
    let bool = true;

    document.querySelectorAll('input').forEach((input)=>{

        if (input.value == "") {
            input.classList.add('warning');
            input.previousElementSibling.classList.add('warning');
            input.nextElementSibling.style.display = 'block';
        }else if (isNaN(+input.value)) {
            input.classList.add('warning');
            input.previousElementSibling.classList.add('warning');
            input.nextElementSibling.style.display = 'block';
            input.nextElementSibling.innerHTML = 'Must be a number';
        }else {
            input.classList.remove('warning');
            input.style.border = '1px solid var(--Light-grey)';
            input.previousElementSibling.classList.remove('warning')
            input.nextElementSibling.style.display = 'none';     
            
            if (userDay.value < 0 || userDay.value > 31) {
                userDay.classList.add('warning');
                userDay.previousElementSibling.classList.add('warning');
                userDay.nextElementSibling.style.display = 'block';
                userDay.nextElementSibling.innerHTML = 'Must be a valid day';
                bool = false;
            }
            if(userMonth.value < 0 || userMonth.value > 12) {
                userMonth.classList.add('warning');
                userMonth.previousElementSibling.classList.add('warning');
                userMonth.nextElementSibling.style.display = 'block';
                userMonth.nextElementSibling.innerHTML = 'Must be a valid month';
                bool = false;

            }
            if(+userYear.value < 1900) {
                console.log(userYear); 
                userYear.classList.add('warning');
                userYear.previousElementSibling.classList.add('warning');
                userYear.nextElementSibling.style.display = 'block';
                userYear.nextElementSibling.innerHTML = 'Must be greater than 1900';
                bool = false;

            }
            else if (+userYear.value > date.getFullYear()) {
                userYear.classList.add('warning');
                userYear.previousElementSibling.classList.add('warning');
                userYear.nextElementSibling.style.display = 'block';
                userYear.nextElementSibling.innerHTML = 'Must be in the past';
                bool = false;
            }

            document.querySelector('#yearsResult span').innerHTML = "- -"; 
            document.querySelector('#monthsResult span').innerHTML = "- -"; 
            document.querySelector('#daysResult span').innerHTML = "- -";
            
            if (bool) {
                userDate.setDate(userDay.value);
                userDate.setMonth(userMonth.value - 1);
                userDate.setFullYear(userYear.value);
                let checkDay = userDate.getDate();

                if (checkDay != userDay.value ) {
                    userDay.classList.add('warning');
                    userDay.previousElementSibling.classList.add('warning');
                    userDay.nextElementSibling.style.display = 'block';
                    userDay.nextElementSibling.innerHTML = 'Must be a valid date';
                    userYear.classList.add('warning');
                    userYear.previousElementSibling.classList.add('warning');
                    userMonth.classList.add('warning');
                    userMonth.previousElementSibling.classList.add('warning');    
                    
    
                }else {
                    let result = date - userDate;
                    let years = Math.floor(result / ( 1000 * 60 * 60 * 24 * 365.25 ));
                    let months = (result % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30); 
                    let days = +("0."+(months.toString().split('.')[1])) * 30;

                    document.querySelector('#yearsResult span').innerHTML = years; 
                    document.querySelector('#monthsResult span').innerHTML = Math.floor(months); 
                    document.querySelector('#daysResult span').innerHTML = Math.floor(days); 
                }
            }
           
        }

       
       
    });
    
   

});


