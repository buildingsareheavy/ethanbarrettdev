const form = document.querySelector("form");
const status = document.querySelector('[role="status"]');
const button = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  button.setAttribute("disabled", "");
  button.textContent = "Sending...";
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    });

    // Test responses
    // const response = await Promise.resolve({ ok: true });
    // const response = await Promise.reject(new Error());

    if (response.ok) {
      form.hidden = true;
      status.textContent = `Thank you! Your message has been sent. I will be in touch soon.`;
      status.setAttribute("data-status", "success");
    } else {
      throw new Error();
    }
  } catch {
    button.removeAttribute("disabled");
    button.textContent = "Send";
    status.innerHTML = `Sorry, something went wrong. Please try again or email me directly at <a href="mailto:contact@ethanbarrett.dev">EthanBarrett.dev</a>`;
    status.setAttribute("data-status", "error");
  }
});
