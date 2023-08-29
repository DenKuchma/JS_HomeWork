class Field {
    constructor() {
        this.field = [];
    }

    addToField(index) {
        this.field.push(index);
    }

    removeFromField(index) {
        const removeIndex = this.field.indexOf(index);
        if (removeIndex !== -1) {
            this.field.splice(removeIndex, 1);
        }
    }

    makeCross(element, index) {
        const cross = element.querySelector(".cross");
        cross.style.display = cross.style.display === "block" ? "none" : "block";
        if (cross.style.display === "block") {
            this.addToField(index); 
        } else {
            this.removeFromField(index);  
        }
    }

    startPushButton() {
        const contentElements = document.querySelectorAll(".content");
        document.querySelector("#startButton").addEventListener("click", () => {
            const visibleCrossIndexes = this.getVisibleCrossIndexes().sort((a, b) => a - b);
            contentElements.forEach((element, index) => {
                if (visibleCrossIndexes.includes(index)) {
                    element.classList.add("selected");
                } else {
                    element.classList.remove("selected");
                }
            });

            console.log("Индексы элементов:", visibleCrossIndexes);
        });
    }

    getVisibleCrossIndexes() {
        return this.field;
    }
}

const field = new Field();
field.startPushButton();
