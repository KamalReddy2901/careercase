import { Link, Navigate } from 'react-router';
import { ArrowRight, Check, Eye, LockKeyhole, Network, ShieldCheck, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { isPresentationMode, requestPresentationPersona } from '../components/PresentationSwitcher';
import { ProductionOpportunityReads, type ProductionOpportunityBundle } from '../services/sih/productionOpportunityReads';
import { supabase } from '../services/supabase';

type StoryStep = readonly [number: string, persona: string, title: string, detail: string, to: string];

const core: readonly StoryStep[] = [
  ['01', 'Student', 'My Career', 'Private direction, assessments and Career Passport.', '/career'],
  ['04', 'Student', 'Verified evidence', 'Trace a skill claim through scoped faculty verification.', '/evidence?highlight=Data%20Visualization'],
  ['05', 'Student', 'Application', 'Review the consented snapshot and append-only timeline.', '/applications/a080bafe-ec71-4fd5-99b2-19ed8ac8cb87'],
  ['06', 'Recruiter', 'Human review', 'Inspect only consented evidence. Make the decision.', '/industry/applicants/a080bafe-ec71-4fd5-99b2-19ed8ac8cb87'],
  ['07', 'Institution', 'Close the loop', 'Turn aggregate signals into human-owned interventions.', '/institution/interventions'],
];

const platform = [
  ['Student growth', [['My Skill Profile', '/passport'], ['Assessments', '/assess'], ['Career directions', '/job'], ['Opportunities', '/opportunities'], ['Verified Evidence', '/evidence'], ['Learning & Practice', '/development'], ['Applications', '/applications']]],
  ['Industry & recruitment', [['Opportunity management', '/industry/opportunities'], ['Applications to review', '/industry/applicants'], ['Questionnaires', '/industry/questionnaires'], ['Learning programs', '/development/manage'], ['Collaborations', '/collaborations']]],
  ['Faculty & academia', [['Faculty opportunities', '/faculty/opportunities'], ['Verification', '/verification'], ['Engagement history', '/faculty/engagements'], ['Collaborations', '/faculty/collaborations']]],
  ['Institution', [['Skills intelligence', '/institution/skills-intelligence'], ['Interventions', '/institution/interventions'], ['Collaborations', '/collaborations']]],
  ['Policy & governance', [['Policy skills intelligence', '/institution/skills-intelligence?presentation=policy']]],
] as const;

const principles = [
  [LockKeyhole, 'Guidance stays private', 'RIASEC, values and aspirations never become recruiter scores.'],
  [Eye, 'Readiness shows its work', 'Every requirement resolves to evidence, weakness, gap or unknown.'],
  [ShieldCheck, 'Humans make decisions', 'No hiring probability, opaque ranking or automatic rejection.'],
] as const;

export function PresentationHomePage() {
  const reads = useMemo(() => supabase ? new ProductionOpportunityReads(supabase) : null, []);
  const [flagship, setFlagship] = useState<ProductionOpportunityBundle>();

  useEffect(() => {
    if (!reads) return;
    let active = true;
    void reads.listCurrentPublished().then((bundles) => {
      const current = bundles.find((bundle) => /clinical research data & standardization intern/i.test(bundle.version.title));
      if (active) setFlagship(current);
    });
    return () => { active = false; };
  }, [reads]);

  if (!isPresentationMode()) return <Navigate to="/" replace />;

  const flagshipPath = flagship ? `/opportunities/${flagship.version.id}` : '/opportunities';
  const story: readonly StoryStep[] = [
    core[0],
    ['02', 'Student', 'Featured opportunity', 'Read the employer wording and immutable requirements.', flagshipPath],
    ['03', 'Student', 'Explainable readiness', 'See strong, weak and unknown evidence requirement by requirement.', flagship ? `${flagshipPath}/readiness` : '/opportunities'],
    ...core.slice(1),
  ];

  function openStep(number: string, to: string) {
    if (number === '06') requestPresentationPersona('recruiter', to);
    else if (number === '07') requestPresentationPersona('institution-admin', to);
  }

  return (
    <main className="bg-[var(--paper)]">
      <section className="relative overflow-hidden border-b-2 border-black">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[38%] border-l-2 border-black bg-[#e7ff57] lg:block" />
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[1.6fr_.9fr]">
          <div className="px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
            <div className="flex flex-wrap items-center gap-3 font-mono-ui text-[10px] font-black uppercase tracking-[.18em]">
              <span className="border-2 border-black bg-black px-3 py-2 text-white">SIH26044</span>
              <span>Presentation control system</span>
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.35rem,7.5vw,7.4rem)] leading-[.82] tracking-[-.055em]">
              Evidence.<br /><span className="text-[var(--accent-news)]">Readiness.</span><br />Opportunity.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              CareerCase is the evidence-backed Opportunity Readiness and Skills Intelligence layer connecting students, academia and industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/career" className="inline-flex min-h-12 items-center gap-3 border-2 border-black bg-black px-5 font-mono-ui text-xs font-black uppercase tracking-wide text-white shadow-[4px_4px_0_#ef404a] transition-transform hover:-translate-y-0.5">
                Start the story <ArrowRight size={16} />
              </Link>
              <a href="#story" className="inline-flex min-h-12 items-center border-2 border-black bg-white px-5 font-mono-ui text-xs font-black uppercase tracking-wide hover:bg-[#e7ff57]">
                See all 7 steps
              </a>
            </div>
          </div>

          <aside className="relative border-t-2 border-black bg-[#e7ff57] p-5 sm:p-8 lg:border-t-0 lg:bg-transparent lg:py-12">
            <div className="border-2 border-black bg-[var(--paper)] p-5 shadow-[6px_6px_0_#111] sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b-2 border-black pb-4">
                <div><p className="font-mono-ui text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent-news)]">The judge should remember</p><p className="mt-1 text-xl font-black">UNKNOWN ≠ UNSKILLED</p></div>
                <Sparkles aria-hidden="true" size={28} strokeWidth={1.7} />
              </div>
              <p className="mt-5 font-display text-3xl leading-tight">The AI did not change its mind.</p>
              <p className="font-display text-3xl leading-tight text-[var(--accent-news)]">The evidence changed.</p>
              <div className="mt-6 space-y-3 font-mono-ui text-[10px] font-black uppercase tracking-wide">
                {['Deterministic', 'Explainable', 'Versioned', 'Consented'].map((label) => <div key={label} className="flex items-center gap-2 border-t border-black/25 pt-3"><Check size={14} strokeWidth={3} />{label}</div>)}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b-2 border-black bg-black text-white" aria-label="CareerCase closed loop">
        <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-5 py-4 font-mono-ui text-[10px] font-black uppercase tracking-[.14em] sm:px-8">
          {['Career Passport', 'Direction', 'Opportunity', 'Readiness', 'Application', 'Outcome', 'Intelligence', 'Intervention'].map((label, index) => <div key={label} className="flex shrink-0 items-center gap-4"><span className={index === 3 || index === 6 ? 'text-[#e7ff57]' : ''}>{label}</span>{index < 7 && <ArrowRight size={13} className="text-white/45" />}</div>)}
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="core-story">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.8fr]">
          <header>
            <p className="font-mono-ui text-[10px] font-black uppercase tracking-[.2em] text-[var(--accent-news)]">Live product story</p>
            <h2 id="core-story" className="mt-2 font-display text-5xl leading-none">Seven steps.<br />One closed loop.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-black/65">Start with the student. Follow evidence into opportunity, consented recruitment and institution action.</p>
            <div className="mt-7 border-l-4 border-black bg-white p-4 text-sm leading-6"><strong>Presenter cue:</strong> the complete narrative is designed for a focused 5–7 minute walkthrough.</div>
          </header>

          <ol className="grid gap-px overflow-hidden border-2 border-black bg-black sm:grid-cols-2">
            {story.map(([number, persona, title, detail, to], index) => {
              const isPersonaSwitch = number === '06' || number === '07';
              const content = <><span className="font-mono-ui text-2xl font-black text-[var(--accent-news)]">{number}</span><div><div className="flex items-center justify-between gap-3"><p className="font-mono-ui text-[9px] font-black uppercase tracking-[.16em] text-black/45">{persona}</p><ArrowRight size={15} /></div><h3 className="mt-2 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-5 text-black/60">{detail}</p></div></>;
              const className = `group grid min-h-44 grid-cols-[auto_1fr] gap-4 bg-[var(--paper)] p-5 text-left transition-colors hover:bg-[#e7ff57] focus-visible:bg-[#e7ff57] focus-visible:outline-none ${index === story.length - 1 ? 'sm:col-span-2' : ''}`;
              return <li key={number} className="contents">{isPersonaSwitch ? <button type="button" onClick={() => openStep(number, to)} className={className}>{content}</button> : <Link to={to} aria-disabled={(number === '02' || number === '03') && !flagship} className={className}>{content}</Link>}</li>;
            })}
          </ol>
        </div>
      </section>

      <section className="border-y-2 border-black bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {principles.map(([Icon, title, detail], index) => <article key={title} className={`p-6 sm:p-8 ${index ? 'border-t-2 border-black md:border-l-2 md:border-t-0' : ''}`}><Icon size={26} strokeWidth={1.8} /><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-2 text-sm leading-6 text-black/65">{detail}</p></article>)}
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="platform-tour">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-black pb-6"><div><p className="font-mono-ui text-[10px] font-black uppercase tracking-[.2em] text-[var(--accent-news)]">Beyond the core story</p><h2 id="platform-tour" className="mt-2 font-display text-4xl sm:text-5xl">The complete ecosystem.</h2></div><div className="flex items-center gap-2 font-mono-ui text-[10px] font-black uppercase tracking-wide"><Network size={16} /> 5 first-class perspectives</div></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{platform.map(([heading, links]) => <section key={heading} className="border-2 border-black bg-white p-5 shadow-[3px_3px_0_#111]"><h3 className="font-mono-ui text-xs font-black uppercase tracking-wide">{heading}</h3><div className="mt-4 flex flex-wrap gap-2">{links.map(([label, to]) => <Link key={label} to={to} className="border border-black/30 bg-[var(--paper)] px-3 py-2 text-sm transition-colors hover:border-black hover:bg-[#e7ff57] focus-visible:outline-2">{label}</Link>)}</div></section>)}</div>
        <div className="mt-8 grid gap-4 border-2 border-black bg-black p-5 text-white sm:grid-cols-[auto_1fr] sm:items-center"><ShieldCheck size={32} className="text-[#e7ff57]" /><p className="text-sm leading-6"><strong>Trust is product behavior:</strong> consented disclosure, explicit provenance, scoped verification, immutable applications, role-based access and secure artifacts. Integration-ready is never presented as live.</p></div>
      </section>
    </main>
  );
}
