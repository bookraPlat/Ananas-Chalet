function optionCreationPOS(...options){
            const optionsContainer = document.querySelector('.purpose-of-shoot')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='purpose-of-shoot-option${count} dropdown-option-pos' onclick=" let option = document.querySelector('.purpose-of-shoot-option${count}'); optionSelectionPOS(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optionCreationPOS('1-2', '3-7' , '7-10' , 'More than 10');

    

        if (!document.querySelector('.picked-option-pos')){
            const option1 = document.querySelector('.purpose-of-shoot-option1')
            option1.classList.add('picked-option-pos')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optionSelectionPOS(clickedoption){

            

        

        const previousPicked = document.querySelector('.picked-option-pos');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option-pos');
   
        clickedoption.classList.add('picked-option-pos');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.purpose-of-shoot-toggled')){
            const optionPick = document.querySelector('.purpose-of-shoot-toggled');
            optionPick.classList.replace('purpose-of-shoot-toggled' , 'purpose-of-shoot');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.purpose-of-shoot-title');
            dropDownTitle.classList.replace('purpose-of-shoot-title' , 'purpose-of-shoot-title-valid');
        }else if (!document.querySelector('.purpose-of-shoot-toggled')){
            const optionPick = document.querySelector('.purpose-of-shoot');
            optionPick.classList.replace('purpose-of-shoot' , 'purpose-of-shoot-toggled');
            dropDown.style.transform = 'rotate(180deg)';
            const dropDownTitle = document.querySelector('.purpose-of-shoot-title-valid');
            if(dropDownTitle)
            dropDownTitle.classList.replace('purpose-of-shoot-title-valid' , 'purpose-of-shoot-title');
        }

        const options = document.querySelectorAll('.dropdown-option-pos');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.purpose-of-shoot');
        const dropDownElementToggled = document.querySelector('.purpose-of-shoot-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };