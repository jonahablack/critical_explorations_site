// Footer loader + email signup wiring
(function () {
    const ENDPOINT = "https://script.google.com/macros/s/AKfycbxuffu6Y1FqqB4suLGfP7xd3GpE5dJUc485YWZjp7kHjCaK1VHkkNVuh3Zega_Dm98U/exec";
  
    function initFooterEmailSignup(root) {
      const form       = root.querySelector("#email-form");
      const emailField = root.querySelector("#email-field"); // <— container we will replace
      const emailInput = root.querySelector("#email");
      const submitBtn  = root.querySelector("#submit-btn");
      const actions    = root.querySelector(".actions");
      if (!form || !emailField || !emailInput || !submitBtn) return;
  
      function handleSubmit(e) {
        e.preventDefault();
  
        if (!emailInput.checkValidity()) {
          emailInput.reportValidity();
          return;
        }
        const email = emailInput.value.trim();
        if (!email) return;
  
        submitBtn.disabled = true;
  
        fetch(ENDPOINT, {
          method: "POST",
          mode: "no-cors", // we don't need to read the response
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: "email=" + encodeURIComponent(email)
        })
        .then(() => {
          // Hide the actions row
          if (actions) actions.style.display = "none";
          // Replace the input block with the success message (exact same place)
          emailField.innerHTML = '<p style="margin:0;color:green;font-weight:600;">✓ Thanks! You\'re signed up.</p>';
          form.reset();
        })
        .catch((err) => {
          console.error("Email submit error:", err);
          submitBtn.disabled = false;
          // Fall back to inline error message in the field spot
          emailField.innerHTML = '<p style="margin:0;color:red;font-weight:600;">Something went wrong. Please try again.</p>';
        });
      }
  
      // Button click and Enter key support
      submitBtn.addEventListener("click", handleSubmit);
      form.addEventListener("submit", handleSubmit);
    }
  
    function loadFooter() {
      const container = document.getElementById("site-footer");
      if (!container) return;
  
      fetch("footer.html", { cache: "no-store" })
        .then((r) => r.text())
        .then((html) => {
          container.innerHTML = html;
          initFooterEmailSignup(container);
        })
        .catch((err) => console.error("Error loading footer:", err));
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", loadFooter);
    } else {
      loadFooter();
    }
  })();
  
  