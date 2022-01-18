var ih = document.getElementById("IH-text");
var sw = document.getElementById("SW-text");
var lm = document.getElementById("LM-text");

var ihInput = document.getElementById("IH-button");
var swInput = document.getElementById("SW-button");
var lmInput = document.getElementById("LM-button");

ih.style.display = "none";
sw.style.display = "none";
lm.style.display = "none";

function selectExperience(name) {
    switch(name) {
        case "IH-text":
            if (ih.style.display !== "block") {
                ih.style.display = "block";
                ihInput.style.border = "solid var(--color4)";
            } else {
                ih.style.display = "none";
                ihInput.style.border = "";
            }
            sw.style.display = "none";
            swInput.style.border = "";
            lm.style.display = "none";
            swInput.style.border = "";
            break;
        case "SW-text":
            ih.style.display = "none";
            ihInput.style.border = "";
            if (sw.style.display !== "block") {
                sw.style.display = "block";
                swInput.style.border = "solid var(--color4)";
            } else {
                sw.style.display = "none";
                swInput.style.border = "";
            }
            lm.style.display = "none";
            lmInput.style.border = "";
            break;
        case "LM-text":
            ih.style.display = "none";
            ihInput.style.border = "";
            sw.style.display = "none";
            swInput.style.border = "";
            if (lm.style.display !== "block") {
                lm.style.display = "block";
                lmInput.style.border = "solid var(--color4)";
            } else {
                lm.style.display = "none";
                lmInput.style.border = "";
            }
            break;
    }
  }

