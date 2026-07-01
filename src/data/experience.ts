export type ClientEngagement = {
  client: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
};

// Client names are withheld per standard consulting confidentiality practice —
// these descriptors match how the engagements are documented on the CV itself.
export const clientEngagements: ClientEngagement[] = [
  {
    client: "Big 4 Australian Bank",
    role: "Business Analyst — Testing Strategy",
    period: "Apr 2026 (3 weeks)",
    summary:
      "Ran a 3-week rapid deep dive into the testing strategy for a $3.5bn migration program, designing and delivering 10 stakeholder workshops with the Deloitte UK team, culminating in a current-state assessment and implementation roadmap.",
    tags: ["Test Strategy", "Migration Program", "Stakeholder Workshops"],
  },
  {
    client: "Big 4 Australian Bank",
    role: "Technical BA / PM — Business Rules Engine",
    period: "Jun 2025 – Mar 2026",
    summary:
      "Led 3–4 workstreams delivering a Databricks + Prophecy business rules engine, facilitating technical forums of 50+ attendees across engineering and business teams and driving the platform to an on-time, in-scope go-live.",
    tags: ["Databricks", "Prophecy", "Program Delivery"],
  },
  {
    client: "Australian State Government Insurance Company",
    role: "Data Analyst / Engineer — Data & Insights",
    period: "Mar 2025 – Jun 2025",
    summary:
      "Built a GenAI workflow using Claude 3.7 to convert legacy SAS scripts to Snowflake SQL, engineered PII masking across hundreds of files, and wrote ETL stored procedures — cutting delivery time and resourcing cost by 50%.",
    tags: ["Snowflake", "GenAI / Claude", "SQL", "PII Masking"],
  },
  {
    client: "Multinational Australian Graphics Software Company",
    role: "Data Strategy Consultant — Business Data Platforms",
    period: "Feb 2025 – Mar 2025",
    summary:
      "Co-authored a data governance framework and ownership model as part of an IPO-readiness data strategy, engaging 20+ stakeholders across 21 workshops to shape a prioritised initiatives roadmap.",
    tags: ["Data Governance", "Data Strategy", "IPO Readiness"],
  },
  {
    client: "Multinational Dutch Bank",
    role: "Business Analyst — Data Management Tooling",
    period: "Sep 2024 – Dec 2024",
    summary:
      "Ran the RFP process to select an Enterprise Data Management tool vendor, designing the scoring model and leading consensus and shortlist presentation sessions with 10 business owners.",
    tags: ["RFP", "Vendor Evaluation", "EDM"],
  },
  {
    client: "Big 4 Australian Bank",
    role: "Business Analyst — Generative AI Risk & Compliance MVP",
    period: "Aug 2024 – Sep 2024",
    summary:
      "Delivered a GenAI copilot to streamline compliance-assessment workflows handling 16,000+ incidents a year — the first of 5 pioneer GenAI use cases piloted into production.",
    tags: ["GenAI", "Risk & Compliance", "Copilot"],
  },
  {
    client: "Big 4 Australian Bank",
    role: "Gen AI Engineer — Policy Simplification POC",
    period: "Jul 2024 – Aug 2024",
    summary:
      "Deployed LLM API endpoints in Azure ML Studio to summarise lengthy policy documents, designing evaluation metrics to benchmark GPT-4o, GPT-4, GPT-3.5 and Llama 3 on compression quality.",
    tags: ["Azure ML", "LLM Evaluation", "GPT-4o", "Llama 3"],
  },
  {
    client: "Major Australian Energy Retailer",
    role: "Data Engineer — Databricks Data Platform MVP",
    period: "May 2024 – Jul 2024",
    summary:
      "Built an ETL pipeline consolidating 6 data sources into a Databricks Unity Catalog Lakehouse (Bronze/Silver medallion layers) with Terraform-managed CI/CD — eliminating the client's prior data loss entirely.",
    tags: ["Databricks", "PySpark", "Terraform", "AWS"],
  },
  {
    client: "Major Australian Property Development Company",
    role: "Data Strategy — Business Recommendations",
    period: "Jan 2023 – Feb 2023",
    summary:
      "Advised on maturing the client's predictive ML modelling and MLOps processes, delivering a roadmap for more efficient stakeholder communication and legacy-system migration.",
    tags: ["MLOps", "Data Strategy", "Advisory"],
  },
  {
    client: "National Australia Bank (NAB)",
    role: "Financial Crime Data Analyst Intern",
    period: "Jul 2022 – Jan 2023",
    summary:
      "Automated a Python archiving system that eliminated a backlog of tens of thousands of output files and cut one job's runtime from 20 minutes to 50 seconds — a 24x speedup. Migrated legacy SAS code to Python, cutting runtime by 54% and turning a 3-step process into one, while using Power BI, SAS and SQL to extract data from Oracle databases and handling ad-hoc analysis requests for stakeholders in a highly confidential environment.",
    tags: ["Power BI", "SAS", "Python", "SQL", "Automation"],
  },
];

export type Cert = {
  name: string;
  url?: string;
};

export type CertGroup = {
  issuer: string;
  certs: Cert[];
};

export const certifications: CertGroup[] = [
  {
    issuer: "Amazon Web Services",
    certs: [
      {
        name: "AWS Certified Solutions Architect – Professional",
        url: "https://www.credly.com/badges/ee4cf980-f69e-4431-9aaf-517307294031/linked_in_profile",
      },
      {
        name: "AWS Certified DevOps Engineer – Professional",
        url: "https://www.credly.com/badges/e1f0d396-538a-4248-bbd8-086920d3b036/linked_in_profile",
      },
      {
        name: "AWS Certified Machine Learning – Specialty",
        url: "https://www.credly.com/badges/bd5e92b8-8f54-4f98-a087-7ac9006dc21b/linked_in_profile",
      },
      {
        name: "AWS Certified Security – Specialty",
        url: "https://www.credly.com/badges/b24a203f-8e15-45ad-b7c7-78b7261f283b/linked_in_profile",
      },
      {
        name: "AWS Certified Solutions Architect – Associate",
        url: "https://www.credly.com/badges/8d7b3277-fb01-45c2-ae00-5080a714610a/linked_in_profile",
      },
      {
        name: "AWS Certified Data Engineer – Associate",
        url: "https://www.credly.com/badges/d09b3db6-be51-4f2a-9828-de1d415755ef/linked_in_profile",
      },
      {
        name: "AWS Certified Machine Learning Engineer – Associate",
        url: "https://www.credly.com/badges/b6ab964d-de82-4897-97c6-dd23e2daddb8/linked_in_profile",
      },
      {
        name: "AWS Certified Developer – Associate",
        url: "https://www.credly.com/badges/ed00f3dc-ab1c-4dba-9b22-70cfd0dedd44/linked_in_profile",
      },
      {
        name: "AWS Certified SysOps Administrator – Associate",
        url: "https://www.credly.com/badges/ec0b06fe-47cf-40dd-8349-c56b08944275/linked_in_profile",
      },
      {
        name: "AWS Certified AI Practitioner",
        url: "https://www.credly.com/badges/6e384d44-8875-4b4b-9e84-dbda81b39d47/linked_in_profile",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/588f71db855d48e895546dd5d05bc818",
      },
    ],
  },
  {
    issuer: "Databricks",
    certs: [
      {
        name: "Databricks Certified Data Engineer Professional",
        url: "https://credentials.databricks.com/6b8b0d57-1f90-493b-8ed2-9bfce8007e17",
      },
    ],
  },
  {
    issuer: "Microsoft",
    certs: [
      {
        name: "Microsoft Certified: Azure Data Fundamentals",
        url: "https://learn.microsoft.com/en-au/users/billyang-8739/credentials/30547143a972a3c6",
      },
    ],
  },
];

export const certificationCount = certifications.reduce(
  (sum, group) => sum + group.certs.length,
  0
);
