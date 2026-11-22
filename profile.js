// Single source of truth for site content. Edit ONLY this file to update the site.
// Anything starting with TODO is a placeholder - replace it or delete the line.
window.PROFILE = {
  name: 'Sarath Koneti',
  role: 'QA Lead → AI Quality Engineer',
  tagline: '15 years Quality Engineering · LLM Testing · Hallucination Detection · AI Governance · Playwright',
  bio: 'Senior QA Lead with 15 years of Quality Engineering and Test Automation experience, now transitioning into AI Quality Engineering. ' +
       'I apply battle-tested QA leadership - government-grade compliance, CI/CD ownership and cross-functional Agile delivery - to validating probabilistic AI systems.',

  highlights: [
    '15 years QA leadership & test automation',
    'Government-grade compliance testing (DEFRA / MMO)',
    'Playwright UI & API automation with TypeScript',
    'LLM output validation & hallucination detection',
    'Prompt robustness, adversarial & boundary testing',
    'AI evaluation metrics & production monitoring',
    'NIST AI RMF & ISO 42001 governance awareness'
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
        'Led QA for government-grade, compliance-driven delivery',
        'Owned CI/CD quality gates and test automation pipelines',
        'Cross-functional Agile delivery with product, dev and business teams',
        'TODO: Add measurable impact (e.g. tests automated, man-days saved, defects caught)'
      ]
    },
    {
      period: 'TODO: 20XX–20XX', title: 'TODO: Role', org: 'TODO: Company', project: 'TODO: Project / domain',
      points: ['TODO: Key achievement']
    }
  ],

  skills: [
    { group: 'LLM Output Validation', items: ['Hallucination detection', 'JSON schema validation', 'Confidence thresholds', 'Guardrails for probabilistic AI'] },
    { group: 'Prompt Robustness Testing', items: ['Same-intent variation testing', 'Adversarial prompt injection', 'Boundary breakdown detection', 'Output consistency scoring'] },
    { group: 'AI Evaluation Metrics', items: ['Consistency score', 'Hallucination rate', 'Task success %', 'A/B prompt testing', 'Evaluation dataset curation'] },
    { group: 'Playwright & TypeScript', items: ['UI & API automation', 'Page Object Model', 'Fixtures', 'Component testing', 'Playwright BDD'] },
    { group: 'CI/CD & Quality Engineering', items: ['GitHub Actions', 'Multi-layer quality gates', 'Allure / HTML reporting', 'Testcontainers integration tests'] },
    { group: 'Other Frameworks', items: ['Robot Framework', 'MobileWright (Android)', 'Model Context Protocol (MCP)'] },
    { group: 'AI Governance', items: ['NIST AI RMF', 'ISO 42001', 'Risk-based AI testing', 'Audit-ready validation'] }
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
    pipeline: ['Prompt versioned', 'LLM API called', 'Schema validated', 'Hallucination check', 'Metrics dashboard'],
    layers: ['Code QA (deterministic)', 'AI output validation', 'Production monitoring'],
    artifacts: [
      { name: 'AI Evaluation Strategy', desc: 'Risk-based AI testing: hallucination rate targets, consistency thresholds, 3-layer quality framework.' },
      { name: 'Prompt Test Dataset', desc: 'Prompt library with expected behaviours (not exact outputs) - edge, adversarial and boundary cases.' },
      { name: 'AI Failure Reports', desc: 'Sample defect reports: hallucinations, prompt sensitivity, bias patterns, remediation.' },
      { name: 'AI Governance Checklist', desc: 'NIST AI RMF / ISO 42001-aligned validation checklist for audit-ready AI QA.' },
      { name: 'Test Strategy (Traditional)', desc: 'Scope, entry/exit criteria and quality metrics for deterministic systems.' },
      { name: 'Accessibility Checklist', desc: 'WCAG 2.1 AA checklist with automated + manual validation steps.' }
    ]
  },

  brewing: [
    { phase: 'Phase 1 - Foundation: prompt as a testable artefact', items: ['Prompt → API → validated output', 'Hallucination detection suite', 'Prompt versioning & regression', 'Output validation layer'] },
    { phase: 'Phase 2 - Real AI QA techniques', items: ['Adversarial & prompt injection testing (OWASP LLM Top 10)', 'Boundary & out-of-scope testing', 'Multilingual consistency testing', 'AI document analyser QA'] },
    { phase: 'Phase 3 - Production AI QA systems', items: ['Government chatbot QA framework', 'A/B prompt testing & evaluation dashboard', 'AI drift monitoring', 'AI QA portfolio showcase'] },
    { phase: 'This site', items: ['WebMCP support - AI agents can query this portfolio directly'] }
  ],

  achievements: [
    'TODO: Certification / award / talk / blog post'
  ],

  contact: [
    { label: 'github', url: 'https://github.com/sarathk06' },
    { label: 'linkedin', url: 'https://linkedin.com/in/sarathkoneti' },
    { label: 'email', url: 'TODO: mailto:you@example.com' }
  ]
};
