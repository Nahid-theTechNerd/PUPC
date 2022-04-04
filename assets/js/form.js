const go_button = document.querySelector("#go");
const form_part = document.querySelectorAll(".single__part");
const submit = document.querySelector("#submit");

go_button.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < form_part.length; i++) {
    if (i == form_part.length - 2) {
      const go_visible = go_button.getAttributeNode("visible");
      go_visible.value = "false";
      const submit_visible = submit.getAttributeNode("visible");
      submit_visible.value = "true";
    }
    const attr = form_part[i].getAttributeNode("visible");
    if (attr.value == "true") {
      attr.value = "false";
      const next = form_part[i + 1].getAttributeNode("visible");
      next.value = "true";
      break;
    }
  }
});

submit.addEventListener("click", (e) =>{
    
})
