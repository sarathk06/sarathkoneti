(function () {
  var P = window.PROFILE;

  var PAGES = [
    { id: 'home', file: 'index.html', label: 'home' },
    { id: 'experience', file: 'experience.html', label: 'experience' },
    { id: 'skills', file: 'skills.html', label: 'skills' },
    { id: 'projects', file: 'projects.html', label: 'projects' },
    { id: 'ai-qa', file: 'ai-qa.html', label: 'ai-qa' },
    { id: 'brewing', file: 'brewing.html', label: "what's brewing" },
    { id: 'contact', file: 'contact.html', label: 'contact' }
  ];
  window.SITE_PAGES = PAGES;
  var current = document.body.getAttribute('data-page') || 'home';

  // Build DOM with textContent only (no innerHTML) so content can never inject markup.
  function el(tag, opts, children) {
    var n = document.createElement(tag);
    opts = opts || {};
    if (opts.text != null) n.textContent = opts.text;
    if (opts.cls) n.className = opts.cls;
    if (opts.href) {
      n.href = opts.href;
      if (/^https?:/.test(opts.href)) { n.target = '_blank'; n.rel = 'noopener noreferrer'; }
    }
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  var isTodo = function (s) { return typeof s === 'string' && s.indexOf('TODO') === 0; };
  var prompt = function (text) { return el('div', { cls: 'prompt', text: '$ ' + text }); };
  var arrowList = function (items) {
    return el('ul', { cls: 'arrow-list' }, items.map(function (i) { return el('li', { text: i }); }));
  };
  var contactLink = function (c) {
    return isTodo(c.url) ? el('span', { text: c.label + ' (TODO)' }) : el('a', { href: c.url, text: c.label });
  };

  // ---- Page renderers ----
  var RENDER = {
    home: function () {
      var pic = el('img', { cls: 'profile-pic' });
      pic.src = 'https://avatars.githubusercontent.com/u/121025188?v=4';
      pic.alt = P.name;
      return [
        prompt('whoami'),
        el('div', { cls: 'whoami-section' }, [
          el('div', { cls: 'whoami-content' }, [
            el('h1', { text: P.name }),
            el('div', { cls: 'role', text: P.role }),
            el('p', { cls: 'quote', text: P.tagline })
          ]),
          pic
        ]),
        prompt('echo $BIO'), el('p', { cls: 'output', text: P.bio }),
        prompt('ls highlights/'), arrowList(P.highlights),
        prompt('cat personal.txt'), arrowList(P.personal),
        prompt('cat links.txt'),
        el('div', { cls: 'link-grid' }, PAGES.slice(1).map(function (p) {
          return el('a', { href: p.file, text: '→ ' + p.label });
        }))
      ];
    },

    experience: function () {
      var nodes = [prompt('cat experience.log')];
      P.experience.forEach(function (x) {
        nodes.push(el('div', { cls: 'job' }, [
          el('div', { cls: 'job-header', text: '[' + x.period + '] ' + x.title + ' — ' + x.org }),
          x.project ? el('div', { cls: 'job-meta', text: 'Project: ' + x.project }) : null,
          arrowList(x.points)
        ]));
      });
      nodes.push(el('div', { cls: 'totals' }, P.stats.map(function (s) {
        return el('span', { text: s.label + ': ' }, [el('strong', { text: s.value })]);
      })));
      return nodes;
    },

    skills: function () {
      return [prompt('ls skills/')].concat(P.skills.map(function (s) {
        return el('div', { cls: 'skill-category' }, [el('div', { cls: 'skill-label', text: s.group }), arrowList(s.items)]);
      }));
    },

    projects: function () {
      return [prompt('ls projects/')].concat(P.projects.map(function (p) {
        return el('div', { cls: 'project' }, [
          el('span', { cls: 'project-tag', text: '[' + p.tag + '] ' }),
          el('span', { cls: 'project-name', text: p.name }),
          el('p', { text: p.desc + (p.lang ? ' · ' + p.lang : '') }),
          el('a', { href: p.url, text: '→ view on github' })
        ]);
      }));
    },

    'ai-qa': function () {
      var A = P.aiqa;
      var pipe = el('p', { cls: 'pipeline' });
      A.pipeline.forEach(function (step, i) {
        if (i) pipe.appendChild(el('b', { text: '  →  ' }));
        pipe.appendChild(document.createTextNode(step));
      });
      return [
        prompt('cat quality-layers.txt'), arrowList(A.layers.map(function (l, i) { return (i + 1) + '. ' + l; })),
        prompt('cat pipeline.txt'), pipe,
        prompt('ls artifacts/')
      ].concat(A.artifacts.map(function (a) {
        return el('div', { cls: 'project' }, [el('span', { cls: 'project-name', text: a.name }), el('p', { text: a.desc })]);
      }));
    },

    brewing: function () {
      var nodes = [prompt('tail -f roadmap.md')];
      P.brewing.forEach(function (b) { nodes.push(el('h3', { text: b.phase }), arrowList(b.items)); });
      nodes.push(prompt('cat achievements.txt'), arrowList(P.achievements));
      return nodes;
    },

    contact: function () {
      return [
        prompt('cat contact.txt'),
        el('p', { cls: 'output', text: 'Open to senior QA / AI Quality Engineering roles. Let\'s connect.' }),
        el('ul', { cls: 'arrow-list' }, P.contact.map(function (c) {
          var link = isTodo(c.url) ? el('span', { text: c.url }) : el('a', { href: c.url, text: c.url.replace(/^mailto:/, '') });
          return el('li', {}, [el('span', { text: c.label + ': ' }), link]);
        }))
      ];
    }
  };

  // ---- Theme ----
  window.setTheme = function (theme) {
    var root = document.documentElement;
    var next = theme || (root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.textContent = next === 'dark' ? '☀ light' : '☾ dark';
    return next;
  };

  // ---- Layout ----
  var toggle = el('button', { cls: 'theme-toggle' });
  toggle.setAttribute('aria-label', 'Toggle theme');
  toggle.addEventListener('click', function () { window.setTheme(); });

  var links = el('div', { cls: 'nav-links' }, PAGES.slice(1).map(function (p) {
    var a = el('a', { href: p.file, text: p.label });
    if (p.id === current) { a.className = 'active'; a.setAttribute('aria-current', 'page'); }
    return a;
  }));
  var nav = el('nav', {}, [el('a', { cls: 'logo', href: 'index.html', text: 'sarath.koneti' }), links, toggle]);

  var main = el('main', {}, (RENDER[current] || RENDER.home)());

  var footer = el('footer', {}, P.contact.map(function (c) {
    return el('span', { text: '→ ' }, [contactLink(c)]);
  }).concat([el('span', { cls: 'webmcp-status' }), el('span', { cls: 'version', text: 'v.2' })]));

  var app = document.getElementById('app');
  [nav, main, footer].forEach(function (n) { app.appendChild(n); });
  window.setTheme(document.documentElement.getAttribute('data-theme'));
})();
