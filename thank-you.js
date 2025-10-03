let variable1 = `'value1'`;
console.log(variable1);

function fAQOpenClose (fAQContainer,fAQAnswer){
    console.log(fAQAnswer);
    console.log(fAQContainer);
   let container = document.querySelector(fAQContainer)
   console.log(container);
   
   let theAnswer = container.querySelector(fAQAnswer);

   console.log(theAnswer);
if(theAnswer.classList.contains('faq-answer')){

    theAnswer.classList.replace('faq-answer' , 'faq-answer-extended');
    container.querySelector('.dropdown-icon').style.transform = 'rotate(180deg)';
}else{
    theAnswer.classList.replace('faq-answer-extended','faq-answer');
    container.querySelector('.dropdown-icon').style.transform = 'rotate(0deg)';
}
};




const userInputtedData = JSON.parse(localStorage.getItem('userData'));




function getFirstName(){
  const firstName = userInputtedData.userName.split(' ')[0];
  return firstName;
};

const userFirstName = getFirstName();

console.log(userFirstName);

userInputtedData.userName = userFirstName;

const emailSubjectA = document.querySelector('.email-subject');
emailSubjectA.innerHTML = `${userInputtedData.ServiceType} for ${userInputtedData.userName}`;

const emailMessageA = document.querySelector('.email-message');
emailMessageA.innerHTML = `a ${userInputtedData.ServiceType} for ${userInputtedData.userName}, tap to view full information.`;

function getArabicTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  const arabicDigits = {
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

  const toArabicNumerals = (numStr) => 
    numStr.split('').map(d => arabicDigits[d]).join('');

  const arabicHours = toArabicNumerals(hours);
  const arabicMinutes = toArabicNumerals(minutes);

  return `${arabicHours}:${arabicMinutes}`;
}

console.log(getArabicTime());





function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');



  return `${hours}:${minutes}`;
}

console.log(getTime());
















function getArabicDate() {
  const daysOfWeek = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const months = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

  const now = new Date();
  const dayName = daysOfWeek[now.getDay()];
  const dayNumber = now.getDate();
  const monthName = months[now.getMonth()];

  const arabicDigits = {
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

  const toArabicNumerals = (num) =>
    num.toString().split('').map(d => arabicDigits[d]).join('');

  const arabicDayNumber = toArabicNumerals(dayNumber);

  return `${dayName}، ${arabicDayNumber} ${monthName}`;
}

console.log(getArabicDate());


function getDate() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const now = new Date();
  const dayName = daysOfWeek[now.getDay()];
  const dayNumber = now.getDate();
  const monthName = months[now.getMonth()];



  return `${dayName}, ${dayNumber} ${monthName}`;
}

console.log(getDate());



if (document.querySelector('.language').innerText == 'ع'){

const emailSubjectA = document.querySelector('.email-subject');
emailSubjectA.innerHTML = `${userInputtedData.ServiceType} for ${userInputtedData.userName}`;

const emailMessageA = document.querySelector('.email-message');
emailMessageA.innerHTML = `a ${userInputtedData.ServiceType} for ${userInputtedData.userName}, tap to view full information.`;

} else if (document.querySelector('.language').innerText == 'EN'){
const emailSubjectA = document.querySelector('.email-subject');
emailSubjectA.innerHTML = `${userInputtedData.ServiceType}  ل${userInputtedData.userName}`;

const emailMessageA = document.querySelector('.email-message');
emailMessageA.innerHTML =  `${userInputtedData.ServiceType}  ل${userInputtedData.userName}, إنقر لمشاهدة التفاصيل.`;
};






function currentLanguage(){

    let languageStored = localStorage.getItem('previousLanguage') || 'English';

    if (languageStored =='Arabic') {

        document.body.style.direction = "rtl";
        document.body.style.fontFamily = ' Noto Sans Arabic';

        console.log('English is current, now switching to Arabic');

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;

        const headerLeftBox = document.querySelector(".header-left-box");

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'أناناس';

        portfolioName.style.marginLeft = '0px';
        portfolioName.style.marginRight = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'EN';

        const roleA = document.querySelector('.role');
        roleA.innerHTML = `يعطيك العافية <strong class ="booking-username"> ${userInputtedData.userName}</strong>!`;

        const infoName = document.querySelector('.info-name');
        infoName.innerHTML = 'أترقب إتصالنا اليوم للغاية إن شاء الله';

        const complimentA = document.querySelector('.compliment');
        complimentA.innerHTML = 'أنت إسطورة🚀';

        const reassuranceA = document.querySelector('.re-assurance-statement');
        reassuranceA.innerHTML =  ' لا تحاتي, بمجرد تسليمك للحجز وصلني مثل هذا الإشعار على جهازي الخاص:';

        const mockUpA = document.querySelector('.thank-you-mockup');
        mockUpA.setAttribute('src' , 'ImagesFolder/thank-you-mockup-arabic.png');

        const emailA = document.querySelector('.lock-screen-email-notification');
        if (emailA){
        emailA.classList.replace('lock-screen-email-notification','lock-screen-email-notification-arabic');}

        const emailSenderA = document.querySelector('.email-sender');
        if(emailSenderA){
        emailSenderA.innerText = 'Bookra.io';}

        const emailTimeA = document.querySelector('.email-time');
        if (emailTimeA){
        emailTimeA.innerText = 'الآن';}

        const emailSubjectA = document.querySelector('.email-subject');
        emailSubjectA.innerHTML = `${userInputtedData.ServiceType}  ل${userInputtedData.userName}`;

        const emailMessageA = document.querySelector('.email-message');
        emailMessageA.innerHTML = `${userInputtedData.ServiceType}  ل${userInputtedData.userName}, إنقر لمشاهدة التفاصيل.`;

        const lockScreenTime = document.querySelector('.lock-screen-time-large');
        lockScreenTime.innerText = getArabicTime();

        const lockScreenDate = document.querySelector('.lock-screen-date');
        lockScreenDate.innerHTML = getArabicDate();

        const callRemTextTitleA = document.querySelector('.call-text-title');
        callRemTextTitleA.innerText = 'ألإتصال بك أولوية';

        const callRemTextS1A = document.querySelector('.call-text-step-one');
        callRemTextS1A.innerText = '١-يهمني الآن أن أقرأ تفاصيل حجزك.';

        const callRemTextS2A = document.querySelector('.call-text-step-two');
        callRemTextS2A.innerText = '٢-ألإستعداد لإستفساراتك و طلباتك.'

        const callRemTextS3A = document.querySelector('.call-text-step-three');
        callRemTextS3A.innerText = '٣-ألإتصال بك اليوم و بأسرع وقت ممكن.'

        const callReadyTextA = document.querySelector('.call-text-be-ready');
        callReadyTextA.innerText = 'لذلك كن جاهز لمكالمتنا اليوم🤝!';

        const mainCTAA = document.querySelector('.black-cta-modified');
        mainCTAA.innerText = "الصفحة الرئيسية";
        mainCTAA.style.fontFamily = ' Noto Sans Arabic';


        const SampleTitleA = document.querySelector('.sample-section-title');
        SampleTitleA.innerText = "مناظر من أناناس";

        const SampleLinkA = document.querySelector('.sample-section-link');
        SampleLinkA.innerText = 'شاهد المزيد';

        const SampleDescriptionA = document.querySelector('.sample-section-description');
        SampleDescriptionA.innerHTML = 'مناظر من شالية أناناس.';

        const fAQA = document.querySelector('.faq-title');
        fAQA.innerText = ' أسئلة شائعة أو متوقعة';

        const fAQADescription = document.querySelector('.faq-description');
        fAQADescription.innerText = 'هذه أجوبة لأكثر أسئلة شائعة أو متوقعة.';

        const fAQA1 = document.querySelector('.faq1-container');
        fAQA1.innerHTML = 'متى سأتلقى المكالمة ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA2 = document.querySelector('.faq2-container');
        fAQA2.innerHTML = '  ما سعر هذه الخدمة ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA3 = document.querySelector('.faq3-container');
        fAQA3.innerHTML = '    هل تقدم خدمات أخرى؟<img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA4 = document.querySelector('.faq4-container');
        fAQA4.innerHTML = '   كيف أعيد جدولة الموعد  ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA5 = document.querySelector('.faq5-container');
        fAQA5.innerHTML = '      كيف نعمل لمشاريع أكبر  ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA6 = document.querySelector('.faq6-container');
        fAQA6.innerHTML = '         ما الذي تتضمنه هذه الخدمة؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML = 'كن رفيق بالرحلة!🤝';

        const footerDescriptionA = document.querySelector('.footer-description');
        footerDescriptionA.innerHTML = 'أدعوك للإنضمام معي في رحلتي على التواصل الأجتماعي.';





        language = 'Arabic';
        console.log('Switched Language to Arabic');

        localStorage.setItem('previousLanguage', language);
   

    }else if (languageStored == 'English'){

     
document.body.style.direction = "ltr";
document.body.style.fontFamily = 'Inter';

console.log('Arabic is current, now switching to English');

const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed');

const headerLeftBox = document.querySelector(".header-left-box");

const portfolioName = document.querySelector('.name');
portfolioName.innerHTML = 'Ananas';

portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';
portfolioName.style.marginRight = '0px';

const headerRightBox = document.querySelector(".header-right-box");

const langButton = document.querySelector('.language');
langButton.innerHTML = 'ع';

const roleA = document.querySelector('.role');
roleA.innerHTML = ` Thank You  <span class ="booking-username">${userInputtedData.userName}</span>!`

const infoName = document.querySelector('.info-name');
infoName.innerHTML = `Excited for our call today insh'a Allah.`;

const complimentA = document.querySelector('.compliment');
complimentA.innerHTML = 'You Are A Legend🚀';

const reassuranceA = document.querySelector('.re-assurance-statement');
reassuranceA.innerHTML =  'Don’t worry, as soon as you booked i received a  notification like this:';

const mockUpA = document.querySelector('.thank-you-mockup');
mockUpA.setAttribute('src', 'ImagesFolder/thank-you-mockup.png');

const emailA = document.querySelector('.lock-screen-email-notification-arabic');
if(emailA){
emailA.classList.replace('lock-screen-email-notification-arabic','lock-screen-email-notification');}

const emailSenderA = document.querySelector('.email-sender');
if (emailSenderA){
emailSenderA.innerText = 'Bookra.io';}

const emailTimeA = document.querySelector('.email-time');
emailTimeA.innerText = 'now';

const emailSubjectA = document.querySelector('.email-subject');
emailSubjectA.innerHTML = `${userInputtedData.ServiceType} for ${userInputtedData.userName}`;

const emailMessageA = document.querySelector('.email-message');
emailMessageA.innerHTML = `a ${userInputtedData.ServiceType} for ${userInputtedData.userName}, tap to view full information.`;

const lockScreenTime = document.querySelector('.lock-screen-time-large');
lockScreenTime.innerHTML = getTime();

const lockScreenDate = document.querySelector('.lock-screen-date');
lockScreenDate.innerHTML = getDate();

const callRemTextTitleA = document.querySelector('.call-text-title');
callRemTextTitleA.innerText = 'Calling you is a priority';

const callRemTextS1A = document.querySelector('.call-text-step-one');
callRemTextS1A.innerText = '1-I will read your booking information.';

const callRemTextS2A = document.querySelector('.call-text-step-two');
callRemTextS2A.innerText = '2-Prepare for your ideas & requests.';

const callRemTextS3A = document.querySelector('.call-text-step-three');
callRemTextS3A.innerText = '3-Call you as soon as possible.';

const callReadyTextA = document.querySelector('.call-text-be-ready');
callReadyTextA.innerText = 'So be ready for our call today 🤝!';

const mainCTAA = document.querySelector('.black-cta-modified');
mainCTAA.innerText = "Home Page";
mainCTAA.style.fontFamily = 'Inter';

const SampleTitleA = document.querySelector('.sample-section-title');
SampleTitleA.innerText = "Views of Ananas";

const SampleLinkA = document.querySelector('.sample-section-link');
SampleLinkA.innerText = 'View more';

const SampleDescriptionA = document.querySelector('.sample-section-description');
SampleDescriptionA.innerHTML = 'These are glances of our Ananas Chalet';

const fAQA = document.querySelector('.faq-title');
fAQA.innerText = 'FAQ';

const fAQADescription = document.querySelector('.faq-description');
fAQADescription.innerText = 'These are answers for expected common questions you may have.';

const fAQA1 = document.querySelector('.faq1-container');
fAQA1.innerHTML = 'When am i going to get the call? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA2 = document.querySelector('.faq2-container');
fAQA2.innerHTML = 'What is the price of this service? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA3 = document.querySelector('.faq3-container');
fAQA3.innerHTML = 'Do you offer other services? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA4 = document.querySelector('.faq4-container');
fAQA4.innerHTML = 'How can i re-schedule? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA5 = document.querySelector('.faq5-container');
fAQA5.innerHTML = 'Can we collaborate? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA6 = document.querySelector('.faq6-container');
fAQA6.innerHTML = 'What does this service include? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const footerTitleA = document.querySelector('.footer-title');
footerTitleA.innerHTML = 'Become A Companion! 🤝';

const footerDescriptionA = document.querySelector('.footer-description');
footerDescriptionA.innerHTML = 'I invite you to join me on my social media journey.';
              

       


        language = 'English';
        console.log('Switched Language to English');

        localStorage.setItem('previousLanguage', JSON.stringify(language));


    }};


currentLanguage();






function switchLanguage(){

    const langButton = document.querySelector('.language');

    console.log(langButton.innerHTML)

    if (langButton.innerHTML == 'ع') {

        document.body.style.direction = "rtl";
        document.body.style.fontFamily = 'Noto Sans Arabic';

        console.log('English is current, now switching to Arabic');

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;

        const headerLeftBox = document.querySelector(".header-left-box");

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'أناناس';

        portfolioName.style.marginLeft = '0px';
        portfolioName.style.marginRight = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'EN';

        const roleA = document.querySelector('.role');
        roleA.innerHTML = `يعطيك العافية <strong class ="booking-username"> ${userInputtedData.userName}</strong>!`

        const infoName = document.querySelector('.info-name');
        infoName.innerHTML = 'أترقب إتصالنا اليوم للغاية إن شاء الله';

        const complimentA = document.querySelector('.compliment');
        complimentA.innerHTML = 'أنت إسطورة🚀';

        const reassuranceA = document.querySelector('.re-assurance-statement');
        reassuranceA.innerHTML =  ' لا تحاتي, بمجرد تسليمك للحجز وصلني مثل هذا الإشعار على جهازي الخاص:';

        const mockUpA = document.querySelector('.thank-you-mockup');
        mockUpA.setAttribute('src' , 'ImagesFolder/thank-you-mockup-arabic.png');

        const emailA = document.querySelector('.lock-screen-email-notification');
        emailA.classList.replace('lock-screen-email-notification','lock-screen-email-notification-arabic');

        const emailSenderA = document.querySelector('.email-sender');
        emailSenderA.innerText = 'Bookra.io';

        const emailTimeA = document.querySelector('.email-time');
        emailTimeA.innerText = 'الآن';


        const emailSubjectA = document.querySelector('.email-subject');
        emailSubjectA.innerHTML = `${userInputtedData.ServiceType}  ل${userInputtedData.userName}`;

        const emailMessageA = document.querySelector('.email-message');
        emailMessageA.innerHTML = `${userInputtedData.ServiceType}  ل${userInputtedData.userName}, إنقر لمشاهدة التفاصيل.`;

        const lockScreenTime = document.querySelector('.lock-screen-time-large');
        lockScreenTime.innerText = getArabicTime();

        const lockScreenDate = document.querySelector('.lock-screen-date');
        lockScreenDate.innerHTML = getArabicDate();

        const callRemTextTitleA = document.querySelector('.call-text-title');
        callRemTextTitleA.innerText = 'ألإتصال بك أولوية';

        const callRemTextS1A = document.querySelector('.call-text-step-one');
        callRemTextS1A.innerText = '١-يهمني الآن أن أقرأ تفاصيل حجزك.';

        const callRemTextS2A = document.querySelector('.call-text-step-two');
        callRemTextS2A.innerText = '٢-ألإستعداد لإستفساراتك و طلباتك.'

        const callRemTextS3A = document.querySelector('.call-text-step-three');
        callRemTextS3A.innerText = '٣-ألإتصال بك اليوم و بأسرع وقت ممكن.'

        const callReadyTextA = document.querySelector('.call-text-be-ready');
        callReadyTextA.innerText = 'لذلك كن جاهز لمكالمتنا اليوم🤝!';

        const mainCTAA = document.querySelector('.black-cta-modified');
        mainCTAA.innerText = "الصفحة الرئيسية";
        mainCTAA.style.fontFamily = ' Noto Sans Arabic';

        const SampleTitleA = document.querySelector('.sample-section-title');
        SampleTitleA.innerText = "مناظر من أناناس";

        const SampleLinkA = document.querySelector('.sample-section-link');
        SampleLinkA.innerText = 'شاهد المزيد';

        const SampleDescriptionA = document.querySelector('.sample-section-description');
        SampleDescriptionA.innerHTML = 'مناظر من شالية أناناس.';

        const fAQA = document.querySelector('.faq-title');
        fAQA.innerText = ' أسئلة شائعة أو متوقعة';

        const fAQADescription = document.querySelector('.faq-description');
        fAQADescription.innerText = 'هذه أجوبة لأكثر أسئلة شائعة أو متوقعة.';

        const fAQA1 = document.querySelector('.faq1-container');
        fAQA1.innerHTML = 'متى سأتلقى المكالمة ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA2 = document.querySelector('.faq2-container');
        fAQA2.innerHTML = '  ما سعر هذه الخدمة ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA3 = document.querySelector('.faq3-container');
        fAQA3.innerHTML = '    هل تقدم خدمات أخرى؟<img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA4 = document.querySelector('.faq4-container');
        fAQA4.innerHTML = '   كيف أعيد جدولة الموعد  ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA5 = document.querySelector('.faq5-container');
        fAQA5.innerHTML = '      كيف نعمل لمشاريع أكبر  ؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const fAQA6 = document.querySelector('.faq6-container');
        fAQA6.innerHTML = '         ما الذي تتضمنه هذه الخدمة؟ <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML = 'كن رفيق بالرحلة!🤝';

        const footerDescriptionA = document.querySelector('.footer-description');
        footerDescriptionA.innerHTML = 'أدعوك للإنضمام معي في رحلتي على التواصل الأجتماعي.';

        language = 'Arabic';
        console.log('Switched Language to Arabic');

        localStorage.setItem('previousLanguage', language);

    
    }else if (langButton.innerHTML == 'EN'){

       
document.body.style.direction = "ltr";
document.body.style.fontFamily = 'Inter';

console.log('Arabic is current, now switching to English');

const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed');

const headerLeftBox = document.querySelector(".header-left-box");

const portfolioName = document.querySelector('.name');
portfolioName.innerHTML = 'Ananas';

portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';
portfolioName.style.marginRight = '0px';

const headerRightBox = document.querySelector(".header-right-box");

const langButton = document.querySelector('.language');
langButton.innerHTML = 'ع';

const roleA = document.querySelector('.role');
roleA.innerHTML = ` Thank You  <span class ="booking-username">${userInputtedData.userName}</span>!`

const infoName = document.querySelector('.info-name');
infoName.innerHTML = `Excited for our call today insh'a Allah.`;

const complimentA = document.querySelector('.compliment');
complimentA.innerHTML = 'You Are A Legend🚀';

const reassuranceA = document.querySelector('.re-assurance-statement');
reassuranceA.innerHTML =  'Don’t worry, as soon as you booked i received a  notification like this:';

const mockUpA = document.querySelector('.thank-you-mockup');
mockUpA.setAttribute('src', 'ImagesFolder/thank-you-mockup.png');

const emailA = document.querySelector('.lock-screen-email-notification-arabic');
emailA.classList.replace('lock-screen-email-notification-arabic','lock-screen-email-notification');

const emailSenderA = document.querySelector('.email-sender');
emailSenderA.innerText = 'Bookra.io';

const emailTimeA = document.querySelector('.email-time');
emailTimeA.innerText = 'now';

const emailSubjectA = document.querySelector('.email-subject');
emailSubjectA.innerHTML = `${userInputtedData.ServiceType} for ${userInputtedData.userName}`;

const emailMessageA = document.querySelector('.email-message');
emailMessageA.innerHTML = `a ${userInputtedData.ServiceType} for ${userInputtedData.userName}, tap to view full information.`;

const lockScreenTime = document.querySelector('.lock-screen-time-large');
lockScreenTime.innerText = getTime();

const lockScreenDate = document.querySelector('.lock-screen-date');
lockScreenDate.innerHTML = getDate();

const callRemTextTitleA = document.querySelector('.call-text-title');
callRemTextTitleA.innerText = 'Calling you is a priority';

const callRemTextS1A = document.querySelector('.call-text-step-one');
callRemTextS1A.innerText = '1-I will read your booking information.';

const callRemTextS2A = document.querySelector('.call-text-step-two');
callRemTextS2A.innerText = '2-Prepare for your ideas & requests.';

const callRemTextS3A = document.querySelector('.call-text-step-three');
callRemTextS3A.innerText = '3-Call you as soon as possible.';

const callReadyTextA = document.querySelector('.call-text-be-ready');
callReadyTextA.innerText = 'So be ready for our call today 🤝!';

const mainCTAA = document.querySelector('.black-cta-modified');
mainCTAA.innerText = "Home Page";
mainCTAA.style.fontFamily = 'Inter';

const SampleTitleA = document.querySelector('.sample-section-title');
SampleTitleA.innerText = "Views of Ananas Chalet";

const SampleLinkA = document.querySelector('.sample-section-link');
SampleLinkA.innerText = 'View more';

const SampleDescriptionA = document.querySelector('.sample-section-description');
SampleDescriptionA.innerHTML = 'These are glances of our Ananas Chalet.';

const fAQA = document.querySelector('.faq-title');
fAQA.innerText = 'FAQ';

const fAQADescription = document.querySelector('.faq-description');
fAQADescription.innerText = 'These are answers for expected common questions you may have.';

const fAQA1 = document.querySelector('.faq1-container');
fAQA1.innerHTML = 'When am i going to get the call? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA2 = document.querySelector('.faq2-container');
fAQA2.innerHTML = 'What is the price of this service? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA3 = document.querySelector('.faq3-container');
fAQA3.innerHTML = 'Do you offer other services? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA4 = document.querySelector('.faq4-container');
fAQA4.innerHTML = 'How can i re-schedule? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA5 = document.querySelector('.faq5-container');
fAQA5.innerHTML = 'Can we collaborate? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const fAQA6 = document.querySelector('.faq6-container');
fAQA6.innerHTML = 'What does this service include? <img src="ImagesFolder/dropdown-icon.svg" class="dropdown-icon">';

const footerTitleA = document.querySelector('.footer-title');
footerTitleA.innerHTML = 'Become A Companion! 🤝';

const footerDescriptionA = document.querySelector('.footer-description');
footerDescriptionA.innerHTML = 'I invite you to join me on my social media journey.';
              


       


        language = 'English';
        console.log('Switched Language to English');

        localStorage.setItem('previousLanguage', language);

}};          
          



















      function sendMessage() {
        const langButton = document.querySelector('.language');


      if (userInputtedData){
        const serviceBasedContainer = document.querySelector('.service-based-container-on');


      const message = 
      `      ${userInputtedData.ServiceType} for ${userInputtedData.userName} 
      Client Name: ${userInputtedData.userName}
      Client Phone Number: ${userInputtedData.userNumber}
      Service Name: ${userInputtedData.ServiceType}
      Amount of Visitors: ${userInputtedData.numberOfPeople}
      Family Check: ${userInputtedData.FMAnswer}
      Number of Nights: ${userInputtedData.numberOfNights}
      Date & Time: ${userInputtedData.inputtedDate} At ${userInputtedData.inputtedTime}
      
      
    FRom TY : SUCCESS TIP: Follow up with your client as soon as booking notification arrives to increase success rate! 

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
  if (!userInputtedData.userName == "" && !userInputtedData.userNumber == ""){
    sendMessage();
  };