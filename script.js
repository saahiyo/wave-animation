const style = document.createElement('style');
const waveStyle = document.createElement("style")
const colorContainer = document.querySelector(".colorContainer");
const waves_con = document.querySelector(".waves-con");
const colorText = document.querySelector(".colorText");
let selectedColor = "#AA00FF"; 

colorContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("color")) {
     selectedColor = e.target.id;
     updateStyles(selectedColor);
  }
});

function updateStyles(color) {
  colorText.textContent = color;
  style.textContent = `
    @keyframes updown {
      0% { transform: rotateX(-50deg) translateY(0%); border:2px solid #000; }
      50% { transform: rotateX(-50deg) translateY(-50px); border:2px solid ${color}; }
      100% { transform: rotateX(-50deg) translateY(0%); border:2px solid #000; }
    }
  `;
  generateWaveCss();
}

function generateWave() {
  const clutter = Array.from({ length: 20 }, (_, i) => `<div class="wave waves-${i + 1}"></div>`).join('');
  waves_con.innerHTML = clutter;
}

function generateWaveCss() {
  const delayes = Array.from({ length: 30 }, (_, i) => ((i + 1) * 0.1).toFixed(1));
  let cssText = ''; 
  for (let i = 0; i < 20; i++) {
    const pixels = (i + 4) * 3 - 1;
    cssText += `.waves-${i + 1} { height: ${pixels}vw; width: ${pixels}vw; animation: updown 2s ${delayes[i]}s infinite ease; }`;
  }
  waveStyle.textContent = cssText;
}

document.head.appendChild(waveStyle);
document.head.appendChild(style);
updateStyles(selectedColor);
generateWave();