// Lazy load CTA background image
const ctaBg = document.querySelector(".cta-bg");

if (ctaBg) {
    const ctaObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const src = entry.target.dataset.bg;
                if (src) {
                entry.target.style.backgroundImage = `url("${src}")`;
                observer.unobserve(entry.target);
                }
            });
        },
        
        { rootMargin: "200px 0px" },
    );

    ctaObserver.observe(ctaBg);
}