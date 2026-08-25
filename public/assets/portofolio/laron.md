## Overview
**Laron** is an integrated e-commerce and marketplace ecosystem built for **BUMDESA** (Badan Usaha Milik Desa / Village-Owned Enterprises) in the Yogyakarta region, initiated by the **Institute for Research and Empowerment (IRE)**. The platform digitizes local village products, handicrafts, and agricultural goods, empowering rural micro-enterprises to reach broader consumer markets.

## Multi-Platform Ecosystem
The system comprises three primary layers:
1. **Consumer Mobile Application (Android / Kotlin):** Fast, intuitive mobile storefront for browsing catalogues, managing carts, placing orders, and tracking shipments.
2. **Central Administration Portal (React JS):** Rich management dashboard for village operators to curate merchants, inspect inventory levels, verify transactions, and view sales metrics.
3. **Core Backend & REST API (Laravel / MySQL):** The centralized brain handling business logic, authentication, transactions, and notification dispatching.

## Backend Architecture & Key Responsibilities
As the backend developer and API architect, I designed and implemented:
- **Scalable RESTful API Design:** Serving dual clients (Web Admin and Android Mobile) with uniform pagination, resource transformers, and versioned routes.
- **Cart & Order Processing Engine:** Handling multi-merchant checkouts, calculating product weights and shipping tariffs across geographic zones.
- **Inventory Concurrency & Locking:** Preventing overselling of limited artisanal inventory through atomic database transactions and state validations.
- **Role-Based Access & Authentication:** Securing API endpoints with Laravel Sanctum tokens and implementing tiered permission policies for superadmins, village admins, and merchants.

## Challenges & Engineering Solutions
- **Dual Client Sync:** Maintained consistent API contracts and validation error payloads to ensure both the React web dashboard and the Kotlin Android app reacted predictably.
- **Database Indexing for Product Search:** Optimized MySQL fulltext indexes and compound indices for fast multi-attribute filtering (category, price range, village region, rating).

## Project Outcomes
Laron successfully provided an accessible digital sales channel for local village enterprises, establishing a reliable multi-tenant framework that was later leveraged and expanded into subsequent BUMDESA initiatives.

