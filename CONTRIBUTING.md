# Contributing to CareerCase

Thank you for your interest in contributing to CareerCase! This document provides guidelines for contributing to the project.

## Development Setup

### Prerequisites
- Node.js 22.16.0 (see `.node-version`)
- npm
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways.git
cd AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways

# Install dependencies
npm ci

# Copy environment template
cp .env.example .env.local

# Run development server
npm run dev
```

## Code Quality Standards

Before submitting a pull request, ensure your code meets these standards:

### TypeScript
- **Strict mode** — zero `any` types in production code
- All functions and exports must have explicit return types
- Use interfaces over types for object shapes

### Testing
```bash
npm run typecheck          # TypeScript type checking
npm run kb:validate        # Knowledge base integrity
npm run qa:guidance        # Career matching engine
npm run qa:product         # Product invariants
npm run qa:e2e            # End-to-end Playwright tests
```

### Code Style
- Use Prettier formatting (2 spaces, single quotes, trailing commas)
- Follow conventional commit messages (`feat:`, `fix:`, `docs:`, `chore:`, `test:`)
- Keep functions focused and under 50 lines when possible
- Add JSDoc comments for public APIs

## Pull Request Process

1. **Fork the repository** and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write clean, well-documented code
   - Add tests for new features
   - Update documentation as needed

3. **Test thoroughly**:
   ```bash
   npm run typecheck
   npm run qa:guidance
   npm run qa:product
   npm run build
   ```

4. **Commit with conventional format**:
   ```bash
   git commit -m "feat: add skill confidence visualization"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**:
   - Provide a clear title and description
   - Link any related issues
   - Include screenshots for UI changes
   - Wait for CI checks to pass

## Contribution Areas

### High-Priority Areas
- **Psychometric validation** — validate RIASEC and aptitude assessments
- **Accessibility improvements** — WCAG AA compliance, screen reader testing
- **Multilingual support** — Hindi, Tamil, Telugu, Bengali translations
- **Knowledge base expansion** — add more occupations, skills, qualifications
- **Government integrations** — NCS, Skill India Digital Hub, DigiLocker connectors

### Low-Priority Areas
- UI polish and animations
- Additional AI features
- Performance optimizations

## Questions or Issues?

- **Bug reports**: [GitHub Issues](https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/issues)
- **Feature requests**: [GitHub Discussions](https://github.com/KamalReddy2901/AI-Enhanced-Career-Guidance-System-for-Personalized-Career-Pathways/discussions)
- **Security issues**: See [SECURITY.md](./SECURITY.md)

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
