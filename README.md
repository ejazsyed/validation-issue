<h1 align="center">refapp-bot</h1>
<h2 align="center">Bot to track validation issue</h2>

## Feature

```mermaid
---
title: Groundstation
---
flowchart LR
    start(( )) --> p1{refapp-bot}
    p1 --> Automatically assign the labels based on the filled template
    p1 --> Automatically assign the responsible developer based on scenario.
    p1 --> Automatically comment the issue. 
    Preparation --> deployCFCore["Deploy CF Core\n⊞"]
    deployCFCore --> validateCFCore["Validate CF Core\n⊞"]
    validateCFCore --> finishDO1["Set Deployment Order 1\nServices to 'confirmed'\n⊞"]
    finishDO1 --> serviceDeployment["Service Deployment\n∥⊞"]
    forceStart --> e1(( ))
    kickoffmail --> e1
    serviceDeployment --> e1
```

> [!NOTE]  
> More customize feature is in progress!!!!!!

> [!IMPORTANT]  
> Bot is developed in NodeJS.

> [!WARNING]  
> Don't try to use the bot without permission.

> [!CAUTION]
> Negative potential consequences of an action.

