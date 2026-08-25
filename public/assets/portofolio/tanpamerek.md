## Overview
**Tanpamerek** is an on-demand digital asset download platform designed to streamline micro-licensing and instant file retrieval for digital creatives, designers, and agencies. The system interfaces with major premium asset marketplaces, enabling registered users to purchase flexible credit packs and download stock photos, vector graphics, and 3D templates on demand.

## Architecture & System Design
The platform was architected around a resilient asynchronous job queue model:
- **Backend Framework:** Laravel (PHP 8.x)
- **Database:** MySQL relational schema with transactional ledger for user credit balance
- **Payment Processing:** Integrated Payment Gateway for automated top-up invoices via QRIS, Virtual Accounts, and E-Wallets
- **Queue Workers & Background Jobs:** Redis + Laravel Queue system for fetching, processing, and generating signed temporary download links

## Engineering Highlights & Technical Challenges
1. **Financial Ledger & Credit Deductions:** Designed an append-only transaction ledger with strict database locks to prevent race conditions during concurrent download requests.
2. **Third-Party API Integration & Link Signing:** Built backend scrapers/connectors communicating with upstream provider APIs, automatically verifying user credit balance before issuing time-expiring signed download URLs.
3. **Automated Webhook Reconciliation:** Handled high-speed payment gateway callbacks with idempotent signature checking, ensuring instant credit top-up for active users.
4. **Rate Limiting & Abuse Prevention:** Implemented IP and account-level throttling to protect against automated scraping and bot activity.

## Outcomes
Tanpamerek delivered a seamless, sub-second checkout-to-download pipeline, providing creators with an affordable and frictionless alternative to costly annual enterprise asset subscriptions.

