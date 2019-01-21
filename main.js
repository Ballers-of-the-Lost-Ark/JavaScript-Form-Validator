document.getElementById('form').addEventListener('submit', (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phone-number');
    const zip = document.getElementById('zip');

    // Regex Expressions

    // name
    reName = /^\D{1,45}$/i;
    // console.log(reName.test(name));

    // email
    reEmail = /^(\S){1,35}[@][\S]{1,35}[\\.][\S]{1,35}$/i;
    // console.log(reEmail.test(email));

    // phone number
    rePhone = /^(\d)?[.-]?((\d{3})[.-]?){2}(\d{4})$/;
    // console.log(rePhone.test(phoneNumber));

    // zip code
    reZip = /^(\d){5}$/;
    // console.log(reZip.test(zip));


    // Validating

    const nameBlank = document.getElementById('name-blank');
    const emailBlank = document.getElementById('email-blank');
    const phoneBlank = document.getElementById('phone-blank');
    const zipBlank = document.getElementById('zip-blank');

    let counter = 0;

        // name
        if(reName.test(name.value)){   
            counter++; 
        }else{
            nameBlank.innerHTML = `
            <div class="error">Names must be between 1-45 characters including spaces, no numbers or symbols.
            </div>`;

            setTimeout(() => {
            nameBlank.innerHTML = ``;
            }, 8000);
        }

        // email
        if(reEmail.test(email.value)){  
            counter++; 
        }else{
            emailBlank.innerHTML = `
            <div class="error">Emails must include "@" and "."(period). They have to be between 5-105 character.
            </div>`;

            setTimeout(() => {
            emailBlank.innerHTML = ``;
            }, 8000);
        }

         // phone
        if(rePhone.test(phoneNumber.value)){   
            counter++;
        }else{
            phoneBlank.innerHTML = `
            <div class="error">Phone numbers can be written in any format except with a "(1)" in front. Ex: 333-555-6646 is good, while (1)-333-555-6646 is invalid.
            </div>`;

            setTimeout(() => {
            phoneBlank.innerHTML = ``;
            }, 10000);
        }
    
        // zip
        if(reZip.test(zip.value)){  
            counter++; 
        }else{
            zipBlank.innerHTML = `
            <div class="error">Zip codes can include only 5 numbers.
            </div>`;

            setTimeout(() => {
            zipBlank.innerHTML = ``;
            }, 8000);
        }
    

    // clearing values
    name.value = '';
    email.value = '';
    phoneNumber.value = '';
    zip.value = '';

    // displaying successful message
    const submitBlank = document.getElementById('submit-blank');
    if(counter === 4){
        submitBlank.innerHTML = `
            <div class="success success-done">Data submitted</div>
        `;

        setTimeout(() => {
            submitBlank.innerHTML = `<div class="success"></div>`;
        }, 5000);
    }
    

    e.preventDefault();
});





// HOW TO USE ESCAPE PARENTHESES IN REGEX, CANNOT BE USED IN EXPRESSIONS WITH BOTH ^$
//  re = /([()])$/;
//     console.log(re.test('()'));
