---
layout: project
title: Customer Churn Prediction System
outcome: Improved retention by 25% through early intervention
tags: [Machine Learning, Analytics, Business Impact]
image: /assets/img/projects/churn-prediction.jpg
github_url: 
demo_url: 
---

## Problem

The company was losing 15% of customers annually, but had no systematic way to identify at-risk customers before they churned. Marketing teams were running generic retention campaigns with poor ROI and limited effectiveness.

## Approach

Built an end-to-end ML system that:
- Predicted customer churn probability 90 days in advance
- Identified key drivers of churn for different customer segments
- Integrated predictions into CRM for targeted interventions
- Enabled A/B testing of retention strategies

## Tech Stack

- **Languages:** Python, SQL
- **ML Libraries:** XGBoost, LightGBM, Scikit-learn
- **Data Platform:** Snowflake, dbt
- **Deployment:** AWS SageMaker, Lambda
- **Visualization:** Tableau, Plotly
- **Experimentation:** Optimizely

## What I Built

### Model Development

Developed ensemble model combining:
- Gradient boosted trees for tabular features
- Time-series analysis for engagement patterns
- Survival analysis for time-to-churn estimation

### Feature Engineering

Created 150+ features across categories:
- Engagement metrics (login frequency, feature usage)
- Transaction patterns (purchase history, payment issues)
- Support interactions (ticket volume, sentiment)
- Demographic and firmographic attributes

### Production System

- Real-time scoring API serving 500K customers daily
- Batch prediction pipeline for weekly model updates
- Feature store ensuring consistency between training and inference
- A/B testing framework to measure intervention effectiveness

## Results

- **25% improvement** in customer retention rate
- **$2.3M annual revenue** saved through reduced churn
- **83% precision** at identifying high-risk customers
- **60% reduction** in retention campaign costs through targeting
- Model became core input for customer success workflows

### Business Impact Breakdown

- High-risk segment: 1,200 customers saved annually
- Medium-risk interventions: 40% conversion to stable customers
- Campaign efficiency: 3x ROI compared to previous approach

## Screenshots

*Note: Add actual screenshots to `/assets/img/projects/churn-prediction/` folder*

- Model performance metrics dashboard
- Feature importance visualization
- CRM integration showing churn scores
- A/B test results comparing intervention strategies

## Lessons Learned

**What worked well:**
- Close collaboration with customer success team shaped practical features
- Starting with interpretable models built stakeholder trust
- Gradual rollout allowed us to validate predictions before full deployment

**What I'd do differently:**
- Invest in better data quality earlier (garbage in, garbage out)
- Build counterfactual evaluation framework from day one
- Create more granular customer segments for personalized interventions

**Technical insights:**
- Class imbalance required careful sampling strategies
- Temporal validation was crucial (random splits gave inflated metrics)
- Explainability features (SHAP values) drove business user adoption
- Regular retraining (monthly) was essential due to shifting patterns
