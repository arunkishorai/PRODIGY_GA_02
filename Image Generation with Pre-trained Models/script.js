const inputTxt = document.getElementById("input");
const image = document.getElementById("image");
const button = document.getElementById("btn");

async function query() {
    image.style.display = "block"; 
    image.src = "load.gif"; 

    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
            {
                headers: {
                    Authorization: "Bearer hf_xxxxxxxxxxxxxxxxx", //here your token
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ inputs: inputTxt.value }),
            }
        );
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);

        image.src = objectURL; 
    } catch (error) {
        alert("Error generating image. Please try again.");
        image.style.display = "none"; 
    }
}

button.addEventListener("click", () => {
    if (inputTxt.value.trim() === "") {
        alert("Please enter a prompt.");
    } else {
        query();
    }
});
