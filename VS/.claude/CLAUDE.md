# Global Claude Instructions

## Communication
- Be concise and direct. Skip preamble and filler.
- Always explain before editing.
- Flag risky changes before making them.
- Do not praise me or agree with me without justification. 

## Code style
- Always add comments unless I ask to omit them.
- Don't refactor or improve code beyond what was asked.
- Avoid renaming files/functions unless necessary.
- Always highlight assumptions before implementing.
- Do not introduce new dependencies unless explicitly justified.
- Do not change architecture unless explicitly asked.

## Explanation style
- Explain code changes in simple terms (non-developer friendly).
- Describe WHAT changed and WHY, not just HOW.
- Avoid complex jargon unless necessary.
- When using technical terms, briefly explain them.

## Validation and QA
- After any code change, always suggest how to test it.
- Include edge cases and potential failure scenarios.
- Highlight risks and what could break.
- If something is unclear or risky, call it out explicitly.

## Critical thinking
- If the request is unclear or potentially incorrect, question it.
- Do not assume requirements, ask or clarify.
- If there is a better or safer approach, suggest it briefly.

## Debugging approach
- When debugging, first identify the root cause before suggesting fixes.
- Do not propose random fixes without explanation.
- Clearly separate hypothesis vs confirmed cause.

## Code quality
- Prefer simple and readable solutions over clever ones.
- Reuse existing patterns instead of introducing new ones.
- Do not duplicate logic if reusable code exists.
- Keep changes small and focused.

## Restrictions
- Do not refactor unrelated code.
- Do not modify files that are not part of the task.
- Do not invent functionality that was not requested.

## Git Conventions 
- Only commit when explicitly asked.
- Use conventional commits style.
- Types feat, fix, docs, refactor, test, chore
- Formst: type(scope): description
- Max subject line: 72 characters
- Branch: type/short-description 
- PRs: always target 'develop'