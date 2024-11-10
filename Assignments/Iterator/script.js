const items = ["Red", "Green", "Blue", "Yellow", "Purple"];

const iterator = {
    currentIndex: 0,

    // Display the current item and update counter display
    displayCurrentItem() {
        document.getElementById("display-area").textContent = items[this.currentIndex];
        document.getElementById("counter-display").textContent = `Item ${this.currentIndex + 1} of ${items.length}`;
        
        // Highlight current item in the preview list
        this.highlightCurrentItem();
    },

    // Move to the next item
    next() {
        if (this.currentIndex < items.length - 1) {
            this.currentIndex++;
            this.displayCurrentItem();
        } else {
            document.getElementById("display-area").textContent = "End of the list!";
        }
    },

    // Move to the previous item
    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayCurrentItem();
        } else {
            document.getElementById("display-area").textContent = "Start of the list!";
        }
    },

    // Reset the iterator to the first item
    reset() {
        this.currentIndex = 0;
        this.displayCurrentItem();
    },

    // Jump to a random item in the list
    random() {
        this.currentIndex = Math.floor(Math.random() * items.length);
        this.displayCurrentItem();
    },

    // Highlight the current item in the list preview
    highlightCurrentItem() {
        const itemList = document.querySelectorAll("#item-list li");
        itemList.forEach((item, index) => {
            item.classList.toggle("active-item", index === this.currentIndex);
        });
    }
};

// Initialize display and item list preview on page load
document.addEventListener("DOMContentLoaded", () => {
    iterator.displayCurrentItem();
    
    const itemListContainer = document.getElementById("item-list");
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemListContainer.appendChild(listItem);
    });

    iterator.highlightCurrentItem();
});
