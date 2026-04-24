const obj = {
  "meta" : {
    "goal": "Become AI-enabled full-stack engineer with strong system design",
    "phases": ["core", "backend", "distributed", "ai", "production"]
  },
  "nodejs": {
    "priority": 1,
    "topics": [
      {
        "name": "runtime_internals",
        "depth": "high",
        "subtopics": [
          "event_loop_phases",
          "microtask_vs_macrotask",
          "call_stack_execution_context",
          "v8_engine_basics",
          "memory_management_heap_stack_gc"
        ],
        "buildIdeas": ["visualize event loop", "simulate async queue"]
      },
      {
        "name": "async_concurrency",
        "depth": "high",
        "subtopics": [
          "callbacks_promises_async_await",
          "event_emitter_pattern",
          "worker_threads",
          "cluster_module",
          "concurrency_patterns"
        ],
        "buildIdeas": ["parallel task runner", "job queue system"]
      },
      {
        "name": "core_modules",
        "depth": "high",
        "subtopics": [
          "streams_readable_writable_transform",
          "buffers_binary_data",
          "file_system_internals",
          "http_module_server_creation"
        ],
        "buildIdeas": ["file uploader with streams", "custom http server"]
      },
      {
        "name": "performance",
        "depth": "high",
        "subtopics": [
          "event_loop_blocking",
          "profiling_cpu_memory",
          "load_testing",
          "caching_strategies"
        ],
        "buildIdeas": ["performance benchmark tool", "cache layer with redis"]
      },
      {
        "name": "backend_architecture",
        "depth": "high",
        "subtopics": [
          "rest_vs_graphql",
          "middleware_design",
          "validation_patterns",
          "error_handling",
          "logging_observability"
        ],
        "buildIdeas": ["scalable api boilerplate"]
      },
      {
        "name": "security",
        "depth": "medium",
        "subtopics": [
          "jwt_authentication",
          "oauth",
          "rbac_abac",
          "owasp_basics",
          "rate_limiting"
        ],
        "buildIdeas": ["auth system with roles"]
      },
      {
        "name": "database",
        "depth": "high",
        "subtopics": [
          "sql_vs_nosql",
          "indexing",
          "transactions",
          "connection_pooling",
          "orm_vs_query_builder"
        ],
        "buildIdeas": ["design scalable schema"]
      },
      {
        "name": "testing",
        "depth": "medium",
        "subtopics": [
          "unit_testing",
          "integration_testing",
          "api_testing",
          "mocking"
        ],
        "buildIdeas": ["test coverage setup"]
      }
    ]
  },
  "system_design": {
    "priority": 2,
    "topics": [
      {
        "name": "fundamentals",
        "depth": "high",
        "subtopics": [
          "scalability_vertical_horizontal",
          "latency_vs_throughput",
          "cap_theorem",
          "consistency_models"
        ]
      },
      {
        "name": "networking",
        "depth": "medium",
        "subtopics": [
          "http_https",
          "tcp_ip_basics",
          "dns_resolution",
          "load_balancing_l4_l7"
        ]
      },
      {
        "name": "architecture_patterns",
        "depth": "high",
        "subtopics": [
          "monolith_vs_microservices",
          "event_driven_architecture",
          "serverless",
          "api_gateway"
        ]
      },
      {
        "name": "data_layer",
        "depth": "high",
        "subtopics": [
          "database_scaling",
          "sharding",
          "replication",
          "caching",
          "cdn"
        ]
      },
      {
        "name": "messaging",
        "depth": "high",
        "subtopics": [
          "queues",
          "pub_sub",
          "event_streaming",
          "idempotency"
        ]
      },
      {
        "name": "reliability",
        "depth": "high",
        "subtopics": [
          "fault_tolerance",
          "retry_strategies",
          "circuit_breaker",
          "rate_limiting",
          "backpressure"
        ]
      },
      {
        "name": "observability",
        "depth": "medium",
        "subtopics": [
          "logging",
          "monitoring",
          "tracing",
          "alerting"
        ]
      },
      {
        "name": "system_design_cases",
        "depth": "high",
        "subtopics": [
          "url_shortener",
          "chat_system",
          "notification_system",
          "payment_system",
          "search_system"
        ]
      }
    ]
  },
  "ai_genai": {
    "priority": 3,
    "topics": [
      {
        "name": "foundations",
        "depth": "medium",
        "subtopics": [
          "ml_vs_dl_vs_ai",
          "tokens_embeddings",
          "transformers_basics",
          "training_vs_inference"
        ]
      },
      {
        "name": "llm_core",
        "depth": "high",
        "subtopics": [
          "prompt_engineering",
          "context_window",
          "temperature_tokens",
          "hallucination_handling"
        ]
      },
      {
        "name": "embeddings_vector",
        "depth": "high",
        "subtopics": [
          "embedding_generation",
          "cosine_similarity",
          "vector_database"
        ]
      },
      {
        "name": "rag",
        "depth": "very_high",
        "subtopics": [
          "retrieval_pipeline",
          "chunking_strategies",
          "ranking",
          "context_injection"
        ],
        "buildIdeas": ["chat_with_pdf", "knowledge_bot"]
      },
      {
        "name": "ai_system_design",
        "depth": "high",
        "subtopics": [
          "llm_backend_integration",
          "cost_optimization",
          "latency_optimization",
          "response_caching"
        ]
      },
      {
        "name": "ai_usecases",
        "depth": "medium",
        "subtopics": [
          "chatbots",
          "document_qa",
          "recommendation_systems",
          "code_assistant"
        ]
      },
      {
        "name": "evaluation",
        "depth": "medium",
        "subtopics": [
          "accuracy_metrics",
          "prompt_testing",
          "human_feedback"
        ]
      }
    ]
  },
  "devops": {
    "priority": 4,
    "topics": [
      {
        "name": "deployment",
        "subtopics": [
          "ci_cd",
          "docker_basics",
          "env_management"
        ]
      },
      {
        "name": "infrastructure",
        "subtopics": [
          "cloud_basics",
          "load_balancer",
          "reverse_proxy"
        ]
      },
      {
        "name": "scaling",
        "subtopics": [
          "auto_scaling",
          "blue_green_deploy",
          "canary_release"
        ]
      }
    ]
  }
}