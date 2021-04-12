//Intro to dom events
    //events responding to user inputs and actions
    //the thing > event type > the code run
    //button > click >change colour

    //3 ways to add events

    //Two ways not to add events
    //1st way :don't use this way  //Inline event
    //apply event in HTML code 
    //eg. <button onclick ="alert('You Click Me)">click me</button>

    //2nd way : In js file first selecting element then apply event

    const btn = document.querySelector('#btnId');
    // btn.onclick = alert('2nd way event');

    btn.addEventListener('click', ()=>{
        alert("I am addEventListener")
    });

    //you can also add multiple events on same elements throug addEventListener
    btn.addEventListener('mouseover', function(){
        btn.innerHTML="Stop Touching Me";;
    });
    btn.addEventListener('mouseout', function(){
        btn.innerHTML="Click Me";
    });

    //The event object
        //this return an detailed object of mouseevent, keyboard event etc,
    // document.body.addEventListener('click', function(e){
    //     console.log(e);
    // })
    // document.body.addEventListener('keypress', function(e){
    //     console.log(e);
    // })

    //key events: keydown, keyup, keypress
    // const username =document.querySelector('#username');
    // username.addEventListener('keydown', function(e){
    //     // console.log(e);
    //      console.log('Keydown event');
    //  });
    //  username.addEventListener('keyup', function(e){
    //     // console.log(e);
    //      console.log('Keyup event');
    //  });
    //  username.addEventListener('keypress', function(e){
    //      console.log(e);
    //      console.log('Keypress event');
    //  });

    //  const listId =document.querySelector('#shopList');
    //  const itemsul =document.querySelector('#items');
    //  listId.addEventListener('keypress', function(e){
         
    //         if(e.key ==='Enter'){
    //             if(!this.value) return;
    //             // console.log(this.value);
    //              const newItemText = this.value;
    //              const newLi =document.createElement('li');
    //              newLi.innerText = newItemText;
    //              itemsul.append(newLi);
    //              this.value ='';
              
    //          }   
    //  })

     //form events and preventDefault

     const form =document.querySelector('#formId');
     const password =document.querySelector('#passId');
     const username =document.querySelector('#username');
     const checkBox =document.querySelector('#checkId');

     form.addEventListener('submit', function(e){
         e.preventDefault();
         console.log('username' ,username.value);
         console.log('password' ,password.value);
         console.log('checkbox' ,checkBox.checked);
         //send form data to database
         //append form data to somewhere
     })

     //input and change event
        //input event trigered every input provide by
        //change event trigered after out of focus 
      
        // username.addEventListener('input', (e) =>{
        //     console.log('user canged ', username.value);
        // })

        // username.addEventListener('change', (e) =>{
        //     console.log('user canged ', username.value);
        // })

        const formData ={};
        // for(let idName of [username, password, checkBox]){
        //     idName.addEventListener('input', (e) => {
        //         formData[e.target.name] = e.target.value;
        //         if(e.target.name === 'checkBox'){
        //             formData[e.target.name] = e.target.checked;
        //         } 
        //         console.log(formData);
        //     })
        // }

        //above code refacor
    for(let input of [username, password, checkBox]){
        input.addEventListener('input', ({target}) => {
            const {name, type, value, checked} =target;
            formData[name] =type ==='checkbox'? checked:value;
            console.log(formData);
        })
    }