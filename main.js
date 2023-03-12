
const links = document.getElementsByClassName("link");

for (const link of links){
  link.onmousemove = e => {
    const decimal = e.clientX / link.offsetWidth;
    const basepresent = 60,
          range = 40,
          ajustable = range * decimal;
    const finalpresentage = `${basepresent + ajustable}%`;
    link.style.setProperty("--p", finalpresentage);
  }
}
