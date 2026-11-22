// Single source of truth for site content. Edit ONLY this file to update the site.
// Anything starting with TODO is a placeholder - replace it or delete the line.
window.PROFILE = {
  name: 'Sarath Koneti',
  role: 'QA Lead · 15 years in Quality Engineering\nRisk-based testing · Business UAT support · AI-assisted automation',
  tagline: '"Test what matters to the business, so every release goes out with confidence."',
  bio: '15 years of helping teams release with confidence. I plan risk-based testing, support business users through UAT to sign-off, ' +
       'and use AI models to speed up test design and automation - then review what they produce, because AI output needs testing too.',

  highlights: [
    'Risk-based test planning - effort goes where the business impact is highest',
    'Business UAT support - scenarios, user walkthroughs, defect triage through to sign-off',
    'Release confidence - clear test exit reports and go/no-go evidence for stakeholders',
    'AI-assisted testing - using AI models to draft scenarios, test data and automation code, with human review',
    'Testing AI features - checking LLM answers for accuracy, consistency and hallucinations',
    'Playwright + TypeScript UI & API automation, BDD and CI/CD pipelines',
    'Public-sector delivery (DEFRA / MMO) with compliance and accessibility in mind'
  ],

  personal: [
    'TODO: Something personal - hobbies, interests, what keeps you curious'
  ],

  stats: [
    { label: 'Years in QA', value: '15+' },
    { label: 'Public repos', value: '10' },
    { label: 'TODO: Tests automated', value: 'TODO' }
  ],

  // Fill in real employers/dates - your old site never listed them.
  experience: [
    {
      period: 'TODO: 20XX–present', title: 'QA Lead', org: 'TODO: Company',
      project: 'DEFRA / MMO (UK Government)',
      points: [
        'Own the test strategy and plan - scope, risks, entry/exit criteria agreed with product owners',
        'Prioritise testing by business risk so critical journeys are covered first',
        'Support business users through UAT - scenarios, walkthroughs, defect triage and sign-off',
        'Provide go/no-go evidence for releases through test exit reports and defect status',
        'Guide the team on Playwright automation and CI/CD quality gates',
        'Use AI models to speed up test design and scripting, with review before anything is relied on',
        'TODO: Add measurable impact (e.g. tests automated, man-days saved, defects caught pre-release)'
      ]
    },
    {
      period: 'TODO: 20XX–20XX', title: 'TODO: Role', org: 'TODO: Company', project: 'TODO: Project / domain',
      points: ['TODO: Key achievement']
    }
  ],

  skills: [
    { group: 'Test Leadership', items: ['Test strategy & planning', 'Risk-based prioritisation', 'Estimation & resourcing', 'Mentoring and code reviews', 'Stakeholder reporting'] },
    { group: 'Business Assurance & UAT', items: ['UAT planning and scenario design', 'Supporting business users through testing', 'Defect triage with product owners', 'Sign-off and acceptance evidence'] },
    { group: 'Release Confidence', items: ['Entry/exit criteria', 'Test exit & sign-off reports', 'Go/no-go recommendations', 'Regression & smoke packs'] },
    { group: 'Test Automation', items: ['Playwright + TypeScript (UI & API)', 'BDD (Gherkin)', 'Page Object Model', 'Robot Framework', 'Mobile automation'] },
    { group: 'AI-Assisted Testing', items: ['Drafting scenarios and test data with AI', 'AI-assisted automation scripting', 'Reviewing and correcting AI output', 'MCP / agent tooling'] },
    { group: 'Testing AI Features', items: ['Accuracy and hallucination checks', 'Consistency across repeated prompts', 'Out-of-scope and misuse handling', 'Awareness of NIST AI RMF / ISO 42001'] },
    { group: 'Delivery & Tooling', items: ['CI/CD quality gates (GitHub Actions, Azure DevOps)', 'Allure / HTML reporting', 'Testcontainers', 'Agile / Scrum'] }
  ],

  // Only real repos from https://github.com/sarathk06?tab=repositories
  projects: [
    { name: 'ai-quality-orchestration-demo', tag: 'AI QA', lang: 'TypeScript', desc: 'TODO: describe this repo', url: 'https://github.com/sarathk06/ai-quality-orchestration-demo' },
    { name: 'resilient-integration-testing', tag: 'API', lang: 'TypeScript', desc: 'Integration API tests against a disposable database using Testcontainers.', url: 'https://github.com/sarathk06/resilient-integration-testing' },
    { name: 'taqwright-mobile-automation', tag: 'Mobile', lang: 'TypeScript', desc: 'Native mobile app test automation framework.', url: 'https://github.com/sarathk06/taqwright-mobile-automation' },
    { name: 'MobileWright-Framework', tag: 'Mobile', lang: '', desc: 'MobileWright Android POC against the Sauce Labs demo app - login, catalog & cart flows.', url: 'https://github.com/sarathk06/MobileWright-Framework' },
    { name: 'RobotFramework-playwright', tag: 'Web', lang: 'RobotFramework', desc: 'Web application test framework.', url: 'https://github.com/sarathk06/RobotFramework-playwright' },
    { name: 'Component-Testing-with-Playwright', tag: 'Web', lang: '', desc: 'TODO: describe this repo', url: 'https://github.com/sarathk06/Component-Testing-with-Playwright' }
  ],

  aiqa: {
    pipeline: ['Identify business risk', 'Plan & prioritise tests', 'AI-assisted design & automation', 'Human review', 'Execute & report', 'Go/no-go'],
    layers: [
      'Using AI to test faster - AI drafts scenarios, data and scripts; the team reviews before use',
      'Testing AI features - checking answers are accurate, consistent and stay in scope',
      'Release confidence - evidence-based sign-off, whether the feature is AI or not'
    ],
    artifacts: [
      { name: 'Risk-based test strategy', desc: 'Scope, risks, priorities and entry/exit criteria agreed with the business up front.' },
      { name: 'UAT support pack', desc: 'Business-readable scenarios, walkthrough guidance and a simple defect triage process.' },
      { name: 'Test exit / sign-off report', desc: 'What was tested, what was not, open defects and the risk of releasing - in plain language.' },
      { name: 'AI output review checklist', desc: 'What to check before trusting AI-generated tests or AI feature answers: accuracy, scope, consistency.' },
      { name: 'AI feature test scenarios', desc: 'Expected behaviours (not exact wording) for normal, edge, out-of-scope and misuse prompts.' },
      { name: 'Accessibility checklist', desc: 'WCAG 2.1 AA checks combining automated scans with manual review.' }
    ]
  },

  brewing: [
    { phase: 'Now', items: ['Putting AI-assisted test design into day-to-day team practice', 'Building a repeatable checklist for reviewing AI-generated tests'] },
    { phase: 'Next', items: ['Testing an LLM feature end to end - accuracy, consistency and out-of-scope handling', 'Adding AI feature checks to CI/CD as a release gate', 'Prompt injection and misuse testing (OWASP LLM Top 10)'] },
    { phase: 'This site', items: ['WebMCP support - AI agents can query this portfolio directly'] }
  ],

  achievements: [
    'TODO: Certification / award / talk / blog post'
  ],

  contact: [
    { label: 'github', url: 'https://github.com/sarathk06' },
    { label: 'linkedin', url: 'https://linkedin.com/in/sarathkoneti' },
    { label: 'email', url: 'mailto:sarathk099@gmail.com' }
  ]
};
