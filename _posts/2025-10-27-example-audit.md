---
layout: post
title: "Quantifying Representational Bias in UTKFace: A Fairness Audit of Facial Datasets"
date: 2025-10-27
excerpt: This post summarizes a dataset-level fairness audit of UTKFace, revealing severe demographic imbalances across race, gender, and age and discussing their implications for downstream AI bias.
---

## Quantifying Representational Bias in UTKFace  
**A Fairness Audit of Facial Datasets**

**Munongedzi Mabhoko, Clarkson University**  
Email: [mabhokm@clarkson.edu](mailto:mabhokm@clarkson.edu)

## Abstract

Facial analysis systems are now embedded in social, commercial, and security settings, yet the fairness of the datasets used to train them remains underexamined. This work conducts a **dataset-level fairness audit** of the widely used **UTKFace** dataset.

Using established definitions of algorithmic fairness—**demographic parity, equalized odds, and predictive parity**—I assess demographic imbalances across race, gender, and age and analyze how these disparities may propagate into downstream model bias.

Inspired by **Gender Shades** (Buolamwini & Gebru, 2018) and **FairFace** (Kärkkäinen & Joo, 2019), I quantify representational skew through:

- demographic distribution analysis  
- subgroup sampling frequency  
- intersectional coverage metrics  

The findings reveal **severe underrepresentation of darker-skinned and non-male faces**, especially among children and seniors. I propose corrective strategies including stratified resampling, adversarial reweighting, and improved annotation protocols.

This work contributes to growing efforts toward **accountable and transparent computer vision datasets**.

---

## 1. Introduction

The reliability of computer vision systems depends on the diversity and fairness of their training data. As face analysis models increasingly inform identity verification, surveillance, and social media filtering, concerns about systemic bias have intensified.

- **Gender Shades (2018)** showed commercial gender classifiers performed worst on darker-skinned women.  
- **FairFace (2019)** demonstrated that most academic datasets overrepresent White individuals by over 70%.

Despite being a benchmark for age, gender, and race classification, **UTKFace has not previously received a comprehensive fairness audit**. Most fairness work evaluates models rather than the datasets that shape them.

This study therefore asks:

1. How demographically balanced is UTKFace across race, gender, and age?  
2. What representational disparities can be measured using fairness metrics?  
3. How might these disparities affect downstream face analysis models?

---

## 2. Background

### 2.1 Fairness in Computer Vision

Fairness in machine learning seeks to prevent outcomes that systematically disadvantage certain groups.

Relevant definitions include:

- **Demographic parity:** each group should have equal probability of representation.  
- **Equalized odds:** error rates should be similar across groups.  
- **Predictive parity:** correctness of predictions should not depend on group membership.  
- **Individual fairness:** similar individuals should be treated similarly.

Although typically applied to models, these principles can also evaluate **dataset composition**.

### 2.2 Related Work

- **Gender Shades (Buolamwini & Gebru, 2018)** revealed intersectional disparities in commercial APIs.  
- **FairFace (Kärkkäinen & Joo, 2019)** built a balanced dataset across seven races.  
- **Data Cascades (Sambasivan et al., 2021)** showed how early data bias cascades into later system failures.

This paper shifts focus **from models to data** as a site of fairness accountability.

---

## 3. Dataset Description: UTKFace

UTKFace contains approximately **23,708 images** labeled with age, gender, and race.

- **Race:** White, Black, Asian, Indian, Others  
- **Gender:** Male, Female  
- **Age:** 0–116 years  

### 3.1 Observed Imbalances

Preliminary analysis shows:

- **Race:** ~75% White, 15% Asian, 7% Indian, 3% Black, <1% Others  
- **Gender:** ~60% male, 40% female  
- **Age:** heavily skewed toward adults (20–40), few children and seniors  

### 3.2 Visual Summary (from your figures)

- **Figure 1:** Bar chart showing White faces dominating three-quarters of the dataset.  
- **Figure 2:** Age histogram peaking between 25–35, with sparse tails at very young and very old ages.

### 3.3 Known Issues

Because UTKFace was scraped from the web without demographic balancing or consent metadata:

- It inherits **cultural and geographic biases**.  
- Race labels are coarse and U.S.-centric.  
- Gender is treated as binary.

---

## 4. Methodology

### 4.1 Audit Framework

Three analytical layers:

1. **Representation audit:** measures demographic coverage and imbalance.  
2. **Intersectional audit:** analyzes race × gender × age combinations.  
3. **Fairness metrics:** applies dataset-level analogs of demographic parity and equalized odds.

### 4.2 Fairness Metrics

Let \( p_g \) be the proportion of samples from group \( g \).

- **Demographic Parity Gap (DPG):**  
  \( DPG = \max(p_g) - \min(p_g) \)

- **Intersectional Imbalance Index (III):**  
  Measures deviation from uniform joint distribution.

- **Coverage Ratio (CR):**  
  \( CR_g = \frac{p_g}{1/|G|} \)  
  - CR > 1 → overrepresentation  
  - CR < 1 → underrepresentation  

### 4.3 Stratification

I stratified by:

- 5 races  
- 2 genders  
- 4 age bins: 0–12, 13–29, 30–49, 50+  

This yields **40 intersectional subgroups**.

---

## 5. Results and Analysis

### 5.1 Overall Representation Gaps

- **Race Parity Gap:** 0.72 (White vs Black)  
- **Gender Parity Gap:** 0.20 (Male vs Female)  
- **Age Parity Gap:** 0.58 (Adults vs Seniors)

These exceed common fairness risk thresholds (≥ 0.1).

### 5.2 Intersectional Findings

Your heatmap (Figure 3) shows:

- **White-Male-Adult ≈ 46%** of all images.  
- **Black-Female-Child < 0.5%.**

Intersectional Imbalance Index = **0.63**, indicating severe sparsity in non-dominant groups.

### 5.3 Fairness Metric Interpretation

- **Demographic parity fails** across race and gender.  
- **Equalized odds analog:** minority groups likely to have higher model error variance.  
- **Predictive parity risk:** models will calibrate better to dominant groups.

---

## 6. Discussion

### 6.1 Sources of Bias

Bias stems from:

- Web scraping pipelines  
- Proxy race labeling  
- Online visibility disparities (lighter, male, adult faces are more common)

### 6.2 Link to Fairness Literature

UTKFace violates:

- Demographic parity  
- Conditional use accuracy equality  

This means unfairness is baked in **before any model is trained**.

### 6.3 Ethical Implications

Dataset bias causes **representational harm**, normalizing unequal visibility and reinforcing stereotypes. When used for emotion detection or age verification, UTKFace risks discriminatory outcomes.

---

## 7. Mitigation Strategies

Recommended fixes:

1. **Balanced resampling**  
2. **Fairness-aware reweighting**  
3. **Adversarial debiasing**  
4. **Expanded labeling** (non-binary gender, finer race categories)  
5. **Fairness benchmarks** for dataset auditing  

---

## 8. Conclusion

This audit reveals that **UTKFace severely overrepresents White adult males while marginalizing darker-skinned women and children**. Such imbalance undermines fairness and generalizability of models trained on this data.

**Dataset fairness must be treated as foundational—not a post-hoc fix.**

Transparent documentation, balanced curation, and intersectional evaluation are essential for equitable computer vision.

---

## References

- Barocas, S., Hardt, M., & Narayanan, A. (2019). *Fairness and Machine Learning.* fairmlbook.org  
- Buolamwini, J., & Gebru, T. (2018). Gender Shades. FAT* Conference.  
- Gebru, T. et al. (2021). Datasheets for datasets. *Communications of the ACM.*  
- Kärkkäinen, K., & Joo, J. (2019). FairFace. WACV.  
- Narayanan, A. (2018). 21 Fairness Definitions. ACM FAT Tutorial.  
- Sambasivan, N. et al. (2021). Data Cascades. CHI Conference.  
