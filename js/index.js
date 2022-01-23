var ih = document.getElementById("IH-text");
var sw = document.getElementById("SW-text");
var lm = document.getElementById("LM-text");

var ihInput = document.getElementById("IH-button");
var swInput = document.getElementById("SW-button");
var lmInput = document.getElementById("LM-button");

if (ih)
    ih.style.display = "none";

if (sw)
    sw.style.display = "none";

if (lm)
    lm.style.display = "none";

var header = document.getElementsByClassName("navbar");
var body = document.body.style.marginTop = header.style.height;

function selectExperience(name) {
    switch(name) {
        case "IH-text":
            if (ih.style.display !== "flex") {
                ih.style.display = "flex";
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
            if (sw.style.display !== "flex") {
                sw.style.display = "flex";
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
            if (lm.style.display !== "flex") {
                lm.style.display = "flex";
                lmInput.style.border = "solid var(--color4)";
            } else {
                lm.style.display = "none";
                lmInput.style.border = "";
            }
            break;
    }
  }

