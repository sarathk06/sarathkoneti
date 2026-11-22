(function () {
  var P = window.PROFILE;

  var PAGES = [
    { id: 'home', file: 'index.html', label: 'sarath.koneti' },
    { id: 'experience', file: 'experience.html', label: '/experience' },
    { id: 'skills', file: 'skills.html', label: '/skills' },
    { id: 'projects', file: 'projects.html', label: '/projects' },
    { id: 'ai-qa', file: 'ai-qa.html', label: '/ai-qa' },
    { id: 'brewing', file: 'brewing.html', label: "/what's brewing" },
    { id: 'contact', file: 'contact.html', label: '/contact' }
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
  var cmd = function (text) { return el('p', { cls: 'cmd', text: text }); };
  var arrowList = function (items) {
    return el('ul', { cls: 'list arrow' }, items.map(function (i) { return el('li', { text: i }); }));
  };
  function contactList() {
    return el('ul', { cls: 'list arrow' }, P.contact.map(function (c) {
      var link = isTodo(c.url) ? el('span', { text: c.url }) : el('a', { href: c.url, text: c.url.replace(/^mailto:/, '') });
      return el('li', {}, [el('span', { cls: 'accent', text: c.label + ': ' }), link]);
    }));
  }
  function linksBlock() {
    var pages = PAGES.slice(1).map(function (p) { return el('li', {}, [el('a', { href: p.file, text: p.label.slice(1) })]); });
    return [cmd('cat links.txt'), el('ul', { cls: 'list arrow' }, pages), contactList()];
  }

  // ---- Page renderers ----
  var RENDER = {
    home: function () {
      return [
        cmd('whoami'),
        el('div', { cls: 'hero' }, [
          el('img', { cls: 'avatar' }),
          el('div', {}, [
            el('h1', { text: P.name }),
            el('p', { cls: 'accent', text: P.role }),
            el('p', { cls: 'muted', text: P.tagline })
          ])
        ]),
        cmd('echo $BIO'), el('p', { text: P.bio }),
        cmd('ls highlights/'), arrowList(P.highlights),
        cmd('cat personal.txt'), arrowList(P.personal)
      ].concat(linksBlock());
    },

    experience: function () {
      var nodes = [cmd('cat experience.log')];
      P.experience.forEach(function (x) {
        nodes.push(el('div', { cls: 'job' }, [
          el('p', {}, [
            el('span', { cls: 'muted', text: '[' + x.period + '] ' }),
            el('strong', { text: x.title }),
            el('span', { text: ' — ' + x.org })
          ]),
          x.project ? el('p', { cls: 'accent2', text: 'Project: ' + x.project }) : null,
          arrowList(x.points)
        ]));
      });
      nodes.push(el('div', { cls: 'stats' }, P.stats.map(function (s) {
        return el('div', { cls: 'stat' }, [el('span', { cls: 'muted', text: s.label + ': ' }), el('strong', { cls: 'accent', text: s.value })]);
      })));
      return nodes;
    },

    skills: function () {
      return [cmd('ls -R skills/'), el('div', { cls: 'grid' }, P.skills.map(function (s) {
        return el('div', { cls: 'card' }, [el('p', { cls: 'accent', text: s.group + '/' }), arrowList(s.items)]);
      }))];
    },

    projects: function () {
      return [cmd('ls -la projects/'), el('div', { cls: 'cards' }, P.projects.map(function (p) {
        return el('a', { cls: 'card', href: p.url }, [
          el('p', { cls: 'muted', text: '[' + p.tag + ']' }),
          el('p', { cls: 'accent', text: p.name }),
          el('p', { text: p.desc }),
          el('p', { cls: 'muted', text: p.lang ? '#' + p.lang : '' })
        ]);
      }))];
    },

    'ai-qa': function () {
      var A = P.aiqa;
      return [
        cmd('cat quality-layers.txt'), arrowList(A.layers.map(function (l, i) { return (i + 1) + '. ' + l; })),
        cmd('cat pipeline.txt'), el('p', { cls: 'pipeline', text: A.pipeline.join('  →  ') }),
        cmd('ls artifacts/'), el('div', { cls: 'cards' }, A.artifacts.map(function (a) {
          return el('div', { cls: 'card' }, [el('p', { cls: 'accent', text: a.name }), el('p', { text: a.desc })]);
        }))
      ];
    },

    brewing: function () {
      var nodes = [cmd('tail -f roadmap.md')];
      P.brewing.forEach(function (b) {
        nodes.push(el('p', { cls: 'accent2', text: '## ' + b.phase }), arrowList(b.items));
      });
      nodes.push(cmd('cat achievements.txt'), arrowList(P.achievements));
      return nodes;
    },

    contact: function () {
      return [cmd('cat contact.txt'), el('p', { text: 'Open to senior QA / AI Quality Engineering roles. Let\'s connect.' }), contactList()];
    }
  };

  // ---- Layout ----
  var topbar = el('header', { cls: 'topbar' }, [
    el('div', { cls: 'dots' }, [el('span'), el('span'), el('span')]),
    el('span', { cls: 'title', text: 'sarath@github: ~/' + (current === 'home' ? '' : current) }),
    el('button', { cls: 'theme-toggle', text: '[ theme ]' })
  ]);
  topbar.lastChild.setAttribute('aria-label', 'Toggle dark/light theme');
  topbar.lastChild.addEventListener('click', function () { window.setTheme(); });

  var nav = el('nav', { cls: 'nav' }, PAGES.map(function (p) {
    var a = el('a', { href: p.file, text: p.label });
    if (p.id === current) { a.className = 'active'; a.setAttribute('aria-current', 'page'); }
    return a;
  }));
  nav.setAttribute('aria-label', 'Pages');

  var main = el('main', { cls: 'terminal' }, (RENDER[current] || RENDER.home)());
  var avatar = main.querySelector('.avatar');
  if (avatar) {
    avatar.src = 'https://avatars.githubusercontent.com/u/121025188?v=4';
    avatar.alt = P.name;
    avatar.width = avatar.height = 120;
  }

  var out = el('div', { cls: 'shell-output' });
  var input = el('input');
  input.type = 'text';
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.placeholder = "type 'help'";
  input.setAttribute('aria-label', 'Terminal command');
  var shell = el('section', { cls: 'shell' }, [out, el('label', { cls: 'prompt-line' }, [el('span', { cls: 'prompt', text: 'sarath@github:~$' }), input])]);
  main.appendChild(shell);

  var footer = el('footer', { cls: 'footer muted' }, [
    el('span', { text: '© ' + new Date().getFullYear() + ' ' + P.name + ' · v2' }),
    el('span', { cls: 'webmcp-status' })
  ]);

  var app = document.getElementById('app');
  [topbar, nav, main, footer].forEach(function (n) { app.appendChild(n); });
  document.title = P.name + ' | ' + (current === 'home' ? '~/' : '/' + current);

  // ---- Theme ----
  window.setTheme = function (theme) {
    var root = document.documentElement;
    var next = theme || (root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    return next;
  };

  // ---- Mini shell ----
  function print(text, cls) { out.appendChild(el('pre', { cls: cls || '', text: text })); }
  var ids = PAGES.map(function (p) { return p.id; });

  input.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var raw = input.value.trim();
    input.value = '';
    if (!raw) return;
    print('sarath@github:~$ ' + raw, 'muted');
    var c = raw.toLowerCase().replace(/^cd\s+/, '').replace(/^[~.]?\//, '');
    if (c === '' || c === '~' || c === 'whoami') c = 'home';
    if (c === 'help') print('pages: ' + ids.join(', ') + '\nother: theme, clear, help\ntip: "cd projects" or just "projects"');
    else if (c === 'theme') print('theme -> ' + window.setTheme());
    else if (c === 'clear') out.textContent = '';
    else if (ids.indexOf(c) !== -1) location.href = PAGES[ids.indexOf(c)].file;
    else print('command not found: ' + raw + " (try 'help')", 'error');
  });
})();
