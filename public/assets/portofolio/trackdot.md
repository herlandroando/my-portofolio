## Overview
**TrackDot** is a lightweight, local-first Windows system tray utility engineered in **C# and .NET 8 (WPF)**. It provides frictionless global media playback control, real-time time-synced lyrics with Japanese Furigana/Romaji annotations, a transparent floating karaoke HUD overlay, dynamic album art ambient glow, and privacy-conscious Discord Rich Presence (RPC).

![TrackDot Popover Showcase](/images/trackdot-main.png)
*Picture 1 - The floating tray popover with dynamic album glow, track details, timeline scrubbing, and transport controls*

## The Story Behind It
Why build this? Simple: sheer workflow friction.

When developing across multiple operating systems, environments like macOS and Linux make global background media controls effortless. On Windows, however, switching tracks or inspecting current playback without dedicated multimedia keyboard keys often interrupts focus by requiring alt-tabbing or opening full browser/app windows.

I wanted a fast, zero-clutter solution that lives quietly in the Windows system tray and gives instant playback controls and synchronized lyrics whenever needed. This sparked the creation of TrackDot under **Cara-Instan**—turning daily workflow friction into a polished, self-contained desktop tool.

## Core Capabilities & Features

### 1. Windows System Media Transport Controls (SMTC) Integration
TrackDot hooks directly into Windows' native SMTC layer. It automatically tracks playback sessions from any SMTC-compliant media player—including **Spotify, Google Chrome, Microsoft Edge, Apple Music, Tidal, VLC, and Windows Media Player**.
- Real-time track metadata (Title, Artist, Album).
- High-resolution album artwork extraction.
- Playback timeline progress & scrubbing.
- Per-source volume controls and mute toggles.

### 2. Time-Synced Lyrics & Floating Karaoke HUD Overlay
TrackDot features a dedicated synced lyrics engine that queries **Unison** with automatic fallback to **LRCLIB**:
- **Japanese Romaji & Furigana:** Japanese tracks automatically render ruby furigana and romaji readings above kanji and kana characters.
- **Floating HUD (Karaoke Mode):** A transparent, resizable overlay that stays pinned above full-screen applications, editors, and games with click-through locking (`Lock HUD`).
- **Timing Calibration:** Fine-tune lyric offsets on the fly with ±0.5s controls or drag-and-drop local `.lrc` / `.ttml` files.

![TrackDot Lyrics Window](/images/trackdot-lyrics.png)
*Picture 2 - Time-synced lyrics window with Japanese ruby Furigana and Romaji support*

### 3. Dynamic Ambient Glow & Album Art Tinting
- Automatically extracts dominant color palettes from the current song's album art.
- Renders an ambient soft glow behind the popover and lyrics HUD.
- Subtly tints buttons, badges, and volume sliders to harmonize with the current song's aesthetic.

### 4. Discord Rich Presence (RPC) via Local IPC
- Broadcasts current playback directly to Discord through local Windows Named Pipes (`\\.\pipe\discord-ipc-0`) without requiring Discord bots, personal tokens, or external authentication.
- Resolves high-resolution album artwork automatically via iTunes Search API and Deezer fallback.
- **Privacy First:** Newly detected media sources are disabled by default until explicitly enabled in the Allowed Applications whitelist.

### 5. Customizable Global Hotkeys
- Built-in interactive shortcut recorder to rebind system-wide and local popover shortcuts for play/pause, next/previous track, volume adjustment, and lyrics toggle.

![TrackDot Shortcuts](/images/trackdot-shortcuts.png)
*Picture 3 - Customizable system-wide keyboard shortcuts window*

## Architecture & Tech Stack

```
+-------------------------------------------------------------------+
|                           TrackDot UI                             |
|  [Tray Popover]  [Synced Lyrics Window]  [Floating Karaoke HUD]   |
+---------------------------------+---------------------------------+
                                  |
            +---------------------+---------------------+
            |                                           |
+-----------v-----------+                   +-----------v-----------+
|  Windows SMTC Engine  |                   |   Lyrics & Metadata   |
|  - Global Sessions    |                   |   - Unison / LRCLIB   |
|  - Transport Controls |                   |   - Furigana / Romaji |
|  - Volume & Scrubbing |                   |   - Color Palette Gen |
+-----------+-----------+                   +-----------------------+
            |
+-----------v-----------+
|   Discord IPC Engine  |
|  - Local Named Pipes  |
|  - Source Whitelist   |
+-----------------------+
```

- **Language & Runtime:** C# / .NET 8 (Desktop Runtime)
- **UI Framework:** Windows Presentation Foundation (WPF) with custom XAML shaders and transparent acrylic styling
- **Media API:** Windows Runtime (WinRT) `Windows.Media.Control.GlobalSystemMediaTransportControlsSessionManager`
- **IPC Protocol:** Named Pipes (`\\.\pipe\discord-ipc-0`)
- **Storage:** Local Windows Registry (`HKCU\Software\TrackDot`) with zero-install Portable mode (`portable.dat` & `settings.json`)

## Privacy & Local-First Architecture
TrackDot was engineered around a strict local-first philosophy with zero user accounts, zero telemetry SDKs, and zero background analytics:
- Settings remain strictly on the user's machine.
- Discord RPC communicates purely through local named pipes.
- Network requests are strictly on-demand (fetching lyrics only when the lyrics window is opened, and artwork lookup only when Discord RPC is active).

## Outcomes & Distribution
TrackDot is distributed as both a standard Windows installer (`TrackDot-Setup-*.exe`) and a self-contained portable ZIP package (`TrackDot-*-Portable.zip`). It has become my primary daily music tracker and stands as a complete demonstration of native Windows systems engineering and practical utility design.
