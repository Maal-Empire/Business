// List of thumbnail images and their links
const images = [
    { src: "assets/image1.jpg", link: "data:image/webp;base64,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" },
    { src: "assets/image2.jpg", link: "https://www.bing.com/images/search?view=detailV2&ccid=TYBqIM6%2b&id=86B682725605E375AB7AF8D897C7F0D56FB38BC3&thid=OIP.TYBqIM6-gQ2MmYMQEwU7zgHaE8&mediaurl=https%3a%2f%2fembassynvisa.com%2fwp-content%2fuploads%2f2021%2f05%2fVFS-Visa-application-Center.jpg&exph=1280&expw=1920&q=vfs&simid=608047867128020536&FORM=IRPRST&ck=0D850F0013DF7D7F74482E693DE55958&selectedIndex=5&itb=0" },
    { src: "assets/image3.jpg", link: "https://example3.com" },
    { src: "assets/image4.jpg", link: "https://example4.com" },
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
