# 🏥 Pharmacy Inventory Management System

> **Professional CLI-based pharmacy inventory system designed to demonstrate strong Object-Oriented Programming, domain modeling, and clean layered architecture within a regulated business context.**

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![OOP](https://img.shields.io/badge/Paradigm-Object--Oriented-important)
![CLI](https://img.shields.io/badge/Interface-CLI-lightgrey)

---

## 📌 Executive Summary

This project is a **Pharmacy Inventory Management System** implemented as a **Command-Line Interface (CLI)** application using **TypeScript**. It models a realistic pharmaceutical domain, handling different categories of medicines while enforcing domain-specific rules through a clean **Object-Oriented design**.

The system was intentionally designed to focus on **software architecture, domain modeling, and separation of concerns**, simulating challenges commonly found in **healthcare, pharmaceutical, and regulated enterprise environments**.

---

## 🎯 Project Purpose

This project was built to:

- Demonstrate strong **Object-Oriented Programming (OOP)** fundamentals
- Model a **regulated pharmacy domain** with explicit business rules
- Apply a **layered architecture** with clear responsibilities
- Use inheritance and polymorphism to represent medicine categories
- Serve as a solid foundation for future enterprise-grade evolution

The CLI interface was deliberately chosen to prioritize **logic, structure, and domain correctness** over UI concerns.

---

## 🧠 Business Context

Pharmacy and pharmaceutical systems operate under strict regulatory constraints. Certain medicines require differentiated handling, classification, and control due to legal and medical requirements.

This system reflects that reality by:

- Explicitly modeling **different types of medicines**
- Encapsulating validation rules within domain entities
- Avoiding procedural or anemic domain models

---

## 🏗️ Architecture Overview

The application follows a **classic layered architecture**, commonly used in enterprise and regulated systems:

```
┌────────────────────┐
│   CLI Interface    │
└─────────┬──────────┘
          │
┌─────────▼──────────┐
│   Controller       │  → Orchestrates user actions and workflows
└─────────┬──────────┘
          │
┌─────────▼──────────┐
│   Domain Model     │  → Business rules and entities
└─────────┬──────────┘
          │
┌─────────▼──────────┐
│   Repository       │  → Persistence abstraction (in-memory)
└────────────────────┘
```

### Architectural Characteristics

- Clear separation of concerns
- Domain-centric design
- Low coupling between layers
- High extensibility

---

## 🧬 Domain Model & Object-Oriented Design

### Class Hierarchy

```
Medicine (Base Class)
├── Antibiotic
└── Psychotropic
```

### Design Principles Applied

- **Encapsulation**: Validation and state changes live inside domain entities
- **Inheritance**: Specialized medicines extend a common base class
- **Polymorphism**: Controllers operate on abstractions, not concrete types
- **Single Responsibility Principle**: Each class has one well-defined role

This structure mirrors patterns commonly found in **healthcare and pharmaceutical software systems**.

---

## ✨ Core Features

- Register medicines in inventory
- Support for multiple medicine categories
  - Antibiotics
  - Psychotropic drugs
- List all registered medicines
- Remove medicines by identifier
- Domain-level validation per medicine type
- In-memory persistence via repository pattern

---

## 📁 Project Structure (Detailed)

The structure below reflects the **actual layout of the project**, with each file playing a specific architectural role:

```
src/
├── model/
│   ├── Medicine.ts              # Base domain entity
│   ├── Antibiotic.ts            # Specialized medicine with specific rules
│   └── Psychotropic.ts          # Specialized medicine with specific rules
│
├── controller/
│   └── MedicineController.ts    # Orchestrates CLI commands and use cases
│
├── repository/
│   └── MedicineRepository.ts    # In-memory persistence abstraction
│
├── util/
│   └── Colors.ts                # CLI output formatting utilities
│
└── index.ts                     # Application entry point and menu loop
```

### Structural Rationale

- **model/**
  - Represents the pharmacy domain
  - Encapsulates classification and validation rules
  - Avoids anemic domain models

- **controller/**
  - Coordinates user input with domain operations
  - Contains orchestration logic only

- **repository/**
  - Abstracts data persistence
  - Enables future migration to databases or external services

- **util/**
  - Centralizes cross-cutting CLI concerns

- **index.ts**
  - Serves as the composition root
  - Wires together controllers, repositories, and the CLI flow

This organization closely resembles patterns used in **enterprise healthcare systems**.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run start
```

The application will launch an interactive CLI menu for managing the pharmacy inventory.

---

## 🛠️ Technical Decisions

- **TypeScript** ensures type safety and maintainability
- **CLI interface** emphasizes business logic over presentation
- **Repository pattern** decouples persistence from domain logic
- **Minimal dependencies** highlight core engineering skills

These decisions align with technical evaluations used by **international consultancies and enterprise companies**.

---

## 🔄 Extensibility & Future Improvements

This project was intentionally designed to be extensible. Potential improvements include:

- Persistent storage (SQL / NoSQL)
- REST or GraphQL API exposure
- Automated tests (unit and integration)
- Authentication and authorization layers
- Logging and audit trails
- Dockerization and CI/CD pipelines

---

## 👤 Author

**Raylander Ribeiro**  
Software Engineer

- Focus: Backend Development & Software Architecture
- Interests: Healthcare systems, clean code, domain-driven design

---

## 📄 License

This project is licensed under the MIT License.

---

> 💡 **Recruiter Note**: This project demonstrates strong architectural thinking, domain modeling, and Object-Oriented design within a regulated business context — skills directly applicable to enterprise and healthcare software systems.
