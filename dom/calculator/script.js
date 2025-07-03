
const input = document.getElementById("display");
const buttons= document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            input.value = "";
        } else if (value === "=") {
            try {
                // eval() is  it will evaluate the expression in the input field 
                
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        } else {
            input.value += value;
        }
    });
});
