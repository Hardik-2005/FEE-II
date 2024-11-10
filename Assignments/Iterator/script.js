const items = ["Red", "Green", "Blue", "Yellow", "Purple"];

const iterator = {
    currentIndex: 0,

    displayCurrentItem() {
        document.getElementById("display-area").textContent = `Current Item: ${items[this.currentIndex]}`;
    },

    next() {
        if (this.currentIndex < items.length - 1) {
            this.currentIndex++;
            this.displayCurrentItem();
        } else {
            document.getElementById("display-area").textContent = "You reached the end of the list!";
        }
    },

    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayCurrentItem();
        } else {
            document.getElementById("display-area").textContent = "You're at the beginning of the list!";
        }
    },

    reset() {
        this.currentIndex = 0;
        this.displayCurrentItem();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    iterator.displayCurrentItem();
});
