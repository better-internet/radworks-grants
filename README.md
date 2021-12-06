# Radicle Grants Program

- [Introduction](#introduction)
  - [Guidelines](#guidelines)
  - [Project ideas](#project-ideas)
  - [Support](#support)
  - [Team](#team)
- [Levels](#levels)  
- [Process](#process)
- [Help](#help)
  - [Additional information](#additional-information)
  - [Real-time conversation](#real-time-conversation)
- [Alt Funding Sources](#alt-funding-sources)
  - [Hackathons](#hackathons)

## Introduction

If you're reading this, you're as interested as we are in promoting Free and Open Source Software (FOSS) and the 
ever growing Web3 ecosystem.

To this end, Radicle is introducing its own grants program, the Radicle Grants Program. 

The aim is to directly support open source initiatives that help grow the Radicle product, the Radicle community, and 
the greater FOSS and Web3 community at large.

This page will cover the basics of the Radicle Grants Program's ethos, application processes, and structure.

### Guidelines

Come one, come all! 

We are open to any applications, whether you are applying to tackle an RFP we've provided or you're applying with some 
ideas of your own.

In general, though, the focus is on technical projects, such as additions to core Radicle software or components of 
Web3 infrastructure that interact with Radicle.

Below are high level things we look for:
- Your project has **sustainability** front and center. A project that has a plan to be **self-sustaining** and **maintained** 
  for the long run will shine above others. We would love nothing more than to have a Radicle grant act as seed funding
  for projects that create value well beyond the grant's initial window.
- Your project is **open source** through and through. It ideally contributes to some core Radicle product features and 
  reflects a deep empathy for others working on FOSS. This includes an understanding of the importance of documentation,
  maintainibility, extensibility, testing, and clean coding principals.
- You have **strong and relevant** experience. We're looking for pros who have a proven track record in whatever 
  language, frameworks, and tooling are needed to get a project past the finish line.

Lastly, all work **must** adhere to the following criteria:
- All code produced during your grant must be **open-sourced** with proper licensing (Apache 2.0, but GPLv3, MIT or 
  Unlicense).
- All code must not rely on closed-sourced software or infrastructure to be fully functioning.
- We will not fund projects that support any illicit activity (gambling, money laundering, etc.).

We take licensing and proper recognition very seriously. We want to celebrate not just your work, but the work
of the giants whose shoulders we are building on. Any attempt to pass work that is not yours off as your own will be 
grounds for **immediate termination** of work without pay. Please feel free to start a discussion if you are unsure on 
any work.

### Project Ideas

We see project ideas coming from 2 main sources:
* [Requests For Proposals](rfps) (RFPs) will be clearly outlined projects that we would like to see implemented.
  We accept applications to tackle RFPs from multiple individuals and teams. This means you may be in competition for a 
  grant. Where it makes sense, we may also award one grant across multiple teams. 
* Open Applications. These will follow the same format as our internal RFPs. If you have an idea for an RFP that you 
don't see, by all means send in an application. More on this in the [process](#process) section.

No matter the source of the project idea, the entire application process will be transparent and public on Radicle.

Currently the RFPs come centrally from the core development team. The end goal is to progressively decentralize this 
process such that the line between RFP and open applications is blurred and goes away over time. Open application will 
be treated as a first class citizen!

### Support

The scope of Radicle Grants includes the following:
* Feedback before/during the application process
* Funding
* Feedback on delivered milestones

Outside of these 3 Fs, the grant will not provide a hands-on assistance or mentorship experience.

We are expecting individuals and teams who are planning to own the work from start to finish.

If you have specific issues during development, for example understanding a certain implementation in the Radicle source
code, the core development will be available to answer questions.

### Team

#### Radicle Grants Committee

This group will act as signers of the Radicle Grant Program's multi-sig, which will ultimately fund projects.

The Radicle Grants Committee is made up of core Radicle team members, Radicle community members, and outside folks who
have some sort of related domain expertise. 

-  **Grants Lead:** [Bordumb](https://twitter.com/bordumbb) (Radicle Community)
- [Abbey Titcomb](https://twitter.com/abbey_titcomb) (Core Team)
- [Kei Kreutler](https://twitter.com/keikreutler) (Ecosystem)
- [Nader Dabit](https://twitter.com/dabit3) (Ecosystem)
- [Nassar Hayat](https://twitter.com/nassarhayat) (Core Team)
- Reverie (comprised of [Derek Hsue](https://twitter.com/derek_hsue) and [Larry Sukernik](https://twitter.com/lsukernik) from the Radicle Community)

#### Radicle Operations Team<!-- omit in toc -->

Speak to anyone on this list if you need help with legal documents or remittances.

-  **Grants Lead:** [Bordumb](https://twitter.com/bordumbb) (Radicle Community)
- [Abbey Titcomb](https://twitter.com/abbey_titcomb) (Core Team)

## Levels

The Radicle Grants Program offers different grant levels to help you best depending on your current stage.

### Level 1 (= InstaGrants)
  - **Target:** Individuals & small teams
  - **Amount:** Up to $10,000
  - **Requirements:** 2 approvals 

### Level 2

- **Target:** Small teams/start-ups 
- **Amount:** Up to $50,000
- **Requirements:** 3 approvals 

### Level 3 

- **Target:** Companies/foundations with a proven track record 
- **Amount:** Unlimited (up to $500,000)
- **Requirements:** Pitch call + 5 approvals

## Process

As noted, we expect applications to be based on existing RFPs or an open application.

In either case, please follow the steps below.

#### Application

If you have a contribution that is not technical in nature, please feel free to apply via [our non-technical application here](https://docs.google.com/forms/d/e/1FAIpQLSdpzrxNQIOGKT2sfr5zkQysCa_v1RPZt4oVO6zCuPKX-GIUEw/viewform?usp=sf_link).

Otherwise, please follow the steps below for technical applications.
   1. [Fork](https://github.com/radicle/grants-program/fork) this repository.
   2. In the newly created fork, create a copy of the application template 
      ([`applications/template.md`](applications/template.md)). 
   3. Name the new file after your project: `project_name.md`.
   4. Fill out the template with the details of your project. The more technically detailed, the less back-and-forth 
      we'll have, and the faster we can make a decision.
   5. You will see a comment template that contains a checklist. You can leave it as is and tick the checkboxes once the pull request has been created. Please read through these items and check all of them.
   6. Sign off on the [terms and conditions](docs/T&Cs.md)  <!--- TODO -->

#### Application Review
   1. The [committee](#radicle-grants-committee) will review, add comments where needed, and possibly make change 
      requests on your application PR.
   2. Clarifications and amendments should be made in a timely manner. If you don't respond within 2 weeks, we may close the application due to inactivity. You're welcome reopen an application from the same work, assuming it was not rejected.
   3. When all requested changes are addressed and the terms and conditions have been signed, someone will mark your application as `ready for review` and share it internally with the rest of the committee.
   4. The application will be accepted and merged as soon as it receives the required number of approvals (see [levels](#level_slider-levels)), or closed after two weeks of inactivity. Unless specified otherwise, the day on which it is accepted will be considered the starting date of the project, and will be used to estimate delivery dates.
    
#### Milestone Delivery
   1. Milestones are to be delivered on the [Grant Milestone Delivery](https://github.com/Radicle/Grant-Milestone-Delivery/) repository following the [process](https://github.com/Radicle/Grant-Milestone-Delivery#mailbox-milestone-delivery-process) described therein.

#### Payment
   1. For the first wave of grants, once your application is approved, you will receive 40% of the grant to start. Upon final completion, the remaining 60% will be dispersed.
    
## Alt Funding Sources

In leu of a grant, you may find info below helpful to fund any projects you have in mind.

### Hackathons

Radicle may organise, sponser, or in some capacity of another participate in hackathons.

These can be a great avenue for funding.

Below is a list of hackathons Radicle has sponsored in the past:
* [ETHGlobal](https://online.ethglobal.com/)
* [Ceramic - Sovereign Data Hackathon](https://gitcoin.co/hackathon/ceramic-identity/onboard)

### Contact Us
We also recommend following Radicle's various social channels:
* [@radicle](https://twitter.com/radicle) on Twitter
* [Discord](discord.gg/HRdnwAwGbG)
* [Discourse](https://radicle.community/)
* [Matrix](matrix.radicle.community)
* [Telegram](t.me/radicleworld)

## License

[MIT Licence](https://github.com/radicle-dev/radicle-grants/blob/main/LICENSE) © Radicle
