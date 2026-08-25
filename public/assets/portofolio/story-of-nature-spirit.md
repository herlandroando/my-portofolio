## Overview
**Story of Nature Spirit** is a story-driven 2D Action RPG built using the open-source **Godot Engine** and **GDScript**. The game follows **Raka**, an elemental nature fairy created from the essence of life, on a quest to restore equilibrium between the realms of light and darkness after a corruptive dark entity named Radish threatens the fairy homeland.

## Game Concept & World Design
The core concept blends fast-paced top-down exploration with real-time spell-casting mechanics:
- **Elemental Affinity System:** Players manipulate elemental magic (Earth, Wind, Water, Fire) to solve environmental puzzles and exploit enemy weaknesses.
- **Narrative-Driven Progression:** Interactive dialogues, rich world lore, and moral choices that impact light-dark balance meters throughout the journey.
- **Dynamic Dungeon Challenges:** Procedural rooms paired with handcrafted boss encounter phases.

## Technical Architecture & Implementation
- **Game Engine:** Godot Engine 3.x
- **Scripting Language:** GDScript (Object-oriented node scripting)
- **State Machine Pattern:** Finite State Machines (FSM) implemented in GDScript to govern player states (Idle, Walk, Attack, Dash, Cast, Hurt, Dead) and enemy AI behavior.
- **Tilemap & Collision System:** 2D Tilemap layers with autotiling collision hulls and Y-sort ordering for natural depth perception.
- **Audio & Particle FX:** Custom particle generators for elemental burst effects and adaptive spatial audio transitions.

## Key Features
- **Real-Time Combat & Ability Combos:** Dynamic cooldowns and combo sequences for high-engagement combat encounters.
- **Interactive NPC Dialogue System:** Branching dialogue trees with typewriter text effects and sound cue feedback.
- **Inventory & Item Crafting:** Gathering herbs and elemental cores across levels to concoct power potions and upgrade fairy wings.
- **Optimized 2D Performance:** Lightweight physics processing and sprite batching maintaining 60 FPS smoothly on standard hardware.

## AMICTA 2020 & Takeaways
Developed for the **AMICTA 2020** annual competition at Universitas Amikom Yogyakarta, this project cemented our mastery of modular game architecture, asset pipelines, node lifecycle management in Godot, and intuitive game balance mechanics.

