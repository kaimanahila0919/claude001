# CLAUDE.md - AI Assistant Guide

## Repository Overview

This repository (`claude001`) is a content and code repository focused on creating high-quality Japanese-language technical articles and educational content about AI technologies, along with example code implementations.

### Repository Purpose
- Publish comprehensive technical guides and tutorials in Japanese
- Provide educational content about AI tools and prompt engineering
- Maintain example code implementations (React components, utilities)
- Serve as a knowledge base for AI-related technologies

### Primary Languages
- **Content**: Japanese (日本語)
- **Code**: JavaScript/JSX (React), with plans for TypeScript

## Project Structure

```
claude001/
├── CLAUDE.md                    # This file - AI assistant guidelines
├── Google_Opal解説.md           # Comprehensive Google Opal tutorial (Japanese)
├── プロンプトの基礎.md            # Prompt engineering systematic guide (Japanese)
├── calculator.jsx               # React calculator component example
├── branch.md                    # Placeholder for branch documentation
└── test.md.txt                  # Placeholder test file
```

### File Categories

#### 1. Technical Articles (`.md` files)
- **Google_Opal解説.md**: Complete guide to Google Opal, a no-code AI mini-app builder
  - Covers features, use cases, implementation examples
  - Target audience: Japanese-speaking developers and AI enthusiasts
  - ~270 lines, comprehensive with references

- **プロンプトの基礎.md**: Advanced prompt engineering guide
  - Technical, expert-level content
  - Covers Few-Shot Learning, Chain-of-Thought, RAG patterns
  - Includes code examples in Python and TypeScript
  - ~416 lines with academic references

#### 2. Code Examples (`.jsx`, `.js`, `.ts` files)
- **calculator.jsx**: Full-featured React calculator component
  - Built with React Hooks (useState)
  - Styled with Tailwind CSS
  - Modern gradient UI with animations
  - Demonstrates functional component patterns

## Content Guidelines

### Japanese Technical Writing Standards

#### Writing Style
- **Formal yet accessible**: Use です/ます (desu/masu) form
- **Technical precision**: Use accurate technical terminology
- **Clear structure**: Use hierarchical headings (##, ###, ####)
- **Code-friendly**: Include inline code with backticks and code blocks
- **Reference-rich**: Always cite sources and provide links

#### Article Structure Template
```markdown
# タイトル：簡潔で説明的

## はじめに
- 背景と目的
- 読者対象

## 主要セクション
- 概念説明
- 具体例
- コード例（該当する場合）

## まとめ
- 重要ポイントの要約
- 次のステップ

## 参照情報 / 参考文献
- 公式ドキュメント
- 関連記事
- 学術論文（該当する場合）
```

#### Technical Terminology
- **Prefer**: カタカナ表記 for established technical terms (e.g., プロンプト, トークン, モデル)
- **Use**: 日本語訳 when it enhances clarity (e.g., 大規模言語モデル for LLM)
- **Consistency**: Maintain term consistency throughout each article

### Code Quality Standards

#### React/JavaScript Conventions
```javascript
// Use modern React patterns
import { useState, useEffect } from "react";

// Functional components with hooks
export default function ComponentName() {
  // State declarations at the top
  const [state, setState] = useState(initialValue);

  // Event handlers
  const handleEvent = () => {
    // Implementation
  };

  // Render
  return (
    // JSX
  );
}
```

#### Code Style
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Formatting**: 2-space indentation
- **Modern syntax**: Use arrow functions, destructuring, template literals
- **Comments**: Include explanatory comments for complex logic
- **Accessibility**: Consider a11y in UI components

## Development Workflow

### Branch Strategy

#### Branch Naming Convention
```
claude/[description]-[session-id]
```

**Examples:**
- `claude/opal-ai-article-01UzctoyZZK5LtUzXyp3vThK`
- `claude/write-prompt-basics-article-019Xcg9Cd6ZDHDM4zTVci3Wi`
- `claude/claude-md-miweqfderbmsxtmv-01DBYr84SWvbAKAnX9ax279h` (current)

**Important Rules:**
- All development branches MUST start with `claude/`
- All branches MUST end with a matching session ID
- Push will fail with 403 if branch naming doesn't follow this pattern

### Git Workflow

#### Standard Development Process
1. **Create feature branch** from current state
2. **Develop** on the designated branch
3. **Commit** with clear, descriptive messages
4. **Push** to remote with `-u origin <branch-name>`
5. **Create Pull Request** for review and merge

#### Commit Message Standards
```
# Good commit messages
Add comprehensive Google Opal tutorial article in Japanese
Update prompt basics article for expert audience
Add files via upload

# Format
[Action] [What was done] [Optional: context]
```

**Common actions:**
- Add: New files or features
- Update: Modifications to existing content
- Fix: Bug fixes or corrections
- Refactor: Code restructuring
- Merge: Pull request merges

### Git Operations Best Practices

#### Pushing Changes
```bash
# Always use -u flag for new branches
git push -u origin claude/feature-name-sessionid

# Retry on network failures (up to 4 times with exponential backoff)
# 2s, 4s, 8s, 16s intervals
```

#### Fetching/Pulling
```bash
# Prefer specific branch fetches
git fetch origin <branch-name>

# Pull with branch specification
git pull origin <branch-name>

# Retry on network failures (same as push)
```

## AI Assistant Guidelines

### When Working on This Repository

#### Content Creation Tasks
1. **Japanese articles**:
   - Research topic thoroughly
   - Follow the article structure template
   - Include practical examples
   - Cite authoritative sources
   - Proofread for technical accuracy

2. **Code examples**:
   - Write clean, modern code
   - Include comments for clarity
   - Follow established patterns (see calculator.jsx)
   - Ensure code is functional and tested

#### Content Update Tasks
1. **Read existing file first**: Always read before editing
2. **Maintain style consistency**: Match existing tone and structure
3. **Preserve formatting**: Keep heading hierarchy and code blocks
4. **Update references**: Ensure links and citations are current
5. **Version information**: Update dates and version info if applicable

#### Key Conventions to Follow

##### 1. Language Awareness
- **Primary language**: Japanese for articles
- **Code comments**: Can be English or Japanese (prefer English for code)
- **Variable names**: English only in code
- **Documentation**: Japanese

##### 2. File Operations
- **NEVER** create files unnecessarily
- **ALWAYS** prefer editing existing files
- **NO** emoji unless explicitly requested
- **PRESERVE** existing file structure

##### 3. Git Operations
- **ONLY** commit when user explicitly requests
- **NEVER** skip hooks (--no-verify)
- **NO** force pushes to main/master
- **ALWAYS** follow branch naming convention

##### 4. Research and Verification
- For technical articles, verify facts with reliable sources
- Check official documentation before making claims
- Include publication dates and version information
- Update "最終更新" (last updated) dates when modifying content

### Common Tasks and Patterns

#### Task: Add a new technical article
```markdown
1. Research topic and gather authoritative sources
2. Create outline following article structure template
3. Write content in Japanese with technical precision
4. Include code examples if applicable
5. Add comprehensive reference section
6. Review for consistency and accuracy
7. Commit with descriptive message
```

#### Task: Update existing article
```markdown
1. Read current version completely
2. Identify sections needing updates
3. Research latest information
4. Make targeted edits preserving style
5. Update 最終更新 date
6. Update references if needed
7. Commit with clear description of changes
```

#### Task: Add code example
```markdown
1. Understand the purpose and context
2. Write clean, modern implementation
3. Follow existing code patterns (see calculator.jsx)
4. Test functionality
5. Add inline comments for clarity
6. Document usage if complex
7. Commit with descriptive message
```

### Quality Checklist

Before completing any task, verify:

#### For Articles
- [ ] Japanese grammar and spelling are correct
- [ ] Technical terms are used consistently
- [ ] Code examples are properly formatted with syntax highlighting
- [ ] All links are valid and point to authoritative sources
- [ ] Structure follows hierarchical heading pattern
- [ ] References section is complete and properly formatted
- [ ] Last updated date is current

#### For Code
- [ ] Code follows established patterns
- [ ] No syntax errors
- [ ] Modern JavaScript/React patterns used
- [ ] Comments explain complex logic
- [ ] Indentation and formatting are consistent
- [ ] Component/function names are descriptive

#### For Git Operations
- [ ] Branch name follows `claude/description-sessionid` pattern
- [ ] Commit message is clear and descriptive
- [ ] No unrelated files are included
- [ ] Changes are focused and purposeful

## Technical Context

### Technologies Used

#### Content Authoring
- **Markdown**: GitHub-flavored markdown for articles
- **Japanese Typography**: Proper use of 、。「」などの Japanese punctuation
- **Code Blocks**: Syntax highlighting for multiple languages

#### Code Examples
- **React**: Modern functional components with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern syntax and features

### Repository Metadata

**Current Branch**: `claude/claude-md-miweqfderbmsxtmv-01DBYr84SWvbAKAnX9ax279h`

**Recent History**:
- Focus on high-quality AI tutorial content
- Pull request workflow for all changes
- Claude AI-assisted content creation
- Emphasis on Japanese-language technical education

**Repository Status**: Active development, clean working directory

## Key Principles for AI Assistants

### 1. Cultural and Linguistic Sensitivity
- Understand Japanese technical writing conventions
- Respect formal/informal language contexts (use です/ます form)
- Maintain consistency in terminology choices

### 2. Technical Excellence
- Prioritize accuracy over speed
- Verify technical claims with authoritative sources
- Include proper error handling in code examples
- Follow modern best practices

### 3. User-Centric Approach
- Focus on educational value
- Provide practical, actionable examples
- Make complex topics accessible
- Include comprehensive references for further learning

### 4. Repository Hygiene
- Keep repository clean and organized
- Don't create unnecessary files
- Follow established patterns and conventions
- Maintain clear commit history

### 5. Continuous Improvement
- Update content as technologies evolve
- Refactor code examples for better clarity
- Enhance documentation based on usage patterns
- Keep dependencies and references current

## Troubleshooting

### Common Issues

#### Git Push Fails with 403
- **Cause**: Branch name doesn't follow `claude/*-sessionid` pattern
- **Solution**: Rename branch to match required pattern

#### Code Examples Not Working
- **Cause**: Missing dependencies or outdated syntax
- **Solution**: Verify React/JavaScript versions, update imports

#### Japanese Text Encoding Issues
- **Cause**: File encoding not set to UTF-8
- **Solution**: Ensure all files use UTF-8 encoding

## Future Directions

### Planned Content Areas
- More AI tool tutorials (similar to Google Opal)
- Advanced prompt engineering techniques
- React/Next.js component library
- AI integration patterns and best practices

### Potential Enhancements
- TypeScript migration for code examples
- Interactive code playgrounds
- Multi-language support (English translations)
- Automated testing for code examples

## Contact and Contribution

This repository is maintained as part of AI-assisted development workflow. All contributions should follow the guidelines outlined in this document.

---

**Last Updated**: 2025-12-08
**Document Version**: 1.0
**AI Assistant**: Claude (Anthropic)
