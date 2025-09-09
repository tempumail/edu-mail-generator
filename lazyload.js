document.addEventListener("DOMContentLoaded", function () {
  let lazyAds = document.querySelectorAll("ins.adsbygoogle.lazyads");

  if ("IntersectionObserver" in window) {
    let adObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          try {
            (adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {}
          adObserver.unobserve(entry.target); // prevent reload
        }
      });
    });

    lazyAds.forEach(function (ad) {
      adObserver.observe(ad);
    });
  } else {
    // Fallback: load all ads immediately
    lazyAds.forEach(function (ad) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    });
  }
});
