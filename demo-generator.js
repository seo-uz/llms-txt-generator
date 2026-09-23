#!/usr/bin/env node
/**
 * LLMs.txt Generator — DEMO VERSION
 * Full version with site structure analysis:
 * 👉 https://seo-uz.com/tools/llms-txt-generator/
 *
 * This demo version creates a basic file template.
 */

const websiteUrl = process.argv[2] || 'https://example.com';

function generateBasicLLMsTxt(url) {
  const hostname = new URL(url).hostname;

  return `# ${hostname}

> This file tells AI assistants how to index the site ${hostname}.
> Generated with the demo script from SEO UZ.
> Full generator: https://seo-uz.com/tools/llms-txt-generator/

## Allowed Sections

- Main page: ${url}
- Blog and articles: ${url}/blog/
- Services: ${url}/uslugi/

## Rules for AI Bots

1. Content citation with source attribution is allowed
2. Mandatory active link to ${hostname}
3. Do not use content for training commercial models without permission

## Contacts

- Owner: ${hostname}
- Tool created by: SEO UZ (https://seo-uz.com)

Generation date: ${new Date().toISOString().split('T')[0]}
`;
}

console.log('='.repeat(50));
console.log('🤖 LLMs.txt Generator — DEMO');
console.log('='.repeat(50));
console.log(generateBasicLLMsTxt(websiteUrl));
console.log('='.repeat(50));
console.log('💡 Full version with site analysis: https://seo-uz.com/tools/llms-txt-generator/');
console.log('='.repeat(50));
