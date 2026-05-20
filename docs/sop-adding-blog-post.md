# SOP: Adding a New Blog Post

This Standard Operating Procedure (SOP) outlines the step-by-step process for creating, writing, and publishing a new blog post on the GTC Gold website.

---

## 1. Directory Structure and Routing

The website is built with Next.js App Router and utilizes MDX for blog articles. 

Each blog post resides in its own subfolder within the [blog](file:///c:/Users/MASHADSERVICE/Documents/Antigravity/GTCForex_Pro3/app/blog) directory:
```
app/blog/
├── [your-post-slug]/
│   └── page.mdx
```

The name of the folder (`your-post-slug`) determines the URL path of the blog post (e.g., `/blog/your-post-slug`).
- Use lowercase alphanumeric characters and hyphens for the slug (e.g., `trading-strategy-update`).
- Avoid spaces or special characters.

---

## 2. Setting Up Frontmatter

The blog listing system dynamically scans the folders in [app/blog](file:///c:/Users/MASHADSERVICE/Documents/Antigravity/GTCForex_Pro3/app/blog) and extracts the metadata at the top of the `page.mdx` file.

Every `page.mdx` must begin with a YAML frontmatter block enclosed between triple hyphens (`---`):

```yaml
---
title: "Your Compelling Blog Title"
date: "May 20, 2026"
excerpt: "A brief, 1-2 sentence summary of what the article covers to grab the reader's attention on the index list page."
category: "Algorithmic Strategy"
readingTime: "5 min read"
---
```

### Frontmatter Fields Reference
| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The main headline of the post. Avoid using quotes inside the title unless escaped or wrapped in different outer quotes. |
| `date` | `string` | The publication date (e.g., `"May 20, 2026"`). Posts are sorted on the index page by this date (newest first). |
| `excerpt` | `string` | A concise summary that displays on the blog listing and featured post cards. |
| `category` | `string` | The topic category. Standard categories in this project include: `Algorithmic Strategy`, `Risk Management`, `Broker Infrastructure`, `Market Intelligence`. |
| `readingTime` | `string` | An estimated reading time (e.g., `"5 min read"` or `"4 min read"`). |

---

## 3. Creating the MDX File Structure

Beneath the YAML frontmatter block, you must include the required layout components and formatting. Here is a complete skeleton of a new `page.mdx` file:

```markdown
---
title: "Navigating Volatility: Advanced Risk Systems in Gold Trading"
date: "May 20, 2026"
excerpt: "An in-depth review of how automated equity protection controls stabilize copy-trading portfolios during high-impact economic news."
category: "Risk Management"
readingTime: "5 min read"
---

<ArticleHeader frontmatter={frontmatter} />

Your introduction paragraph goes here. Keep it engaging, highlighting the core thesis of the article.

## First Major Heading

Write your body text here. You can use standard markdown:
- **Bold text** for emphasis.
- *Italics* for nuance.
- Unordered lists for bullet points.
- Ordered lists for sequential steps.
```

> [!IMPORTANT]
> The `<ArticleHeader frontmatter={frontmatter} />` component must be placed immediately after the closing `---` of your frontmatter. This component automatically renders the category, date, reading time, title, and excerpt in the site's premium typographic style.

---

## 4. Incorporating Custom Design Components

To maintain a premium, state-of-the-art feel, the project has built-in custom interactive layout blocks that you can use directly inside your markdown.

### A. Key Takeaway (`<KeyTakeaway>`)
Use this to highlight central concepts, strong summaries, or prominent quotations.

**Syntax:**
```markdown
<KeyTakeaway>
Automation provides consistency, but mathematical risk control is what ultimately determines survivability in the XAU/USD markets.
</KeyTakeaway>
```

### B. Insight Box (`<InsightBox>`)
Use this for detailed breakdowns, micro-analyses, technical definitions, or side notes. It creates a sleek, glass-molded panel with a gold-bordered title header.

**Syntax:**
```markdown
<InsightBox title="Microsecond Execution Dynamics">
During gold trading, macroeconomic data releases can move the market by hundreds of pips in seconds. Algorithmic systems process these feeds in milliseconds, dodging execution latency that manual traders struggle with.
</InsightBox>
```

### C. Risk Note (`<RiskNote>`)
Trading gold carries inherent risk. Every post should include a formal risk note regarding leverage, market volatility, or copy-trading risk where applicable.

**Syntax:**
```markdown
<RiskNote>
While algorithmic systems employ strict equity protection circuits, adverse market conditions or sudden black-swan events can still negatively impact portfolio balances. Leveraged instruments involve substantial capital risk.
</RiskNote>
```

---

## 5. Adding Video Integrations (Optional)

If your blog post mentions external media (e.g., a GTC FX overview video), you can embed it cleanly within a responsive, modern container that preserves the project's glassmorphism style.

**Syntax:**
```html
<div className="not-prose my-10 w-full aspect-video rounded-xl overflow-hidden border border-glass-border">
    <iframe 
        className="w-full h-full" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="Video Description" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
    ></iframe>
</div>
```

---

## 6. Verification & Publishing Checklist

Before deploying your changes, verify the integration locally:

1. **Verify File Location**: Ensure the file is named `page.mdx` and is in the correct subfolder under `app/blog/`.
2. **Local Run**: Execute the dev server in your workspace:
   ```bash
   npm run dev
   ```
3. **Inspect the Index Page**: Visit `http://localhost:3000/blog` to verify:
   - Your post is listed.
   - It is sorted correctly (if it is the newest, it should automatically display as the large "Featured Post").
   - The title, excerpt, date, reading time, and category appear correctly.
4. **Inspect the Article Page**: Click the post and verify:
   - The URL is `/blog/your-post-slug`.
   - The `<ArticleHeader>` renders perfectly.
   - All markdown headings, lists, `<InsightBox>`, `<KeyTakeaway>`, and `<RiskNote>` elements render with correct responsive styling.
