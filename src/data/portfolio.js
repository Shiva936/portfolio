export const profile = {
  name: 'Shiv Deepak Sharma',
  title: 'Backend Engineer | Distributed Systems | Golang Specialist',
  tagline:
    'Designs and builds scalable distributed systems, high-performance APIs, and backend infrastructure powering production-grade applications.',
  subtext:
    'Specialized in Golang, distributed architectures, and performance-critical systems across fintech and cybersecurity domains.',
  github: 'https://github.com/Shiva936',
  linkedin: 'https://www.linkedin.com/in/shiv-deepak-sharma/',
}

export const experiences = [
  {
    company: 'Razorpay',
    role: 'Senior Backend Engineer',
    period: '2023 – Present',
    highlights: [
      'Architected request-level idempotency and reconciliation systems for payment pipelines.',
      'Reduced support escalations by 40%+ through deterministic replay tooling.',
      'Improved MTTR by 30% with observability-driven alerting and runbook automation.',
      'Delivered cross-border payments and stablecoin flows with strict latency SLAs.',
      'Migrated legacy monolith to Go microservices, increasing delivery velocity by 30%.',
    ],
  },
  {
    company: 'Cyble',
    role: 'Backend Engineer',
    period: '2021 – 2023',
    highlights: [
      'Built a CMS that reduced support requests by 80% through self-service platform tooling.',
      'Designed Kafka pipelines with 99% accuracy for threat telemetry ingestion.',
      'Built high-throughput Go consumers with partition-level parallelism and backpressure control.',
      'Reduced data migration effort by 60% with idempotent state transfer tooling.',
    ],
  },
  {
    company: 'Wiz Freight',
    role: 'Backend Engineer',
    period: '2019 – 2021',
    highlights: [
      'Optimized APIs for 80% faster response times under production traffic patterns.',
      'Built multi-currency systems with consistent rounding and settlement guarantees.',
      'Integrated third-party services with retry and circuit-breaker reliability patterns.',
    ],
  },
]

export const projects = [
  {
    name: 'RustFlux',
    tagline:
      'High-performance API gateway engineered for low-latency routing at scale. Supports JWT auth, distributed rate limiting, and production-grade observability.',
    description:
      'A gateway designed for sub-10ms routing latency under 100k+ RPS. Features include service-mesh-ready routing, JWT-based access control, and distributed rate limiting with failure isolation. Built to surface clear telemetry for rapid incident resolution.',
    tech: ['Rust', 'Tokio', 'Redis', 'OpenTelemetry', 'gRPC'],
    challenges: [
      'Maintaining sub-10ms routing latency at sustained 120k RPS.',
      'Architecting globally consistent rate limiting with Redis-backed shared state and circuit-breakers.',
      'Delivering zero-downtime API key rotation and policy updates across a multi-region fleet.',
    ],
  },
  {
    name: 'Newsletter System',
    tagline:
      'Distributed email delivery platform with retry orchestration, failover, and async workers.',
    description:
      'A fault-tolerant delivery pipeline that orchestrates retries, priority queues, and failure backoff. Designed for high-volume delivery with strong operational visibility and bounded duplicate risk.',
    tech: ['Go', 'Redis', 'PostgreSQL', 'NATS', 'Prometheus'],
    challenges: [
      'Guaranteeing delivery semantics under worker restarts while keeping duplicates under control.',
      'Managing backpressure and failover between Redis and Postgres during peak send windows.',
      'Surfacing delivery latency and success metrics for real-time operational dashboards.',
    ],
  },
]

export const systems = [
  {
    name: 'Idempotent Payment Systems',
    description:
      'Designed request-level idempotency and reconciliation mechanisms for payment workflows. Ensured safe retries, consistent ledger state, and deterministic outcomes across distributed services.',
  },
  {
    name: 'Distributed Data Pipelines',
    description:
      'Built Kafka-based ingestion pipelines with schema evolution, backpressure handling, and data-quality alerting. Architected topologies to sustain 1M+ events per hour with bounded latency and retry controls.',
  },
  {
    name: 'Rate Limiting Systems',
    description:
      'Implemented global and tenant-scoped throttling using Redis counters and probabilistic filters. Delivered consistent enforcement across multi-region clusters with real-time metrics and safety limits.',
  },
  {
    name: 'High Performance APIs',
    description:
      'Engineered APIs with connection pooling, caching layers, and async processing to minimize tail latency. Focused on stable throughput under bursty load and operational visibility for production incidents.',
  },
]

export const explorations = [
  {
    title: 'Distributed systems observability',
    details:
      'Investigating distributed tracing strategies, structured logs, and metrics hierarchies to reduce MTTD and improve incident root cause analysis.',
  },
  {
    title: 'Fault-tolerant architectures',
    details:
      'Exploring patterns for leader election, graceful degradation, and automated recovery in service meshes and clustered stateful workloads.',
  },
  {
    title: 'High-throughput backend systems',
    details:
      'Researching techniques for bounded tail latency, backpressure management, and efficient resource utilization in high-load environments.',
  },
]

export const skills = {
  Languages: ['Go', 'Rust', 'Python', 'C++', 'C', 'Java'],
  Infra: ['Docker', 'Kubernetes', 'AWS', 'Helm'],
  Data: ['Kafka', 'PostgreSQL', 'MySQL', 'MongoDB'],
  Protocols: ['gRPC', 'REST'],
}
