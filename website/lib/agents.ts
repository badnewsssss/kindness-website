import { promises as fs } from "fs";
import path from "path";

export interface Agent {
  slug: string;
  name: string;
  description: string;
  tools: string[];
  content: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  agents: Agent[];
}

const CATEGORIES_DIR = path.join(process.cwd(), "..", "categories");

const CATEGORY_NAMES: Record<string, { name: string; description: string }> = {
  "01-core-development": {
    name: "Core Development",
    description:
      "Essential toolkit for building modern applications from the ground up",
  },
  "02-language-specialists": {
    name: "Language Specialists",
    description:
      "Deep expertise in specific programming languages and frameworks",
  },
  "03-infrastructure": {
    name: "Infrastructure",
    description: "Cloud, DevOps, and platform engineering experts",
  },
  "04-quality-security": {
    name: "Quality & Security",
    description: "Testing, security auditing, and code quality specialists",
  },
  "05-data-ai": {
    name: "Data & AI",
    description:
      "Machine learning, data engineering, and AI development experts",
  },
  "06-developer-experience": {
    name: "Developer Experience",
    description: "Tooling, documentation, and workflow optimization",
  },
  "07-specialized-domains": {
    name: "Specialized Domains",
    description: "Industry-specific and domain expertise agents",
  },
  "08-business-product": {
    name: "Business & Product",
    description: "Product management, strategy, and business analysis",
  },
  "09-meta-orchestration": {
    name: "Meta & Orchestration",
    description: "Agent coordination and meta-level capabilities",
  },
  "10-research-analysis": {
    name: "Research & Analysis",
    description: "Research, analysis, and knowledge synthesis",
  },
};

function parseFrontmatter(content: string): {
  frontmatter: Record<string, string>;
  body: string;
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2];
  const frontmatter: Record<string, string> = {};

  for (const line of frontmatterStr.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  }

  return { frontmatter, body };
}

export async function getCategories(): Promise<Category[]> {
  const entries = await fs.readdir(CATEGORIES_DIR, { withFileTypes: true });
  const categoryDirs = entries
    .filter((e) => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  const categories: Category[] = [];

  for (const dir of categoryDirs) {
    const categoryInfo = CATEGORY_NAMES[dir.name];
    if (!categoryInfo) continue;

    const categoryPath = path.join(CATEGORIES_DIR, dir.name);
    const files = await fs.readdir(categoryPath);
    const mdFiles = files.filter(
      (f) => f.endsWith(".md") && f !== "README.md"
    );

    const agents: Agent[] = [];

    for (const file of mdFiles) {
      const filePath = path.join(categoryPath, file);
      const content = await fs.readFile(filePath, "utf-8");
      const { frontmatter, body } = parseFrontmatter(content);

      if (frontmatter.name) {
        agents.push({
          slug: file.replace(".md", ""),
          name: frontmatter.name,
          description: frontmatter.description || "",
          tools: frontmatter.tools
            ? frontmatter.tools.split(",").map((t) => t.trim())
            : [],
          content: body,
        });
      }
    }

    agents.sort((a, b) => a.name.localeCompare(b.name));

    categories.push({
      slug: dir.name,
      name: categoryInfo.name,
      description: categoryInfo.description,
      agents,
    });
  }

  return categories;
}

export async function getCategory(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) || null;
}

export async function getAgent(
  categorySlug: string,
  agentSlug: string
): Promise<{ agent: Agent; category: Category } | null> {
  const category = await getCategory(categorySlug);
  if (!category) return null;

  const agent = category.agents.find((a) => a.slug === agentSlug);
  if (!agent) return null;

  return { agent, category };
}

export async function getAllAgents(): Promise<Agent[]> {
  const categories = await getCategories();
  return categories.flatMap((c) => c.agents);
}

export async function searchAgents(query: string): Promise<Agent[]> {
  const agents = await getAllAgents();
  const lowerQuery = query.toLowerCase();

  return agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(lowerQuery) ||
      agent.description.toLowerCase().includes(lowerQuery)
  );
}
