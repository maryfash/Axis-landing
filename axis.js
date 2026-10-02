    const track = document.getElementById("testimonialTrack");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
     const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");

    let currentSlide = 0;

    const totalSlides = 5;
    const visibleSlides = 3;

    nextBtn.addEventListener("click", () => {

        if (currentSlide < totalSlides - visibleSlides) {
            currentSlide++;
        }

        updateSlider();

    });


    prevBtn.addEventListener("click", () => {

        if (currentSlide > 0) {
            currentSlide--;
        }

        updateSlider();

    });


    function updateSlider() {

        track.style.transform = `translateX(-${currentSlide * (100 / 3)}%)`;

    }


     filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;


            // Change active button
            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "bg-black",
                    "text-white"
                );

                btn.classList.add(
                    "border",
                    "border-gray-300",
                    "text-gray-500"
                );

            });


            // Make clicked button active
            button.classList.remove(
                "border",
                "border-gray-300",
                "text-gray-500"
            );

            button.classList.add(
                "bg-black",
                "text-white"
            );


            // Filter projects
            portfolioItems.forEach(item => {

                const category = item.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.classList.remove("hidden");

                } else {

                    item.classList.add("hidden");

                }

            });

        });

    });

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        if (mobileMenu.classList.contains("hidden")) {

            hamburger.classList.remove("fa-xmark");
            hamburger.classList.add("fa-bars");

        } else {

            hamburger.classList.remove("fa-bars");
            hamburger.classList.add("fa-xmark");

        }

    });
