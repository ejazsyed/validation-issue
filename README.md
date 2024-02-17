<h1 align="center">refapp-bot</h1>
<h2 align="center">Bot to track validation issue</h2>

## Feature

```mermaid
---
title: Groundstation
---
flowchart LR
    start(( )) --> p1{+}
    p1 --> Preparation["Preparation\n⊞"]
    p1 --> forceStart["Watchdog for Force Started Services\n⊞"]
    p1 --> kickoffmail["Kickoff E-Mail\n⊞"]
    Preparation --> deployCFCore["Deploy CF Core\n⊞"]
    deployCFCore --> validateCFCore["Validate CF Core\n⊞"]
    validateCFCore --> finishDO1["Set Deployment Order 1\nServices to 'confirmed'\n⊞"]
    finishDO1 --> serviceDeployment["Service Deployment\n∥⊞"]
    forceStart --> e1(( ))
    kickoffmail --> e1
    serviceDeployment --> e1
```

- Automatically assign the labels based on the filled template.
- Automatically assign the responsible developer based on scenario.
- Automatically comment the issue. 

> [!NOTE]  
> More customize feature is in progress!!!!!!

> [!IMPORTANT]  
> Bot is developed in NodeJS.

> [!WARNING]  
> Don't try to use the bot without permission.

> [!CAUTION]
> Negative potential consequences of an action.

