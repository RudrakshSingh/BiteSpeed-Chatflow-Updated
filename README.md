## Overview

**This Assingment focus on chatflow application development for Bitespeed.**

This project focuses on creating a simple and versatile Chatbot Flow Builder using React. The Chatbot Flow Builder empowers users to design chatbot flows by connecting multiple messages together to determine their order of execution.

Website is hosted at ()

## Features

- **The features of the Application are as per the requirments in the notion file**

## Prerequisites

1. Node.js and npm installed on your machine.
2. Basic understanding of React.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Add a Message Node:** Drag and drop the Message Node from sidebar, to create a new message node.
- **Edit Message:** Click on a message node to edit its content.
- **Connect Messages:** Drag from the connector point on one message to another to create a link. (Source -> Target)
- **Save Flow:** Once your flow is complete, click on the "Save" button to save your flow configuration.

![]()

## Extensibility

The project is designed with extensibility in mind. Here are a few ways you can extend the functionality:

New Node Types: Add different types of nodes (e.g., decision nodes, image nodes, file nodes, etc.). This can be achieved by creating a new component in the components/nodes folder.

Create Custom Editors: Incorporate custom image editors, file inputs, etc. This can be done by developing a new component in the components/editors folder.

## Refrences

- [React Flow Documentation](https://reactflow.dev/docs)
- [Notion Page](https://bitespeed.notion.site/BiteSpeed-Frontend-Task-Chatbot-flow-builder-fb0feb3498294929a9b7171bcb4e8a8b)
