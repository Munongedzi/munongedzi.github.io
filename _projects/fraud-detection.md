---
layout: project
title: Real-Time Fraud Detection System
outcome: Prevented $4.5M in fraudulent transactions
tags: [Anomaly Detection, Real-time ML, Security]
image: /assets/img/projects/fraud-detection.jpg
github_url: 
demo_url: 
---

## Problem

The company was experiencing increasing fraud losses ($6M annually) with legacy rule-based system catching only 60% of fraudulent transactions while creating frustrating false positives for legitimate customers.

## Approach

Developed a machine learning fraud detection system that:
- Scored transactions in real-time (<50ms)
- Adapted to evolving fraud patterns automatically
- Minimized false positives to reduce customer friction
- Provided explanations for flagged transactions

## Tech Stack

- **Languages:** Python, Java
- **ML Libraries:** XGBoost, TensorFlow, Scikit-learn
- **Stream Processing:** Apache Kafka, Flink
- **Databases:** PostgreSQL, Cassandra
- **Deployment:** Kubernetes, Docker
- **Monitoring:** Prometheus, ELK Stack

## What I Built

### Detection Models

**Transaction-Level Model**
- Gradient boosted trees for tabular features
- Graph neural networks for network effects
- Ensemble combining multiple signals

**User-Level Profiling**
- Behavioral baselines for each user
- Deviation detection from normal patterns
- Risk scoring based on account history

**Network Analysis**
- Connected component analysis for fraud rings
- Velocity checks across related accounts
- Device fingerprinting and geolocation analysis

### Feature Engineering

Created 200+ features across categories:
- Transaction attributes (amount, merchant, time)
- User behavior patterns (frequency, recency, consistency)
- Device and network signals
- Historical risk indicators
- Graph features (connections to known fraud)

### Production Architecture

- Kafka streams for real-time event processing
- Feature store for consistent feature computation
- Model serving with fallback to simpler models if primary fails
- Human review queue for borderline cases
- Automated model retraining pipeline

## Results

- **$4.5M prevented** in fraudulent transactions (first year)
- **90% detection rate** vs 60% with rule-based system
- **40% reduction** in false positive rate
- **<50ms latency** for 99th percentile scoring time
- **Zero downtime** since launch (18 months)

### Business Impact

- Fraud loss rate reduced from 0.85% to 0.28% of transaction volume
- Customer complaints about false declines down 45%
- Manual review workload reduced by 30%
- Detected 3 major fraud rings that evaded old system

## Screenshots

*Note: Add actual screenshots to `/assets/img/projects/fraud-detection/` folder*

- Real-time monitoring dashboard
- Model performance metrics over time
- Feature importance visualization
- Case review interface for analysts
- Alert notification system

## Lessons Learned

**What worked well:**
- Starting with high-precision model reduced customer disruption during rollout
- Graph features caught organized fraud that individual features missed
- Close collaboration with fraud analysts improved feature engineering

**What I'd do differently:**
- Build adversarial testing framework earlier (fraudsters adapt quickly)
- Invest more in model interpretability for regulatory compliance
- Create better feedback loop from declined transactions

**Technical insights:**
- Class imbalance (0.15% fraud rate) required specialized sampling techniques
- Real-time feature computation was biggest engineering challenge
- Model performance degraded within 2 weeks without retraining
- Ensemble approach more robust than single model to fraud evolution
- Latency requirements ruled out some advanced deep learning approaches
- Monitoring model predictions vs actual fraud crucial for catching drift
