## Overview
**SIPUS** (*Sistem Informasi Pasangan Usia Subur*) is a specialized web application engineered for the Bantul Regency Health Services in Yogyakarta. The system is designed to streamline the recording, monitoring, and analytical reporting of fertile-age couples (PUS - Pasangan Usia Subur) and family planning healthcare metrics across regional healthcare clinics (Puskesmas).

## Problem Statement & Needs
Field healthcare workers and regional health administrators previously faced multiple inefficiencies:
- **Disparate Record Keeping:** Health data collected across villages was recorded on disparate paper books and spreadsheets, delaying aggregated statistics.
- **Reporting Delays:** Compiling monthly maternal and child health reports for district health offices took days of manual collation.
- **Inconsistent Patient Histories:** Difficulties tracking patient checkups and contraceptive histories across multiple health clinics.

## Technical Architecture
The application was designed with a decoupled frontend-backend architecture for fast UI rendering and clean separation of concerns:
- **Backend Core:** Laravel (PHP 7.4 / 8.x) RESTful API
- **Frontend Client:** React JS Single Page Application (SPA)
- **Database:** MySQL relational database with normalized schema for clinical records, demographic data, and geographical sub-districts
- **Authentication:** Token-based API authentication (Laravel Sanctum) with role-based authorization for field officers, clinic operators, and regional supervisors

## Backend Engineering Highlights
As the backend engineer on this project, I was responsible for:
1. **RESTful API Architecture:** Designing predictable, resource-oriented endpoints with strict request validation, structured JSON responses, and standardized error codes.
2. **Aggregated Analytics & Reporting Engine:** Writing optimized SQL queries and database views to generate monthly statistical aggregates, demographic pyramids, and regional health coverage percentages on demand.
3. **Data Security & Privacy:** Ensuring confidentiality of sensitive healthcare data through sanitized inputs, hashed credentials, and role-based data isolation.
4. **Excel Export Pipeline:** Generating structured, formatted government standard reports (.xlsx) for administrative reporting requirements.

## Impact & Results
The system cut report generation time down from several days to under 5 seconds, providing healthcare officials with real-time visibility into maternal and child health indicators across Bantul Regency.

