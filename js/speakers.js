function switchViewMode(index) {
    var viewSwitcherEl = document.getElementById('display-buttons');
    var viewSwitcher = window.UIkit.switcher(viewSwitcherEl);
    if (!viewSwitcher) {
        console.warn('tab switcher (Slideshow / Grid) on speakers page not found');
        return;
    }

    var viewSwitcherIndex = viewSwitcher.index();
    if (viewSwitcherIndex !== index) {
        viewSwitcher.show(index);
    }
}

function goToSlideshow(index) {
    // Switch to slideshow tab if it's not active
    switchViewMode(0);

    var slideshowEl = document.getElementById('speaker-slideshow-container');
    var slideshow = window.UIkit.slideshow(slideshowEl);
    if (!slideshow) {
        console.warn('slideshow container not found');
        return;
    }

    slideshow.show(index);
}
