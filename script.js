document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const randomImagesContainer = document.getElementById("random-images-container");

    // Online image sources (transparent PNGs)
    const imageSources = [
        "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2TTNW1HbwIXlZyszMky7js/c82b21d6cba3324249cb711fae72a979/G69Dec.png",  // ARPANET
        "https://help.intervalzero.com/product_help/RTX64/Content/PROJECTS/Subsystem/images/RTX64_RTTCPIP_architecture_576x473.png",  // TCP/IP
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Logo_Sitio_Web.png",  // WWW
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Social_media_collection_2020s.png/414px-Social_media_collection_2020s.png",  // Social Media
        "https://intelcorp.scene7.com/is/image/intelcorp/icon-ai-level-2-transparent-bg-rwd:1920-1080?wid=576&hei=324&fmt=webp-alpha"  // AI & Web 3.0
    ];

    // Manually set the best positions for each image
    const imagePositions = [
        { x: "3%", yOffset: -30 },  // ARPANET (left, slightly up)
        { x: "78%", yOffset: 20 },  // TCP/IP (right, slightly down)
        { x: "5%", yOffset: -10 },  // WWW (left, slightly up)
        { x: "83%", yOffset: 10 },  // Social Media (right, slightly down)
        { x: "6%", yOffset: 0 }     // AI (left-aligned)
    ];

    timelineItems.forEach((item, index) => {
        if (index >= imageSources.length) return;



        const rect = item.getBoundingClientRect();


        const img = document.createElement("img");
        img.src = imageSources[index];
        img.style.position = "absolute";
        img.style.left = imagePositions[index].x;
        img.style.top = `${item.getBoundingClientRect().top + window.scrollY + imagePositions[index].yOffset}px`;
        randomImagesContainer.appendChild(img);
    });

    const infoSection = document.querySelector('.info-section');
    if (infoSection) {
        infoSection.classList.add('visible');
    }

    

    const fadeInOnScroll = () => {
        [...timelineItems, ...randomImagesContainer.children].forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    };

    

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
