// Loaded in <head> so the saved/system theme applies before first paint.
(function () {
  var t = localStorage.getItem('theme') ||
    (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', t);
})();
