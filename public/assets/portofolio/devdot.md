## Overview

**DevDot** is an instant, privacy-first, zero-telemetry universal developer toolkit engineered with **Tauri v2 (Rust)**, **Vue 3**, **Vite**, **TypeScript**, and **CodeMirror 6**. Designed as a daily Swiss-army knife for modern software engineers, DevDot replaces fragmented, ad-ridden, and privacy-invasive online web converters with a unified, air-gapped suite that runs 100% in local memory.

![DevDot Workspace Showcase](/images/devdot-main.png)
*Picture 1 - DevDot modular dashboard showing developer toolkit overview, pinned favorite tools, category filtering, and 100% offline air-gapped status*

> 🚀 **Part of the [Cara Instan](https://github.com/Cara-Instan) Ecosystem:** DevDot is dedicated to delivering zero-friction, reliable, and instant engineering solutions.

---

## 💡 The Motivation: Why DevDot?

Have you ever:
- Pasted a **production JSON payload** with customer data into an unverified online formatter?
- Checked a **bcrypt password hash**, **JWT auth token**, or **private API key** on a random website?
- Jumped between 10 different browser tabs just to convert cURL to Python, encode Base64, generate UUIDs, and compare diffs?

### 🛑 The Problem with Online Web Utilities
1. **Data Leak Risks**: Sensitive customer payloads, secrets, and authorization tokens get transmitted to third-party servers where they can be cached, scraped, or logged.
2. **Workflow Fragmentation**: Developers waste time juggling dozens of disparate web utilities cluttering browser tabs.
3. **Network Dependence**: Online utilities fail completely when offline or behind strict enterprise air-gapped firewalls.

### ✨ The DevDot Solution
DevDot packages all daily engineering utilities into a **single, unified, privacy-guaranteed application**. Payloads never leave your machine—everything executes **100% client-side in local memory**.

---

## 🌐 Current Deployment & Optimization Status

> [!NOTE]
> **Active Web Deployment:**
> While native desktop binary compilation and packaging with **Tauri v2** are actively undergoing performance tuning and optimization, DevDot is deployed live on the web at **[dev-dot.herlandro.my.id](https://dev-dot.herlandro.my.id)**. This allows myself, teammates, and peers to immediately use the full suite daily as an instant, air-gapped Progressive Web App (PWA) with client-side caching.

---

## 🛠️ Core Capabilities & Tool Suites

```
DevDot Toolkit
├── 📄 JSON Suite
│   ├── JSON Prettify & Minify (with auto-repair)
│   ├── JSON Schema to Types (TypeScript / Go / Rust)
│   └── JSON Visual Diff (Side-by-side & Unified)
├── 🔐 Crypto & Tokens
│   ├── Offline JWT Debugger (HMAC verify & claims inspector)
│   ├── Hash & ID Generator (MD5, SHA, UUID, ULID, NanoID)
│   └── Encoder / Decoder (Base64, URL, Hex, HTML Entities)
├── 🔄 Converters & Transpilers
│   ├── cURL Converter (to Fetch, Axios, Python, Go)
│   └── Multi-Format Transpiler (JSON ⇄ YAML ⇄ TOML ⇄ CSV)
└── 🛡️ Text & Security
    └── PII Log Redactor & Sanitizer (mask sensitive credentials)
```

### 1. 📄 JSON Suite
- **Prettify & Minify**: Indentation customization (2 spaces, 4 spaces, tabs), single-line minification, key sorting, and **automatic syntax repair** for trailing commas, unquoted keys, and single-quote strings.
- **Schema & Type Generator**: Converts arbitrary JSON structures directly into production-ready type definitions:
  - **TypeScript:** Interfaces and type aliases.
  - **Go:** `struct` definitions with accurate `json:""` struct tags.
  - **Rust:** Idiomatic structs with `serde` (`Serialize`, `Deserialize`) derive macros.
- **Visual JSON Diff**: Inspect differences between two JSON structures side-by-side or unified with syntax highlighting.

### 2. 🔐 Crypto & Tokens
- **Offline JWT Debugger**: Decode and inspect JWT headers and payload claims locally. Includes an active expiration countdown timer and local HMAC SHA-256 signature verification without external network calls.
- **Hash & Unique ID Generator**:
  - Cryptographic Hashes: `MD5`, `SHA-1`, `SHA-256`, `SHA-512`.
  - Collision-Resistant IDs: `UUIDv4`, `ULID`, `NanoID`.
- **Universal Encoder / Decoder**: Bi-directional conversions for Base64 (raw text and Data URI), URL Percent-encoding, Hexadecimal, and HTML entities.

### 3. 🔄 Converters & Transpilers
- **cURL Converter**: Parses terminal cURL snippets and converts them into production client code:
  - JavaScript `fetch()` & `axios`
  - Python `requests`
  - Go `net/http`
- **Multi-Format Transpiler**: Seamless bi-directional conversions between `JSON`, `YAML`, `TOML`, and `CSV` with schema syntax validation.

### 4. 🛡️ Text & Security
- **PII Log Redactor & Sanitizer**: Scans log files and payloads to automatically detect and mask sensitive data, including:
  - Emails and Credit Card Numbers
  - IPv4 and IPv6 Addresses
  - Bearer tokens, private API keys, and passwords

---

## ⚡ Architecture & Key Highlights

```
+------------------------------------------------------------------+
|                    DevDot Frontend (Vue 3 + Vite)               |
|   [Command Palette (Ctrl+K)]   [Split-Pane CodeMirror 6]         |
+--------------------------------+---------------------------------+
                                 |
           +---------------------+---------------------+
           |                                           |
+----------v-----------+                   +-----------v-----------+
|  Tauri v2 (Rust Core)|                   |   Web Engine (PWA)    |
|  - Native Shell      |                   |   - Workbox Caching   |
|  - Fast IPC          |                   |   - Air-Gapped Sandbox|
|  - Low RAM footprint |                   |   - Zero Outbound Net |
+----------------------+                   +-----------------------+
```

- **Zero-Sidebar Full-Width Workspace**: Maximizes screen real estate for code inspection via full-viewport split panes, inline toolbars, and on-demand flyouts.
- **Command Palette (`Ctrl + K`)**: Instant keyboard-driven navigation across all tools with fuzzy search.
- **State Snapshots (`.toolkit`)**: Export and restore entire workspace states safely without cloud synchronization.
- **Panic Clear**: Flush all cached local storage and clipboard history instantly with a single action.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + K` / `Cmd + K` | Open Quick Command Palette |
| `Ctrl + /` / `Cmd + /` | Toggle Navigation Drawer Flyout |
| `Ctrl + Shift + S` | Open Snapshot Backup Dialog |
| `Escape` | Close active modal / flyout / dialog |

---

## 🔒 Privacy Guarantee

```
                    ┌────────────────────────────┐
                    │      Your Workstation      │
                    │                            │
  [ Sensitive Data ] ──▶ [ DevDot Local Memory ] │
                    │        (Air-Gapped)        │
                    └─────────────┬──────────────┘
                                  │
                                  ▼
                         [ Output Result ]
                      (Zero Outbound Traffic)
```

1. **Zero External API Calls**: DevDot initiates zero network calls to external servers.
2. **Zero Telemetry / Analytics**: No tracking pixels, Google Analytics, Sentry, or session recording scripts.
3. **Local Storage Control**: All preferences and tool order states remain strictly inside your browser/desktop `localStorage`.
4. **Panic Button**: Instantly wipe all local storage and clipboard states with one click in Settings.
