// List of thumbnail images and their links
const images = [
    { src: "assets/image1.jpg", link: "https://www.bing.com/images/search?view=detailV2&ccid=B5EE9hQq&id=E7D557D6ED23B947157B2A7B250599D4D69AA9F3&thid=OIP.B5EE9hQqninieB3QRVT8EAHaE7&mediaurl=https%3a%2f%2fimg.freepik.com%2fpremium-photo%2fcloseup-business-professional-signing-contract-symbolizing-successful-negotiation-lucrative-business-deal_875722-12565.jpg&exph=417&expw=626&q=business+signing&simid=608039822661465309&FORM=IRPRST&ck=FD0FCB8F70404C8D44E5C90249DA9CAF&selectedIndex=2&itb=0" },
    { src: "assets/image2.jpg", link: "https://www.bing.com/images/search?view=detailV2&ccid=TYBqIM6%2b&id=86B682725605E375AB7AF8D897C7F0D56FB38BC3&thid=OIP.TYBqIM6-gQ2MmYMQEwU7zgHaE8&mediaurl=https%3a%2f%2fembassynvisa.com%2fwp-content%2fuploads%2f2021%2f05%2fVFS-Visa-application-Center.jpg&exph=1280&expw=1920&q=vfs&simid=608047867128020536&FORM=IRPRST&ck=0D850F0013DF7D7F74482E693DE55958&selectedIndex=5&itb=0" },
    { src: "assets/image3.jpg", link: "https://www.bing.com/images/search?view=detailV2&ccid=9Ra7Q9sn&id=0EE7C8A5D77875A03FE12EC2E08B9A1FC8ABEB3A&thid=OIP.9Ra7Q9snnkJIiPSdTJpZAAHaEK&mediaurl=https%3a%2f%2fstorage.googleapis.com%2foliblog%2fsign-company-orange-county%2fimg%2fpage-7.jpeg&exph=720&expw=1280&q=business+signing&simid=608004243120810587&FORM=IRPRST&ck=3F0A5595C0F8D89E352DDFE196D4AA23&selectedIndex=27&itb=0" },
    { src: "assets/image4.jpg", link: "https://www.bing.com/images/search?view=detailV2&ccid=N755YFNy&id=F8F5BD6793F7EC477263765D857897CE85384375&thid=OIP.N755YFNyuPqlXtTdxmCkPgHaEK&mediaurl=https%3a%2f%2fwww.fillhq.com%2fwp-content%2fuploads%2f2021%2f09%2fOnline-Contract-Signing-for-Businesses-How-Does-It-Work.png&exph=1080&expw=1920&q=business+signing&simid=608011510266030110&FORM=IRPRST&ck=F173610379A54AFB2165BCBBAF16C4A1&selectedIndex=3&itb=0" },
    { src: "assets/image5.jpg", link: "https://example5.com" }
];

let currentImage = 0;
const thumbnail = document.getElementById('thumbnail');
const thumbnailLink = document.getElementById('thumbnailLink');

// Initial set
thumbnail.src = images[0].src;
thumbnailLink.href = images[0].link;

// Change image and link every 5 seconds
setInterval(() => {
    currentImage = (currentImage + 1) % images.length;
    thumbnail.src = images[currentImage].src;
    thumbnailLink.href = images[currentImage].link;
}, 5000);

// Modal logic
const modal = document.getElementById('signupModal');
const signupBtn = document.getElementById('signupBtn');
const closeModal = document.getElementById('closeModal');
const signupForm = document.getElementById('signupForm');
const requestsList = document.getElementById('requestsList');

signupBtn.addEventListener('click', () => {
    modal.style.display = "block";
});
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});
window.addEventListener('click', (e) => {
    if (e.target == modal) modal.style.display = "none";
});

// Handle sign up form
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const dob = this.dob.value;
    // Add request to list
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}, DOB: ${dob}`;
    requestsList.appendChild(li);
    // Reset form & close modal
    this.reset();
    modal.style.display = "none";
});

// Contact Us button
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
    // Edit these details to your own!
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // e.g., 1234567890
    const email = 'your@email.com';
    const phone = '+1234567890';

    // Show a simple prompt for contact options
    let contact = prompt("Contact Us:\n1. WhatsApp\n2. Email\n3. Phone\nEnter 1, 2, or 3:");
    if (contact === '1') {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    } else if (contact === '2') {
        window.location.href = `mailto:${email}`;
    } else if (contact === '3') {
        window.location.href = `tel:${phone}`;
    }
});
