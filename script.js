function copyCode() {
  const code = document.getElementById("code").innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      document.getElementById("status").innerText = "Script copied!";
    })
    .catch(() => {
      document.getElementById("status").innerText = "Failed to copy.";
    });
}

function openDiscord() {
  window.open("https://discord.gg/YOURSERVER", "_blank");
}
