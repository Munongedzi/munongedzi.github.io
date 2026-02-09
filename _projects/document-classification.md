---
layout: project
title: Intelligent Document Classification System
outcome: Automated 90% of manual document routing
tags: [NLP, Deep Learning, Automation]
image: /assets/img/projects/document-classification.jpg
github_url: https://github.com/placeholder/doc-classifier
demo_url: https://demo.placeholder.com
---

## Problem

The operations team manually reviewed and routed 10,000+ documents per month across 45 different categories. This process took 3-4 business days, created bottlenecks, and had 12% error rate in routing, leading to delays and customer frustration.

## Approach

Built a deep learning NLP system that:
- Automatically classified documents into correct categories
- Handled multiple document formats (PDF, images, scanned documents)
- Provided confidence scores to flag uncertain classifications for human review
- Integrated seamlessly with existing document management system

## Tech Stack

- **Languages:** Python, JavaScript
- **ML/NLP:** BERT, Transformers, spaCy, Tesseract OCR
- **Frameworks:** PyTorch, Hugging Face
- **Backend:** FastAPI, Redis
- **Frontend:** React, TypeScript
- **Infrastructure:** Docker, Kubernetes, GCP
- **Storage:** MongoDB, Google Cloud Storage

## What I Built

### Model Architecture

- Fine-tuned BERT model for document classification
- Custom preprocessing pipeline for OCR text cleaning
- Multi-task learning to predict category + subcategory simultaneously
- Ensemble approach combining BERT with traditional ML for robustness

### End-to-End System

1. **Document Ingestion:** Upload interface with drag-and-drop functionality
2. **OCR Pipeline:** Extract text from scanned/image documents
3. **Classification Service:** Real-time API returning predictions + confidence
4. **Human-in-the-Loop:** Queue for low-confidence predictions requiring review
5. **Analytics Dashboard:** Performance monitoring and classification trends

### Production Features

- Handles 15+ document formats
- Sub-second prediction time for most documents
- Active learning to continuously improve from human corrections
- Audit trail for compliance and quality control

## Results

- **90% automation rate** (documents routed without human review)
- **Processing time reduced** from 3-4 days to <1 hour
- **96% accuracy** on validation set, 94% in production
- **2 FTE saved** through automation (redeployed to higher-value work)
- **8% reduction** in customer complaints related to document handling

### Impact Metrics

- 9,000 documents automated per month
- $180K annual cost savings
- Customer satisfaction score improved from 3.2 to 4.5/5
- System uptime: 99.8%

## Screenshots

*Note: Add actual screenshots to `/assets/img/projects/document-classification/` folder*

- Upload interface with real-time classification
- Admin dashboard showing classification accuracy trends
- Confidence score distribution visualization
- Human review queue interface
- Performance comparison before/after automation

## Lessons Learned

**What worked well:**
- Starting with high-confidence threshold (95%) built trust before lowering it
- Active learning from corrections improved model faster than collecting new labels
- Clear confidence scoring helped operators trust the system

**What I'd do differently:**
- Build synthetic data augmentation earlier to handle edge cases
- Create better feedback mechanisms for operators to report errors
- Implement A/B testing framework to measure different model versions

**Technical insights:**
- Transfer learning with domain-specific fine-tuning was key to success
- OCR quality had bigger impact than model architecture for scanned docs
- Multi-task learning improved performance vs single-task approach
- Monitoring data drift was essential (document types evolved over time)
- Balancing precision vs recall required business stakeholder input
