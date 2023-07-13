> The official structured discussion for the Radworks Grants Program proposal. With this post, the proposal has entered the second phase of the governance process. Please review the drafted proposal and contribute feedback by **Wednesday, October 20th**

# **Functional Description**

The proposal is to start the Radworks Grants Program (RGP). The purpose of which will be to collect, assess, approve, and fund solutions to problems within the Radworks ecosystem.

In other words, the aim is to directly support open source initiatives that help grow the Radicle product, community, and the greater Free and Open Source Software (FOSS) and Web3 community at large.

## **Budget & Timeline**

- Amount: $1,000,000 (USDC)
- Length: 6 months for 1st wave of grants

Roughly 75% of the budget will be allocated to fund grant projects.

The remaining budget will be used to compensate committee members.

Grant funding and compensation will start out simple, controlled by RGP's multi-sig. As Radicle progressively decentralizes, the compensation budget may fall under a different group entirely and/or utilize Radicle Funding/Drips. Any new arrangements will be assessed at the end of the 6 months.

## **🐕🦴 Implementation**

**A fundamental goal with the RGP is to dogfood Radicle in order to build a web3-wide model for sustainable software development.** This comes down to 3 main uses of Radicle:

The RGP Committee will be its own [Org](https://radicle.community/t/feature-update-orgs/2132).
Committee members will be added as [members of the Org](https://docs.radicle.xyz/docs/connecting-to-ethereum/adding-members).

Grantees post work to relevant [Projects](https://docs.radicle.xyz/docs/using-radicle/creating-projects) within Radicle's core codebase for assessment by Core Dev maintainers. This workflow would be handled with [forks + patches](https://docs.radicle.xyz/docs/using-radicle/viewing-and-merging-patches) with the final anchored commits acting as the "proof of work" for grantees.

Finally, once Radicle Funding is ready, RGP's Org could pay out to grantee Orgs for their work via
[Drips](https://radicle.community/t/feedback-on-nft-community-tokens/2455).

Below is a high-level diagram of the proposed framework.

![image|375x500](upload://yY5mQw6vjSd2LJi8czLshk1Gamh.png)

> **Note**
>
> In the short term, I see all of these pieces being substitute-able by any combination of off-chain tools (GitHub, AirTable, etc.) in order to lower friction for grantees. However, in the long term, the goal is to get as much of this activity on-chain. This is not just for the sake of having things on-chain. It is so that the entire process is natively transparent, highly automated, and so that any learnings and pain points from the on-chain process are fed back to the Radicle product itself. We want a virtuous cycle!

## **Team & Responsibilities**

### Radical Grants Program Org (Multi-Sig)

This group will act as signers of the RGP Org's [multi-sig](https://docs.radicle.xyz/docs/connecting-to-ethereum/creating-an-org#creating-an-org).

The multi-sig votes here will act as both approval of grants as well as the funding of grant projects.

The Radworks Grants Committee is made up of core Radicle team members, Radworks community members, and outside folks who have some related domain expertise within the web3 ecosystem.

Members include:

- Abbey (Radicle)
- Bordumb (Community)
- Derek (Community)
- Larry (Community)
- Nas (Radicle)
- Shelby (Radicle)

Below are ideas for prospective committee members who have not yet committed:

- Core Dev Team (1-2 members)
- We will also be reaching out to several other platforms, such as The Graph, Gitcoin, and a few others to find members from the greater web3 ecosystem.

### Compensation

As noted above, roughly 25% of the budget will be used for compensation. This will be shared amongst the RGP Committee Members and Governance Operations Members. They will be paid for their time for any work including but not limited to recruiting, assessing, and managing of work across grants and governance.

Compensation will be paid out from the RGP Grant Multi-Sig.

### Core Development Team

This section is independent of whether a Core Team member is on the Committee.

Any technical work (i.e. code) will be posted to the respective Project/repo. For example, if a grant project touches Radicle Upstream, the work will need to be posted to either the [Radicle](radicle://link/v0/rad:git:hnrk8ueib11sen1g9n1xbt71qdns9n4gipw1o) or [GitHub](https://github.com/radicle-dev/radicle-upstream) repo.

It will be up any [maintainer(s)](<[maintainers](https://docs.radicle.xyz/docs/connecting-to-ethereum/adding-members)>) of the respective repo to review, give feedback, and ultimately approve the work.

Once the work is completed and approved, the grantee will can share the Project ID + anchored commit hash as proof of
work to the Grant Committee for final payment.

The Core Development Team may at any time join the process to give feedback or guidance on any application.

### Grants Lead

As mentioned in the forums, the Radicle Governance Working Group decided it would be best to hire a Grants Lead to create and manage the RGP.

https://radicle.community/t/looking-for-a-radicle-grants-program-lead/2489

After applying, I was chosen to lead the program by the RGWP. I've already introduced myself a bit in [the application here](https://radicle.community/t/looking-for-a-radicle-grants-program-lead/2489).

The Grants Lead will be responsible for the following:

- Organizing and disseminating project ideas: this will include RFPs from core Radicle members or open applications from the community (e.g. product requests from partners or straight from individual users)
- Building channels for recruiting applicants: this might include things like putting forth RFPs to hackathons or posting bounties on [GitCoin](https://gitcoin.co/)
- Initial screening of applications: the Grant Lead will be the first line of defence for bad applications. Committee Members and Core Dev Team members should trust that they will only have to assess candidates who have met a high bar.
- Scheduling assessments/interviews: this will include scheduling between grant candidates and any relevant Committee Members and/or Core Dev Team
- Planning milestones/check-ins: milestones expected to be written by the grant candidates in their application. The Grant Lead will be responsible to have regular check-ins, depending on the tier of the project (see tiers below)
- Multi-Sig voting: the Grant Lead will communicate to relevant Committee Members when a vote for finalized work is in order.

The core goal of the Grants Lead is to scale the progressive decentralization of contributions to the Radworks ecosystem.

## **Program Structure & Process**

The entire structure and process is meant to evolve over time, with the long-term goal to push as much of the work onto
Radicle.

### Project Ideas

RFPs will be the main source of project ideas. RFPs can come from core Radicle members or can be written by users and other community members (e.g. a feature request that another platform's team is keen to have). RFPs from community members must follow the same format as the format established by Radicle. They cannot be free-form. And the more technical details, the better.

We expect that in Wave 1 of the Radworks Grants Program, most RFPs will come from the core Radicle team. Over time, the line between core member based RFPs and community RFPs should blur. This will be a key part of Radicle's progressive decentralization. Canonical RFPs will be organized within RGP's Org in its own Project. Copies will be made available elsewhere, such as mirroring on GitHub, blog posts, etc. Budget Estimates will be made at this point.

### Scope

The first grants wave will last **6 months**.

Applications will be on a rolling basis. We will accept applications any day of the week. Every 2 weeks there will be an assessment by Committee Members. On the first Monday, the Grant Lead will start looking at all applications (GitHub, Radicle, or AirTable). By the 2nd Monday, the Grant Lead will share this with Committee Members. By the 2nd Friday, there should be voting or a call for further assessment (interviews). Applicants should wait from 2-4 weeks to finish the entire process. See Tiers below for more.

Multiple teams may apply for the same grant/RFP. This has several implications. It means applicants are in competition. But Committee Members may also (a) recommend to combine teams or (b) split the RFP into sub-tasks to be divided amongst each grantee.

There will be 3 tiers to help organize and prioritize projects:

- Tier 1
  - Target: individuals/small teams
  - Budget: < $25,000
  - Requirements: 20% of multi-sig approval
  - Time commitment from Committee members: voting pre/post, assessment of work
- Tier 2
  - Target: small teams/start-ups
  - Budget: $25,000 - $50,000
  - Time commitment from Committee members: 1-2 interviews, voting pre/post, assessment of work
- Tier 3
  - Target: small teams/start-ups
  - Budget: > $50,000
  - Time commitment from Committee members: 1-2 interviews, voting pre/post, assessment of work

> **Note:** Details above subject to change depending on final budget from Treasury and the number of Committee members we have.

### Application Process

Grantees may choose from any of the application processes below. Both application processes follow the same form, so there will be no difference in assessment.

**Non-Technical Applications**

_Location:_ there will be an [AirTable](https://www.airtable.com/) based application.

_Process:_ it will ask the Applicant for things like their name/pseudonym, GitHub or other previous work material, ask for a URL/name of the RFP they are applying to, or in the case of their own RFP/feature request, will ask them to fill in more details. It will also ask for details on how they plan to address the RFP's work.

**Technical Applications**

This application process is recommended for anyone who wants to immediately start organizing their work with a Git client.

_Location:_ the RGP Org will run applications through a Project called "applications." In the example below, there is an rfps folder where all RFPs live. A standard template `[template.md](http://template.md)` , an RFP for Japanese localization posted by the Core Dev Team, and an RFP/application posted by a community member.

```bash
RGP-ORG
  | - applications (project)
  |  | - rfps (folder)
  |  | - | - application-template.md
  |  | - | - japanese-localization (folder)
  |  | - | - | - rfp.md
  |  | - | - | - your-application.md
  |  | - | - my-custom-application (folder)
  |  | - | - | - your-application.md
```

_Process:_ to apply, Grant Applicants can [fork + patch](https://docs.radicle.xyz/docs/using-radicle/viewing-and-merging-patches) into an existing RFP's folder or they can create their own RFP folder. In either case, the only thing an applicant should be adding is a new application file (`your-application.md`)

> **Note**
>
> In the short-term (this grant wave), Applicants may substitute this workflow with GitHub using PRs. We will mirror RFPs there. But canonical RFPs will be on Radicle.

### Milestones

Milestones will either be explicitly written in the RFP and if not, should be addressed by the Grant Applicant in their application.

The purpose of milestones is to break down projects into functional components. The main goal is to mitigate the risk of projects not being 100% complete. If 1 usable component is done and 2 are not, we can restart from square 2, rather than square 1. Second, the simple exercise of creating milestone components organizes the work for the grantee into manageable chunks. Lastly, milestones also help measure work completion, but this is not the primary goal of them.

### Grant Approval

The Grant Lead is to communicate Multi-Sig voting due dates and any required secondary assessments, such as interviews.

As noted above, this will occur on every 2nd Friday for Tier 1 grants. For Tier 2/3 grants, this may be on either the 3rd or 4th Friday, subject to Committee Member availability.

In leu of synchronous interviews, Committee Members may assess applicants asynchronously by providing written questions for the applicant(s) to respond to. This must be done in a timely manner (i.e. several days prior to when the final assessment takes place).

### Project Support

The Grant Lead will directly or indirectly (through other Committee Members) provide grantees with the following:

- Feedback before/during the application process
- Funding
- Feedback on delivered milestones

Outside of these 3 Fs, the RGP will not be a hands-on assistance or mentorship program. We are expecting individuals and teams who are planning to own the work from start to finish.

In cases where there is close integration with the product, Grantees should expect interaction and can get details clarified and pointers via our [community channels](https://radicle.xyz/community.html) (Discord, Matrix, etc.).

### Posting Work

**Technical Work**

Any technical work (i.e. code) must be posted as a [fork + patch](https://docs.radicle.xyz/docs/using-radicle/viewing-and-merging-patches) if done using Radicle or as a pull request (PR) if on GitHub

For example, if a grant project touches Radicle Upstream, the work will need to be posted as a patch to [Radicle project](radicle://link/v0/rad:git:hnrk8ueib11sen1g9n1xbt71qdns9n4gipw1o) or as a PR in the [GitHub repo](https://github.com/radicle-dev/radicle-upstream).

The maintainer(s) of the respective repo (likely Core Dev Team) will review, give feedback, and ultimately approve the work.

Grantees will use the Project ID and anchored commit as "proof of work" for final payment (see _Work Approval_ and _Payment_ below).

> **Note**
>
> In the short-term (i.e. this first grant wave) Grantees can expect some flexibility to this process. For example, we will allow you to post your final draft to GitHub for assessment. But we will still end up forking it ourselves to bring it into the Radworks Grant Program's own Org.

**Non-Technical Work**

Any non-technical (i.e. non-code) work can be shared in any manner that makes sense.

For example, if the work is to write a blog post, simply sharing a link to the content and a text file will suffice. If it is a video tutorial, a link to the video and a file of the video will work.

The details for posting non-technical work will be on a case-by-case basis.

> **Note**
>
> All work **must** adhere to the following criteria:
>
> - All code produced during your grant must be **open-sourced** with proper licensing (Apache 2.0, but GPLv3, MIT or Unlicense).
> - All code must not rely on closed-sourced software or infrastructure to be fully functioning.

### Work Approval

There are 3 possible approvals, initial grant approval, technical approval, and non-technical approval.

**Initial Approval**

All projects will go through the initial approval. This will be managed entirely by the RGP Committee. An approval in this case is any multi-sig vote on a project that reaches quorum for the initial payment (see _Payment_ section below).

**Technical Approval**

Technical approval will include an assessment by relevant Core Dev Team member(s).

For example, if a grant project touches Radicle Upstream, the work will need to be posted as a patch to [Radicle](radicle://link/v0/rad:git:hnrk8ueib11sen1g9n1xbt71qdns9n4gipw1o) or as a pull request in the [GitHub](https://github.com/radicle-dev/radicle-upstream) repo.

The maintainer(s) of the respective repo (likely Core Dev Team) will review, give feedback, and ultimately approve the work to be merged.

The RGP Committee will use this approval as the "proof of work" to disburse final funds from the multi-sig (see _Payment_ below).

**Non-Technical Approval**

Technical approval will include an assessment by relevant Core Dev Team member(s).

### Payment

**Schedule**: when a grantees application is approved 40% of the grant will be dispursed to help start the work. Once
the work is complete (i.e. gone through Approvals as noted above), the remaining 60% will be dispursed.

**Process for Final Payment**:

- Technical work: grantees must provide the Project ID + anchored commit showing the work has been approved by a Core Dev Team maintainer. RGP Committee will then disburse funds via the multi-sig.
- Non-technical work: grantees must share the finalized work, which will then be assessed by the RGP Committee, and funds will be disbursed via the multi-sig.

## Communications

Communications will be key and made fairly uniform and consistent. The major steps where communications will be made are:

### 1. Grants Dissemination

As Radicle-based RFPs become available, they should be posted with their budget through the following channels:

- Twitter + other social
- RFP + budgets posted on GitHub, Radworks Grants Program's repo, Blog, and the [#garden channel on Discord](https://discord.gg/AejcRxNJ)

For community-based RFPs, they will be posted if they pass the initial screening.

### 2. Grant Applications

No communications by us.

But these will be naturally public due to the [fork + patch](https://docs.radicle.xyz/docs/using-radicle/viewing-and-merging-patches) workflow mentioned above (or as PRs in the mirrored repo on GitHub).

### 3. Grant Approvals

As grants are approved on a rolling basis,

- Approvals of grants (per grant)
  - Added to GitHub, Radicle, Blog on rolling basis as they come in

### 4. Grant Completion

- Completion of individual grant projects (per grant)
  - Twitter + other social (celebrate!)
  - Will be naturally public due to the patch workflow mentioned above

# **Purpose**

The purpose of this entire exercise comes down to three main goals.

First and foremost is **progressive decentralization**. Radicle is meant to enable the decentralization of governance and contributions to FOSS. So Radicle itself should be self-governed, self-funded, and self-built for and by the Radworks community. This also aligns with the third high-level objective of the Radicle Foundation,

Second is that the **team growth** of contributors will mean **product growth**. There is a natural limit to what the Core Dev Team can develop, so new contributors will mean more attention to more features, an improved experience for users, and more innovation. The Radworks Grants Program won't just be a space for peripheral tasks. It will also be a part of Radicle's own recruiting pipeline to bring on new core members.

Lastly, the RGP will become a **model for all DAOs**. It will be a model for building self-sustaining, open source projects, DAO-funded project development, as well as DAO-to-DAO (D2D) "business". The RGP will become a hub for sharing best practices around organizing and funding projects, as well as how best to use Radicle to drive governance and development for FOSS. It will do this in a more codified, automated, and in an on-chain way that only Radicle can do.

The RGP is also an initiative that contributes to two of the Radicle Foundation's high level objectives for the project (see full post below):

3. Increase the number of devs building and contributing to Radicle #grants ##progressive-decentralization

4. Strengthen the core teams #people

https://radicle.community/t/radicle-2021-strategy-objectives/2424#high-level-objectives-2

# **Background** (what is the reasoning behind the proposal?)

Radicle is currently run by a couple dozen core members.

The Radworks Grants Program will be a major towards progressive decentralization.

The reasoning behind starting a grants program is to add structure, process, and automation to the onboarding of new contributors, all of which is powered by Radicle's software itself. This will help us put our best foot forward in decentralizing Radicle.

# **Link to Temperature Check**

https://radicle.community/t/temperature-check-radicle-grants-program/2461/8

# **Reasoning & analysis** (what is the case for the proposal? what are the pros and cons?)

Pros

- The pros largely follow the _Purpose_ section above
  - Progressive decentralization: almost by definition, a grants program decentralizes
  - Team growth: the RGP can become a powerful channel for attracting community contributors as well as new core members
  - Product growth: the RGP will bring in more contributions to development of Radicle, which should mean more innovation
  - Feature ideation: the RGP can be a hub for users and contributors to meet where people can share best practices, product requests, and anything else that helps the ecosystem
  - Model for DAOs: the RGP will be a model — both from a process and technological point of view — for other DAOs to adopt

Cons

- There is a risk of projects not working out as expected

# **Technical implementation** (who will be writing the code? what is the scope required?)

### Treasury Funding

- Amount: $1,000,000
- Period: 6 months
- At the end of the period, the money should be sent back to the Treasury
- Would need someone from Core Dev Team + Treasury to implement this

At the end of the 6 months, a new grants wave must be announced, go through [the normal governance process](https://radicle.community/t/readme-radicle-governance-process/526).

### Execution of Grant Work

(Note: summarized from _Implementation & Setup_ above)

The Radworks Grants Program will have its own Org, with a structure like below:

```bash
RGP-ORG
  | - applications (project)
  | - project-one (project)
  | - project-two (project)
```

The Org will be managed by the Grant Lead.

Grant Applicants will use the [fork + patch](https://docs.radicle.xyz/docs/using-radicle/viewing-and-merging-patches) workflow to apply for grants (i.e `applications` project). If applicants use an airflow application, the Grant Lead will post their application publicly to the RGP Org.

Grantees will post work to the respective Radicle Project using [fork + patch](https://docs.radicle.xyz/docs/using-radicle/viewing-and-merging-patches) or as a PR in the respective GitHub repo. Core Dev maintainers will have final say on technical work. Non-technical work will be shared in a way that makes sense for the given work.

Once work is finally approved, the RGP Committee will use voting via multi-sig to disburse funds.

> **Note**
>
> In cases where grantees do their work on GitHub or elsewhere, that is fine. But the final draft will be uploaded to
> Radicle in the relevant Project as noted above. This is what RGP Committee members will use to determine their
> multi-sig vote for funding.

# **Impact** (how does this contribute to the long-term resilience, sustainability and/or growth of the Radicle network?)

(Note: largely covered above in the _Purpose_ section, so summarized below)

- Progressive decentralization: self-sustaining (community funded/community built) growth from community contributors
- Team Growth: will become a pipeline for recruiting new core members
- DAO model: will provide a model for others DAOs to be self-sustaining, both from a process standpoint as well as technological

# **Open questions** (what else needs to be figured out?)

- Remuneration
  - Can we pay grantees through Radicle Funding?
    - If so, when will that be available?
  - In the interim, or in cases where grantees want some other payment:
    - How shall we do this?
  - Ange
    - Legal implications?
  - **Remunerations**: related to above point on implementation/Funding. If Funding is not feasible, I'm guessing Ange or someone from Radicle Foundation should get involved to help with this portion? Just want to flag this as a really important point.
    - Comment: _The only "paperwork" is an automated KYC process via Persona. We don't require grantees to sign any paperwork, mostly because the grants are tiny and we don't want to bog anyone down with a compliance process. That means grantees are need to figure out their own tax_
- Funding
  - When is funding MVP scheduled? (we'd like to use it!)
  - Bilateral NFTs
    - Currently, NFT/Community Tokens are unilateral — i.e. the Supporter Org (Org A) gets and NFT from the Org (Org B) they are supporting.
      - Org B → Org A
    - Especially within the context of Grants, a bilateral dispersal might make sense
      - Org B ↔ Org A
      - This might be useful if a large project wants to provide access to services to all of their grantees.
      - Such an NFT would also act as a badge of honor (e.g. "Our Org has been sponsored by AAVE, The Graph, Radicle, etc.")
    - Thoughts?
- Legal
  - Software licensing: Proper licensing for grantees to adopt to preserve open source usage of any/all work ([see Web3 Foundation's example](https://github.com/w3f/Grants-Program#project-ideas))
  - Terms & Conditions for successful grantees
