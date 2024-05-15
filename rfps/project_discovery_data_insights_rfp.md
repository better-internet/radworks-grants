# Radicle Discovery + Analytics

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
* Recommending work to contributors that is similar to their interests (e.g. use collaborative filtering based on commit/contribution data)
* Recommending contributors / projects to Drip to (e.g. use collaborative filtering based on Drips data)

> The main goal here is surface insights that **make navigation and discovery within the Radicle ecosystem easier**.

## Deliverables :nut_and_bolt:

- **Total Estimated Duration:** up to 6 months (negotiable; please see `Milestone` sections)
- **Full-time equivalent (FTE):** 2
- **Total Costs:** roughly 84,000 USDC

### Finer Details
- When writing queries, make sure that logic is broken down into small components that are testable. We will be looking unit tests here.

### Milestone 1 - Ecosystem Analytics

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable  | Specification                                                                                                                            |
|--------|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| 1.     | Backend code | Queries that do basic ranking of Orgs by Drips activity (e.g. ranking by # of Drips ingoing/outgoing, amount of Drips, etc.)             |
| 2.     | Backend code | Queries that do basic ranking of Org funding (Treasury size, # Drips, value of Drips, etc.)                                                |
| 3.     | Backend code | Queries that do basic ranking of Communities by Drips activity (e.g. # of subscribers/supporters, etc.)                   |

> The main purpose of this is to create basic, high level insights about how the Radicle network of Drips is working.

### Milestone 1.1 - Labor Supply + Demand Analytics

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable  | Specification                                                                |
|--------|--------------|------------------------------------------------------------------------------|
| 1.     | Backend code | Queries that do basic ranking of Contributors who are most active in Workstreams |
| 2.     | Backend code | Queries that do basic ranking of Contributors who have best value            |
| 3.     | Backend code | Queries that do basic ranking of Orgs with most open, valued, or active RFPs |
| 3.     | Backend code | Queries that do basic ranking of RFPs with most supporters, highest value    |

> The main purpose of this is to create insights that make it easier for contributors to find work and for Orgs to find talent. We're trying to solve for both sides of labor supply and demand.

> ❗ This milestone depends on the [Workstreams](https://github.com/radicle-dev/workstreams-app) app being completed. Please feel free to skip over this milestone and start on Milestone 2 until then.

### Milestone 2 - Front End POC

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable   | Specification                                                                                                 |
|--------|---------------|---------------------------------------------------------------------------------------------------------------|
| 1.     | Front-End POC | Wireframe designs from the perspective of Orgs and Contributors                                               |
| 2.     | Front-End POC | Front-end POC that has drop-down menus and navigation so that a user can filter content from the above queries |

### Milestone 2.1 - Front End Integration

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 24,000 USDC

| Number | Deliverable          | Specification                                                                                                                               |
|--------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| 1.     | Back-end + Front-End | Front-End integration with [Radicle Interface](https://app.radicle.network/); [GitHub Repo](https://github.com/radicle-dev/radicle-interface) |

### Milestone 3 - Recommendation Systems

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable  | Specification                                                                                                                |
|--------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| 2.     | Backend code | Queries that help with recommending or finding similar contributors; goal is making recruiting talent easier                 |

> Note: Marking this down as the last as it is quite aspirational. We will likely improve discovery a lot just with Milestone #1.

### Milestone 4 - Recommendation Systems

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 12,000 USDC

| Number | Deliverable  | Specification                                                                                                                |
|--------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| 1.     | Backend code | Queries that help with recommending or finding similar Orgs; goal is making finding interesting Orgs to contribute to easier |

> Note: Marking this down as the last as it is quite aspirational. We will likely improve discovery a lot just with Milestone #1.
