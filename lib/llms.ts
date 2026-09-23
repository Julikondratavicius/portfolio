import { experience, site } from "@/content/site";
import { faq } from "@/content/faq";
import { projects } from "@/lib/projects";
import { visible } from "@/lib/content";

/** Resumen del sitio para modelos de lenguaje (https://llmstxt.org). */
export function llmsIndex(): string {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${faq[0].a.en} ${faq[1].a.en}`,
    "",
    "## About",
    ...faq.map((item) => `- ${item.q.en} ${item.a.en}`),
    "",
    "## Case studies",
    ...projects.map((p) => `- [${p.name} — ${p.tagline.en}](${site.url}/en/work/${p.slug}): ${p.summary.en}`),
    "",
    "## Case studies (Spanish)",
    ...projects.map((p) => `- [${p.name} — ${p.tagline.es}](${site.url}/es/work/${p.slug})`),
    "",
    "## Contact",
    `- Email: ${site.email}`,
    `- LinkedIn: ${site.linkedin}`,
    `- Portfolio: ${site.url}/en`,
    "",
    "## Optional",
    `- [Full content](${site.url}/llms-full.txt): every case study in plain text`,
  ];
  return lines.join("\n") + "\n";
}

/** Todo el contenido de los casos en texto plano. */
export function llmsFull(): string {
  const out: string[] = [`# ${site.name} — Senior Product Designer & Design Lead`, "", faq.map((i) => `${i.q.en}\n${i.a.en}`).join("\n\n"), "", "## Experience"];
  for (const job of experience) out.push(`- ${job.company.en} — ${job.title.en} (${job.period.replace("Actualidad", "Present")}): ${job.points.en[0]}`);
  for (const p of projects) {
    out.push("", `## ${p.name} — ${p.tagline.en}`, `URL: ${site.url}/en/work/${p.slug}`, p.url ? `Live project: ${p.url}` : "", `Industry: ${p.industry.en} · Year: ${p.year} · Role: ${p.role.en}`, "", p.headline.en, "", p.summary.en);
    for (const c of p.chapters) {
      const body = visible(c.body.en);
      const bullets = c.bullets ? visible(c.bullets.en) : [];
      if (!body.length && !bullets.length) continue;
      out.push("", `### ${c.eyebrow.en}: ${c.title.en}`, ...body, ...bullets.map((b) => `- ${b}`));
    }
    if (p.ai) out.push("", `### AI in the process: ${p.ai.title.en}`, p.ai.body.en, `Tools: ${p.ai.tools.join(", ")}`);
    const learnings = visible(p.learnings.en);
    if (learnings.length) out.push("", "### Learnings", ...learnings.map((l) => `- ${l}`));
  }
  return out.filter((line, i, all) => !(line === "" && all[i - 1] === "")).join("\n") + "\n";
}
