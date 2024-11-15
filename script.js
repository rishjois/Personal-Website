document.addEventListener("DOMContentLoaded", () => {
    const subtext = document.getElementById("subtext");
    const mainHeading = document.getElementById("main-heading");

    const heading = "Hi there! My name is Rishabh Jois...";
    const restOfHeading = "! My name is Rishabh Jois...";
    
    let index = 0;

    function typeMainHeading() {
        if (index < heading.length) {
            mainHeading.textContent += heading.charAt(index);
            index++;
            setTimeout(typeMainHeading, 100);
        }
    }

    typeMainHeading();

    // Fade-in the subtext after heading is typed
    setTimeout(() => {
        subtext.style.opacity = 1;
    }, 3300); // Wait for heading animation to finish

    // Language cycle: words for "Hi there" in different languages
    const languages = [
        "Hi there",
        "Hola",
        "Bonjour",
        "Hallo",
        "Ciao",
        "Olá",
        "Привет",
        "こんにちは",
        "안녕하세요",
        "你好",
        "नमस्ते"
    ];

    let languageIndex = 0;

    function typeDeleteText() {
        let currentLanguage = languages[languageIndex];
        let charIndex = currentLanguage.length;
        
        // Deletion effect
        function erase() {
            if (charIndex > 0) {
                charIndex--;
                mainHeading.textContent = currentLanguage.substring(0, charIndex) + restOfHeading;
                setTimeout(erase, 75); // Deletion speed
            } else {
                languageIndex = (languageIndex + 1) % languages.length; // Move to the next language
                currentLanguage = languages[languageIndex];
                setTimeout(type, 500); // Pause before typing next language
            }
        }

        // Typing effect
        function type() {
            if (charIndex < currentLanguage.length) {
                mainHeading.textContent = currentLanguage.substring(0, charIndex + 1) + restOfHeading;
                charIndex++;
                setTimeout(type, 100); // Typing speed
            } else {
                setTimeout(erase, 1000); // Pause before deleting
            }
        }

        erase();
    }

    setTimeout(() => {
        typeDeleteText(); // Start the cycle
    }, 5000);
});