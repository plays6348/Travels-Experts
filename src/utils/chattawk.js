import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/68288e588ec535190f11bfe8/1irf6o2rt"; // Your Tawk.to embed link
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.head.appendChild(s1);
    })();
  }, []);

  return null; // No UI element
};

export default TawkToChat;
