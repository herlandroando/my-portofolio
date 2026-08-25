## Overview
**IRE Yogyakarta** (*Institute for Research and Empowerment*) is a prominent non-governmental research and advocacy organization focused on village democratization, public policy, and community development. We designed and engineered their official organizational portal and bespoke Content Management System (CMS) to publish academic publications, research journals, event schedules, and news updates.

## Architectural Approach
To balance public page load speed with editorial convenience for non-technical research staff, the solution was split into two dedicated tiers:
- **Public Portal:** High-performance responsive frontend built with React JS and optimized server endpoints for instant rendering, mobile readability, and search engine discoverability (SEO).
- **Custom Admin CMS:** Dynamic, reactive administrative back-office powered by **Laravel + Livewire**, allowing editorial teams to publish articles, upload PDF research whitepapers, manage multimedia galleries, and moderate public feedback.

## Key Features & Implementations
- **Rich Text & Publication Engine:** Custom WYSIWYG editor integration with support for embedded citations, document downloads, and bilingual (Indonesian & English) metadata.
- **Categorized Document Archive:** Downloadable research reports with PDF indexing, category taxonomy, and download metrics tracking.
- **Media Asset Manager:** Centralized image repository with automatic image optimization, thumbnail generation, and WebP conversion.
- **Role-Based Editorial Workflow:** Multi-tier permission schema dividing contributors, copy editors, and publishing administrators.

## Results & Production Impact
The custom platform replaced an outdated legacy setup, cutting page load times significantly and empowering IRE's research staff to independently publish over hundreds of policy briefs and project milestones.

