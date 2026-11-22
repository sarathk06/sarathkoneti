// WebMCP: exposes site tools to in-browser AI agents via navigator.modelContext.
// Early-stage proposal (https://github.com/webmachinelearning/webmcp); Chrome Canary behind a flag. No-op elsewhere.
(function () {
  var mc = navigator.modelContext;
  if (!mc || typeof mc.registerTool !== 'function') return;

  var P = window.PROFILE;
  var pages = window.SITE_PAGES;
  var text = function (value) {
    return { content: [{ type: 'text', text: typeof value === 'string' ? value : JSON.stringify(value, null, 2) }] };
  };
  var noArgs = { type: 'object', properties: {} };

  var tools = [
    {
      name: 'get_profile',
      description: 'Get Sarath Koneti\'s profile: name, role, bio, highlights and contact links.',
      inputSchema: noArgs,
      execute: function () { return text({ name: P.name, role: P.role, bio: P.bio, highlights: P.highlights, contact: P.contact }); }
    },
    {
      name: 'get_experience',
      description: 'Get Sarath\'s work experience history.',
      inputSchema: noArgs,
      execute: function () { return text(P.experience); }
    },
    {
      name: 'get_skills',
      description: 'List Sarath\'s technical skills grouped by category.',
      inputSchema: noArgs,
      execute: function () { return text(P.skills); }
    },
    {
      name: 'search_projects',
      description: 'Search Sarath\'s public GitHub projects by keyword (name, description, tag or language). Empty query returns all.',
      inputSchema: { type: 'object', properties: { query: { type: 'string', description: 'e.g. "playwright", "mobile", "api"' } } },
      execute: function (args) {
        var q = ((args && args.query) || '').toLowerCase();
        return text(P.projects.filter(function (p) {
          return !q || [p.name, p.desc, p.tag, p.lang].join(' ').toLowerCase().indexOf(q) !== -1;
        }));
      }
    },
    {
      name: 'open_page',
      description: 'Navigate the browser to a page of this portfolio.',
      inputSchema: {
        type: 'object',
        properties: { page: { type: 'string', enum: pages.map(function (p) { return p.id; }) } },
        required: ['page']
      },
      execute: function (args) {
        var page = pages.filter(function (p) { return p.id === args.page; })[0];
        if (!page) return text('Unknown page: ' + args.page);
        location.href = page.file;
        return text('Opening ' + page.file);
      }
    },
    {
      name: 'set_theme',
      description: 'Switch the site between dark and light theme.',
      inputSchema: { type: 'object', properties: { theme: { type: 'string', enum: ['dark', 'light'] } }, required: ['theme'] },
      execute: function (args) { return text('Theme set to ' + window.setTheme(args.theme)); }
    }
  ];

  tools.forEach(function (t) { mc.registerTool(t); });
  document.querySelector('.webmcp-status').textContent = 'webmcp: ' + tools.length + ' tools registered';
})();
