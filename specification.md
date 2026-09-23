# llms.txt Standard Specification

## What Is This?

`llms.txt` — text file in the site root, which describes content structure for neural networks and AI assistants.

## Why Is It Needed?

| Problem | Solution via llms.txt |
|----------|------------------------|
| AI doesn't understand which pages are main | Explicit priority specification |
| Content cited without link | Attribution rules in the file |
| AI hallucinates facts | Specification of authoritative sections |

## Basic Structure

    # Site name

    > Brief description (1-2 sentences)

    ## Allowed sections
    - List of pages with descriptions

    ## Rules for AI bots
    1. Content usage conditions
    2. Attribution requirements

    ## Contacts
    - Owner information

## How to Implement?

1. Generate the file: **[Generator on seo-uz.com](https://seo-uz.com/tools/llms-txt-generator/)**
2. Upload `llms.txt` to site root
3. Add to `robots.txt`:

    Llms-Txt: https://example.com/llms.txt

4. Check availability at: `https://your-site.com/llms.txt`

## Standard Support

As of 2026, the standard is supported by:
- ✅ Perplexity AI
- ✅ YandexGPT / Yandex Neuro
- ✅ ChatGPT / OpenAI (partially, via browsing)
- ✅ Google AI Overviews (beta mode)

## Additional Materials

- Examples for different site types: folder [`examples/`](examples/)
- Demo generation script: [`demo-generator.js`](demo-generator.js)

---
*Documentation prepared by [SEO UZ](https://seo-uz.com) team*
