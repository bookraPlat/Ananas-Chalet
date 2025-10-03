console.log( 'This is the message: ' + localStorage.getItem('previousLanguage'));

function sendMessage() {
        fetch('https://script.google.com/macros/s/AKfycbz46lhU10zNaawl9yseBHwk2a0bJKmTb4_yTqFSyQBOlDys9V3yoZ1CNl6lNk-rAWoEng/exec')
          .then(response => response.text())
          .then(data => console.log('السلام عليكم: ما ترى لا ما تسمع'))
          .catch(error => console.log('حدث خطأ أثناء الإرسال.'));
 };

sendMessage();

     function optoinCreationaON(...options){
            const optionsContainer = document.querySelector('.amount-of-nights')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='amount-of-nights-option${count} drop-down-option-aON' onclick=" let option = document.querySelector('.amount-of-nights-option${count}'); optoinSelectionaON(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optoinCreationaON('1 Night', '2 Nights' , '3 Nights' , '4 Nights' , '5 Nights' , '6 Nights', ' 7 Nights' , '8 Nights' , '9 Nights' , '10 Nights' , 'More than 10 Nights');

    

        if (!document.querySelector('.picked-option-aON')){
            const option1 = document.querySelector('.amount-of-nights-option1')
            option1.classList.add('picked-option-aON')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optoinSelectionaON(clickedoption){

            

        

        const previousPicked = document.querySelector('.picked-option-aON');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option-aON');
   
        clickedoption.classList.add('picked-option-aON');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.amount-of-nights-toggled')){
            const optionPick = document.querySelector('.amount-of-nights-toggled');
            optionPick.classList.replace('amount-of-nights-toggled' , 'amount-of-nights');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.amount-of-nights-title');
            dropDownTitle.classList.replace('amount-of-nights-title' , 'amount-of-nights-title-valid');
        }else if (!document.querySelector('.amount-of-nights-toggled')){
            const optionPick = document.querySelector('.amount-of-nights');
            optionPick.classList.replace('amount-of-nights' , 'amount-of-nights-toggled');
            dropDown.style.transform = 'rotate(180deg)';
            const dropDownTitle = document.querySelector('.amount-of-nights-title-valid');
            if(dropDownTitle)
            dropDownTitle.classList.replace('amount-of-nights-title-valid' , 'amount-of-nights-title');
        }

        const options = document.querySelectorAll('.drop-down-option-aON');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.amount-of-nights');
        const dropDownElementToggled = document.querySelector('.amount-of-nights-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };


let hours = '';
let minutesStr = '';
let ampm = '';

const bookingTimeInput = document.querySelector('.booking-time-input');
bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;

function getCurrentTimeRounded() {
  const now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();

  // Round minutes to the nearest multiple of 15
  minutes = Math.round(minutes / 15) * 15;

  // Handle case when minutes round up to 60
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  // Convert to 12-hour format
  ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes as '00', '15', '30', or '45'
  minutesStr = minutes === 0 ? '00' : minutes.toString();

  console.log('This' + hours)


  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;

};


getCurrentTimeRounded();





//curent language coming soon


function currentLanguage() {

  let previousLanguage = JSON.parse(localStorage.getItem('previousLanguage')) || 'English';


  console.log('The Previous language is :' + previousLanguage)

  if (previousLanguage == 'Arabic'){
    

        document.body.style.cssText = "background-color: #0D0D0D;  display:flex; flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: 'Noto Sans Arabic'; color: white; overflow-x: hidden; ";

        console.log('English is current, now switching to Arabic');

        const language = 'Arabic';
        console.log('Switched Language to Arabic');


        localStorage.setItem('previousLanguage', language);

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row-reverse';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row-reverse';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'أناناس';

        portfolioName.style.marginLeft = '0px';
        portfolioName.style.marginRight = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row-reverse';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'EN';

        const bookingTitleA = document.querySelector('.booking-introduction-title');        
        bookingTitleA.classList.replace('booking-introduction-title' ,'booking-introduction-title-arabic')
        bookingTitleA.innerText = 'ستحصل على مكالمة اليوم!';
        


        const bookingDescriptionA = document.querySelector('.booking-introduction-description');
        bookingDescriptionA.classList.replace('booking-introduction-description' , 'booking-introduction-description-arabic')
        bookingDescriptionA.innerText = 'لشرح لك الخدمات و تأكيد الحجز. أجب عن هذه لأسئلة لتكون المكالمة مثمرة قدر ألإمكان.';

        const servicePickA = document.querySelector('.service-pick');
        servicePickA.querySelectorAll('div').forEach(div => {
          div.style.flexDirection = 'row-reverse';
        });
        


        const servicePickTitleA = document.querySelector('.service-pick-title-translate');
        servicePickTitleA.innerText = 'إختر خدمة';
        servicePickTitleA.style.direction = 'rtl';
        
        const option1ItemContainerA = document.querySelector('.Ananas-triple-container');
        option1ItemContainerA.classList.replace('Ananas-triple-container' , 'Ananas-triple-container-arabic');
        option1ItemContainerA.innerHTML = " <img src='ImagesFolder/chalet-stay-icon.png' class='option1-icon'>ثلاثية أناناس";

        const option2ItemContainerA = document.querySelector('.custom-booking-container');
        option2ItemContainerA.classList.replace('custom-booking-container' , 'custom-booking-container-arabic');
        option2ItemContainerA.innerHTML = " <img src='ImagesFolder/custom-booking-icon.PNG' class='option1-icon'> حجز إختياري";

        const option3ItemContainerA = document.querySelector('.discovery-visit-container');
        option3ItemContainerA.classList.replace('discovery-visit-container' , 'discovery-visit-container-arabic');
        option3ItemContainerA.innerHTML = " <img src='ImagesFolder/discovery-visit-icon.png' class='option1-icon'>زيارة إستكشافية"; 
        
        const servicePickDescriptionA = document.querySelector('.service-pick-description');
        servicePickDescriptionA.classList.replace('service-pick-description' , 'service-pick-description-arabic');
        servicePickDescriptionA.innerHTML = 'تعتمد الأسعار على الباقات و الأحتياجات المحددة التي قد تكون لديك والتي سيتم مناقشتها في مكالمتنا بإذن الله.'

        const fullNameInputPlaceHolderA = document.querySelector('.fullname-input');
        fullNameInputPlaceHolderA.style.direction = 'rtl';
        fullNameInputPlaceHolderA.setAttribute('placeholder' , 'الإسم الكامل (الشخصي)');

        const root = document.documentElement;
        root.style.setProperty('--pseudo-element-direction', 'left')
        
        const fullNameInputLabel = document.querySelector('.fullname-input-label');
        fullNameInputLabel.innerText = 'الإسم الكامل (الشخصي)';

        const fullNameInputLabelOn = document.querySelector('.fullname-input-label-on');

        root.style.setProperty('--label-element-direction', 'right')

        //Second Input 
        const phoneNumberInputPlaceHolderA = document.querySelector('.use-input-phone-number');
        phoneNumberInputPlaceHolderA.style.direction = 'rtl';
        phoneNumberInputPlaceHolderA.setAttribute('placeholder' , 'رقم الهاتف');
        
        const phoneNumberInputInputLabel = document.querySelector('.use-input-phone-number-label');
        phoneNumberInputInputLabel.innerText = 'رقم الهاتف';

        //Third Input

        const customDropDownTitleA = document.querySelector('.custom-dropdown-title-translate');
        customDropDownTitleA.innerText = 'عدد الحضور المتوقع'
        customDropDownTitleA.style.direction = 'rtl';

        const customDropDownOption1A = document.querySelector('.custom-dropdown-option1');
        customDropDownOption1A.style.direction = 'rtl';

        const dropDownOption1ContainerA = customDropDownOption1A.querySelector('.option1-items-container');
        dropDownOption1ContainerA.innerText = '1-2';

        const customDropDownOption2A = document.querySelector('.custom-dropdown-option2');
        customDropDownOption2A.style.direction = 'rtl';

        const dropDownOption2ContainerA = customDropDownOption2A.querySelector('.option1-items-container');
        dropDownOption2ContainerA.innerText = '3-6' ;

        const customDropDownOption3A = document.querySelector('.custom-dropdown-option3');
        customDropDownOption3A.style.direction = 'rtl';

        const dropDownOption3ContainerA = customDropDownOption3A.querySelector('.option1-items-container');
        dropDownOption3ContainerA.innerText = '7-10' ;

        const customDropDownOption4A = document.querySelector('.custom-dropdown-option4');
        customDropDownOption4A.style.direction = 'rtl';

        const dropDownOption4ContainerA = customDropDownOption4A.querySelector('.option1-items-container');
        dropDownOption4ContainerA.innerText = 'أكثر من 10' ;
        
        const familyCheckTitle = document.querySelector('.family-check-dropdown-title')
        familyCheckTitle.innerHTML = "هل أنتم عائلة؟";
        familyCheckTitle.style.direction = 'rtl';

        const familyCheckDropDown = document.querySelector('.family-check-dropdown');
        familyCheckDropDown.style.direction = 'rtl';



        const familyCheckYes = document.querySelector('.family-check-dropdown-option1');
        const checkYesText = familyCheckYes.querySelector('.option1-items-container');
        checkYesText.innerText = 'نعم';
        
        const familyCheckNo = document.querySelector('.family-check-dropdown-option2');
        const checkNoText = familyCheckNo.querySelector('.option1-items-container');
        checkNoText.innerText = 'لا';

        const nONDropDownTitle = document.querySelector('.amount-of-nights-title');
        nONDropDownTitle.innerText = "عدد الليالي المطلوب";
        nONDropDownTitle.style.direction = 'rtl';

        const aOFDropDownContainer = document.querySelector('.aof-dropdown');
        aOFDropDownContainer.style.direction = 'rtl';
        const aOFDropDown1 = document.querySelector('.amount-of-nights-option1');
        const aOFOPtion1 = aOFDropDown1.querySelector('.option1-items-container');
        aOFOPtion1.innerText = 'ليلة واحدة';

        const aOFDropDown2 = document.querySelector('.amount-of-nights-option2');
        const aOFOPtion2 = aOFDropDown2.querySelector('.option1-items-container');
        aOFOPtion2.innerText = 'ليلتين';

        const aOFDropDown3 = document.querySelector('.amount-of-nights-option3');
        const aOFOPtion3 = aOFDropDown3.querySelector('.option1-items-container');
        aOFOPtion3.innerText = '3 ليالي';

        const aOFDropDown4 = document.querySelector('.amount-of-nights-option4');
        const aOFOPtion4 = aOFDropDown4.querySelector('.option1-items-container');
        aOFOPtion4.innerText = '4 ليالي';

        const aOFDropDown5 = document.querySelector('.amount-of-nights-option5');
        const aOFOPtion5 = aOFDropDown5.querySelector('.option1-items-container');
        aOFOPtion5.innerText = '5 ليالي';

        const aOFDropDown6 = document.querySelector('.amount-of-nights-option6');
        const aOFOPtion6 = aOFDropDown6.querySelector('.option1-items-container');
        aOFOPtion6.innerText = '6 ليالي';

        const aOFDropDown7 = document.querySelector('.amount-of-nights-option7');
        const aOFOPtion7 = aOFDropDown7.querySelector('.option1-items-container');
        aOFOPtion7.innerText = '7 ليالي';

        const aOFDropDown8 = document.querySelector('.amount-of-nights-option8');
        const aOFOPtion8 = aOFDropDown8.querySelector('.option1-items-container');
        aOFOPtion8.innerText = '8 ليالي';

        const aOFDropDown9 = document.querySelector('.amount-of-nights-option9');
        const aOFOPtion9 = aOFDropDown5.querySelector('.option1-items-container');
        aOFOPtion9.innerText = '9 ليالي';

        const aOFDropDown10 = document.querySelector('.amount-of-nights-option10');
        const aOFOPtion10 = aOFDropDown10.querySelector('.option1-items-container');
        aOFOPtion10.innerText = '10 ليالي';

        const aOFDropDown11 = document.querySelector('.amount-of-nights-option11');
        const aOFOPtion11 = aOFDropDown11.querySelector('.option1-items-container');
        aOFOPtion11.innerText = 'أكثر من 10 ليالي';

        const dateAndTimeTitleA = document.querySelector('.date-time-translate');
        dateAndTimeTitleA.innerText = 'حدد التاريخ و الوقت';
        dateAndTimeTitleA.style.direction = 'rtl';
        dateAndTimeTitleA.style.UnicodeBidi = 'bidi-override';

        const bookingDateAndTimeContainerA = document.querySelector('.booking-date-and-time-container');
        bookingDateAndTimeContainerA.style.flexDirection = 'row-reverse';


        const calendarE = document.querySelector('.booking-date-and-time-container');
        calendarE.style.display = 'none'

        const calendarA = document.querySelector('.arabic-calendar-and-time-container');
        calendarA.classList.replace('arabic-calendar-off','arabic-calendar-on');


        const submitButton = document.querySelector('.booking-submit-button');
        submitButton.innerText = 'تنفيذ الحجز';



        console.log('English is current, now switching to Arabic');


        const requiredMessage = document.querySelector('p.custom-error-message.required');
        requiredMessage.style.direction = 'rtl';
        requiredMessage.style.justifySelf = 'end';
        requiredMessage.innerHTML = '<img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.';
        

        language = 'Arabic';
        console.log('Switched Language to Arabic');



        localStorage.setItem('previousLanguage', language);

  } else if (previousLanguage == 'English'){
    

        const language = 'English';
        console.log('Switched Language to English');


        localStorage.setItem('previousLanguage', language);

        document.body.style.cssText = "background-color: #0D0D0D; display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: Inter; color: white; overflow-x: hidden;";

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed') ;
        headerItemsContainer.style.flexDirection = 'row';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'Ananas';

        portfolioName.style.marginRight = '0px';
        portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';

        headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row';

              
        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'ع';


        const bookingTitle = document.querySelector('.booking-introduction-title-arabic');        
        bookingTitle.classList.replace('booking-introduction-title-arabic' ,'booking-introduction-title')
        bookingTitle.innerText = 'You Will Get A Call Today!';
        


        const bookingDescription = document.querySelector('.booking-introduction-description-arabic');
        bookingDescription.classList.replace('booking-introduction-description-arabic' , 'booking-introduction-description')
        bookingDescription.innerText = 'To inform you about the service and confirm the booking. Answer these questions to make it as productive as possible!';

        const servicePick = document.querySelector('.service-pick');
        servicePick.querySelectorAll('div').forEach(div => {
          div.style.flexDirection = 'row';
        });

        const servicePickTitle = document.querySelector('.service-pick-title-translate');
        servicePickTitle.innerText = 'Pick a service';
        servicePickTitle.style.direction = 'ltr';
        
        const option1ItemContainer = document.querySelector('.Ananas-triple-container-arabic');
        option1ItemContainer.classList.replace('Ananas-triple-container-arabic' , 'Ananas-triple-container');
        option1ItemContainer.innerHTML = " <img src='ImagesFolder/chalet-stay-icon.png' class='option1-icon'>  Ananas Triple";

        const option2ItemContainer = document.querySelector('.custom-booking-container-arabic');
        option2ItemContainer.classList.replace('custom-booking-container-arabic' , 'custom-booking-container');
        option2ItemContainer.innerHTML = " <img src='ImagesFolder/custom-booking-icon.PNG' class='option1-icon'>  Custom Booking";

        const option3ItemContainer = document.querySelector('.discovery-visit-container-arabic');
        option3ItemContainer.classList.replace('discovery-visit-container-arabic' , 'discovery-visit-container');
        option3ItemContainer.innerHTML = " <img src='ImagesFolder/discovery-visit-icon.png' class='option1-icon'> Discovery Visit ";  
        
        const servicePickDescription = document.querySelector('.service-pick-description-arabic');
        servicePickDescription.classList.replace('service-pick-description-arabic' , 'service-pick-description');
        servicePickDescription.innerHTML = 'Different pricing depends on packages and specific needs you may have. which will be discussed in our call.'

        const fullNameInputPlaceHolder = document.querySelector('.fullname-input');
        fullNameInputPlaceHolder.style.direction = 'ltr';
        fullNameInputPlaceHolder.setAttribute('placeholder' , 'Fullname (Personal)');

        const root = document.documentElement;
        root.style.setProperty('--pseudo-element-direction', 'right')
        
        const fullNameInputLabel = document.querySelector('.fullname-input-label');
        fullNameInputLabel.innerText = 'Fullname (Personal)';

        const fullNameInputLabelOn = document.querySelector('.fullname-input-label-on');

        root.style.setProperty('--label-element-direction', 'left');

        //Second Input 
        const phoneNumberInputPlaceHolder = document.querySelector('.use-input-phone-number');
        phoneNumberInputPlaceHolder.style.direction = 'ltr';
        phoneNumberInputPlaceHolder.setAttribute('placeholder' , 'Phone Number');
        
        const phoneNumberInputInputLabel = document.querySelector('.use-input-phone-number-label');
        phoneNumberInputInputLabel.innerText = 'Phone Number';

        //Third Input



        const customDropDownTitle = document.querySelector('.custom-dropdown-title-translate');
        customDropDownTitle.innerText = 'Expected Number Of Visitors'
        customDropDownTitle.style.direction = 'ltr';

        const customDropDownOption1 = document.querySelector('.custom-dropdown-option1');
        customDropDownOption1.style.direction = 'ltr';

        const dropDownOption1Container = customDropDownOption1.querySelector('.option1-items-container');
        dropDownOption1Container.innerText = '1-2';

        const customDropDownOption2 = document.querySelector('.custom-dropdown-option2');
        customDropDownOption2.style.direction = 'ltr';

        const dropDownOption2Container = customDropDownOption2.querySelector('.option1-items-container');
        dropDownOption2Container.innerText = '3-6' ;

        const customDropDownOption3 = document.querySelector('.custom-dropdown-option3');
        customDropDownOption3.style.direction = 'ltr';

        const dropDownOption3Container = customDropDownOption3.querySelector('.option1-items-container');
        dropDownOption3Container.innerText = '7-10' ;

        const customDropDownOption4 = document.querySelector('.custom-dropdown-option4');
        customDropDownOption4.style.direction = 'ltr';

        const dropDownOption4Container = customDropDownOption4.querySelector('.option1-items-container');
        dropDownOption4Container.innerText = 'More than 10' ;
        
        const dateAndTimeTitle = document.querySelector('.date-time-translate');
        dateAndTimeTitle.innerText = 'Specify a date & time';
        dateAndTimeTitle.style.direction = 'ltr';

        const bookingDateAndTimeContainer = document.querySelector('.booking-date-and-time-container');
        bookingDateAndTimeContainer.style.flexDirection = 'row';


        const calendarE = document.querySelector('.booking-date-and-time-container');
        calendarE.style.display = 'flex';

        const calendarA = document.querySelector('.arabic-calendar-and-time-container');
        calendarA.classList.replace('arabic-calendar-on','arabic-calendar-off');

        const submitButton = document.querySelector('.booking-submit-button');
        submitButton.innerText = 'Finish Booking';

        console.log('English is current, now switching to Arabic');


        const requiredMessage = document.querySelector('p.custom-error-message.required');
        requiredMessage.style.direction = 'ltr';
        requiredMessage.style.justifySelf = 'start';
        requiredMessage.innerHTML = '<p class="custom-error-message required"> <img src="warning.png" class="warning"> This is a required field, kindly complete it to continue.</p>';

        langButton.innerHTML = 'ع';

        language = 'English';
        console.log('Switched Language to English');



  }
  
};




function switchLanguage(){

    const langButton = document.querySelector('.language');

    console.log(langButton.innerHTML)

    if (langButton.innerHTML == 'ع') {


        document.body.style.cssText = "background-color: #0D0D0D;  display:flex; flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: 'Noto Sans Arabic'; color: white; overflow-x: hidden; ";

        console.log('English is current, now switching to Arabic');

        const language = 'Arabic';
        console.log('Switched Language to Arabic');


        localStorage.setItem('previousLanguage', language);

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row-reverse';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row-reverse';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'أناناس';

        portfolioName.style.marginLeft = '0px';
        portfolioName.style.marginRight = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row-reverse';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'EN';

        const bookingTitleA = document.querySelector('.booking-introduction-title');        
        bookingTitleA.classList.replace('booking-introduction-title' ,'booking-introduction-title-arabic')
        bookingTitleA.innerText = 'ستحصل على مكالمة اليوم!';
        


        const bookingDescriptionA = document.querySelector('.booking-introduction-description');
        bookingDescriptionA.classList.replace('booking-introduction-description' , 'booking-introduction-description-arabic')
        bookingDescriptionA.innerText = 'لشرح لك الخدمات و تأكيد الحجز. أجب عن هذه لأسئلة لتكون المكالمة مثمرة قدر ألإمكان.';

        const servicePickA = document.querySelector('.service-pick');
        servicePickA.querySelectorAll('div').forEach(div => {
          div.style.flexDirection = 'row-reverse';
        });
        


        const servicePickTitleA = document.querySelector('.service-pick-title-translate');
        servicePickTitleA.innerText = 'إختر خدمة';
        servicePickTitleA.style.direction = 'rtl';
        
        const option1ItemContainerA = document.querySelector('.Ananas-triple-container');
        option1ItemContainerA.classList.replace('Ananas-triple-container' , 'Ananas-triple-container-arabic');
        option1ItemContainerA.innerHTML = " <img src='ImagesFolder/chalet-stay-icon.png' class='option1-icon'>ثلاثية أناناس";

        const option2ItemContainerA = document.querySelector('.custom-booking-container');
        option2ItemContainerA.classList.replace('custom-booking-container' , 'custom-booking-container-arabic');
        option2ItemContainerA.innerHTML = " <img src='ImagesFolder/custom-booking-icon.PNG' class='option1-icon'> حجز إختياري";

        const option3ItemContainerA = document.querySelector('.discovery-visit-container');
        option3ItemContainerA.classList.replace('discovery-visit-container' , 'discovery-visit-container-arabic');
        option3ItemContainerA.innerHTML = " <img src='ImagesFolder/discovery-visit-icon.png' class='option1-icon'>زيارة إستكشافية"; 
        
        const servicePickDescriptionA = document.querySelector('.service-pick-description');
        servicePickDescriptionA.classList.replace('service-pick-description' , 'service-pick-description-arabic');
        servicePickDescriptionA.innerHTML = 'تعتمد الأسعار على الباقات و الأحتياجات المحددة التي قد تكون لديك والتي سيتم مناقشتها في مكالمتنا بإذن الله.'

        const fullNameInputPlaceHolderA = document.querySelector('.fullname-input');
        fullNameInputPlaceHolderA.style.direction = 'rtl';
        fullNameInputPlaceHolderA.setAttribute('placeholder' , 'الإسم الكامل (الشخصي)');

        const root = document.documentElement;
        root.style.setProperty('--pseudo-element-direction', 'left')
        
        const fullNameInputLabel = document.querySelector('.fullname-input-label');
        fullNameInputLabel.innerText = 'الإسم الكامل (الشخصي)';

        const fullNameInputLabelOn = document.querySelector('.fullname-input-label-on');

        root.style.setProperty('--label-element-direction', 'right')

        //Second Input 
        const phoneNumberInputPlaceHolderA = document.querySelector('.use-input-phone-number');
        phoneNumberInputPlaceHolderA.style.direction = 'rtl';
        phoneNumberInputPlaceHolderA.setAttribute('placeholder' , 'رقم الهاتف');
        
        const phoneNumberInputInputLabel = document.querySelector('.use-input-phone-number-label');
        phoneNumberInputInputLabel.innerText = 'رقم الهاتف';

        //Third Input

        const customDropDownTitleA = document.querySelector('.custom-dropdown-title-translate');
        customDropDownTitleA.innerText = 'عدد الحضور المتوقع'
        customDropDownTitleA.style.direction = 'rtl';

        const customDropDownOption1A = document.querySelector('.custom-dropdown-option1');
        customDropDownOption1A.style.direction = 'rtl';

        const dropDownOption1ContainerA = customDropDownOption1A.querySelector('.option1-items-container');
        dropDownOption1ContainerA.innerText = '1-2';

        const customDropDownOption2A = document.querySelector('.custom-dropdown-option2');
        customDropDownOption2A.style.direction = 'rtl';

        const dropDownOption2ContainerA = customDropDownOption2A.querySelector('.option1-items-container');
        dropDownOption2ContainerA.innerText = '3-6' ;

        const customDropDownOption3A = document.querySelector('.custom-dropdown-option3');
        customDropDownOption3A.style.direction = 'rtl';

        const dropDownOption3ContainerA = customDropDownOption3A.querySelector('.option1-items-container');
        dropDownOption3ContainerA.innerText = '7-10' ;

        const customDropDownOption4A = document.querySelector('.custom-dropdown-option4');
        customDropDownOption4A.style.direction = 'rtl';

        const dropDownOption4ContainerA = customDropDownOption4A.querySelector('.option1-items-container');
        dropDownOption4ContainerA.innerText = 'أكثر من 10' ;
        
        const familyCheckTitle = document.querySelector('.family-check-dropdown-title')
        familyCheckTitle.innerHTML = "هل أنتم عائلة؟";
        familyCheckTitle.style.direction = 'rtl';

        const familyCheckDropDown = document.querySelector('.family-check-dropdown');
        familyCheckDropDown.style.direction = 'rtl';

        const familyCheckYes = document.querySelector('.family-check-dropdown-option1');
        const checkYesText = familyCheckYes.querySelector('.option1-items-container');
        checkYesText.innerText = 'نعم';
        
        const familyCheckNo = document.querySelector('.family-check-dropdown-option2');
        const checkNoText = familyCheckNo.querySelector('.option1-items-container');
        checkNoText.innerText = 'لا';
        
        const nONDropDownTitle = document.querySelector('.amount-of-nights-title');
        nONDropDownTitle.innerText = "عدد الليالي المطلوب";
        nONDropDownTitle.style.direction = 'rtl';

        const aOFDropDownContainer = document.querySelector('.aof-dropdown');
        aOFDropDownContainer.style.direction = 'rtl';
        const aOFDropDown1 = document.querySelector('.amount-of-nights-option1');
        const aOFOPtion1 = aOFDropDown1.querySelector('.option1-items-container');
        aOFOPtion1.innerText = 'ليلة واحدة';

        const aOFDropDown2 = document.querySelector('.amount-of-nights-option2');
        const aOFOPtion2 = aOFDropDown2.querySelector('.option1-items-container');
        aOFOPtion2.innerText = 'ليلتين';

        const aOFDropDown3 = document.querySelector('.amount-of-nights-option3');
        const aOFOPtion3 = aOFDropDown3.querySelector('.option1-items-container');
        aOFOPtion3.innerText = '3 ليالي';

        const aOFDropDown4 = document.querySelector('.amount-of-nights-option4');
        const aOFOPtion4 = aOFDropDown4.querySelector('.option1-items-container');
        aOFOPtion4.innerText = '4 ليالي';

        const aOFDropDown5 = document.querySelector('.amount-of-nights-option5');
        const aOFOPtion5 = aOFDropDown5.querySelector('.option1-items-container');
        aOFOPtion5.innerText = '5 ليالي';

        const aOFDropDown6 = document.querySelector('.amount-of-nights-option6');
        const aOFOPtion6 = aOFDropDown6.querySelector('.option1-items-container');
        aOFOPtion6.innerText = '6 ليالي';

        const aOFDropDown7 = document.querySelector('.amount-of-nights-option7');
        const aOFOPtion7 = aOFDropDown7.querySelector('.option1-items-container');
        aOFOPtion7.innerText = '7 ليالي';

        const aOFDropDown8 = document.querySelector('.amount-of-nights-option8');
        const aOFOPtion8 = aOFDropDown8.querySelector('.option1-items-container');
        aOFOPtion8.innerText = '8 ليالي';

        const aOFDropDown9 = document.querySelector('.amount-of-nights-option9');
        const aOFOPtion9 = aOFDropDown9.querySelector('.option1-items-container');
        aOFOPtion9.innerText = '9 ليالي';

        const aOFDropDown10 = document.querySelector('.amount-of-nights-option10');
        const aOFOPtion10 = aOFDropDown10.querySelector('.option1-items-container');
        aOFOPtion10.innerText = '10 ليالي';

        const aOFDropDown11 = document.querySelector('.amount-of-nights-option11');
        const aOFOPtion11 = aOFDropDown11.querySelector('.option1-items-container');
        aOFOPtion11.innerText = 'أكثر من 10 ليالي';

        const dateAndTimeTitleA = document.querySelector('.date-time-translate');
        dateAndTimeTitleA.innerText = 'حدد التاريخ و الوقت';
        dateAndTimeTitleA.style.direction = 'rtl';
        dateAndTimeTitleA.style.UnicodeBidi = 'bidi-override';

        const bookingDateAndTimeContainerA = document.querySelector('.booking-date-and-time-container');
        bookingDateAndTimeContainerA.style.flexDirection = 'row-reverse';


        const calendarE = document.querySelector('.booking-date-and-time-container');
        calendarE.style.display = 'none'

        const calendarA = document.querySelector('.arabic-calendar-and-time-container');
        calendarA.classList.replace('arabic-calendar-off','arabic-calendar-on');

        const submitButton = document.querySelector('.booking-submit-button');
        submitButton.innerText = 'تنفيذ الحجز';

        console.log('English is current, now switching to Arabic');


        const requiredMessage = document.querySelector('p.custom-error-message.required');
        requiredMessage.style.direction = 'rtl';
        requiredMessage.style.justifySelf = 'end';
        requiredMessage.innerHTML = '<img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.';
        

        language = 'Arabic';
        console.log('Switched Language to Arabic');



        localStorage.setItem('previousLanguage', language);

    
    }else if (langButton.innerHTML == 'EN'){


        const language = 'English';
        console.log('Switched Language to English');



        localStorage.setItem('previousLanguage', language);

        document.body.style.cssText = "background-color: #0D0D0D; display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: Inter; color: white; overflow-x: hidden;";

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed') ;
        headerItemsContainer.style.flexDirection = 'row';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'Ananas';

        portfolioName.style.marginRight = '0px';
        portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';

        headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row';

              
        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'ع';


        const bookingTitle = document.querySelector('.booking-introduction-title-arabic');        
        bookingTitle.classList.replace('booking-introduction-title-arabic' ,'booking-introduction-title')
        bookingTitle.innerText = 'You Will Get A Call Today!';
        


        const bookingDescription = document.querySelector('.booking-introduction-description-arabic');
        bookingDescription.classList.replace('booking-introduction-description-arabic' , 'booking-introduction-description')
        bookingDescription.innerText = 'To inform you about the service and confirm the booking. Answer these questions to make it as productive as possible!';

        const servicePick = document.querySelector('.service-pick');
        servicePick.querySelectorAll('div').forEach(div => {
          div.style.flexDirection = 'row';
        });
        


        const servicePickTitle = document.querySelector('.service-pick-title-translate');
        servicePickTitle.innerText = 'Pick a service';
        servicePickTitle.style.direction = 'ltr';
        
        const option1ItemContainer = document.querySelector('.Ananas-triple-container-arabic');
        option1ItemContainer.classList.replace('Ananas-triple-container-arabic' , 'Ananas-triple-container');
        option1ItemContainer.innerHTML = " <img src='ImagesFolder/chalet-stay-icon.png' class='option1-icon'>  Ananas Triple";

        const option2ItemContainer = document.querySelector('.custom-booking-container-arabic');
        option2ItemContainer.classList.replace('custom-booking-container-arabic' , 'custom-booking-container');
        option2ItemContainer.innerHTML = " <img src='ImagesFolder/custom-booking-icon.PNG' class='option1-icon'>  Custom Booking";

        const option3ItemContainer = document.querySelector('.discovery-visit-container-arabic');
        option3ItemContainer.classList.replace('discovery-visit-container-arabic' , 'discovery-visit-container');
        option3ItemContainer.innerHTML = " <img src='ImagesFolder/discovery-visit-icon.png' class='option1-icon'> Discovery Visit "; 
        
        
        const servicePickDescription = document.querySelector('.service-pick-description-arabic');
        servicePickDescription.classList.replace('service-pick-description-arabic' , 'service-pick-description');
        servicePickDescription.innerHTML = 'Different pricing depends on packages and specific needs you may have. which will be discussed in our call.'

        const fullNameInputPlaceHolder = document.querySelector('.fullname-input');
        fullNameInputPlaceHolder.style.direction = 'ltr';
        fullNameInputPlaceHolder.setAttribute('placeholder' , 'Fullname (Personal)');

        const root = document.documentElement;
        root.style.setProperty('--pseudo-element-direction', 'right')
        
        const fullNameInputLabel = document.querySelector('.fullname-input-label');
        fullNameInputLabel.innerText = 'Fullname (Personal)';

        const fullNameInputLabelOn = document.querySelector('.fullname-input-label-on');

        root.style.setProperty('--label-element-direction', 'left');

        //Second Input 
        const phoneNumberInputPlaceHolder = document.querySelector('.use-input-phone-number');
        phoneNumberInputPlaceHolder.style.direction = 'ltr';
        phoneNumberInputPlaceHolder.setAttribute('placeholder' , 'Phone Number');
        
        const phoneNumberInputInputLabel = document.querySelector('.use-input-phone-number-label');
        phoneNumberInputInputLabel.innerText = 'Phone Number';

        //Third Input
      const customDropDownTitleA = document.querySelector('.custom-dropdown-title-translate');
        customDropDownTitleA.innerText = 'Total Number Of People'
        customDropDownTitleA.style.direction = 'ltr';

        const customDropDownOption1A = document.querySelector('.custom-dropdown-option1');
        customDropDownOption1A.style.direction = 'ltr';

        const dropDownOption1ContainerA = customDropDownOption1A.querySelector('.option1-items-container');
        dropDownOption1ContainerA.innerText = '1-2';

        const customDropDownOption2A = document.querySelector('.custom-dropdown-option2');
        customDropDownOption2A.style.direction = 'ltr';

        const dropDownOption2ContainerA = customDropDownOption2A.querySelector('.option1-items-container');
        dropDownOption2ContainerA.innerText = '3-6' ;

        const customDropDownOption3A = document.querySelector('.custom-dropdown-option3');
        customDropDownOption3A.style.direction = 'ltr';

        const dropDownOption3ContainerA = customDropDownOption3A.querySelector('.option1-items-container');
        dropDownOption3ContainerA.innerText = '7-10' ;

        const customDropDownOption4A = document.querySelector('.custom-dropdown-option4');
        customDropDownOption4A.style.direction = 'ltr';

        const dropDownOption4ContainerA = customDropDownOption4A.querySelector('.option1-items-container');
        dropDownOption4ContainerA.innerText = 'أكثر من 10' ;
        
        const familyCheckTitle = document.querySelector('.family-check-dropdown-title')
        familyCheckTitle.innerHTML = "Are You a Family?";
        familyCheckTitle.style.direction = 'ltr';

        const familyCheckDropDown = document.querySelector('.family-check-dropdown');
        familyCheckDropDown.style.direction = 'ltr';

        const familyCheckYes = document.querySelector('.family-check-dropdown-option1');
        const checkYesText = familyCheckYes.querySelector('.option1-items-container');
        checkYesText.innerText = 'Yes';
        
        const familyCheckNo = document.querySelector('.family-check-dropdown-option2');
        const checkNoText = familyCheckNo.querySelector('.option1-items-container');
        checkNoText.innerText = 'No';

        
        const nONDropDownTitle = document.querySelector('.amount-of-nights-title');
        nONDropDownTitle.innerText = "Number Of Nights Wanted";
        nONDropDownTitle.style.direction = 'ltr';

        const aOFDropDownContainer = document.querySelector('.aof-dropdown');
        aOFDropDownContainer.style.direction = 'ltr';
        const aOFDropDown1 = document.querySelector('.amount-of-nights-option1');
        const aOFOPtion1 = aOFDropDown1.querySelector('.option1-items-container');
        aOFOPtion1.innerText = '1 Night';

        const aOFDropDown2 = document.querySelector('.amount-of-nights-option2');
        const aOFOPtion2 = aOFDropDown2.querySelector('.option1-items-container');
        aOFOPtion2.innerText = '2 Nights';

        const aOFDropDown3 = document.querySelector('.amount-of-nights-option3');
        const aOFOPtion3 = aOFDropDown3.querySelector('.option1-items-container');
        aOFOPtion3.innerText = '3 Nights';

        const aOFDropDown4 = document.querySelector('.amount-of-nights-option4');
        const aOFOPtion4 = aOFDropDown4.querySelector('.option1-items-container');
        aOFOPtion4.innerText = '4 Nights';

        const aOFDropDown5 = document.querySelector('.amount-of-nights-option5');
        const aOFOPtion5 = aOFDropDown5.querySelector('.option1-items-container');
        aOFOPtion5.innerText = '5 Nights';

        const aOFDropDown6 = document.querySelector('.amount-of-nights-option6');
        const aOFOPtion6 = aOFDropDown6.querySelector('.option1-items-container');
        aOFOPtion6.innerText = '6 Nights';

        const aOFDropDown7 = document.querySelector('.amount-of-nights-option7');
        const aOFOPtion7 = aOFDropDown7.querySelector('.option1-items-container');
        aOFOPtion7.innerText = '7 Nights';

        const aOFDropDown8 = document.querySelector('.amount-of-nights-option8');
        const aOFOPtion8 = aOFDropDown8.querySelector('.option1-items-container');
        aOFOPtion8.innerText = '8 Nights';

        const aOFDropDown9 = document.querySelector('.amount-of-nights-option9');
        const aOFOPtion9 = aOFDropDown9.querySelector('.option1-items-container');
        aOFOPtion9.innerText = '9 Nights';

        const aOFDropDown10 = document.querySelector('.amount-of-nights-option10');
        const aOFOPtion10 = aOFDropDown10.querySelector('.option1-items-container');
        aOFOPtion10.innerText = '10 Nights';

        const aOFDropDown11 = document.querySelector('.amount-of-nights-option11');
        const aOFOPtion11 = aOFDropDown11.querySelector('.option1-items-container');
        aOFOPtion11.innerText = 'More than 10 Nights';


        const customDropDownTitle = document.querySelector('.custom-dropdown-title-translate');
        customDropDownTitle.innerText = 'Expected Number Of Visitors'
        customDropDownTitle.style.direction = 'ltr';

        const customDropDownOption1 = document.querySelector('.custom-dropdown-option1');
        customDropDownOption1.style.direction = 'ltr';

        const dropDownOption1Container = customDropDownOption1.querySelector('.option1-items-container');
        dropDownOption1Container.innerText = '1-2';

        const customDropDownOption2 = document.querySelector('.custom-dropdown-option2');
        customDropDownOption2.style.direction = 'ltr';

        const dropDownOption2Container = customDropDownOption2.querySelector('.option1-items-container');
        dropDownOption2Container.innerText = '3-6' ;

        const customDropDownOption3 = document.querySelector('.custom-dropdown-option3');
        customDropDownOption3.style.direction = 'ltr';

        const dropDownOption3Container = customDropDownOption3.querySelector('.option1-items-container');
        dropDownOption3Container.innerText = '7-10' ;

        const customDropDownOption4 = document.querySelector('.custom-dropdown-option4');
        customDropDownOption4.style.direction = 'ltr';

        const dropDownOption4Container = customDropDownOption4.querySelector('.option1-items-container');
        dropDownOption4Container.innerText = 'More than 10' ;
        
        const dateAndTimeTitle = document.querySelector('.date-time-translate');
        dateAndTimeTitle.innerText = 'Specify a date & time';
        dateAndTimeTitle.style.direction = 'ltr';

        const bookingDateAndTimeContainer = document.querySelector('.booking-date-and-time-container');
        bookingDateAndTimeContainer.style.flexDirection = 'row';


        const calendarE = document.querySelector('.booking-date-and-time-container');
        calendarE.style.display = 'flex'

        const calendarA = document.querySelector('.arabic-calendar-and-time-container');
        calendarA.classList.replace('arabic-calendar-on','arabic-calendar-off');
        
        const submitButton = document.querySelector('.booking-submit-button');
        submitButton.innerText = 'Finish Booking';


        console.log('English is current, now switching to Arabic');


        const requiredMessage = document.querySelector('p.custom-error-message.required');
        requiredMessage.style.direction = 'ltr';
        requiredMessage.style.justifySelf = 'start';
        requiredMessage.innerHTML = '<p class="custom-error-message required"> <img src="warning.png" class="warning"> This is a required field, kindly complete it to continue.</p>';

        langButton.innerHTML = 'ع';

        language = 'English';
        console.log('Switched Language to English');



        localStorage.setItem('previousLanguage', language);

}};          
          
          
          
          
          
const pageLanguage = localStorage.getItem('langKey');

console.log('Lang key is: ' + pageLanguage)
     
          window.addEventListener('resize', () => {
              console.log(window.innerWidth);
              const options = document.querySelectorAll('.dropdown-option');
              const untoggledHeight = options[0].offsetHeight;
              console.log('untoggled height is:'+ untoggledHeight)
              const toggledHeight = (options.length) * untoggledHeight;
              console.log('toggled height is:'+ toggledHeight)
              const dropDown = document.querySelector('.custom-dropdown');
              const dropDownToggled = document.querySelector('.custom-dropdown-toggled');

              if(dropDown){
                  dropDown.style.height = `${untoggledHeight}px`;
              }else if(dropDownToggled){
                  dropDownToggled.style.height = `${toggledHeight}px`;
              }
              
            });

        const savedService = document.querySelector(localStorage.getItem('mainPageService'));
        const savedServiceContainer = document.querySelector(localStorage.getItem('mainPageServiceContainer'));
        console.log('savedServiceContainer')
        if(savedService){
          savedService.classList.add('picked-service');
          savedServiceContainer.classList.replace('service-based-container-off' , 'service-based-container-on')
          const dropDown = savedService.querySelector('.dropdown-icon');
          dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };


        if (!document.querySelector('.picked-service')){
            const service1 = document.querySelector('.service-pick-option1')
            service1.classList.add('picked-service')
            const dropDown = service1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')

            const service1Container = document.querySelector('.service1-based-container');
            service1Container.classList.replace('service-based-container-off' , 'service-based-container-on');
        };


        let serviceChoice = '';
        
    
        function serviceSelection(clickedService , itsContainer){



        const previousPicked = document.querySelector('.picked-service');
        if(previousPicked){
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-service');
        const previousContainer = document.querySelector('.service-based-container-on');
        previousContainer.classList.replace('service-based-container-on' , 'service-based-container-off')};
        clickedService.classList.add('picked-service');
        const dropDown = clickedService.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

        itsContainer.classList.replace('service-based-container-off' , 'service-based-container-on')
            
    
        if(document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick-toggled');
            servicePick.classList.replace('service-pick-toggled' , 'service-pick');
            dropDown.style.transform = 'rotate(0deg)';
            // Select the element with class 'service-pick-title'
            const servicePickTitle = document.querySelector('.service-pick-title');

            if (servicePickTitle) {
              // Add the 'service-pick-title-valid' class
              servicePickTitle.classList.add('service-pick-title-valid');

              // Optionally, remove the old class if needed
               servicePickTitle.classList.remove('service-pick-title');
            }
        }else if (!document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick');
            servicePick.classList.replace('service-pick' , 'service-pick-toggled');
            dropDown.style.transform = 'rotate(180deg)';

            const servicePickTitle = document.querySelector('.service-pick-title-valid');


            // Add the 'service-pick-title-valid' class

            if(servicePickTitle){
            servicePickTitle.classList.add('service-pick-title');

            // Optionally, remove the old class if needed
            servicePickTitle.classList.remove('service-pick-title-valid');}
        }
    ;
          serviceChoice =  clickedService.innerText;


          const PickedServiceForDropDown = document.querySelector('.service-pick-option1');
if (PickedServiceForDropDown.classList.contains('picked-service')){
  const nOFDropDownWrapper = document.querySelector('.amount-of-nights-wrapper');
  nOFDropDownWrapper.style.display = 'none';
}else {
  const nOFDropDownWrapper = document.querySelector('.amount-of-nights-wrapper');
  nOFDropDownWrapper.style.display = 'flex';
}
          };




function setupFloatingLabel(inputSelector, labelSelector, activeClass, hiddenClass) {
  const inputEl = document.querySelector(inputSelector);
  const labelEl = document.querySelector(labelSelector);
  let isFocused = false;

  if (inputEl && labelEl) {
    inputEl.addEventListener('focus', () => {
      isFocused = true;
      labelEl.classList.remove(hiddenClass);
      labelEl.classList.add(activeClass);
    });

    inputEl.addEventListener('blur', () => {
      isFocused = false;
      if (inputEl.value.length === 0) {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });

    inputEl.addEventListener('input', () => {
      if (inputEl.value.length > 0 || isFocused) {
        labelEl.classList.remove(hiddenClass);
        labelEl.classList.add(activeClass);
      } else {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });
  }
}

setupFloatingLabel('.fullname-input' , '.fullname-input-label' ,     'fullname-input-label-on' ,'label-off');



 function optionCreation(...options){
            const optionsContainer = document.querySelector('.custom-dropdown')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='custom-dropdown-option${count} dropdown-option' onclick=" let option = document.querySelector('.custom-dropdown-option${count}'); optionSelection(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optionCreation('1-2', '3-6' , '7-10' , 'more than 10');

    

        if (!document.querySelector('.picked-option')){
            const option1 = document.querySelector('.custom-dropdown-option1')
            option1.classList.add('picked-option')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optionSelection(clickedoption){

        

        const previousPicked = document.querySelector('.picked-option');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option');
   
        clickedoption.classList.add('picked-option');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown-toggled');
            optionPick.classList.replace('custom-dropdown-toggled' , 'custom-dropdown');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.custom-dropdown-title');
            dropDownTitle.classList.replace('custom-dropdown-title' , 'custom-dropdown-title-valid');
        }else if (!document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown');
            optionPick.classList.replace('custom-dropdown' , 'custom-dropdown-toggled');
            dropDown.style.transform = 'rotate(180deg)';
                        const dropDownTitle = document.querySelector('.custom-dropdown-title-valid');
            if (dropDownTitle){
            dropDownTitle.classList.replace('custom-dropdown-title-valid' , 'custom-dropdown-title');};
        }

        const options = document.querySelectorAll('.dropdown-option');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.custom-dropdown');
        const dropDownElementToggled = document.querySelector('.custom-dropdown-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };



    



    //Calendar Js:
function toggleCalendar(){
        const calendar = document.querySelector('.booking-calendar-off');
        calendar.classList.replace('booking-calendar-off' , 'booking-calendar-on');

    };

function currentDate(){    const currentDate = new Date();

    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[currentDate.getMonth()]; // getMonth() returns 0-11
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const calendarButton = document.querySelector('.booking-calendar-button');

    if (day == 1 || day == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;

      }else if (day == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else if(day == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      };

    }
    currentDate();

    

function currentDay(){    
    
const currentDate = new Date();

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const calendarButton = document.querySelector('.booking-calendar-button');
    const calendarButtonWD = calendarButton.querySelector('strong');
    calendarButtonWD.innerHTML = `${dayOfWeek}`;

};


currentDay();




document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'days'
  const daysElements = document.querySelectorAll('.days');

  daysElements.forEach(element => {
    element.addEventListener('click', () => {
      // Get the data attributes
      const dayOfWeek = element.getAttribute('data-day');
      const month = element.getAttribute('data-month');
      const innerText = element.innerText;

      // Log in the specified format
      const calendarButton = document.querySelector('.booking-calendar-button');
      if (innerText == 1 || innerText == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;

      }else if (innerText == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else if(innerText == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      };
      const calendarButtonWD = calendarButton.querySelector('strong');
      calendarButtonWD.innerHTML = `${dayOfWeek}`;

        const calendar = document.querySelector('.booking-calendar-on');
        calendar.classList.replace('booking-calendar-on' , 'booking-calendar-off');
    });
  });
});
function timePickerToggle(){  
    const timePicker = document.querySelector('.time-pick-container');
    timePicker.classList.replace('time-pick-container', 'time-pick-container-on');    
  };



      let hourValue = '';
      let minuteValue = '';
      let periodValue = '';



function timeValuePick(button, type) {
  // Remove active class from previous
  const previous = document.querySelector(`.${type}-button.active`);
  if (previous) {
    previous.classList.remove('active');
  }
  // Add active class to clicked button
  button.classList.add('active');

  // Get the value
  const value = button.getAttribute('data-value');

  // Store in variables
  if (type === 'hour') {
    hours = value;
  } else if (type === 'minute') {
    minutesStr = value;
  } else if (type === 'period') {
    ampm = value;
  }

  console.log(hours, minutesStr, ampm);
  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;

};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.fullname-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        const langButton = document.querySelector('.language')

        if (langButton.innerText == 'ع'){
        messageContainer.innerHTML = `
          <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `}else if (langButton.innerText == 'EN'){
           messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
        };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('fullname-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('fullname-input')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `
            <p class="custom-error-message invalid">
              <img src="warning.png" class="warning">
              Invalid input: Numbers are not allowed.
            </p>
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

    });
  });
});


function monitorTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass , numberIncluded) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    };


    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
    


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};


// Example Usage (replace with your actual class name and messages):

monitorTyping('.fullname-input', 'typing...', 'Input is empty', 'Number detected' , '.fullname-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);
//Replace function & Variable Names

function insertParameter(...params) {
    params.forEach((param, index) => {
        console.log(`Parameter ${index + 1}:`, param);
    });
};

        document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        const langButton = document.querySelector('.language');
        if (langButton.innerText == 'ع'){
                messageContainer.innerHTML = `
                  <p class="custom-error-message required">
                    <img src="warning.png" class="warning">
                    This is a required field, kindly complete it to continue.
                  </p>
                `}else if (langButton.innerText == 'EN'){
                  messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input') && input.classList.contains('no-numbers')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `
            <p class="custom-error-message invalid">
              <img src="warning.png" class="warning">
              Invalid input: Numbers are not allowed.
            </p>
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function monitorTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
    if (/\d/.test(inputElement.value)) {
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
      return; // Exit if any digit is found
    };

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    monitorTyping('.no-numbers' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);



    monitorTyping('.use-input' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , true);

        monitorTyping('.use-input2' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.event-coverage-use-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        const langButton = document.querySelector('.language');
        if (langButton.innerText == 'ع'){
                messageContainer.innerHTML = `
                  <p class="custom-error-message required">
                    <img src="warning.png" class="warning">
                    This is a required field, kindly complete it to continue.
                  </p>
                `}else if (langButton.innerText == 'EN'){
                  messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('event-coverage-use-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';
    });
  });
});

    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.event-coverage-location, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
                const langButton = document.querySelector('.language');
          if (langButton.innerText == 'ع'){
                  messageContainer.innerHTML = `
                    <p class="custom-error-message required">
                      <img src="warning.png" class="warning">
                      This is a required field, kindly complete it to continue.
                    </p>
                  `}else if (langButton.innerText == 'EN'){
                    messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                  };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('event-coverage-location')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';


    });
  });
});


  document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-event-duration, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        const langButton = document.querySelector('.language');
          if (langButton.innerText == 'ع'){
                  messageContainer.innerHTML = `
                    <p class="custom-error-message required">
                      <img src="warning.png" class="warning">
                      This is a required field, kindly complete it to continue.
                    </p>
                  `}else if (langButton.innerText == 'EN'){
                    messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                  };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-event-duration')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-event-duration')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }
    });
  });
});



    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-brand-name, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `

        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-brand-name')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-brand-name')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function branNameTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};
 function optionCreationFM(...options){
            const optionsContainer = document.querySelector('.family-check-dropdown')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='family-check-dropdown-option${count} drop-down-option-env' onclick=" let option = document.querySelector('.family-check-dropdown-option${count}'); optionSelectionFM(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optionCreationFM('Yes' , 'No');

    

        if (!document.querySelector('.picked-option-fm')){
            const option1 = document.querySelector('.family-check-dropdown-option1')
            option1.classList.add('picked-option-fm')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optionSelectionFM(clickedoption){

            

        

        const previousPicked = document.querySelector('.picked-option-env');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option-env');
   
        clickedoption.classList.add('picked-option-env');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.family-check-dropdown-toggled')){
            const optionPick = document.querySelector('.family-check-dropdown-toggled');
            optionPick.classList.replace('family-check-dropdown-toggled' , 'family-check-dropdown');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.family-check-dropdown-title');
            dropDownTitle.classList.replace('family-check-dropdown-title' , 'family-check-dropdown-title-valid');
        }else if (!document.querySelector('.family-check-dropdown-toggled')){
            const optionPick = document.querySelector('.family-check-dropdown');
            optionPick.classList.replace('family-check-dropdown' , 'family-check-dropdown-toggled');
            dropDown.style.transform = 'rotate(180deg)';
            const dropDownTitle = document.querySelector('.family-check-dropdown-title-valid');
            if(dropDownTitle)
            dropDownTitle.classList.replace('family-check-dropdown-title-valid' , 'family-check-dropdown-title');
        }

        const options = document.querySelectorAll('.drop-down-option-env');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.family-check-dropdown');
        const dropDownElementToggled = document.querySelector('.family-check-dropdown-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };
    
    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-phone-number, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `

        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-phone-number')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-phone-number')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

 
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function phoneNumberTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
  if (!/\d/.test(inputElement.value)) {
    const wrapper = document.querySelector(`${wrapperClass}`);
    wrapper.classList.replace(`${validClass}`, `${invalidClass}`);
    return; // Exit if no digit is found
  }

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    phoneNumberTyping('.use-input-phone-number', 'typing...', 'Input is empty', 'Number detected' , '.phone-number-wrapper' , 'phone-number-input-wrapper-valid' , 'phone-number-input-wrapper');





const userFormData = {

}


function dataExtraction(){

      const serviceTypesContainer = document.querySelector('.service-types-container');
      const services = serviceTypesContainer.querySelectorAll('div');
      services.forEach(service => {
        if (service.classList.contains('picked-service')){
          const serviceBox = service.querySelector('.option1-items-container');
          const serviceName = serviceBox.innerText;
          if (serviceName.trim() == "Ananas Triple" || serviceName.trim() == "ثلاثية أناناس"){
            userFormData.ServiceType = serviceName;
            userFormData.userName = document.querySelector('.fullname-input').value.trim()
            userFormData.userNumber = document.querySelector('.use-input-phone-number').value.trim()
            const NOOfPeople = document.querySelector('.picked-option').innerText;
            const familyAnswer = document.querySelector('.picked-option-fm').innerText;
            const nONAnswer = document.querySelector('.picked-option-aON').innerText;
            const userDate = document.querySelector('.date-text-container').innerText
            const userTime = document.querySelector('.booking-time-input').innerText;   
            userFormData.numberOfNights = 3;         
            userFormData.numberOfPeople = NOOfPeople;
            userFormData.FMAnswer = familyAnswer;
            userFormData.inputtedDate = userDate;
            userFormData.inputtedTime = userTime;
          }else if(serviceName.trim() == "Custom Booking" || serviceName.trim() == "حجز إختياري"){
            userFormData.ServiceType = serviceName;
            userFormData.userName = document.querySelector('.fullname-input').value.trim()
            userFormData.userNumber = document.querySelector('.use-input-phone-number').value.trim()
            const NOOfPeople = document.querySelector('.picked-option').innerText;
            const familyAnswer = document.querySelector('.picked-option-fm').innerText;
            const nONAnswer = document.querySelector('.picked-option-aON').innerText;
            const userDate = document.querySelector('.date-text-container').innerText
            const userTime = document.querySelector('.booking-time-input').innerText;
            userFormData.numberOfNights = nONAnswer;
            userFormData.numberOfPeople = NOOfPeople;
            userFormData.FMAnswer = familyAnswer;
            userFormData.inputtedDate = userDate;
            userFormData.inputtedTime = userTime;
          }else if (serviceName.trim() == "Discovery Visit" || serviceName.trim() == "زيارة إستكشافية"){
            userFormData.ServiceType = serviceName;
            userFormData.userName = document.querySelector('.fullname-input').value.trim()
            userFormData.userNumber = document.querySelector('.use-input-phone-number').value.trim()
            const NOOfPeople = document.querySelector('.picked-option').innerText;
            const familyAnswer = document.querySelector('.picked-option-fm').innerText;
            const nONAnswer = document.querySelector('.picked-option-aON').innerText;
            const userDate = document.querySelector('.date-text-container').innerText
            const userTime = document.querySelector('.booking-time-input').innerText;
            userFormData.numberOfNights = nONAnswer;
            userFormData.numberOfPeople = NOOfPeople;
            userFormData.FMAnswer = familyAnswer;
            userFormData.inputtedDate = userDate;
            userFormData.inputtedTime = userTime;
          }
        }else{
          console.log('Finding Picked Service')
        }


      });

  
      function sendMessage() {
        const langButton = document.querySelector('.language');


      if (userFormData){
        const serviceBasedContainer = document.querySelector('.service-based-container-on');


      const message = 
      `      ${userFormData.ServiceType} for ${userFormData.userName} 
      Client Name: ${userFormData.userName}
      Client Phone Number:${userFormData.userNumber}
      Service Name:${userFormData.serviceType}
      Amount of Visitors: ${userFormData.numberOfPeople}
      Family Check: ${userFormData.FMAnswer}
      Number of Nights: ${userFormData.numberOfNights}
      Date & Time: ${userFormData.inputtedDate} At ${userFormData.inputtedTime}
      
      
    SUCCESS TIP: Follow up with your client as soon as booking notification arrives to increase success rate! 

      Even if it is just a booking confirmation message to solidify the deal.

      We wish you success!
      
      `;
      const url = 'https://script.google.com/macros/s/AKfycbw7E76Y_uL_9Ikb-iQIJBiQCBOvNIvvibqcImsfmKuJl0_sfXd_7LZrHoDrX59FMnEllA/exec'; // Replace with your deployed Apps Script URL

      fetch(url, {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify({ message: message })
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 'success') {
        } else {
        }
      })
      .catch(error => console.log('Error: ' + error));

  
  }};
  if (!userFormData.userName == "" && !userFormData.userNumber == ""){
    sendMessage();
  };

};




function saveUserData(){
  localStorage.setItem('userData' , JSON.stringify(userFormData));
  sendMessage();
  
};


function hamburgerFunction(){

const langButton = document.querySelector('.language');

console.log(langButton.innerHTML)

if (langButton.innerHTML == 'ع'){

//English Version
//Step 1: Remove the hamburger element.
const hamburgerEF = document.querySelector('.hamburger-functional');
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-toggled'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);} else{
//Arabic Version
//Step 1: Remove the hamburger element.
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-toggled-arabic'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);
;}}




;

function closeSidebar(){

if (document.querySelector('.sidebar')){
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';

//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);
};

if(document.querySelector('.sidebar-arabic')){

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);


};};
function sidebarX(){
//English Version
//Step 1: Remove the X.
const sidebarXF = document.querySelector('.sidebar-x-functional');
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);

//Step 4: Show the non-functional hamburger.
const hamburgerE = document.querySelector('.hamburger');
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


//Arabic Version
//Step 1: Remove the X.
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);

//Step 4: Show the non-functional hamburger.
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


};



//Calendar Js:
function toggleCalendarA() {
  const calendar = document.querySelector('.booking-calendar-off-arabic');
  console.log(calendar);
  calendar.classList.replace('booking-calendar-off-arabic', 'booking-calendar-on-arabic');
}

function currentDateA() {
  const currentDateA = new Date();

  const monthNames = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const monthName = monthNames[currentDateA.getMonth()]; // getMonth() returns 0-11
  const dayNumber = currentDateA.getDate();

const numeralsMap = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩'
};

const arabicDay = String(dayNumber).replace(/\d/g, (digit) => numeralsMap[digit]);

console.log(arabicDay); // e.g., "٢٧" for 27th
  const year = currentDateA.getFullYear();
  const calendarButton = document.querySelector('.booking-calendar-button-arabic');

  calendarButton.innerHTML = `<div class = 'date-text-container-arabic'> <strong> </strong> ال${arabicDay} من ${monthName}  ٢٠٢٥</div>`;
}

currentDateA();

function currentDayA() {
  const currentDateA = new Date();

  const days = [
    "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"
  ];

  const dayOfWeek = days[currentDateA.getDay()];

  const calendarButton = document.querySelector('.booking-calendar-button-arabic');
  const calendarButtonWD = calendarButton.querySelector('strong');
  calendarButtonWD.innerHTML = `${dayOfWeek}`;
}

currentDayA();

document.addEventListener('DOMContentLoaded', () => {
  const days = document.querySelectorAll('.days-arabic');

  days.forEach(element => {
    element.addEventListener('click', () => {
      const dayOfWeek = element.getAttribute('data-day');
      const month = element.getAttribute('data-month');
      const innerText = element.innerText;

      const calendarButtonWD = document.querySelector('.booking-calendar-button-arabic').querySelector('strong');
      calendarButtonWD.innerHTML = `${dayOfWeek}`;

      const calendarButton = document.querySelector('.booking-calendar-button-arabic')
      calendarButton.innerHTML = `<div class = 'date-text-container'> <strong>${dayOfWeek}</strong> ال${innerText}   من ${month}  2025 </div>`;

      const calendar = document.querySelector('.booking-calendar-on-arabic');
      calendar.classList.replace('booking-calendar-on-arabic', 'booking-calendar-off-arabic');
    });
  });
});

let hoursA = '';
let minutesStrA = '';
let ampmA = '';

const bookingTimeInputA = document.querySelector('.booking-time-input-arabic');
bookingTimeInput.innerText = `${hoursA}:${minutesStrA} ${ampmA}`;

function getCurrentTimeRoundedA() {
  const now = new Date();
  hoursA = now.getHours();
  let minutes = now.getMinutes();


  const numeralsMap = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩'
};

  minutes = Math.round(minutes / 15) * 15;

  if (minutes === 60) {
    minutes = 0;
    hoursA += 1;
  }

  ampmA = hoursA >= 12 ? 'مساءً' : 'صباحاً';
  hoursA = hoursA % 12;
  hoursA = hoursA ? hoursA : 12;

  minutesStrA = minutes === 0 ? '00' : minutes.toString();


  hoursA = String(hoursA).replace(/\d/g, (digit) => numeralsMap[digit]);
  minutesStrA = String(minutesStrA).replace(/\d/g, (digit) => numeralsMap[digit]);

  bookingTimeInputA.innerText = `${hoursA}:${minutesStrA} ${ampmA}`;
}

getCurrentTimeRoundedA();

function timePickerToggleA() {
  const timePickerA = document.querySelector('.time-pick-container-arabic');
  timePickerA.classList.replace('time-pick-container-arabic', 'time-pick-container-arabic-on');
}


let hourValueA = '';
let minuteValueA = '';
let periodValueA = '';



function timeValuePickA(button, type) {

const numeralsMap = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩'
};

  const previous = document.querySelector(`.${type}-button.active`);
  if (previous) {
    previous.classList.remove('active');
  }
  button.classList.add('active');

  const value = button.getAttribute('data-value');

  if (type === 'hour') {
    hoursA = value;
    hoursA = String(hoursA).replace(/\d/g, (digit) => numeralsMap[digit]);

  } else if (type === 'minute') {
    minutesStrA = value;
    minutesStrA = String(minutesStrA).replace(/\d/g, (digit) => numeralsMap[digit]);

  } else if (type === 'period') {
    ampmA = value;
  }



  document.querySelector('.booking-time-input-arabic').innerText = `${hoursA}:${minutesStrA} ${ampmA}`;
}



;getCurrentTimeRounded();




  const savedOne = localStorage.getItem('savedCharacter');
  console.log("BOSSS")
  console.log(savedOne)




const PickedServiceForDropDown = document.querySelector('.service-pick-option1');
if (PickedServiceForDropDown.classList.contains('picked-service')){
  const nOFDropDownWrapper = document.querySelector('.amount-of-nights-wrapper');
  nOFDropDownWrapper.style.display = 'none';
}else {
  const nOFDropDownWrapper = document.querySelector('.amount-of-nights-wrapper');
  nOFDropDownWrapper.style.display = 'flex';
};




document.querySelector('.booking-submit-button').addEventListener('click', function(event) {
  const fullName = document.querySelector('.fullname-input').value.trim();
  const phoneNumber = document.querySelector('.use-input-phone-number').value.trim();
  const langButton = document.querySelector('.language');
  if (fullName === '' || phoneNumber === '' ){
    if (langButton.innerText == 'ع'){
alert('Kindly, enter the required information first.');}else if (langButton.innerText == 'EN'){
  alert('لطفاَ, إملئ البيانات المطلوبة اولاَ.');
};
    event.preventDefault(); // Prevents navigation to the thank you page
  }else {
    window.location.href="the-thank-you-page.html"; 
  }

});




currentLanguage();




    

 function optionCreationFM(...options){
            const optionsContainer = document.querySelector('.family-check-dropdown')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='family-check-dropdown-option${count} drop-down-option-fm' onclick=" let option = document.querySelector('.family-check-dropdown-option${count}'); optionSelectionFM(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optionCreationFM('Yes' , 'No');

    

        if (!document.querySelector('.picked-option-fm')){
            const option1 = document.querySelector('.family-check-dropdown-option1')
            option1.classList.add('picked-option-fm')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optionSelectionFM(clickedoption){

            

        

        const previousPicked = document.querySelector('.picked-option-fm');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        if (previousDropDown){
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option-fm');}
   
        clickedoption.classList.add('picked-option-fm');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        if (dropDown){
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')}
        

            
    
        if(document.querySelector('.family-check-dropdown-toggled')){
            const optionPick = document.querySelector('.family-check-dropdown-toggled');
            optionPick.classList.replace('family-check-dropdown-toggled' , 'family-check-dropdown');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.family-check-dropdown-title');
            dropDownTitle.classList.replace('family-check-dropdown-title' , 'family-check-dropdown-title-valid');
        }else if (!document.querySelector('.family-check-dropdown-toggled')){
            const optionPick = document.querySelector('.family-check-dropdown');
            optionPick.classList.replace('family-check-dropdown' , 'family-check-dropdown-toggled');
            dropDown.style.transform = 'rotate(180deg)';
            const dropDownTitle = document.querySelector('.family-check-dropdown-title-valid');
            if(dropDownTitle)
            dropDownTitle.classList.replace('family-check-dropdown-title-valid' , 'family-check-dropdown-title');
        }

        const options = document.querySelectorAll('.drop-down-option-fm');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.family-check-dropdown');
        const dropDownElementToggled = document.querySelector('.family-check-dropdown-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };
    
    








    
