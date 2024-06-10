    document.addEventListener("DOMContentLoaded", () => {
        const carousel = document.querySelector(".carousel"),
        firstImg = carousel.querySelectorAll("img")[0],
        arrowIcons = document.querySelectorAll(".image-slider i");

        let isDragStart = false, prevPageX, prevScrollLeft;
        let firstImgWidth = firstImg.clientWidth + 32;

        if (!carousel) {
            console.error("carousel is null");
            return;
        }
        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

            });
        });

        const dragStart = (e) => {
            e.preventDefault();
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            carousel.classList.add("dragging");
            let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
        }

        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove("dragging");

        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);

        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchstart", dragging);

        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mouseleave", dragStop);
        carousel.addEventListener("touchend", dragStop);

    });
