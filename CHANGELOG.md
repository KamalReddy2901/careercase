# Changelog

All notable changes to CareerCase are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-10-09

### Added
- **Documentation enhancements** for ProtocolX submission:
  - Explicit Generative AI Integration section in README with 5 touchpoints
  - Testing & Accessibility section with coverage metrics
  - Executive Summary table in prompt.md with code quality metrics
  - Repository statistics and AI contribution breakdown
  - CONTRIBUTING.md with development setup and PR process
  - SECURITY.md with vulnerability reporting policy
  - This CHANGELOG.md for version tracking

### Changed
- Enhanced README.md with clearer Gen AI service callouts (Groq gpt-oss-20b + 120b)
- Improved prompt.md structure for better scanner visibility

## [0.9.0] - 2026-09-05

### Added
- **Production demo ecosystem** with controlled fixtures (Phase 2B completion)
- Student actor bootstrap (Priya Sharma, Computer Science, College Student)
- Institution and industry organization seeding
- Full application lifecycle: publish → apply → assess → verify → outcome
- Verification evidence visibility and history tables
- Self-confirmation data visualization repair

### Fixed
- Production repair v4: canonical evidence and verification readiness
- Questionnaire-assessed evidence disclosure
- Closed verification history visibility
- Idempotency in controlled seed helpers

## [0.8.0] - 2026-08-31

### Added
- **Institution & Industry Skills Intelligence** aggregate analytics
- Faculty engagement lifecycle tracking
- Development program linkage with qualification mapping
- Collaboration proposal authoring for academia-industry partnerships
- Notifications outbox and operations system
- Application recruitment lifecycle state machine

### Fixed
- RLS trigger execute privilege escalation (security hardening)
- Verification request returning RLS fix
- Opportunity publish audit hardening
- Submission authority and resolution state consistency

### Security
- Restricted all trigger functions from `authenticated` role execute permission
- Consent and helper hardening
- Artifact and confirmation hardening
- Foundation freeze security hardening

## [0.7.0] - 2026-08-26

### Added
- **Engine B — Opportunity Readiness** with deterministic requirement-level scoring
- `UNKNOWN ≠ UNSKILLED` semantics (students not penalized for missing evidence)
- Immutable application snapshot binding
- Trusted readiness persistence with versioning
- Industry-authored questionnaires
- Questionnaire successor revisions
- Exact questionnaire-opportunity attachment

### Changed
- Split Engine A (Career Guidance) and Engine B (Opportunity Readiness) runtimes
- Identity tenancy model with org memberships
- Private storage with row-level security
- D2 foundation trusted persistence architecture

## [0.6.0] - 2026-08-15

### Added
- **68 Supabase SQL migrations** with full RLS enforcement
- Multi-role security: student, institution staff, industry recruiter, verifier, platform admin
- Applications, outcomes, and collaboration audit trails
- Evidence readiness consent workflows
- Opportunities publication and versioning
- Atomic opportunity draft authoring

### Changed
- Career Passport schema with evidence confidence metadata
- Five user segments: school student, college student, job seeker, career switcher, professional

### Security
- Row-level security policies for all tables
- Trigger function execute restrictions
- Secure storage bucket policies

## [0.5.0] - 2026-08-12

### Added
- **Knowledge Base v1.0 (kb-2026.06.1)**:
  - 100 occupations (NCO-2015 aligned)
  - 178 skills (NSQF-level tagged)
  - 105 qualifications
  - 300 occupation transitions
  - 100 market signals
  - 61 vocational entry roles
- Knowledge base validation script (referential integrity, NCO codes, NSQF levels)
- Deterministic regression test suite

### Added
- **11-Component Career Scoring Engine**:
  - RIASEC match, aptitude alignment, work values fit
  - Education proximity, skills overlap, aspiration alignment
  - Transition ease, market demand, reward alignment
  - Constraint compatibility, segment bonus
  - "Why this?" breakdown for every match

## [0.4.0] - 2026-08-10

### Added
- **Four Assessments**:
  - RIASEC interest inventory (36 items)
  - Aptitude screener (24 items, 2-form bank: numerical, verbal, logical, spatial)
  - Work values assessment (12 dimensions)
  - Aspiration exploration (open-ended + structured)
- **Aptitude Signal Discovery** — conversational AI follow-up extracting real-world evidence
- Weighted completeness contract (basics 20, skills 20, interests 20, aptitude 15, values 10, aspiration 15)

## [0.3.0] - 2026-08-05

### Added
- **Cloudflare Worker AI Gateway**:
  - API key rotation across pool with per-key quarantine on 401/429
  - Exponential backoff retry policy
  - Model-tier routing (light → gpt-oss-20b, complex → gpt-oss-120b)
  - Supabase auth verification on every request
  - CORS lockdown to production Pages origin
- Worker unit tests (key rotation, retry policy, response policy) — 100% coverage

## [0.2.0] - 2026-08-01

### Added
- **Five Gen AI Touchpoints**:
  - Skill extraction from resume/aspiration (Groq gpt-oss-20b)
  - Occupation dossiers — day-in-the-life narratives (Groq gpt-oss-120b)
  - Career counselor — KB-grounded Q&A (Groq gpt-oss-120b)
  - Aptitude signal discovery — conversational evidence (Groq gpt-oss-120b)
  - Interview practice simulator (Groq gpt-oss-120b)
- Skill extraction with confidence scores and user review step
- AI label disclosure on all Gen AI outputs

### Changed
- AI does **not** influence deterministic match score — assistance-only

## [0.1.0] - 2026-07-20

### Added
- **Initial SPA scaffold**:
  - React 18 + TypeScript 5.9 + Vite 6
  - React Router 7 for routing
  - Tailwind CSS 4 for styling
  - Radix UI component primitives
- Supabase auth provider with browser-local fallback
- Dark-dominant editorial design system
- Custom cursor (editorial ring)
- CI pipeline: typecheck, build, placeholder tests

### Changed
- Project structure: `src/app/engine/`, `src/app/data/knowledge/`, `src/app/pages/`, `src/app/services/`

---

## Version Guidelines

- **Major (X.0.0)**: Breaking changes, major feature releases
- **Minor (0.X.0)**: New features, non-breaking changes
- **Patch (0.0.X)**: Bug fixes, documentation updates

[1.0.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/releases/tag/v1.0.0
[0.9.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/releases/tag/v0.1.0
