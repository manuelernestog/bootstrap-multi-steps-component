var multi_steps_forms = document.getElementsByClassName("multi-steps-form");

Array.prototype.forEach.call(multi_steps_forms, function (form) {
  form.querySelectorAll(".step").forEach((step) => {
    var faded = form.classList.contains("faded");
    step.querySelectorAll(".step-link").forEach((step_link) => {
      var step_target = step_link.getAttribute("data-bs-target");
      step_link.addEventListener("click", () => {
        change_step(step, form.querySelector(step_target), faded);
      });
    });
  });
});

function change_step(origen_step, target_step, faded) {
  let delay = faded ? 150 : 0;
  origen_step.classList.remove("show");
  target_step.classList.add("show");
  setTimeout(() => {
    origen_step.classList.remove("active");
    target_step.classList.add("active");
  }, delay);
}

class MultiStepForm {
  constructor(form_selector) {
    this.form = document.querySelector(form_selector);
    this.faded = this.form.classList.contains("faded");
  }
  show(step_selector) {
    const target_step = this.form.querySelector(step_selector);
    const origen_step = this.form.querySelector(".step.active");
    change_step(origen_step, target_step, this.faded);
  }
}
