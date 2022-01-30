# Drips Widget - Proof of Concept

- **Status:** Open 
- **Proposer:** [@bordumb](https://github.com/bordumb)
- **Your Project(s):** [optional]: https://github.com/radicle-dev
- **Projects you think this work could be useful for** [optional]: everything on Radicle
- **Teams/People that could deliver the RFP** [optional]: Looking...

## Project Description :page_facing_up:

Create a way to rank, categorize, and surface relationships on the Radicle network.

The vision for this product is **BIG**.

We could see it being used by any sort of creator, including but not limited to:
* Ranking top Orgs by number of contributors, number of Drips outgoing/incoming, etc.
* Ranking top open source contributors by number of Orgs, number of contributions, or Drips received 
* Recommending work to contributors that is similar (e.g. use collaborative filtering based on commit/contribution data)
* Recommending work to Drip to (e.g. use collaborative filtering based on Drips data)

> The main goal here is surface insights that **make navigation and discovery within the Radicle ecosystem easier**.

## Deliverables :nut_and_bolt:

- **Total Estimated Duration:** up to 4 months (negotiable; please see `Milestone` sections)
- **Full-time equivalent (FTE):** 2
- **Total Costs:** roughly 72,000 USDC

### Milestone 1

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable  | Specification                                                                                                                              |
|--------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| 1.     | Backend code | Queries that do basic ranking of Orgs by Drips activity (e.g. ranking by # of Drips ingoing/outgoing, amount of Drips, etc.)               |
| 2.     | Backend code | Queries that do basic ranking of Orgs by contribution activity (e.g. most recent contributions, most unique contributors, etc.)            |
| 3.     | Backend code | Queries that do basic ranking of Communities by Drips activity (e.g. top orgs by # of Drips ingoing/outgoing, amount of Drips, etc.)       |
| 5.     | Backend code | Queries that do basic ranking of Contributors by development activity (e.g. most Orgs joined, most commits, etc.)                          |
| 6.     | Backend code | Queries that do basic ranking of Contributors by development activity (e.g. ranking by # of Drips ingoing/outgoing, amount of Drips, etc.) |

### Milestone 2

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable   | Specification                                                                                                  |
| ------ |---------------|----------------------------------------------------------------------------------------------------------------|
| 1.     | Front-End POC | Front-end POC that has drop-down menus and navigation so that a user can filter content from the above queries |

### Milestone 3

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 24,000 USDC

| Number | Deliverable          | Specification                              |
| ------ |----------------------|--------------------------------------------|
| 1.     | Back-end + Front-End | Front-End integration with [Radicle Drips](https://app.drips.network/explore) |

### Milestone 4

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 24,000 USDC

| Number | Deliverable          | Specification                                                                    |
| ------ |----------------------|----------------------------------------------------------------------------------|
| 1.     | Back-end + Front-End | Front-End integration with [Radicle Upstream](https://radicle.xyz/tryit) |

### Milestone 5 

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable  | Specification                                                                                                                |
|--------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| 1.     | Backend code | Queries that help with recommending or finding similar Orgs; goal is making finding interesting Orgs to contribute to easier |
| 2.     | Backend code | Queries that help with recommending or finding similar contributors; goal is making recruiting talent easier                 |

> Note: Marking this down as the last as it is quite aspirational. We will likely improve discovery a lot just with Milestone #1.
