# Radworks Grants Program

- [Introduction](#introduction)
  - [Guidelines](#guidelines)
  - [Requirements](#requirements)
  - [Project ideas](#project-ideas)
  - [Support](#support)
  - [Team](#team)
- [Process](#process)
- [Grant Categories](#grant-categories)
- [Alt Funding Sources](#alt-funding-sources)
  - [Hackathons](#hackathons)
- [Useful Links](#useful-links)

## Introduction

If you're reading this, you're as interested as we are in promoting Free and Open Source Software (FOSS) and the
ever growing Web3 ecosystem.

This page will cover the basics of the Radworks Grants Program's ethos, application processes, and structure.

### Guidelines

The focus is on technical projects, such as additions to core Radworks software or components of Web3 infrastructure 
that interact with Radicle, or adoption of some part of the [Radworks stack](https://github.com/radicle-dev) (e.g. [Radicle Drips SDK](https://github.com/radicle-dev/drips-js-sdk)).

Below are high level things we look for:

- Your project has **sustainability** front and center. A project that has a plan to be **self-sustaining** and **maintained**
  for the long run will shine above others. We would love nothing more than to have a Radicle grant act as seed funding
  for projects that create value well beyond the grant's initial window.
- Your project is **open source** through and through. It ideally contributes to some core Radicle product features and
  reflects a deep empathy for others working on FOSS. This includes an understanding of the importance of documentation,
  maintainability, extensibility, testing, and clean coding principles.
- You have **strong and relevant** experience. We're looking for pros who have a proven track record in whatever
  language, frameworks, and tooling are needed to get a project past the finish line.

### Requirements 

All work **must** adhere to the following criteria:

#### Open Sourced 
All code produced during your grant must be **open-sourced** with proper licensing (Apache 2.0, GPLv3, MIT or 
Unlicensed).

#### Dependencies 
All code must not rely on closed-sourced software or infrastructure to be fully functioning.

#### Legal and Good Stuff Only
We will not fund projects that support any illicit activity (gambling, money laundering, etc.).

#### Licensing
We take licensing and proper recognition very seriously. We want to celebrate not just your work, but the work
of the giants whose shoulders we are building on. Any attempt to pass work that is not yours off as your own will be
grounds for **immediate termination** of work without pay. Please feel free to start a discussion if you are unsure on
any work.

### Project Ideas

We see project ideas coming from 2 main sources:

#### Open Applications
* If you have an idea for the Radicle or web3/FOSS ecosystem, we'd love for you to apply. 
* You can file an application using the [template](grants/applications/template.md). More on this in the 
[process](#process) section.

#### [Requests For Proposals](rfps) (RFPs) 
* The Core Development team may create an RFP, but anyone from the community may as well. 
* Anyone is welcome to apply to complete the work associated with an RFP.
* We accept applications to tackle RFPs from multiple individuals and teams. This means you may be in competition for a 
grant. Where it makes sense, we may also award one grant across multiple teams.

> 💰 If you write an RFP, you may collect a referral bonus equal to 5% of the total size of any 
associated grant that is accepted _**and**_ completed.

No matter the source of the project idea, the entire application process will be transparent and public on Radworks 
channels.

### Support

The scope of Radworks Grants includes the following:

- Feedback before/during the application process
- Funding
- Feedback on delivered milestones

Outside of these 3 Fs, the grant will not provide a hands-on assistance or mentorship experience.

We are expecting individuals and teams who are planning to own the work from start to finish.

If you have specific issues during development, for example understanding a certain implementation in the Radicle source
code, the core development team is available to answer questions via [Discord](https://discord.gg/cS42wyG7) or [Matrix](https://matrix.community.radworks.org/).

### Team

#### Radworks Grants Committee

This group will act as signers of the Radworks Grant Program's multi-sig, which will ultimately fund projects.

The Radworks Grants Committee is made up of core Radworks team members, Radworks community members, and outside folks who
have some sort of related domain expertise.

- **Grants Lead:** [Bordumb](https://twitter.com/bordumbb) (Radworks Community)
- [Abbey Titcomb](https://twitter.com/abbey_titcomb) (Core Team)
- [Nader Dabit](https://twitter.com/dabit3) (Ecosystem)
- [Nassar Hayat](https://twitter.com/nassarhayat) (Core Team)
- Reverie (comprised of [Derek Hsue](https://twitter.com/derek_hsue) and [Larry Sukernik](https://twitter.com/lsukernik) from the Radworks Community)

#### Radworks Operations Team<!-- omit in toc -->

Speak to anyone on this list if you need help with legal documents or remittances.

- **Grants Lead:** [Bordumb](https://twitter.com/bordumbb) (Radworks Community)
- [Abbey Titcomb](https://twitter.com/abbey_titcomb) (Core Team)

Please see more info in [`/governance` here](https://github.com/radicle-dev/radicle-grants/tree/main/governance)

## Process

As noted, we expect applications to be based on existing RFPs or an open application.

The entire process includes these 3 steps:

#### 1. [Application & Review](https://github.com/radicle-dev/radicle-grants/tree/main/grants/applications)

#### 2. [Milestone Delivery](https://github.com/radicle-dev/radicle-grants/tree/hyperlinkFixes/grants/milestone_deliveries) & [Milestone Evaluation](https://github.com/radicle-dev/radicle-grants/tree/hyperlinkFixes/grants/milestone_evaluations)

#### 3. [Payment](https://github.com/radicle-dev/radicle-grants/tree/main/grants#payment)

## Grant Categories

![grant_categories.png](src/grant_categories.png)

### 1. Core Infrastructure
Projects that touch (a) the core source code, (b) extend core features through 3rd party integrations, or \
(c) enhance our own Grants work, such as R&D or Grants infrastructure.

For example, building plug-ins for popular IDEs like JetBrains that utilize the Radicle CLI.

Previous example(s):
* 3rd Party Integration: [IDE - Jetbrains Plugin #1](https://community.radworks.org/t/application-radicle-jetbrains-ide-plugin-implementation-phase-1/2887)
* 3rd Party Integration: [IDE - VSCode Plugin #1](https://community.radworks.org/t/application-radicle-vs-code-extension-implementation-phase-1/3099)
* 3rd Party Integration: [Package Management - Research](https://community.radworks.org/t/grant-application-package-manager/3122/10)
* Governance Research: [DAO Governance - Research](https://community.radworks.org/t/application-radicledao-governance-design-apiary/3126/11)

### 2. Radworks Adoptions
Projects that adopt some Radworks product feature, such as the Radicle CLI or Drips SDK.

For example, using Drips as the infrastructure to help build an HR/payroll system or research crowdfunding 
system.

Previous example(s):
* TBD

### 3. Web3 & FOSS
Projects that tackle important problems in the Web3 and/or FOSS, but that don't necessarily have to do with Radworks.

> Note: we will generally be quite selective as the budget is limited on these. They should be addressing a general 
> problem. It is less likely that we will fund niche projects that have limited scope or impact.

Previous example(s):
* [DAO Standards - Research](https://community.radworks.org/t/grant-application-daostar-one/2753)

## Alt Funding Sources

In lieu of a grant, you may find info below helpful to fund any projects you have in mind.

### Hackathons

Radworks may organise, sponser, or in some capacity of another participate in hackathons.

These can be a great avenue for funding.

Below is a list of hackathons Radworks has sponsored in the past:

- [ETHGlobal](https://online.ethglobal.com/)
- [Ceramic - Sovereign Data Hackathon](https://gitcoin.co/hackathon/ceramic-identity/onboard)

## Useful Links

| <img src="src/twitter_logo.png?s=50" width="50"> | <img src="src/discord_logo.png?s=50" width="50"> | <img src="src/radicle_text_logo.png?s=50" width="50"> | <img src="src/matrix_logo.svg?s=50" width="50"> | <img src="src/telegram_logo.svg?s=50" width="50"> | <img src="src/gnosis_logo.png?s=50" width="50"> |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| [@radworks_](https://twitter.com/radworks_)  | [Discord](https://discord.com/invite/HRdnwAwGbG) | [Discourse](https://community.radworks.org/) | [Matrix](https://matrix.community.radworks.org/) | [Telegram](https://t.me/radicleworld) | [Gnosis Safe](https://gnosis-safe.io/app/eth:0x394B920c5d39E0Ca40fCa2871569B6B90D750c7c/balances) |

## License

[MIT Licence](https://github.com/radicle-dev/radicle-grants/blob/main/LICENSE) © Radicle
