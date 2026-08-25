## Overview
The Letter Archive Information System (*LideArsipan*) is a web-based document archival and management application designed and developed for the Condongcatur Village Government in Sleman, Yogyakarta. The system transitions physical paper-based incoming and outgoing government correspondences into a secured, indexed digital repository.

## Background & Challenges
Prior to this system, village administration staff manually indexed physical mail, leading to several operational bottlenecks:
1. **Slow Document Retrieval:** Locating official letters from previous months or years required physical searching through file cabinets.
2. **Risk of Document Wear & Loss:** Physical paper archives were vulnerable to misplacement and deterioration.
3. **Disorganized Categorization:** Lack of uniform taxonomy across departments made cross-referencing incoming and outgoing letters difficult.

## Architecture & Tech Stack
The application was engineered using an MVC architecture optimized for fast server-side rendering on lightweight local hosting infrastructure:
- **Backend & Routing:** PHP with CodeIgniter 3
- **Frontend UI & Interactivity:** Bootstrap, jQuery, DataTables
- **Database Layer:** MySQL with relational indexing on metadata, timestamps, and classification codes
- **Storage:** Secure file system storage for PDF attachments and scanned document proofs

## Key Features
- **Categorized Inbound & Outbound Tracking:** Granular classification by department, dispatch date, and reference numbers.
- **Fast Full-Text Search & Filtering:** Dynamic client-side and server-side filtering via DataTables for near-instant document lookups.
- **Role-Based Access Control (RBAC):** Distinct permissions separating administrative staff from village leadership.
- **PDF Scanning & Previewing:** In-browser PDF previews to inspect correspondences without external download requirements.
- **Audit Trails & Verification:** Logging timestamped upload actions and disposition progress.

## Outcomes & Key Learnings
Implementing this system significantly reduced document lookup times from minutes to seconds, streamline village governance workflows, and served as our community's foundational collaboration project under Lide Dev.
