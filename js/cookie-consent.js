// Cookie Banner Funktionalität
class CookieConsent {
    constructor() {
        this.cookieName = 'keskins_cookie_consent';
        this.cookieExpiry = 365; // Tage
        this.init();
    }

    init() {
        // Prüfe ob Consent bereits gegeben wurde
        const consent = this.getCookie(this.cookieName);

        if (!consent) {
            // Zeige Banner nach kurzer Verzögerung
            setTimeout(() => {
                this.showBanner();
            }, 1000);
            // Stelle sicher, dass Platzhalter angezeigt werden
            this.blockExternalServices();
            this.showInstagramButton();
            this.centerContactInfo();
        } else if (consent === 'accepted') {
            // Lade externe Services
            this.loadExternalServices();
            this.hideInstagramButton();
            this.uncenterContactInfo();
        } else if (consent === 'declined') {
            // Blockiere Services
            this.blockExternalServices();
            this.showInstagramButton();
            this.centerContactInfo();
        }
    } showBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.add('show');
        }
    }

    hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.remove('show');
        }
    }

    acceptCookies() {
        this.setCookie(this.cookieName, 'accepted', this.cookieExpiry);
        this.hideBanner();
        this.loadExternalServices();
        this.hideInstagramButton();
        this.uncenterContactInfo();
    }

    declineCookies() {
        this.setCookie(this.cookieName, 'declined', this.cookieExpiry);
        this.hideBanner();
        this.blockExternalServices();
        this.showInstagramButton();
        this.centerContactInfo();
    }

    loadExternalServices() {
        // Google Maps aktivieren mit Animation
        const mapContainer = document.getElementById('google-maps');

        if (mapContainer) {
            mapContainer.style.display = 'block';
            // Animation durch Opacity-Transition
            setTimeout(() => {
                mapContainer.style.opacity = '0';
                mapContainer.style.transform = 'scale(0.95)';
                mapContainer.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

                setTimeout(() => {
                    mapContainer.style.opacity = '1';
                    mapContainer.style.transform = 'scale(1)';
                }, 10);
            }, 10);
        }

        // Instagram Widget aktivieren mit Animation
        const instagramWidget = document.getElementById('instagram-widget');

        if (instagramWidget) {
            instagramWidget.style.display = 'block';
            // Animation durch Opacity-Transition
            setTimeout(() => {
                instagramWidget.style.opacity = '0';
                instagramWidget.style.transform = 'scale(0.95)';
                instagramWidget.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

                setTimeout(() => {
                    instagramWidget.style.opacity = '1';
                    instagramWidget.style.transform = 'scale(1)';
                }, 10);
            }, 10);

            // Elfsight Script neu laden, falls noch nicht geladen
            if (window.elfsight) {
                window.elfsight.reload();
            }
        }
    }

    blockExternalServices() {
        // Google Maps ausblenden
        const mapContainer = document.getElementById('google-maps');
        if (mapContainer) {
            mapContainer.style.display = 'none';
        }

        // Instagram Widget ausblenden
        const instagramWidget = document.getElementById('instagram-widget');
        if (instagramWidget) {
            instagramWidget.style.display = 'none';
        }
    }

    showInstagramButton() {
        const instagramButton = document.getElementById('instagram-button');
        if (instagramButton) {
            instagramButton.style.display = 'block';
        }
    }

    hideInstagramButton() {
        const instagramButton = document.getElementById('instagram-button');
        if (instagramButton) {
            instagramButton.style.display = 'none';
        }
    }

    centerContactInfo() {
        const contactContent = document.querySelector('.contact-content');
        const contactMap = document.querySelector('.contact-map');
        if (contactContent) {
            contactContent.classList.add('no-consent');
        }
        if (contactMap) {
            contactMap.style.display = 'none';
        }
    }

    uncenterContactInfo() {
        const contactContent = document.querySelector('.contact-content');
        const contactMap = document.querySelector('.contact-map');
        if (contactContent) {
            contactContent.classList.remove('no-consent');
        }
        if (contactMap) {
            contactMap.style.display = 'block';
        }
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    deleteCookie(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
    }

    // Öffentliche Methode zum Zurücksetzen der Einstellungen
    reset() {
        this.deleteCookie(this.cookieName);
        location.reload();
    }
}

// Cookie Banner initialisieren
let cookieConsent;

document.addEventListener('DOMContentLoaded', function () {
    cookieConsent = new CookieConsent();

    // Event Listener für Buttons
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            cookieConsent.acceptCookies();
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            cookieConsent.declineCookies();
        });
    }
});

// Funktion für Datenschutzseite zum Zurücksetzen
function resetCookieConsent() {
    if (cookieConsent) {
        cookieConsent.reset();
    }
}
