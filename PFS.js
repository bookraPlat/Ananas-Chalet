const hamburgerEF = document.querySelector('.hamburger-functional');
const hamburgerE = document.querySelector('.hamburger');
const hamburgerLine1 = document.querySelector('.hamburger1');
const hamburgerLine2 = document.querySelector('.hamburger2');
const hamburgerLine3 = document.querySelector('.hamburger3');

const hamburgerLine1NF = document.querySelector('.hamburger1-NF');
const hamburgerLine2NF = document.querySelector('.hamburger2-NF');
const hamburgerLine3NF = document.querySelector('.hamburger3-NF');

const header = document.querySelector('.header');

function retreiveCurrentLanguage(){
    const langButton = document.querySelector('.language');
    const langKey = langButton.innerText;
    console.log('This is the langKey Boss' + langKey)
    localStorage.setItem('langKey' , langKey);
};


const defaultGalleryCategory = document.querySelector('.gallery-category1');
const defaultGalleryContainer = document.querySelector('.category1-items-container')
const category1PortraitVersion = document.querySelector('.category1-portrait')
category1PortraitVersion.classList.add('category-toggled-version');

if (defaultGalleryCategory){
defaultGalleryCategory.classList.add('gallery-category-active')};
if (defaultGalleryContainer){
defaultGalleryContainer.classList.add('category-items-container-toggled')} ;
rect = document.querySelector('.gallery-category1').getBoundingClientRect();
const xCoordinate = rect.x;
console.log(xCoordinate);
console.log(window.innerWidth);
const style = window.getComputedStyle(document.querySelector('.gallery-category1'));
const width = style.width;
const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
console.log(`${containerXCoordinates}px are left of container`);
console.log(xCoordinate - containerXCoordinates + 'is the final result')

const toggleUnderline = document.querySelector('.toggle-underline');
toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
toggleUnderline.style.width = width;




let countdownTimer = null; // Declare a variable to hold the interval ID

function countDownLanguage() {
  // Clear any existing countdown interval to prevent overlapping
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }

  const language = document.querySelector('.language').innerText;
  const countdownElement = document.querySelector('.countdown');

  // Clear previous countdown display to avoid overlap or lag
  countdownElement.innerText = '';

  // Determine the correct class and swap if needed
  if (language === 'ع') {
    if (countdownElement.classList.contains('countdown-en')) {
      countdownElement.classList.replace('countdown-en', 'countdown-ar');
    }
  } else if (language === 'EN') {
    if (countdownElement.classList.contains('countdown-ar')) {
      countdownElement.classList.replace('countdown-ar', 'countdown-en');
    }
  }

  // Use a fixed, valid target date
  const targetDate = new Date('2025-10-30T23:59:59'); // Corrected date

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      // When countdown finishes
      if (language === 'ع') {
        countdownElement.innerText = '00 : 00 : 00 : 00';
      } else if (language === 'EN') {
        countdownElement.innerText = '۰۰ : ۰۰ : ۰۰ : ۰۰'; // Arabic numerals
      }
      clearInterval(countdownTimer);
      countdownTimer = null;
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (language === 'ع') {
      // Arabic display
      const dd = String(days).padStart(2, '0');
      const hh = String(hours).padStart(2, '0');
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');

      countdownElement.innerText = `${dd} : ${hh} : ${mm} : ${ss}`;
    } else if (language === 'EN') {
      // English numerals
      const toArabicNumerals = (num) => {
        const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(num).split('').map(d => arabicDigits[Number(d)]).join('');
      };

      const dd = toArabicNumerals(String(days).padStart(2, '0'));
      const hh = toArabicNumerals(String(hours).padStart(2, '0'));
      const mm = toArabicNumerals(String(minutes).padStart(2, '0'));
      const ss = toArabicNumerals(String(seconds).padStart(2, '0'));

      countdownElement.innerText = `${ss} : ${mm} : ${hh} : ${dd}`;
    }
  }

  // Start the countdown
  updateCountdown();

  // Restart interval and store its ID
  countdownTimer = setInterval(updateCountdown, 1000);
}

// Example call to initialize the countdown based on current language
countDownLanguage();

// If you switch language dynamically, call countDownLanguage() again
// to reset the countdown and prevent overlapping intervals.


console.log(document.querySelector('.language').innerHTML);

if (!document.querySelector('.gallery-category-active')){
    const category1 = document.querySelector('.gallery-category1');
    category1.classList.add('gallery-category-active');

    let categoryWidth = window.getComputedStyle(category1).width;

    console.log(categoryWidth)

    const toggleUnderline = document.querySelector('.toggle-underline');
    toggleUnderline.style.width = categoryWidth;

    rect = category1.getBoundingClientRect();
    const xCoordinate = rect.x;
    const style = window.getComputedStyle(category1);
    const width = style.width;
    const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
    toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

};


if (!document.querySelector('.category-items-container-toggled')){
    const category1Container = document.querySelector('.category1-items-container');
    category1Container.classList.add('category-items-container-toggled');
    const portrait = category1Container.querySelector('.portrait-mode');
    portrait.classList.add('category-toggled-version');
    console.log(portrait);
    
    document.querySelector('.landscape-title').style.fontWeight = '300';
    document.querySelector('.portrait-title').style.fontWeight = 'bold';


};


function galleryRestart(){
    const category1Container = document.querySelector('.category1-items-container');
    category1Container.classList.add('category-items-container-toggled');
    const portrait = category1Container.querySelector('.portrait-mode');
    portrait.classList.add('category-toggled-version');


    

    const category2Container = document.querySelector('.category2-items-container');
    category2Container.classList.remove('category-items-container-toggled');
};


function currentLanguage(){

    let languageStored = JSON.parse(localStorage.getItem('previousLanguage')) || 'English';

    console.log('THis is the language' + languageStored);

    if (languageStored =='Arabic') {

        document.body.style.cssText = "background-color: #0D0D0D;  display:flex; flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: 'Noto Sans Arabic' !important; color: white; overflow-x: hidden; ";

        console.log('English is current, now switching to Arabic');

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

        hamburgerLine1.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3.style.borderRadius = '50px 0px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '50px 0px 0px 0px';

        const heroBedA = document.querySelector('.hero-bed') ;
        heroBedA.style.direction = 'rtl';

        const roleA = document.querySelector('.role');
        roleA.style.display = 'flex';
        roleA.style.alignItems = 'center';
        roleA.style.flexDirection = 'row';
        roleA.innerText = 'شالية أناناس';

        const nameA = document.querySelector('.info-name');
        nameA.style.display = 'flex';
        nameA.style.alignItems = 'center';
        nameA.style.flexDirection = 'row';
        nameA.innerText = "الخيران" ;

        const detailPhrase1 = document.querySelector('.detail-phrase1');
        detailPhrase1.innerText = 'إيجار يومي 🗓️';

        const detailPhrase2 = document.querySelector('.detail-phrase2');
        detailPhrase2.innerText = ' صباح الأحمد البحرية📍';

        const heroMainA = document.querySelector('.hero-main');
        heroMainA.style.backgroundImage = 'url(ImagesFolder/hero-card-thumbnail-arabic.png)';
        heroMainA.style.lineHeight = '1';

        const heroHookA = document.querySelector('.hero-hook');
        heroHookA.innerText = 'تبي تكسر الروتين مع العائلة؟';
        heroHookA.style.lineHeight = '1.5';

        const packageIConA = document.querySelector('.package-icon');

        packageIConA.classList.replace('pi-translate-en' , 'pi-translate-ar')

        const packageNameA = document.querySelector('.package-name');
        packageNameA.innerText = 'باقة باين';

        document.querySelectorAll('.bulletpoint').forEach(element => {
        element.classList.replace('bulletpoint-en', 'bulletpoint-ar');
        });

        const packagefeature1A = document.querySelector('.package-feature1');
        packagefeature1A.innerHTML = "<div class='bulletpoint bulletpoint-ar'></div> 3 ليالي كامله";
        
        const packagefeature2A = document.querySelector('.package-feature2');
        packagefeature2A.innerHTML = "<div class='bulletpoint bulletpoint-ar'></div> خدمات ضيافة عالية الجودة";

        const packagefeature3A = document.querySelector('.package-feature3');
        packagefeature3A.innerHTML = "<div class='bulletpoint bulletpoint-ar'></div>    بيئة عائلية";

        const packagefeature4A = document.querySelector('.package-feature4');
        packagefeature4A.innerHTML = "<div class='pluspoint pluspoint-ar'>+</div>    و الكثير غير ذلك!";

        const packageTimeIcon = document.querySelector('.package-time-clock');
        packageTimeIcon.style.cssText = 'width: clamp(0px, 4.419vw, 22.42px); padding-left: clamp(0px, 1.5vw, 7.605px); padding-right: 0px '

        const timeText = document.querySelector('.time-text');
        timeText.innerText = 'حجوزات أكتوبر';

        countDownLanguage();
        
        const currentPrice = document.querySelector('.current-price');
        currentPrice.innerText = '290';

        const packagePriceA = document.querySelector('.package-price');
        packagePriceA.style.direction = 'ltr';

        const cTAModified = document.querySelector('.black-cta-modified');
        cTAModified.style.fontFamily = 'Noto Sans Arabic'
        cTAModified.innerText = 'إحجز الآن';

        const servicesIntroductionA = document.querySelector('.services-introduction');
        servicesIntroductionA.classList.remove('services-introduction');
        servicesIntroductionA.classList.add('services-introduction-arabic');

        const servicesIntroductionTitleA = document.querySelector('.services-introduction-title');
        servicesIntroductionTitleA.classList.remove('services-introduction-title');
        servicesIntroductionTitleA.classList.add('services-introduction-title-arabic');
        servicesIntroductionTitleA.innerHTML = 'خدمات أوفرها لك';

        const servicesIntroductionDescriptionA = document.querySelector('.services-introduction-description');
        servicesIntroductionDescriptionA.classList.remove('services-introduction-description');
        servicesIntroductionDescriptionA.classList.add('services-introduction-description-arabic');
        servicesIntroductionDescriptionA.innerHTML =" حلول مصممة لتلبية إحتياجاتك الفريدة لإجازة إستثنائية.";

        const card1HolderItemsContainerA = document.querySelector('.canvas-card1-holder-items-container-arabic') || document.querySelector('.canvas-card1-holder-items-container');
        card1HolderItemsContainerA.classList.add('canvas-card1-holder-items-container-arabic');
        card1HolderItemsContainerA.classList.remove('canvas-card1-holder-items-container');

        const serviceCard1CanvasA = document.querySelector('.service-card1-canvas') || document.querySelector('.service-card1-canvas-arabic') ;
        serviceCard1CanvasA.classList.add('service-card1-canvas-arabic');
        serviceCard1CanvasA.classList.remove('service-card1-canvas');

        const serviceCard1CanvasExtensionA = document.querySelector('.service-card1-canvas-extension-arabic') || document.querySelector('.service-card1-canvas-extension')  ;
        serviceCard1CanvasExtensionA.classList.add('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtensionA.classList.remove('service-card1-canvas-extension');
        serviceCard1CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"><img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p> </div>';
        
        const serviceCard1TextA = document.querySelector('.service-card1-text-arabic') || document.querySelector('.service-card1-text') ;
        serviceCard1TextA.classList.add('service-card1-text-arabic');
        serviceCard1TextA.classList.remove('service-card1-text');
    
        const serviceCard1Title = document.querySelector('.service-card1-title-arabic') || document.querySelector('.service-card1-title');
        serviceCard1Title.classList.add('service-card1-title-arabic');
        serviceCard1Title.classList.remove('service-card1-title');
        serviceCard1Title.innerHTML = "حجز إختياري <img src='ImagesFolder/custom-booking-icon.PNG' class='custom-booking-icon-arabic'>";

        const serviceCard1Description = document.querySelector('.service-card1-description-arabic') || document.querySelector('.service-card1-description');
        serviceCard1Description.classList.add('service-card1-description-arabic');
        serviceCard1Description.classList.remove('service-card1-description');
        serviceCard1Description.innerHTML = " .حدد تاريخ البداية و النهاية";

        const card2HolderItemsContainerA = document.querySelector('.canvas-card2-holder-items-container-arabic') || document.querySelector('.canvas-card2-holder-items-container');
        card2HolderItemsContainerA.classList.add('canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainerA.classList.remove('canvas-card2-holder-items-container');

        const serviceCard2CanvasA = document.querySelector('.service-card2-canvas') || document.querySelector('.service-card2-canvas-arabic') ;
        serviceCard2CanvasA.classList.add('service-card2-canvas-arabic');
        serviceCard2CanvasA.classList.remove('service-card2-canvas');

        const serviceCard2CanvasExtensionA = document.querySelector('.service-card2-canvas-extension-arabic') || document.querySelector('.service-card2-canvas-extension')  ;
        serviceCard2CanvasExtensionA.classList.add('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtensionA.classList.remove('service-card2-canvas-extension');
        serviceCard2CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"><img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p> </div>';
        
        const serviceCard2TextA = document.querySelector('.service-card2-text-arabic') || document.querySelector('.service-card2-text') ;
        serviceCard2TextA.classList.add('service-card2-text-arabic');
        serviceCard2TextA.classList.remove('service-card2-text');
    
        const serviceCard2Title = document.querySelector('.service-card2-title-arabic') || document.querySelector('.service-card2-title');
        serviceCard2Title.classList.add('service-card2-title-arabic');
        serviceCard2Title.classList.remove('service-card2-title');
        serviceCard2Title.innerHTML = " زيارة إستكشافية <img src='ImagesFolder/discovery-visit-icon.png' class='discovery-visit-icon-arabic'>";

        const serviceCard2Description = document.querySelector('.service-card2-description-arabic') || document.querySelector('.service-card2-description');
        serviceCard2Description.classList.add('service-card2-description-arabic');
        serviceCard2Description.classList.remove('service-card2-description');
        serviceCard2Description.innerHTML = ".جرب شعور الشالية";
        
        const counterSectionTitleA = document.querySelector('.experience-introduction-title');
        counterSectionTitleA.classList.remove('experience-introduction-title');
        counterSectionTitleA.classList.add('experience-introduction-title-');
        counterSectionTitleA.innerHTML = 'التفاصيل الرئيسية';

        const counterSectionDescriptionA = document.querySelector('.experience-introduction-description');
        counterSectionDescriptionA.classList.remove('experience-introduction-description')
        counterSectionDescriptionA.classList.add('experience-introduction-description-arabic')
        counterSectionDescriptionA.innerHTML = 'تسليط الضوء تفاصيل الشالية الرئيسية';

        const counterCard1NumberA = document.querySelector('.counter-card1-number');
        counterCard1NumberA.classList.remove('counter-card1-number');
        counterCard1NumberA.classList.add('counter-card1-number-arabic');
        counterCard1NumberA.innerHTML = '+6';
        
        const counterCard1TitleA = document.querySelector('.counter-card1-title');
        counterCard1TitleA.classList.remove('counter-card1-title');
        counterCard1TitleA.classList.add('counter-card1-title-arabic');
        counterCard1TitleA.innerHTML = 'غرف ماستر';

        const counterCard1DescriptionA = document.querySelector('.counter-card1-description');
        counterCard1DescriptionA.classList.remove('counter-card1-description');
        counterCard1DescriptionA.classList.add('counter-card1-description-arabic');
        counterCard1DescriptionA.innerHTML = "<p class = 'cc1al1'>لإرضاء عدد الحاضرين</p>  <p class = 'cc1al2' >6 غرف ماستر و غرفة للخادمة</p>";
        
        const counterCard2NumberA = document.querySelector('.counter-card2-number');
        counterCard2NumberA.classList.remove('counter-card2-number');
        counterCard2NumberA.classList.add('counter-card2-number-arabic');
        counterCard2NumberA.innerHTML = '2';
        
        const counterCard2TitleA = document.querySelector('.counter-card2-title');
        counterCard2TitleA.classList.remove('counter-card2-title');
        counterCard2TitleA.classList.add('counter-card2-title-arabic');
        counterCard2TitleA.innerHTML = 'أدوار';

        const counterCard2DescriptionA = document.querySelector('.counter-card2-description');
        counterCard2DescriptionA.classList.remove('counter-card2-description');
        counterCard2DescriptionA.classList.add('counter-card2-description-arabic');
        counterCard2DescriptionA.innerHTML = "<p class = 'cc1al1'>كل دور بتفاصيل مميزه</p>  <p class = 'cc1al2' >يشمل الشالية دورين</p>";  
        
        const counterCard3NumberA = document.querySelector('.counter-card3-number');
        counterCard3NumberA.classList.remove('counter-card3-number');
        counterCard3NumberA.classList.add('counter-card3-number-arabic');
        counterCard3NumberA.innerHTML = '8+';
        
        const counterCard3TitleA = document.querySelector('.counter-card3-title');
        counterCard3TitleA.classList.remove('counter-card3-title');
        counterCard3TitleA.classList.add('counter-card3-title-arabic');
        counterCard3TitleA.innerHTML = 'مرفقات مميزه';

        const counterCard3DescriptionA = document.querySelector('.counter-card3-description');
        counterCard3DescriptionA.classList.remove('counter-card3-description');
        counterCard3DescriptionA.classList.add('counter-card3-description-arabic');
        counterCard3DescriptionA.innerHTML = "<p class = 'cc1al1'>و وسائل تغطي إحتياجك في الشالية</p>  <p class = 'cc1al2' >من وسائل تسلية</p>";      

        const bannerSectionTitleA = document.querySelector('.banner-introduction-title');
        bannerSectionTitleA.classList.remove('banner-introduction-title');
        bannerSectionTitleA.classList.add('banner-introduction-title-arabic');
        bannerSectionTitleA.innerHTML = 'مكونات الشالية';

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description');
        bannerSectionDescriptionA.classList.remove('banner-introduction-description');
        bannerSectionDescriptionA.classList.add('banner-introduction-description-arabic');
        bannerSectionDescriptionA.innerHTML = 'مكونات الشالية التي قد تسأل عنها.';

        const bannerSectionCommentA = document.querySelector('.banner-comment');
        bannerSectionCommentA.classList.remove('banner-comment');
        bannerSectionCommentA.classList.add('banner-comment-arabic');
        bannerSectionCommentA.innerHTML = '.و غيرها العديد';

        const bannerItem1Title = document.querySelector('.banner-item1-title');
        bannerItem1Title.innerText = 'صالة كبيرة';

        const bannerItem2Title = document.querySelector('.banner-item2-title');
        bannerItem2Title.innerText = 'مطبخ محضر كاملاَ';

        const bannerItem3Title = document.querySelector('.banner-item3-title');
        bannerItem3Title.innerText = "ديوانية مع حمامها";

        const bannerItem4Title = document.querySelector('.banner-item4-title');
        bannerItem4Title.innerText = "6 غرف ماستر";

        const bannerItem4Title2 = document.querySelector('.banner-item4-title2');
        bannerItem4Title2.innerText = " + غرفة خادمة";

        const bannerItem5Title = document.querySelector('.banner-item5-title');
        bannerItem5Title.innerText = 'حمام سباحه';

        const bannerItem5Title2 = document.querySelector('.banner-item5-title2');
        bannerItem5Title2.innerText = "مع دورة مياه"

        const bannerItem6Title = document.querySelector('.banner-item6-title');
        bannerItem6Title.innerText = 'مصعد فعال';

        const bannerItem7Title = document.querySelector('.banner-item7-title');
        bannerItem7Title.innerText = 'جلسة خارجية';

        const bannerItem8Title = document.querySelector('.banner-item8-title');
        bannerItem8Title.innerText = 'وسائل تسلية';

        const galleryIntroductionTitleA = document.querySelector('.gallery-introduction-title');
        galleryIntroductionTitleA.classList.remove('gallery-introduction-title');
        galleryIntroductionTitleA.classList.add('gallery-introduction-title-arabic');
        galleryIntroductionTitleA.innerHTML = 'نختصر الكلمات و نترك الصور تتحدث';

        const galleryIntroductionDescriptionA = document.querySelector('.gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.remove('gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.add('gallery-introduction-description-arabic');
        galleryIntroductionDescriptionA.innerHTML = '.لا تتردد في التمرير بمعرض الشالية ';

        const galleryHeaderContainerA = document.querySelector('.gallery-categories-container');
        galleryHeaderContainerA.classList.remove('gallery-categories-container');
        galleryHeaderContainerA.classList.add('gallery-categories-container-arabic');

        const galleryHeaderItem1A = document.querySelector('.gallery-category1');
        galleryHeaderItem1A.innerHTML = 'صور داخلية';

        const galleryHeaderItem2A = document.querySelector('.gallery-category2');
        galleryHeaderItem2A.innerHTML = 'صور خارجية';

        let categoryWidth = window.getComputedStyle(galleryHeaderItem1A).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;

        rect = galleryHeaderItem1A.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1A);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1A.classList.add('gallery-category-active');

        galleryRestart();

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML =  'تريد كيفية الحجز؟' ;
        footerTitleA.classList.add('arabic-text');

        const footerSubTitleA = document.querySelector('.footer-subtitle');
        footerSubTitleA.innerHTML = 'إليك سهولة عملية الحجز الخاصة بي:'
        footerSubTitleA.classList.add('arabic-text');

        const footerSubTitleDescriptionA = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescriptionA.innerHTML = 'أكد عملية الحجز ب٣ خطوات فقط!';
        footerSubTitleDescriptionA.classList.add('arabic-text');

        const footerSectionContainerA = document.querySelector('.footer-visual-explanation');
        footerSectionContainerA.classList.add('arabic-text');

        const stepNumber1A = document.querySelector('.step1-number');
        stepNumber1A.innerHTML = '١.';
        stepNumber1A.classList.add('arabic-text');

        const step1ImageA = document.querySelector('.step1-image');
        step1ImageA.src = 'ImagesFolder/step1-image-arabic.png';
        step1ImageA.classList.add('arabic-text');        

        const step1TitleA = document.querySelector('.step1-title')
        step1TitleA.innerHTML = 'إضغط على زر إحجز الآن.';
        step1TitleA.classList.add('arabic-text');

        const step1DescriptionA = document.querySelector('.step1-description');
        step1DescriptionA.innerHTML = 'إضغط على زر إحجز الآن أدناه.';
        step1DescriptionA.classList.add('arabic-text');

        const stepNumber2A = document.querySelector('.step2-number');
        stepNumber2A.innerHTML = '٢.';
        stepNumber2A.classList.add('arabic-text');
        
        const step2TitleA = document.querySelector('.step2-title')
        step2TitleA.innerHTML = 'إملئ الفراغات و قدِم.';
        step2TitleA.classList.add('arabic-text');

        const step2DescriptionA = document.querySelector('.step2-description');
        step2DescriptionA.innerHTML = 'في الصفحة التالية إملئ الفراغات و إضغط الزر الأصفر.';
        step2DescriptionA.classList.add('arabic-text')

        const stepNumber3A = document.querySelector('.step3-number');
        stepNumber3A.innerHTML = '٣.';
        stepNumber3A.classList.add('arabic-text');
        
        const step3TitleA = document.querySelector('.step3-title')
        step3TitleA.innerHTML = 'إنهاء و تأكيد التفاصيل';
        step3TitleA.classList.add('arabic-text');

        const step3DescriptionA = document.querySelector('.step3-description');
        step3DescriptionA.innerHTML = 'خلال مكالمتنا سيتم إنهاء و تأكيد التفاصيل.';
        step3DescriptionA.classList.add('arabic-text');

        const footerDescriptionA = document.querySelector('.footer-visual-explanation-description');
        footerDescriptionA.innerHTML = 'من خلال هذا الزر ستبدأ بالخطوى الأولى . إنضم لحجوزات أكتوبر!';
        footerDescriptionA.classList.add('arabic-text');

        

        const footerCTADIV = document.querySelector('.footer-cta');
        const footerCTA = footerCTADIV.querySelector('.black-cta-modified');

        footerCTA.style.fontFamily = 'Noto Sans Arabic'
        footerCTA.innerText = 'إحجز الآن';

        language = 'Arabic';
        console.log('Switched Language to Arabic');

        localStorage.setItem('previousLanguage', JSON.stringify(language));
   
        retreiveCurrentLanguage();
        console.log('This is the the landmark')


    }else if (languageStored == 'English'){

        document.body.style.cssText = "background-color: #0D0D0D; display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: Inter !important; color: white; overflow-x: hidden;";

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'Ananas';

        portfolioName.style.marginRight = '0px';
        portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'ع';

        hamburgerLine1.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3.style.borderRadius = '0px 50px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '0px 50px 0px 0px';

                const heroBedA = document.querySelector('.hero-bed') ;
        heroBedA.style.direction = 'ltr';

        const roleA = document.querySelector('.role');
        roleA.style.display = 'flex';
        roleA.style.alignItems = 'center';
        roleA.style.flexDirection = 'row';
        roleA.innerText = 'Ananas Chalet';

        const nameA = document.querySelector('.info-name');
        nameA.style.display = 'flex';
        nameA.style.alignItems = 'center';
        nameA.style.flexDirection = 'row';
        nameA.innerText = "Al-Khairan" ;

        const detailPhrase1 = document.querySelector('.detail-phrase1');
        detailPhrase1.innerText = 'Daily Rent 🗓️';

        const detailPhrase2 = document.querySelector('.detail-phrase2');
        detailPhrase2.innerText = 'Sabah Al-Ahamed📍';

        const heroMainA = document.querySelector('.hero-main');
        heroMainA.style.backgroundImage = 'url(ImagesFolder/Chalet-main-thumbnail.png)';
        heroMainA.style.lineHeight = '1';

        const heroHookA = document.querySelector('.hero-hook');
        heroHookA.innerText = 'Want To Break Family Routine?';
        heroHookA.style.lineHeight = '1.5';

        const packageIConA = document.querySelector('.package-icon');

        packageIConA.classList.replace('pi-translate-ar' , 'pi-translate-en')

        const packageNameA = document.querySelector('.package-name');
        packageNameA.innerText = 'Pine Package';

        document.querySelectorAll('.bulletpoint').forEach(element => {
        element.classList.replace('bulletpoint-ar', 'bulletpoint-en');
        });

        const packagefeature1A = document.querySelector('.package-feature1');
        packagefeature1A.innerHTML = "<div class='bulletpoint bulletpoint-en'></div> Full 3 Nights Stay";
        
        const packagefeature2A = document.querySelector('.package-feature2');
        packagefeature2A.innerHTML = "<div class='bulletpoint bulletpoint-en'></div> High Quality Accomidation Services";

        const packagefeature3A = document.querySelector('.package-feature3');
        packagefeature3A.innerHTML = "<div class='bulletpoint bulletpoint-en'></div> Family Enviornment";

        const packagefeature4A = document.querySelector('.package-feature4');
        packagefeature4A.innerHTML = "<div class='pluspoint pluspoint-en'>+</div> So Much More!";

        const packageTimeIcon = document.querySelector('.package-time-clock');
        packageTimeIcon.style.cssText = 'width: clamp(0px, 4.419vw, 22.42px); padding-right: clamp(0px, 1.5vw, 7.605px); padding-left: 0px '

        const timeText = document.querySelector('.time-text');
        timeText.innerText = 'October Bookings';

        
        const currentPrice = document.querySelector('.current-price');
        currentPrice.innerText = '290';

        const packagePriceA = document.querySelector('.package-price');
        packagePriceA.style.direction = 'rtl';

        const cTAModified = document.querySelector('.black-cta-modified');
        cTAModified.style.fontFamily = 'Inter';
        cTAModified.innerText = 'Book Now';

        const servicesIntroduction = document.querySelector('.services-introduction-arabic');
        if (servicesIntroduction){
        servicesIntroduction.classList.remove('services-introduction-arabic');
        servicesIntroduction.classList.add('services-introduction');}

        const servicesIntroductionTitle = document.querySelector('.services-introduction-title-arabic');
        if (servicesIntroductionTitle){
        servicesIntroductionTitle.classList.remove('services-introduction-title-arabic');
        servicesIntroductionTitle.classList.add('services-introduction-title');
        servicesIntroductionTitle.innerHTML = 'Services Offered';}

        const servicesIntroductionDescription = document.querySelector('.services-introduction-description-arabic');
        if (servicesIntroductionDescription){
        servicesIntroductionDescription.classList.remove('services-introduction-description-arabic');
        servicesIntroductionDescription.classList.add('services-introduction-description');
        servicesIntroductionDescription.innerHTML = 'Tailored solutions designed to meet your unique needs for an ideal holiday.';}

        const card1HolderItemsContainer = document.querySelector('.canvas-card1-holder-items-container-arabic');
        if (card1HolderItemsContainer){
        card1HolderItemsContainer.classList.remove('canvas-card1-holder-items-container-arabic');
        card1HolderItemsContainer.classList.add('canvas-card1-holder-items-container');}

        const serviceCard1Canvas = document.querySelector('.service-card1-canvas-arabic');
        if (serviceCard1Canvas){
        serviceCard1Canvas.classList.remove('service-card1-canvas-arabic')
        serviceCard1Canvas.classList.add('service-card1-canvas');}

        const serviceCard1CanvasExtension = document.querySelector('.service-card1-canvas-extension-arabic');
        if (serviceCard1CanvasExtension){
        serviceCard1CanvasExtension.classList.remove('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtension.classList.add('service-card1-canvas-extension');
        serviceCard1CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"}
        
        const serviceCard1Text = document.querySelector('.service-card1-text-arabic');
        if (serviceCard1Text){
        serviceCard1Text.classList.remove('service-card1-text-arabic');
        serviceCard1Text.classList.add('service-card1-text');}
        
        const serviceCard1Title = document.querySelector('.service-card1-title-arabic');
        if (serviceCard1Title){
        serviceCard1Title.classList.remove('service-card1-title-arabic');
        serviceCard1Title.classList.add('service-card1-title');
        serviceCard1Title.innerHTML = '<img src="ImagesFolder/custom-booking-icon.PNG" class="custom-booking-icon"> Custom Booking';}

        const serviceCard1Description = document.querySelector('.service-card1-description-arabic');
        if (serviceCard1Description){
        serviceCard1Description.classList.remove('service-card1-description-arabic');
        serviceCard1Description.classList.add('service-card1-description');
        serviceCard1Description.innerHTML = 'Choose days and date.';}

        const card2HolderItemsContainer = document.querySelector('.canvas-card2-holder-items-container-arabic');
        if (card2HolderItemsContainer){
        card2HolderItemsContainer.classList.remove('canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainer.classList.add('canvas-card2-holder-items-container');}

        const serviceCard2Canvas = document.querySelector('.service-card2-canvas-arabic');
        if (serviceCard2Canvas){
        serviceCard2Canvas.classList.remove('service-card2-canvas-arabic')
        serviceCard2Canvas.classList.add('service-card2-canvas');}

        const serviceCard2CanvasExtension = document.querySelector('.service-card2-canvas-extension-arabic');
        if (serviceCard2CanvasExtension){
        serviceCard2CanvasExtension.classList.remove('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtension.classList.add('service-card2-canvas-extension');
        serviceCard2CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"}
        
        const serviceCard2Text = document.querySelector('.service-card2-text-arabic');
        if (serviceCard2Text){
        serviceCard2Text.classList.remove('service-card2-text-arabic');
        serviceCard2Text.classList.add('service-card2-text');}

        const serviceCard2Title = document.querySelector('.service-card1-title-arabic');
        if (serviceCard2Title){
        serviceCard2Title.classList.remove('service-card2-title-arabic');
        serviceCard2Title.classList.add('service-card2-title');
        serviceCard2Title.innerHTML = '<img src="ImagesFolder/discovery-visit-icon.png" class="discovery-visit-icon"> Discovery';}

        const serviceCard2Description = document.querySelector('.service-card1-description-arabic');
        if (serviceCard2Description){
        serviceCard2Description.classList.remove('service-card2-description-arabic');
        serviceCard2Description.classList.add('service-card2-description');
        serviceCard2Description.innerHTML = 'Get a feel of the chalet';}

        countDownLanguage();

        const canvasItemsContainer = document.querySelector('.canvas-items-container-arabic');
        if (canvasItemsContainer){
        canvasItemsContainer.classList.remove('canvas-items-container-arabic');}
     

        const counterSectionTitle = document.querySelector('.experience-introduction-title-arabic');
        if (counterSectionTitle){
        counterSectionTitle.classList.add('experience-introduction-title');
        counterSectionTitle.classList.remove('experience-introduction-title-arabic');
        counterSectionTitle.innerHTML = 'Main Details';}

        const counterSectionDescription = document.querySelector('.experience-introduction-description-arabic');
        if (counterSectionDescription){
        counterSectionDescription.classList.add('experience-introduction-description')
        counterSectionDescription.classList.remove('experience-introduction-description-arabic')
        counterSectionDescription.innerHTML = "This Section highlights the chalet's details.";}

        const counterCard1Number = document.querySelector('.counter-card1-number-arabic');
        if (counterCard1Number){
        counterCard1Number.classList.add('counter-card1-number');
        counterCard1Number.classList.remove('counter-card1-number-arabic');
        counterCard1Number.innerHTML = '+6';}
        
        const counterCard1Title = document.querySelector('.counter-card1-title-arabic');
        if (counterCard1Title){
        counterCard1Title.classList.add('counter-card1-title');
        counterCard1Title.classList.remove('counter-card1-title-arabic');
        counterCard1Title.innerHTML = 'Master Rooms';}

        const counterCard1Description = document.querySelector('.counter-card1-description-arabic');
        if (counterCard1Description){
        counterCard1Description.classList.add('counter-card1-description');
        counterCard1Description.classList.remove('counter-card1-description-arabic');
        counterCard1Description.innerHTML = "6 bed rooms all master + maid master room.";}
        
        const counterCard2Number = document.querySelector('.counter-card2-number-arabic');
        if (counterCard2Number){
        counterCard2Number.classList.remove('counter-card2-number-arabic');
        counterCard2Number.classList.add('counter-card2-number');
        counterCard2Number.innerHTML = '2';}
        
        const counterCard2Title = document.querySelector('.counter-card2-title-arabic');
        if (counterCard2Title){
        counterCard2Title.classList.add('counter-card2-title');
        counterCard2Title.classList.remove('counter-card2-title-arabic');
        counterCard2Title.innerHTML = 'Floors';}

        const counterCard2Description = document.querySelector('.counter-card2-description-arabic');
        if (counterCard2Description){
        counterCard2Description.classList.add('counter-card2-description');
        counterCard2Description.classList.remove('counter-card2-description-arabic');
        counterCard2Description.innerHTML = "Chalet Consists of 2 floors holding with many features."; } 
        
        const counterCard3Number = document.querySelector('.counter-card3-number-arabic');
        if (counterCard3Number){
        counterCard3Number.classList.add('counter-card3-number');
        counterCard3Number.classList.remove('counter-card3-number-arabic');
        counterCard3Number.innerHTML = '+8';}
        
        const counterCard3Title = document.querySelector('.counter-card3-title-arabic');
        if (counterCard3Title){
        counterCard3Title.classList.add('counter-card3-title');
        counterCard3Title.classList.remove('counter-card3-title-arabic');
        counterCard3Title.innerHTML = 'Add. Features';}

        const counterCard3Description = document.querySelector('.counter-card3-description-arabic');
        if (counterCard3Description){
        counterCard3Description.classList.add('counter-card3-description');
        counterCard3Description.classList.remove('counter-card3-description-arabic');
        counterCard3Description.innerHTML = "more details to view about our Ananas chalet after booking button."; 
    
    }  
        
        const bannerSectionTitle = document.querySelector('.banner-introduction-title-arabic');
        if (bannerSectionTitle){
        bannerSectionTitle.classList.remove('banner-introduction-title-arabic');
        bannerSectionTitle.classList.add('banner-introduction-title');
        bannerSectionTitle.innerHTML = 'Chalet Features';}

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description-arabic');
        if (bannerSectionDescriptionA){
        bannerSectionDescriptionA.classList.remove('banner-introduction-description-arabic');
        bannerSectionDescriptionA.classList.add('banner-introduction-description');
        bannerSectionDescriptionA.innerHTML = 'Some of the main chalet feature that accomidate your needs.';}

        const bannerItem1Title = document.querySelector('.banner-item1-title');
        bannerItem1Title.innerText = 'Large Living Room';

        const bannerItem2Title = document.querySelector('.banner-item2-title');
        bannerItem2Title.innerText = 'Fully Prepared Kitchen';

        const bannerItem3Title = document.querySelector('.banner-item3-title');
        bannerItem3Title.innerText = "Diwaniah + Bathroom";

        const bannerItem4Title = document.querySelector('.banner-item4-title');
        bannerItem4Title.innerText = "6 Master Bedrooms";

        const bannerItem4Title2 = document.querySelector('.banner-item4-title2');
        bannerItem4Title2.innerText = "+ Maid room";

        const bannerItem5Title = document.querySelector('.banner-item5-title');
        bannerItem5Title.innerText = 'Swimming Pool';

        const bannerItem5Title2 = document.querySelector('.banner-item5-title2');
        bannerItem5Title2.innerText = "+ Bathroom"

        const bannerItem6Title = document.querySelector('.banner-item6-title');
        bannerItem6Title.innerText = 'Functional Elevator';

        const bannerItem7Title = document.querySelector('.banner-item7-title');
        bannerItem7Title.innerText = 'Outdoor Seating';

        const bannerItem8Title = document.querySelector('.banner-item8-title');
        bannerItem8Title.innerText = 'Entertainmnet Facilities';

        const bannerSectionCommentA = document.querySelector('.banner-comment-arabic');
        if (bannerSectionCommentA){
        bannerSectionCommentA.classList.remove('banner-comment-arabic');
        bannerSectionCommentA.classList.add('banner-comment');
        bannerSectionCommentA.innerHTML = 'And many more.';}
        
        const galleryIntroductionTitle = document.querySelector('.gallery-introduction-title-arabic');
        if (galleryIntroductionTitle){
        galleryIntroductionTitle.classList.remove('gallery-introduction-title-arabic');        
        galleryIntroductionTitle.classList.add('gallery-introduction-title');
        galleryIntroductionTitle.innerHTML = 'More Pics Less Words';}

        const galleryIntroductionDescription = document.querySelector('.gallery-introduction-description-arabic');
        if (galleryIntroductionDescription){
        galleryIntroductionDescription.classList.remove('gallery-introduction-description-arabic');        
        galleryIntroductionDescription.classList.add('gallery-introduction-description');
        galleryIntroductionDescription.innerHTML = 'Feel free to view and scroll this gallery of Ananas Chalet.';}

        const galleryHeaderContainer = document.querySelector('.gallery-categories-container-arabic');
        if (galleryHeaderContainer){
        galleryHeaderContainer.classList.remove('gallery-categories-container-arabic');
        galleryHeaderContainer.classList.add('gallery-categories-container');}

        const galleryHeaderItem1 = document.querySelector('.gallery-category1');
        if (galleryHeaderItem1){
        galleryHeaderItem1.innerHTML = 'Indoor';}

        const galleryHeaderItem2 = document.querySelector('.gallery-category2');
        if (galleryHeaderItem2){
        galleryHeaderItem2.innerHTML = 'Outdoor';}


        let categoryWidth = window.getComputedStyle(galleryHeaderItem1).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;


        rect = galleryHeaderItem1.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1.classList.add('gallery-category-active');

        galleryRestart();

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML =  'How To Book?' ;
        footerTitleA.classList.remove('arabic-text');
        footerTitleA.classList.add('english-text');

        const footerSubTitleA = document.querySelector('.footer-subtitle');
        footerSubTitleA.innerHTML = 'My Booking Process:'
        footerSubTitleA.classList.remove('arabic-text');

        const footerSubTitleDescriptionA = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescriptionA.innerHTML = 'Confirm Booking In Just 3 Steps!';
        footerSubTitleDescriptionA.classList.remove('arabic-text');

        const footerSectionContainerA = document.querySelector('.footer-visual-explanation');
        footerSectionContainerA.classList.remove('arabic-text');

        const stepNumber1A = document.querySelector('.step1-number');
        stepNumber1A.innerHTML = '1.';
        stepNumber1A.classList.remove('arabic-text');

        const step1ImageA = document.querySelector('.step1-image');
        step1ImageA.src = 'ImagesFolder/step1-image.png';
        step1ImageA.classList.remove('arabic-text');        

        const step1TitleA = document.querySelector('.step1-title')
        step1TitleA.innerHTML = 'Click Book Now';
        step1TitleA.classList.remove('arabic-text');

        const step1DescriptionA = document.querySelector('.step1-description');
        step1DescriptionA.innerHTML = 'Click on the Book Now button below.';
        step1DescriptionA.classList.remove('arabic-text');

        const stepNumber2A = document.querySelector('.step2-number');
        stepNumber2A.innerHTML = '2.';
        stepNumber2A.classList.remove('arabic-text');
        
        const step2TitleA = document.querySelector('.step2-title')
        step2TitleA.innerHTML = 'Fill in the info & submit';
        step2TitleA.classList.remove('arabic-text');

        const step2DescriptionA = document.querySelector('.step2-description');
        step2DescriptionA.innerHTML = 'In next page, fill the details & click the yellow button.';
        step2DescriptionA.classList.remove('arabic-text')

        const stepNumber3A = document.querySelector('.step3-number');
        stepNumber3A.innerHTML = '3.';
        stepNumber3A.classList.remove('arabic-text');
        
        const step3TitleA = document.querySelector('.step3-title')
        step3TitleA.innerHTML = 'Finalize On Our Call';
        step3TitleA.classList.remove('arabic-text');

        const step3DescriptionA = document.querySelector('.step3-description');
        step3DescriptionA.innerHTML = 'On our call we will finalize and confirm details.';
        step3DescriptionA.classList.remove('arabic-text');

        const footerDescriptionA = document.querySelector('.footer-visual-explanation-description');
        footerDescriptionA.innerHTML = "This button below will start you on the first step. Join the Early August Bookings!";
        footerDescriptionA.classList.remove('arabic-text');

        

        const footerCTADIV = document.querySelector('.footer-cta');
        const footerCTA = footerCTADIV.querySelector('.black-cta-modified');

        footerCTA.style.fontFamily = 'Inter';
        footerCTA.innerText = 'Book Now';
        

        language = 'English';
        console.log('Switched Language to English');

        localStorage.setItem('previousLanguage', JSON.stringify(language));



        console.log('English is the current language');
        retreiveCurrentLanguage()
        console.log('This is the the landmark')


    }};


currentLanguage();



































function switchLanguage(){

    const langButton = document.querySelector('.language');

    console.log(langButton.innerHTML)

    if (langButton.innerHTML == 'ع') {

        document.body.style.cssText = "background-color: #0D0D0D;  display:flex; flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: 'Noto Sans Arabic' !important;  color: white; overflow-x: hidden; ";

        console.log('English is current, now switching to Arabic');

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

        hamburgerLine1.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3.style.borderRadius = '50px 0px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '50px 0px 0px 0px';

        const heroBedA = document.querySelector('.hero-bed') ;
        heroBedA.style.direction = 'rtl';

        const roleA = document.querySelector('.role');
        roleA.style.display = 'flex';
        roleA.style.alignItems = 'center';
        roleA.style.flexDirection = 'row';
        roleA.innerText = 'شالية أناناس';

        const nameA = document.querySelector('.info-name');
        nameA.style.display = 'flex';
        nameA.style.alignItems = 'center';
        nameA.style.flexDirection = 'row';
        nameA.innerText = "الخيران" ;

        const detailPhrase1 = document.querySelector('.detail-phrase1');
        detailPhrase1.innerText = 'إيجار يومي 🗓️';

        const detailPhrase2 = document.querySelector('.detail-phrase2');
        detailPhrase2.innerText = ' صباح الأحمد البحرية📍';

        const heroMainA = document.querySelector('.hero-main');
        heroMainA.style.backgroundImage = 'url(ImagesFolder/hero-card-thumbnail-arabic.png)';
        heroMainA.style.lineHeight = '1';

        const heroHookA = document.querySelector('.hero-hook');
        heroHookA.innerText = 'تبي تكسر الروتين مع العائلة؟ ';
        heroHookA.style.lineHeight = '1.5';

        const packageIConA = document.querySelector('.package-icon');

        packageIConA.classList.replace('pi-translate-en' , 'pi-translate-ar')

        const packageNameA = document.querySelector('.package-name');
        packageNameA.innerText = 'باقة باين';

        document.querySelectorAll('.bulletpoint').forEach(element => {
        element.classList.replace('bulletpoint-en', 'bulletpoint-ar');
        });

        const packagefeature1A = document.querySelector('.package-feature1');
        packagefeature1A.innerHTML = "<div class='bulletpoint bulletpoint-ar'></div> 3 ليالي كامله";
        
        const packagefeature2A = document.querySelector('.package-feature2');
        packagefeature2A.innerHTML = "<div class='bulletpoint bulletpoint-ar'></div> خدمات ضيافة عالية الجودة";

        const packagefeature3A = document.querySelector('.package-feature3');
        packagefeature3A.innerHTML = "<div class='bulletpoint bulletpoint-ar'></div>    بيئة عائلية";

        const packagefeature4A = document.querySelector('.package-feature4');
        packagefeature4A.innerHTML = "<div class='pluspoint pluspoint-ar'>+</div>    و الكثير غير ذلك!";

        const packageTimeIcon = document.querySelector('.package-time-clock');
        packageTimeIcon.style.cssText = 'width: clamp(0px, 4.419vw, 22.42px); padding-left: clamp(0px, 1.5vw, 7.605px); padding-right: 0px '

        const timeText = document.querySelector('.time-text');
        timeText.innerText = 'حجوزات أكتوبر';

        countDownLanguage();

        const currentPrice = document.querySelector('.current-price');
        currentPrice.innerText = '290';

        const packagePriceA = document.querySelector('.package-price');
        packagePriceA.style.direction = 'ltr';

        const cTAModified = document.querySelector('.black-cta-modified');
        cTAModified.innerText = 'إحجز الآن';

        const servicesIntroductionA = document.querySelector('.services-introduction');
        servicesIntroductionA.classList.remove('services-introduction');
        servicesIntroductionA.classList.add('services-introduction-arabic');

        const servicesIntroductionTitleA = document.querySelector('.services-introduction-title');
        servicesIntroductionTitleA.classList.remove('services-introduction-title');
        servicesIntroductionTitleA.classList.add('services-introduction-title-arabic');
        servicesIntroductionTitleA.innerHTML = 'خدمات أوفرها لك';

        const servicesIntroductionDescriptionA = document.querySelector('.services-introduction-description');
        servicesIntroductionDescriptionA.classList.remove('services-introduction-description');
        servicesIntroductionDescriptionA.classList.add('services-introduction-description-arabic');
        servicesIntroductionDescriptionA.innerHTML = '.حلول مصممة لتلبي إحتياجاتك الفريدة لإجازة إستثنائية';

        const card1HolderItemsContainerA = document.querySelector('.canvas-card1-holder-items-container');
        card1HolderItemsContainerA.classList.remove('canvas-card1-holder-items-container');
        card1HolderItemsContainerA.classList.add('canvas-card1-holder-items-container-arabic');

        const serviceCard1CanvasA = document.querySelector('.service-card1-canvas');
        serviceCard1CanvasA.classList.remove('service-card1-canvas')
        serviceCard1CanvasA.classList.add('service-card1-canvas-arabic');

        const serviceCard1CanvasExtensionA = document.querySelector('.service-card1-canvas-extension');
        serviceCard1CanvasExtensionA.classList.remove('service-card1-canvas-extension');
        serviceCard1CanvasExtensionA.classList.add('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"> <img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p></div>';
        
        const serviceCard1TextA = document.querySelector('.service-card1-text');
        serviceCard1TextA.classList.remove('service-card1-text');
        serviceCard1TextA.classList.add('service-card1-text-arabic');
    
        const serviceCard1Title = document.querySelector('.service-card1-title');
        serviceCard1Title.classList.remove('service-card1-title');
        serviceCard1Title.classList.add('service-card1-title-arabic');
        serviceCard1Title.innerHTML = "حجز إختياري <img src='ImagesFolder/custom-booking-icon.PNG' class='custom-booking-icon-arabic'>";

        const serviceCard1Description = document.querySelector('.service-card1-description');
        serviceCard1Description.classList.remove('service-card1-description');
        serviceCard1Description.classList.add('service-card1-description-arabic');
        serviceCard1Description.innerHTML = ".حدد تاريخ البداية و النهاية";

        const card2HolderItemsContainerA = document.querySelector('.canvas-card2-holder-items-container-arabic') || document.querySelector('.canvas-card2-holder-items-container');
        card2HolderItemsContainerA.classList.add('canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainerA.classList.remove('canvas-card2-holder-items-container');

        const serviceCard2CanvasA = document.querySelector('.service-card2-canvas') || document.querySelector('.service-card2-canvas-arabic') ;
        serviceCard2CanvasA.classList.add('service-card2-canvas-arabic');
        serviceCard2CanvasA.classList.remove('service-card2-canvas');

        const serviceCard2CanvasExtensionA = document.querySelector('.service-card2-canvas-extension-arabic') || document.querySelector('.service-card2-canvas-extension')  ;
        serviceCard2CanvasExtensionA.classList.add('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtensionA.classList.remove('service-card2-canvas-extension');
        serviceCard2CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"><img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p> </div>';
        
        const serviceCard2TextA = document.querySelector('.service-card2-text-arabic') || document.querySelector('.service-card2-text') ;
        serviceCard2TextA.classList.add('service-card2-text-arabic');
        serviceCard2TextA.classList.remove('service-card2-text');
    
        const serviceCard2Title = document.querySelector('.service-card2-title-arabic') || document.querySelector('.service-card2-title');
        serviceCard2Title.classList.add('service-card2-title-arabic');
        serviceCard2Title.classList.remove('service-card2-title');
        serviceCard2Title.innerHTML = " زيارة إستكشافية <img src='ImagesFolder/discovery-visit-icon.png' class='discovery-visit-icon-arabic'>";

        const serviceCard2Description = document.querySelector('.service-card2-description-arabic') || document.querySelector('.service-card2-description');
        serviceCard2Description.classList.add('service-card2-description-arabic');
        serviceCard2Description.classList.remove('service-card2-description');
        serviceCard2Description.innerHTML = ".جرب شعور الشالية";
        
        const counterSectionTitleA = document.querySelector('.experience-introduction-title');
        counterSectionTitleA.classList.remove('experience-introduction-title');
        counterSectionTitleA.classList.add('experience-introduction-title-arabic');
        counterSectionTitleA.innerHTML = 'التفاصيل الرئيسية';

        const counterSectionDescriptionA = document.querySelector('.experience-introduction-description');
        counterSectionDescriptionA.classList.remove('experience-introduction-description')
        counterSectionDescriptionA.classList.add('experience-introduction-description-arabic')
        counterSectionDescriptionA.innerHTML = 'تسليط الضوء تفاصيل الشالية الرئيسية';

        const counterCard1NumberA = document.querySelector('.counter-card1-number');
        counterCard1NumberA.classList.remove('counter-card1-number');
        counterCard1NumberA.classList.add('counter-card1-number-arabic');
        counterCard1NumberA.innerHTML = '+6';
        
        const counterCard1TitleA = document.querySelector('.counter-card1-title');
        counterCard1TitleA.classList.remove('counter-card1-title');
        counterCard1TitleA.classList.add('counter-card1-title-arabic');
        counterCard1TitleA.innerHTML = 'غرف ماستر';

        const counterCard1DescriptionA = document.querySelector('.counter-card1-description');
        counterCard1DescriptionA.classList.remove('counter-card1-description');
        counterCard1DescriptionA.classList.add('counter-card1-description-arabic');
        counterCard1DescriptionA.innerHTML = "<p class = 'cc1al1'>لإرضاء عدد الحاضرين</p>  <p class = 'cc1al2' >6 غرف ماستر و غرفة للخادمة</p>";
        
        const counterCard2NumberA = document.querySelector('.counter-card2-number');
        counterCard2NumberA.classList.remove('counter-card2-number');
        counterCard2NumberA.classList.add('counter-card2-number-arabic');
        counterCard2NumberA.innerHTML = '2';
        
        const counterCard2TitleA = document.querySelector('.counter-card2-title');
        counterCard2TitleA.classList.remove('counter-card2-title');
        counterCard2TitleA.classList.add('counter-card2-title-arabic');
        counterCard2TitleA.innerHTML = 'أدوار';

        const counterCard2DescriptionA = document.querySelector('.counter-card2-description');
        counterCard2DescriptionA.classList.remove('counter-card2-description');
        counterCard2DescriptionA.classList.add('counter-card2-description-arabic');
        counterCard2DescriptionA.innerHTML = "<p class = 'cc1al1'>كل دور بتفاصيل مميزه</p>  <p class = 'cc1al2' >يشمل الشالية دورين</p>";  
        
        const counterCard3NumberA = document.querySelector('.counter-card3-number');
        counterCard3NumberA.classList.remove('counter-card3-number');
        counterCard3NumberA.classList.add('counter-card3-number-arabic');
        counterCard3NumberA.innerHTML = '8+';
        
        const counterCard3TitleA = document.querySelector('.counter-card3-title');
        counterCard3TitleA.classList.remove('counter-card3-title');
        counterCard3TitleA.classList.add('counter-card3-title-arabic');
        counterCard3TitleA.innerHTML = 'مرفقات مميزه';

        const counterCard3DescriptionA = document.querySelector('.counter-card3-description');
        counterCard3DescriptionA.classList.remove('counter-card3-description');
        counterCard3DescriptionA.classList.add('counter-card3-description-arabic');
        counterCard3DescriptionA.innerHTML = "<p class = 'cc1al1'>و وسائل تغطي إحتياجك في الشالية</p>  <p class = 'cc1al2' >من وسائل تسلية</p>";      

        const bannerItem1Title = document.querySelector('.banner-item1-title');
        bannerItem1Title.innerText = 'صالة كبيرة';

        const bannerItem2Title = document.querySelector('.banner-item2-title');
        bannerItem2Title.innerText = 'مطبخ محضر كاملاَ';

        const bannerItem3Title = document.querySelector('.banner-item3-title');
        bannerItem3Title.innerText = "ديوانية مع حمامها";

        const bannerItem4Title = document.querySelector('.banner-item4-title');
        bannerItem4Title.innerText = "6 غرف ماستر";

        const bannerItem4Title2 = document.querySelector('.banner-item4-title2');
        bannerItem4Title2.innerText = " + غرفة خادمة";

        const bannerItem5Title = document.querySelector('.banner-item5-title');
        bannerItem5Title.innerText = 'حمام سباحه';

        const bannerItem5Title2 = document.querySelector('.banner-item5-title2');
        bannerItem5Title2.innerText = "مع دورة مياه"

        const bannerItem6Title = document.querySelector('.banner-item5-title');
        bannerItem6Title.innerText = 'مصعد فعال';

        const bannerItem7Title = document.querySelector('.banner-item7-title');
        bannerItem7Title.innerText = 'جلسة خارجية';

        const bannerItem8Title = document.querySelector('.banner-item8-title');
        bannerItem8Title.innerText = 'وسائل تسلية'

        const bannerSectionTitleA = document.querySelector('.banner-introduction-title');
        bannerSectionTitleA.classList.remove('banner-introduction-title');
        bannerSectionTitleA.classList.add('banner-introduction-title-arabic');
        bannerSectionTitleA.innerHTML = 'مكونات الشالية';

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description');
        bannerSectionDescriptionA.classList.remove('banner-introduction-description');
        bannerSectionDescriptionA.classList.add('banner-introduction-description-arabic');
        bannerSectionDescriptionA.innerHTML = 'مكونات الشالية التي قد تسأل عنها.';

        const bannerSectionCommentA = document.querySelector('.banner-comment');
        bannerSectionCommentA.classList.remove('banner-comment');
        bannerSectionCommentA.classList.add('banner-comment-arabic');
        bannerSectionCommentA.innerHTML = '.و غيرها العديد';

        const galleryIntroductionTitleA = document.querySelector('.gallery-introduction-title');
        galleryIntroductionTitleA.classList.remove('gallery-introduction-title');
        galleryIntroductionTitleA.classList.add('gallery-introduction-title-arabic');
        galleryIntroductionTitleA.innerHTML = '.نختصر الكلمات و نترك الصور تتحدث';

        const galleryIntroductionDescriptionA = document.querySelector('.gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.remove('gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.add('gallery-introduction-description-arabic');
        galleryIntroductionDescriptionA.innerHTML = '.لا تتردد في التمرير بمعرض الشالية ';

        const galleryHeaderContainerA = document.querySelector('.gallery-categories-container');
        galleryHeaderContainerA.classList.remove('gallery-categories-container');
        galleryHeaderContainerA.classList.add('gallery-categories-container-arabic');

        const galleryHeaderItem1A = document.querySelector('.gallery-category1');
        galleryHeaderItem1A.innerHTML = 'صور داخليه';

        const galleryHeaderItem2A = document.querySelector('.gallery-category2');
        galleryHeaderItem2A.innerHTML = 'صور خارجية';

        let categoryWidth = window.getComputedStyle(galleryHeaderItem1A).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;

        rect = galleryHeaderItem1A.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1A);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1A.classList.add('gallery-category-active');

        galleryRestart();

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML =  'تريد كيفية الحجز؟' ;
        footerTitleA.classList.add('arabic-text');

        const footerSubTitleA = document.querySelector('.footer-subtitle');
        footerSubTitleA.innerHTML = 'إليك سهولة عملية الحجز الخاصة بي:'
        footerSubTitleA.classList.add('arabic-text');

        const footerSubTitleDescriptionA = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescriptionA.innerHTML = 'أكد عملية الحجز ب٣ خطوات فقط!';
        footerSubTitleDescriptionA.classList.add('arabic-text');

        const footerSectionContainerA = document.querySelector('.footer-visual-explanation');
        footerSectionContainerA.classList.add('arabic-text');

        const stepNumber1A = document.querySelector('.step1-number');
        stepNumber1A.innerHTML = '١.';
        stepNumber1A.classList.add('arabic-text');

        const step1ImageA = document.querySelector('.step1-image');
        step1ImageA.src = 'ImagesFolder/step1-image-arabic.png';
        step1ImageA.classList.add('arabic-text');        

        const step1TitleA = document.querySelector('.step1-title')
        step1TitleA.innerHTML = 'إضغط على زر إحجز الآن.';
        step1TitleA.classList.add('arabic-text');

        const step1DescriptionA = document.querySelector('.step1-description');
        step1DescriptionA.innerHTML = 'إضغط على زر إحجز الآن أدناه.';
        step1DescriptionA.classList.add('arabic-text');

        const stepNumber2A = document.querySelector('.step2-number');
        stepNumber2A.innerHTML = '٢.';
        stepNumber2A.classList.add('arabic-text');
        
        const step2TitleA = document.querySelector('.step2-title')
        step2TitleA.innerHTML = 'إملئ الفراغات و قدِم.';
        step2TitleA.classList.add('arabic-text');

        const step2DescriptionA = document.querySelector('.step2-description');
        step2DescriptionA.innerHTML = 'في الصفحة التالية إملئ الفراغات و إضغط الزر الأصفر.';
        step2DescriptionA.classList.add('arabic-text')

        const stepNumber3A = document.querySelector('.step3-number');
        stepNumber3A.innerHTML = '٣.';
        stepNumber3A.classList.add('arabic-text');
        
        const step3TitleA = document.querySelector('.step3-title')
        step3TitleA.innerHTML = 'إنهاء و تأكيد التفاصيل';
        step3TitleA.classList.add('arabic-text');

        const step3DescriptionA = document.querySelector('.step3-description');
        step3DescriptionA.innerHTML = 'خلال مكالمتنا سيتم إنهاء و تأكيد التفاصيل.';
        step3DescriptionA.classList.add('arabic-text');

        const footerDescriptionA = document.querySelector('.footer-visual-explanation-description');
        footerDescriptionA.innerHTML = 'من خلال هذا الزر ستبدأ بالخطوى الأولى . إنضم لحجوزات أكتوبر!';
        footerDescriptionA.classList.add('arabic-text');

        
        const footerCTADIV = document.querySelector('.footer-cta');
        const footerCTA = footerCTADIV.querySelector('.black-cta-modified');

        footerCTA.style.fontFamily = 'Noto Sans Arabic'
        footerCTA.innerText = 'إحجز الآن';

        language = 'Arabic';
        console.log('Switched Language to Arabic');

        localStorage.setItem('previousLanguage', JSON.stringify(language));


   
        retreiveCurrentLanguage();
        console.log('This is the the landmark')
    
    }else if (langButton.innerHTML == 'EN'){

        document.body.style.cssText = "background-color: #0D0D0D; display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: Inter !important; color: white; overflow-x: hidden;";

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'Ananas';

        portfolioName.style.marginRight = '0px';
        portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'ع';

        hamburgerLine1.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3.style.borderRadius = '0px 50px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '0px 50px 0px 0px';

                const heroBedA = document.querySelector('.hero-bed') ;
        heroBedA.style.direction = 'ltr';

        const roleA = document.querySelector('.role');
        roleA.style.display = 'flex';
        roleA.style.alignItems = 'center';
        roleA.style.flexDirection = 'row';
        roleA.innerText = 'Ananas Chalet';

        const nameA = document.querySelector('.info-name');
        nameA.style.display = 'flex';
        nameA.style.alignItems = 'center';
        nameA.style.flexDirection = 'row';
        nameA.innerText = "Al-Khairan" ;

        const detailPhrase1 = document.querySelector('.detail-phrase1');
        detailPhrase1.innerText = 'Daily Rent 🗓️';

        const detailPhrase2 = document.querySelector('.detail-phrase2');
        detailPhrase2.innerText = 'Sabah Al-Ahamed📍';

        const heroMainA = document.querySelector('.hero-main');
        heroMainA.style.backgroundImage = 'url(ImagesFolder/Chalet-main-thumbnail.png)';
        heroMainA.style.lineHeight = '1';

        const heroHookA = document.querySelector('.hero-hook');
        heroHookA.innerText = 'Want To Break Family Routine?';
        heroHookA.style.lineHeight = '1.5';

        const packageIConA = document.querySelector('.package-icon');

        packageIConA.classList.replace('pi-translate-ar' , 'pi-translate-en')

        const packageNameA = document.querySelector('.package-name');
        packageNameA.innerText = 'Pine Package';

        document.querySelectorAll('.bulletpoint').forEach(element => {
        element.classList.replace('bulletpoint-ar', 'bulletpoint-en');
        });

        const packagefeature1A = document.querySelector('.package-feature1');
        packagefeature1A.innerHTML = "<div class='bulletpoint bulletpoint-en'></div> Full 3 Nights Stay";
        
        const packagefeature2A = document.querySelector('.package-feature2');
        packagefeature2A.innerHTML = "<div class='bulletpoint bulletpoint-en'></div> High Quality Accomidation Services";

        const packagefeature3A = document.querySelector('.package-feature3');
        packagefeature3A.innerHTML = "<div class='bulletpoint bulletpoint-en'></div> Family Enviornment";

        const packagefeature4A = document.querySelector('.package-feature4');
        packagefeature4A.innerHTML = "<div class='pluspoint pluspoint-en'>+</div> So Much More!";

        const packageTimeIcon = document.querySelector('.package-time-clock');
        packageTimeIcon.style.cssText = 'width: clamp(0px, 4.419vw, 22.42px); padding-right: clamp(0px, 1.5vw, 7.605px); padding-left: 0px '

        const timeText = document.querySelector('.time-text');
        timeText.innerText = 'October Bookings';

        
        const currentPrice = document.querySelector('.current-price');
        currentPrice.innerText = '290';

        const packagePriceA = document.querySelector('.package-price');
        packagePriceA.style.direction = 'rtl';

        const cTAModified = document.querySelector('.black-cta-modified');
        cTAModified.style.fontFamily = 'Inter';
        cTAModified.innerText = 'Book Now';

        const servicesIntroduction = document.querySelector('.services-introduction-arabic');
        if (servicesIntroduction){
        servicesIntroduction.classList.remove('services-introduction-arabic');
        servicesIntroduction.classList.add('services-introduction');}

        const servicesIntroductionTitle = document.querySelector('.services-introduction-title-arabic');
        if (servicesIntroductionTitle){
        servicesIntroductionTitle.classList.remove('services-introduction-title-arabic');
        servicesIntroductionTitle.classList.add('services-introduction-title');
        servicesIntroductionTitle.innerHTML = 'Services Offered';}

        const servicesIntroductionDescription = document.querySelector('.services-introduction-description-arabic');
        if (servicesIntroductionDescription){
        servicesIntroductionDescription.classList.remove('services-introduction-description-arabic');
        servicesIntroductionDescription.classList.add('services-introduction-description');
        servicesIntroductionDescription.innerHTML = 'Tailored solutions designed to meet your unique needs for an ideal holiday.';}

        const card1HolderItemsContainer = document.querySelector('.canvas-card1-holder-items-container-arabic');
        if (card1HolderItemsContainer){
        card1HolderItemsContainer.classList.remove('canvas-card1-holder-items-container-arabic');
        card1HolderItemsContainer.classList.add('canvas-card1-holder-items-container');}

        const serviceCard1Canvas = document.querySelector('.service-card1-canvas-arabic');
        if (serviceCard1Canvas){
        serviceCard1Canvas.classList.remove('service-card1-canvas-arabic')
        serviceCard1Canvas.classList.add('service-card1-canvas');}

        const serviceCard1CanvasExtension = document.querySelector('.service-card1-canvas-extension-arabic');
        if (serviceCard1CanvasExtension){
        serviceCard1CanvasExtension.classList.remove('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtension.classList.add('service-card1-canvas-extension');
        serviceCard1CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"}
        
        const serviceCard1Text = document.querySelector('.service-card1-text-arabic');
        if (serviceCard1Text){
        serviceCard1Text.classList.remove('service-card1-text-arabic');
        serviceCard1Text.classList.add('service-card1-text');}
        
        const serviceCard1Title = document.querySelector('.service-card1-title-arabic');
        if (serviceCard1Title){
        serviceCard1Title.classList.remove('service-card1-title-arabic');
        serviceCard1Title.classList.add('service-card1-title');
        serviceCard1Title.innerHTML = '<img src="ImagesFolder/custom-booking-icon.PNG" class="custom-booking-icon"> Custom Booking';}

        const serviceCard1Description = document.querySelector('.service-card1-description-arabic');
        if (serviceCard1Description){
        serviceCard1Description.classList.remove('service-card1-description-arabic');
        serviceCard1Description.classList.add('service-card1-description');
        serviceCard1Description.innerHTML = 'Choose days and date.';}

        const card2HolderItemsContainer = document.querySelector('.canvas-card2-holder-items-container-arabic');
        if (card2HolderItemsContainer){
        card2HolderItemsContainer.classList.remove('canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainer.classList.add('canvas-card2-holder-items-container');}

        const serviceCard2Canvas = document.querySelector('.service-card2-canvas-arabic');
        if (serviceCard2Canvas){
        serviceCard2Canvas.classList.remove('service-card2-canvas-arabic')
        serviceCard2Canvas.classList.add('service-card2-canvas');}

        const serviceCard2CanvasExtension = document.querySelector('.service-card2-canvas-extension-arabic');
        if (serviceCard2CanvasExtension){
        serviceCard2CanvasExtension.classList.remove('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtension.classList.add('service-card2-canvas-extension');
        serviceCard2CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"}
        
        const serviceCard2Text = document.querySelector('.service-card2-text-arabic');
        if (serviceCard2Text){
        serviceCard2Text.classList.remove('service-card2-text-arabic');
        serviceCard2Text.classList.add('service-card2-text');}

        const serviceCard2Title = document.querySelector('.service-card2-title-arabic');
        if (serviceCard2Title){
        serviceCard2Title.classList.remove('service-card2-title-arabic');
        serviceCard2Title.classList.add('service-card2-title');
        serviceCard2Title.innerHTML = '<img src="ImagesFolder/discovery-visit-icon.png" class="discovery-visit-icon"> Discovery Visit';}

        const serviceCard2Description = document.querySelector('.service-card2-description-arabic');
        if (serviceCard2Description){
        serviceCard2Description.classList.remove('service-card2-description-arabic');
        serviceCard2Description.classList.add('service-card2-description');
        serviceCard2Description.innerHTML = 'Get a feel of the chalet';}

        countDownLanguage();

        const canvasItemsContainer = document.querySelector('.canvas-items-container-arabic');
        if (canvasItemsContainer){
        canvasItemsContainer.classList.remove('canvas-items-container-arabic');}
     

        const counterSectionTitle = document.querySelector('.experience-introduction-title-arabic');
        if (counterSectionTitle){
        counterSectionTitle.classList.add('experience-introduction-title');
        counterSectionTitle.classList.remove('experience-introduction-title-arabic');
        counterSectionTitle.innerHTML = 'Main Details';}

        const counterSectionDescription = document.querySelector('.experience-introduction-description-arabic');
        if (counterSectionDescription){
        counterSectionDescription.classList.add('experience-introduction-description')
        counterSectionDescription.classList.remove('experience-introduction-description-arabic')
        counterSectionDescription.innerHTML = "This Section highlights the chalet's details.";}

        const counterCard1Number = document.querySelector('.counter-card1-number-arabic');
        if (counterCard1Number){
        counterCard1Number.classList.add('counter-card1-number');
        counterCard1Number.classList.remove('counter-card1-number-arabic');
        counterCard1Number.innerHTML = '+6';}
        
        const counterCard1Title = document.querySelector('.counter-card1-title-arabic');
        if (counterCard1Title){
        counterCard1Title.classList.add('counter-card1-title');
        counterCard1Title.classList.remove('counter-card1-title-arabic');
        counterCard1Title.innerHTML = 'Master Rooms';}

        const counterCard1Description = document.querySelector('.counter-card1-description-arabic');
        if (counterCard1Description){
        counterCard1Description.classList.add('counter-card1-description');
        counterCard1Description.classList.remove('counter-card1-description-arabic');
        counterCard1Description.innerHTML = "6 bed rooms all master + maid master room.";}
        
        const counterCard2Number = document.querySelector('.counter-card2-number-arabic');
        if (counterCard2Number){
        counterCard2Number.classList.remove('counter-card2-number-arabic');
        counterCard2Number.classList.add('counter-card2-number');
        counterCard2Number.innerHTML = '2';}
        
        const counterCard2Title = document.querySelector('.counter-card2-title-arabic');
        if (counterCard2Title){
        counterCard2Title.classList.add('counter-card2-title');
        counterCard2Title.classList.remove('counter-card2-title-arabic');
        counterCard2Title.innerHTML = 'Floors';}

        const counterCard2Description = document.querySelector('.counter-card2-description-arabic');
        if (counterCard2Description){
        counterCard2Description.classList.add('counter-card2-description');
        counterCard2Description.classList.remove('counter-card2-description-arabic');
        counterCard2Description.innerHTML = "Chalet Consists of 2 floors holding with many features."; } 
        
        const counterCard3Number = document.querySelector('.counter-card3-number-arabic');
        if (counterCard3Number){
        counterCard3Number.classList.add('counter-card3-number');
        counterCard3Number.classList.remove('counter-card3-number-arabic');
        counterCard3Number.innerHTML = '+8';}
        
        const counterCard3Title = document.querySelector('.counter-card3-title-arabic');
        if (counterCard3Title){
        counterCard3Title.classList.add('counter-card3-title');
        counterCard3Title.classList.remove('counter-card3-title-arabic');
        counterCard3Title.innerHTML = 'Add. Features';}

        const counterCard3Description = document.querySelector('.counter-card3-description-arabic');
        if (counterCard3Description){
        counterCard3Description.classList.add('counter-card3-description');
        counterCard3Description.classList.remove('counter-card3-description-arabic');
        counterCard3Description.innerHTML = "more details to view about our Ananas chalet after booking button."; 
    
    }  
        
        const bannerSectionTitle = document.querySelector('.banner-introduction-title-arabic');
        if (bannerSectionTitle){
        bannerSectionTitle.classList.remove('banner-introduction-title-arabic');
        bannerSectionTitle.classList.add('banner-introduction-title');
        bannerSectionTitle.innerHTML = 'Chalet Features';}

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description-arabic');
        if (bannerSectionDescriptionA){
        bannerSectionDescriptionA.classList.remove('banner-introduction-description-arabic');
        bannerSectionDescriptionA.classList.add('banner-introduction-description');
        bannerSectionDescriptionA.innerHTML = 'Some of the main chalet feature that accomidate your needs.';}

        const bannerItem1Title = document.querySelector('.banner-item1-title');
        bannerItem1Title.innerText = 'Large Living Room';

        const bannerItem2Title = document.querySelector('.banner-item2-title');
        bannerItem2Title.innerText = 'Fully Prepared Kitchen';

        const bannerItem3Title = document.querySelector('.banner-item3-title');
        bannerItem3Title.innerText = "Diwaniah + Bathroom";

        const bannerItem4Title = document.querySelector('.banner-item4-title');
        bannerItem4Title.innerText = "6 Master Bedrooms";

        const bannerItem4Title2 = document.querySelector('.banner-item4-title2');
        bannerItem4Title2.innerText = "+ Maid room";

        const bannerItem5Title = document.querySelector('.banner-item5-title');
        bannerItem5Title.innerText = 'Swimming Pool';

        const bannerItem5Title2 = document.querySelector('.banner-item5-title2');
        bannerItem5Title2.innerText = "+ Bathroom"

        const bannerItem6Title = document.querySelector('.banner-item6-title');
        bannerItem6Title.innerText = 'Functional Elevator';

        const bannerItem7Title = document.querySelector('.banner-item7-title');
        bannerItem7Title.innerText = 'Outdoor Seating';

        const bannerItem8Title = document.querySelector('.banner-item8-title');
        bannerItem8Title.innerText = 'Entertainmnet Facilities';

        const bannerSectionCommentA = document.querySelector('.banner-comment-arabic');
        if (bannerSectionCommentA){
        bannerSectionCommentA.classList.remove('banner-comment-arabic');
        bannerSectionCommentA.classList.add('banner-comment');
        bannerSectionCommentA.innerHTML = 'And many more.';}
        
        const galleryIntroductionTitle = document.querySelector('.gallery-introduction-title-arabic');
        if (galleryIntroductionTitle){
        galleryIntroductionTitle.classList.remove('gallery-introduction-title-arabic');        
        galleryIntroductionTitle.classList.add('gallery-introduction-title');
        galleryIntroductionTitle.innerHTML = 'More Pics Less Words';}

        const galleryIntroductionDescription = document.querySelector('.gallery-introduction-description-arabic');
        if (galleryIntroductionDescription){
        galleryIntroductionDescription.classList.remove('gallery-introduction-description-arabic');        
        galleryIntroductionDescription.classList.add('gallery-introduction-description');
        galleryIntroductionDescription.innerHTML = 'Feel free to view and scroll this gallery of Ananas Chalet.';}

        const galleryHeaderContainer = document.querySelector('.gallery-categories-container-arabic');
        if (galleryHeaderContainer){
        galleryHeaderContainer.classList.remove('gallery-categories-container-arabic');
        galleryHeaderContainer.classList.add('gallery-categories-container');}

        const galleryHeaderItem1 = document.querySelector('.gallery-category1');
        if (galleryHeaderItem1){
        galleryHeaderItem1.innerHTML = 'Indoor';}

        const galleryHeaderItem2 = document.querySelector('.gallery-category2');
        if (galleryHeaderItem2){
        galleryHeaderItem2.innerHTML = 'Outdoor';}


        let categoryWidth = window.getComputedStyle(galleryHeaderItem1).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;


        rect = galleryHeaderItem1.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1.classList.add('gallery-category-active');

        galleryRestart();

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML =  'How To Book?' ;
        footerTitleA.classList.remove('arabic-text');
        footerTitleA.classList.add('english-text');

        const footerSubTitleA = document.querySelector('.footer-subtitle');
        footerSubTitleA.innerHTML = 'My Booking Process:'
        footerSubTitleA.classList.remove('arabic-text');

        const footerSubTitleDescriptionA = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescriptionA.innerHTML = 'Confirm Booking In Just 3 Steps!';
        footerSubTitleDescriptionA.classList.remove('arabic-text');

        const footerSectionContainerA = document.querySelector('.footer-visual-explanation');
        footerSectionContainerA.classList.remove('arabic-text');

        const stepNumber1A = document.querySelector('.step1-number');
        stepNumber1A.innerHTML = '1.';
        stepNumber1A.classList.remove('arabic-text');

        const step1ImageA = document.querySelector('.step1-image');
        step1ImageA.src = 'ImagesFolder/step1-image.png';
        step1ImageA.classList.remove('arabic-text');        

        const step1TitleA = document.querySelector('.step1-title')
        step1TitleA.innerHTML = 'Click Book Now';
        step1TitleA.classList.remove('arabic-text');

        const step1DescriptionA = document.querySelector('.step1-description');
        step1DescriptionA.innerHTML = 'Click on the Book Now button below.';
        step1DescriptionA.classList.remove('arabic-text');

        const stepNumber2A = document.querySelector('.step2-number');
        stepNumber2A.innerHTML = '2.';
        stepNumber2A.classList.remove('arabic-text');
        
        const step2TitleA = document.querySelector('.step2-title')
        step2TitleA.innerHTML = 'Fill in the info & submit';
        step2TitleA.classList.remove('arabic-text');

        const step2DescriptionA = document.querySelector('.step2-description');
        step2DescriptionA.innerHTML = 'In next page, fill the details & click the yellow button.';
        step2DescriptionA.classList.remove('arabic-text')

        const stepNumber3A = document.querySelector('.step3-number');
        stepNumber3A.innerHTML = '3.';
        stepNumber3A.classList.remove('arabic-text');
        
        const step3TitleA = document.querySelector('.step3-title')
        step3TitleA.innerHTML = 'Finalize On Our Call';
        step3TitleA.classList.remove('arabic-text');

        const step3DescriptionA = document.querySelector('.step3-description');
        step3DescriptionA.innerHTML = 'On our call we will finalize and confirm details.';
        step3DescriptionA.classList.remove('arabic-text');

        const footerDescriptionA = document.querySelector('.footer-visual-explanation-description');
        footerDescriptionA.innerHTML = "This button below will start you on the first step. Join the Early August Bookings!";
        footerDescriptionA.classList.remove('arabic-text');

        

        const footerCTADIV = document.querySelector('.footer-cta');
        const footerCTA = footerCTADIV.querySelector('.black-cta-modified');

        footerCTA.style.fontFamily = 'Inter';
        footerCTA.innerText = 'Book Now';
        

        language = 'English';
        console.log('Switched Language to English');

        localStorage.setItem('previousLanguage', JSON.stringify(language));



        console.log('English is the current language');
        retreiveCurrentLanguage()
        console.log('This is the the landmark')


    };

    const arabicSidebar = document.querySelector('.sidebar-arabic');
    const sidebar = document.querySelector('.sidebar');


    if(arabicSidebar.classList.contains('sidebar-toggled-arabic') && !arabicSidebar.classList.contains('sidebar-close-arabic' )){
        arabicSidebar.classList.remove('sidebar-toggled-arabic');
        sidebar.classList.remove('sidebar-close');
        sidebar.classList.add('sidebar-toggled');
        header.style.position = 'fixed';
        hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';
        console.log('English one sir:'+sidebar.classList)
        console.log('Arabic one sir:'+arabicSidebar.classList)

    }else if (sidebar.classList.contains('sidebar-toggled') && !sidebar.classList.contains('sidebar-close')){
        sidebar.classList.remove('sidebar-toggled');
        arabicSidebar.classList.remove('sidebar-close-arabic');
        arabicSidebar.classList.add('sidebar-toggled-arabic');
        header.style.position = 'fixed';
        hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';
        console.log('English one sir:'+sidebar.classList);
        console.log('Arabic one sir:'+arabicSidebar.classList);
    }   

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



document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});





const element = document.querySelector('.service-card1-canvas-arabic');

function logElementPosition() {
if (element){
  const rect = element.getBoundingClientRect();
  const x = rect.left; // x-coordinate of the left border
  const y = rect.top;  // y-coordinate of the top border
  console.log(`Left border X: ${x.toFixed(6)}, Y: ${y.toFixed(6)}`);}
}

// Log position on each resize
window.addEventListener('resize', () => {
  logElementPosition();
});

// Optionally, log the initial position
logElementPosition();



function eppPopUp (){

if (document.querySelector('.epp-pop-up')){

//Step 1: Header becomes fixed.
    const headerItemsContainer = document.querySelector('.header-items-container');
    headerItemsContainer.classList.remove('header-items-container');
    headerItemsContainer.classList.add('header-items-container-fixed');

//Step 2: EPP pop up appears.
    const popUp = document.querySelector('.epp-pop-up');
    popUp.classList.remove('epp-pop-up');
    popUp.classList.add('epp-pop-up-appear');

//Step 3: Functional Hamburger disappears.
    const hamburgerEF = document.querySelector('.hamburger-functional');
    hamburgerEF.classList.remove('hamburger-functional');
    hamburgerEF.classList.add('hamburger-functional-off');

//Step 4: Show the non-functional hamburger.
    const hamburgerE = document.querySelector('.hamburger');
    hamburgerE.classList.remove('hmbrgr-off');
    console.log('non-functional hamburger here')


    
console.log(popUp.classList);

} else if(document.querySelector('.epp-pop-up-appear')){
    console.log('Calling from 2nd click Boss');

//Step 1: Header becomes static.
    const headerItemsContainer = document.querySelector('.header-items-container-fixed');
    headerItemsContainer.classList.remove('header-items-container-fixed');
    headerItemsContainer.classList.add('header-items-container');

//Step 2: EPP pop up disappears.
    const popUp = document.querySelector('.epp-pop-up-appear');
    popUp.classList.remove('epp-pop-up-appear');
    popUp.classList.add('epp-pop-up');

//Step 3: Non functional hamburger disappears.
    setTimeout(function() {
        hamburgerE.classList.add('hmbrgr-off');

//Step 3: Show the functional hamburger button.
    const hamburgerEF = document.querySelector('.hamburger-functional-off');
    hamburgerEF.classList.remove('hamburger-functional-off');
    hamburgerEF.classList.add('hamburger-functional');
    console.log('functional hamburger here');
    console.log(hamburgerEF.classList);

    }, 1000);

    }

};







function galleryCategoryToggle(categoryClicked , itsContainer){
    if(document.querySelector('.gallery-category-active')){
        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        document.querySelector('.category-items-container-toggled')? document.querySelector('.category-items-container-toggled').classList.remove('category-items-container-toggled') : console.log('There is no toggled container');
        itsContainer.classList.add('category-items-container-toggled');
        console.log(itsContainer);        
        categoryClicked.classList.add('gallery-category-active');
        rect = categoryClicked.getBoundingClientRect();
        const xCoordinate = rect.x;
        console.log(xCoordinate);
        console.log(window.innerWidth);
        const style = window.getComputedStyle(categoryClicked);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        console.log(`${containerXCoordinates}px are left of container`);
        console.log(xCoordinate - containerXCoordinates + 'is the final result')

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
        toggleUnderline.style.width = width;


        
    }else{
        categoryClicked.classList.add('gallery-category-active');
        document.querySelector('.category-items-container-toggled')? document.querySelector('.category-items-container-toggled').classList.remove('category-items-container-toggled') : console.log('There is no toggled container');
        console.log(itsContainer)
        itsContainer.classList.add('category-items-container-toggled');
        rect = categoryClicked.getBoundingClientRect();
        const xCoordinate = rect.x;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;

        const style = window.getComputedStyle(categoryClicked);
        const width = style.width;
        console.log(width);

        console.log(xCoordinate);
        console.log(window.innerWidth);
        console.log(xCoordinate - (window.innerWidth * 0.0674418605));
        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
        toggleUnderline.style.width = width;



    }

    const portrait = itsContainer.querySelector('.portrait-mode');
    console.log(portrait)
    const landscape = itsContainer.querySelector('.landscape-mode');    
    console.log(landscape)

   
        portrait.classList.add('category-toggled-version');
        landscape.classList.remove('category-toggled-version'); 

        const galleryModeSwitchToggle = document.querySelector('.gallery-toggle-bar');
        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle');





};

function galleryModeSwitch(){
    const toggledCategoryContainer = document.querySelector('.category-items-container-toggled');
    console.log(toggledCategoryContainer);
    const portrait = toggledCategoryContainer.querySelector('.portrait-mode');
    console.log(portrait)
    const landscape = toggledCategoryContainer.querySelector('.landscape-mode');    
    console.log(landscape)
    const galleryModeSwitchToggle = document.querySelector('.gallery-toggle-bar');


    
    
    
    if(portrait.classList.contains('category-toggled-version')){
        portrait.classList.remove('category-toggled-version');


        landscape.classList.add('category-toggled-version');

        galleryModeSwitchToggle.classList.remove('p-toggle');
        galleryModeSwitchToggle.classList.add('l-toggle');




        document.querySelector('.landscape-title').style.fontWeight = 'bold';
        document.querySelector('.portrait-title').style.fontWeight = '300';


    }else if (landscape.classList.contains('category-toggled-version')){

        portrait.classList.add('category-toggled-version');



        landscape.classList.remove('category-toggled-version'); 

        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle')



        document.querySelector('.landscape-title').style.fontWeight = '300';
        document.querySelector('.portrait-title').style.fontWeight = 'bold';


    }else{
        portrait.classList.add('category-toggled-version');

        landscape.classList.remove('category-toggled-version'); 


        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle')


        document.querySelector('.landscape-title').style.fontWeight = '300';
        document.querySelector('.portrait-title').style.fontWeight = 'bold';



    }
}


function tapToView (tapToViewURL){

  
    
    const tapToViewOverlay = document.querySelector('.image-display-overlay');
    tapToViewOverlay.classList.add('image-display-overlay-toggled')

    const viewedHolder = document.querySelector('.viewed-image-holder');

    viewedHolder.style.backgroundImage = `url(${tapToViewURL})`;

}



let reloadCount = 0;
const maxReloads = 3; // Or any other reasonable limit

function myFunction() {
  // ... your existing code ...

  if (reloadCount < maxReloads) {
    // Check if a condition is met before reloading
    if (someConditionIsTrue()) {
        window.location.reload(true);
        reloadCount++;
    }
  } else {
    console.log("Maximum reload attempts reached.");
    // Handle the case where the maximum number of reloads has been exceeded.
    // For example, display a message to the user.
  }
}


function someConditionIsTrue() {
  // Replace this with your actual condition.  This example checks if a variable changes.
  return someVariable !== oldValue;
}

// Example usage (assuming someVariable is a global variable)
let oldValue = 0;
let someVariable = 1;


























