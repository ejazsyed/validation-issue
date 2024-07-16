<h1 align="center">refapp-bot 🤖</h1>
<h2 align="center">Track :octocat: Validation Issue</h2>




```mermaid
   mindmap
  root((SAP BTP Guide))
    Tools and System
      SAP Business Application Studio
      SAP S/4HANA Cloud
      SAP BTP Account
    Develop Full Stack CAP Application 
      Add Custom Logic
      Add Fiori Elements
      Use a Local Launch Page
      Add Authorization
      Prepare for Production
        Deploy to SAP BTP,CF
          Integrate to SAP Build Workzone
            Integrate SAP Mobile Start
    Inplement Remote Connectivity
      Extend Incident Management
        Test with Mock Data locally
        Prepare for Production
          Deploy to SAP BTP, CF
            Run with S/4HANA Backend 
    Day 2 Operation
      Observability
        SAP Cloud Logging Service
          Access Logs
          Metrics
          Traces


```


```mermaid
journey
    SAP BTP Developer Guide
    section Develop Full Stack CAP Application
      Develop CAP+Fiori: 5: Me
      Prepare for Production: 3: Me
      Deploy to SAP BTP,CF: 1: Me, Cat
    section Implement Remote Connectivity
      Extend Application: 5: Me
      Test Locally: 5: Me
      Prepare and Deploy: 5: Me
      Run with S/4HANA Backend: 5: Me 
    section Day 2 Operation
      SAP Cloud Logging Service: 5: Me
      Access Logs,Metrics and Traces: 5: Me
```








```mermaid
block-beta
  columns 3
  Frontend blockArrowId6<[" "]>(right) Backend
  space:2 down<[" "]>(down)
  Disk left<[" "]>(left) Database[("Database")]

  classDef front fill:#696,stroke:#333;
  classDef back fill:#969,stroke:#333;
  class Frontend front
  class Backend,Database back


```

```mermaid
   mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```


## Feature

```mermaid
---
title: 
---
flowchart LR
    start((new issue created)) --> p1{refapp-bot}
    p1 --> assignee["Predict and assign the responsible developer 👤 based on scenario\n⊞"]
    p1 --> label["Predict and add the labels 🏷️ based on the filled template\n⊞"]
    p1 --> comment["Automatically comment 💬 the issue\n⊞"]
    assignee --> e1(( ))
    label --> e1
    comment --> e1
```

> [!NOTE]  
> More customize feature is in progress!!!!!!

> [!IMPORTANT]  
> Bot is to be customized based on speicifc use case.

> [!WARNING]  
> Don't try to use the bot without permission.

> [!CAUTION]
> Negative potential consequences of an action.

