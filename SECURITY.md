# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of CareerCase seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Open a Public Issue

**Please do not open a public GitHub issue for security vulnerabilities.** This helps prevent exploitation before a fix is deployed.

### 2. Contact Us Privately

Send a detailed report to:
- **Email**: [kamalreddy2901@gmail.com](mailto:kamalreddy2901@gmail.com)
- **Subject Line**: `[SECURITY] CareerCase Vulnerability Report`

### 3. Include These Details

- **Type of vulnerability** (e.g., SQL injection, XSS, authentication bypass)
- **Affected component** (e.g., API endpoint, Worker route, client-side code)
- **Steps to reproduce** the vulnerability
- **Potential impact** assessment
- **Suggested fix** (if you have one)

### 4. Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Critical issues within 30 days; others within 90 days

## Security Best Practices

### For Users
- Never commit `.env` files with real credentials to version control
- Always use HTTPS for production deployments
- Keep Supabase RLS policies enabled
- Rotate Groq API keys periodically
- Review browser console for exposed secrets before production deployment

### For Contributors
- Never log sensitive data (passwords, tokens, API keys)
- Use parameterized queries for all database operations
- Validate and sanitize all user inputs
- Follow the principle of least privilege for database roles
- Use Supabase Row-Level Security (RLS) for all tables
- Run `npm audit` before submitting PRs

## Known Security Considerations

### ⚠️ Development Mode
- The Worker development fallback (`VITE_GROQ_API_KEYS`) is **development-only** and exposes keys to the browser
- Never deploy with `VITE_GROQ_API_KEYS` set in production — use the Worker proxy instead

### ✅ Production Security Model
- All AI requests routed through authenticated Cloudflare Worker
- Groq API keys never exposed to client
- Supabase RLS enforced for all user data
- Worker implements key rotation, quarantine on 401/429, and auth verification

### 📋 Pending Security Work
- Formal DPDP (Data Protection and Digital Privacy) legal compliance review
- Third-party security audit
- Penetration testing
- OWASP dependency vulnerability scanning in CI

## Disclosure Policy

- Discovered vulnerabilities are fixed before public disclosure
- Security researchers who responsibly disclose vulnerabilities will be credited (if desired)
- We follow a 90-day disclosure timeline after the fix is deployed

## Security Updates

Security patches are released as follows:
- **Critical**: Immediate patch release
- **High**: Within 7 days
- **Medium**: Next scheduled release
- **Low**: Bundled with feature releases

---

**Last Updated**: October 2026
