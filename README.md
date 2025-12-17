# 🏥 Pharmacy Inventory Management System

> **Professional CLI-based inventory management system designed to demonstrate strong Object-Oriented Programming principles, domain modeling, and clean architectural separation.**

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![OOP](https://img.shields.io/badge/Paradigm-OOP-important)
![CLI](https://img.shields.io/badge/Interface-CLI-lightgrey)

---

## 📌 Executive Summary

This project is a **Pharmacy Inventory Management System** implemented as a **Command-Line Interface (CLI)** application using **TypeScript and Node.js**. It was designed with a strong focus on **Object-Oriented Design**, **domain-driven thinking**, and **clear separation of responsibilities**, simulating real-world constraints found in regulated environments such as healthcare and pharmaceuticals.

The system manages different categories of medicines while enforcing domain-specific rules, making it a solid demonstration of **software design fundamentals** expected from professional-level engineers.

---

## 🎯 Project Purpose

This project was built to:

- Demonstrate **clean and maintainable Object-Oriented code**
- Model a **realistic business domain** (pharmacy inventory)
- Apply **inheritance, polymorphism, and encapsulation** correctly
- Showcase separation between **domain, persistence, and control layers**
- Serve as a foundation that could be evolved into a REST API, microservice, or full-stack system

It is intentionally implemented as a CLI to emphasize **logic, architecture, and domain modeling over frameworks**.

---

## 🧠 Business Context

Pharmacy systems operate under strict regulatory constraints. Certain categories of medicines (e.g. antibiotics, psychotropics) require special handling, validation, and control.

This system reflects that reality by:

- Differentiating medicine types through **explicit domain models**
- Encapsulating business rules within specialized classes
- Avoiding an anemic domain model

---

## 🏗️ Architecture Overview

The application follows a **layered architecture**, clearly separating responsibilities:

```
┌────────────────────┐
│   CLI Interface    │
└─────────┬──────────┘
          │
┌─────────▼──────────┐
│    Controllers     │  → Orchestrate user actions
└─────────┬──────────┘
          │
┌─────────▼──────────┐
│  Domain Models     │  → Business rules & entities
└─────────┬──────────┘
          │
┌─────────▼──────────┐
│  Repositories      │  → Data storage abstraction
└────────────────────┘
```

### Key Architectural Characteristics

- Clear separation of concerns
- Domain-centric design
- No tight coupling between layers
- Easy to refactor or extend

---

## 🧬 Domain Model & OOP Design

### Class Hierarchy

```
Medicine (Base Class)
├── Antibiotic
└── Psychotropic
```

### Design Principles Applied

- **Encapsulation**: Business rules are embedded within domain entities
- **Inheritance**: Specialized medicine types extend a common base
- **Polymorphism**: Controllers operate on abstractions, not concrete implementations
- **Single Responsibility Principle**: Each class has a well-defined purpose

This structure reflects patterns commonly used in enterprise systems handling regulated data.

---

## ✨ Core Features

- Add medicines to inventory
- List all registered medicines
- Remove medicines by identifier
- Support for multiple medicine categories
- Validation rules per medicine type
- In-memory persistence via repository pattern

---

## 📁 Project Structure

```
src/
├── controller/       # Application flow & orchestration
├── model/            # Domain entities and inheritance hierarchy
├── repository/       # Persistence abstraction
├── utils/            # Helper utilities
└── index.ts          # Application entry point
```

This structure mirrors patterns commonly found in backend services and enterprise applications.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run start
```

The system will launch an interactive CLI menu allowing you to manage the pharmacy inventory.

---

## 🛠️ Technical Decisions

- **TypeScript** was chosen to enforce type safety and clarity
- **CLI interface** keeps focus on business logic and architecture
- **In-memory repository** simplifies setup while preserving abstraction
- **No external frameworks** to highlight core engineering skills

These decisions align with interview-style coding challenges and technical assessments used by international companies.

---

## 🔄 Extensibility & Future Improvements

This project was intentionally designed to be extended. Possible next steps include:

- Persist data using PostgreSQL or MongoDB
- Expose functionality via REST or GraphQL API
- Introduce automated tests (Jest)
- Add authentication & authorization
- Implement logging and error handling layers
- Containerize with Docker
- Add CI pipelines

---

## 👤 Author

**Raylander Ribeiro**  
Software Engineer

- Focus: Backend / Software Architecture
- Interests: Scalable systems, clean code, domain modeling

---

## 📄 License

This project is licensed under the MIT License.

---

> 💡 **Recruiter Note**: This project emphasizes software engineering fundamentals, architectural reasoning, and domain modeling — skills that scale across languages, frameworks, and platforms.
