# Milestone Delivery :mailbox: - Milestone 1, Part 1

**The [invoice form :pencil:](TODO) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/radicle-dev/radicle-grants/blob/main/docs/deliverables_guideline.md).**  

* **Application Document:** [Grant Application - Package Manager](https://radicle.community/t/grant-application-package-manager/3122)
* **Milestone Number:** Milestone 1, part 1

**Context**

The scope of this first milestone was to assess the feasibility of using Radicle as a package repository, for serving library packages such as the ones used by [npm](https://npmjs.org). The npm/JavaScript/GitHub ecosystem is very popular, and the research was conducted within that context.

**Deliverables**

The [research notes](./milestone1-part1-details.md) are presented here as a deliverable for the first milestone. Summary videos are included, in addition to written notes. It was determined that it **is** possible to build a JavaScript application without any dependence on GitHub or npm. JavaScript packages (dependencies) can be retrieved directly from Radicle Seed nodes (as git repositories). There is some nuance with using Radicle as a package repository, which the research notes expand on.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Generate an npm-compatible package from source code obtained from Radicle | [Details](./milestone1-part1-details.md) | Research notes |
| 2. | Verdaccio Integration | [Details](./milestone1-part2-details.md) | Research notes |
| 3. | Package Signing & Security | [Details](https://radicle.community/t/discussion-package-signing-security/3157) | Discussion Thread |

## Summary

In [Part 1](./milestone1-part1-details.md), the JavaScript/npm/GitHub ecosystem was the lens used to evaluate the feasibility of using Radicle as both a code repository *and* a package repository. It was discovered that Radicle code repositories could be packaged into a binary file that is acceptable for use with the npm package manager.

It was discovered that Radicle Seed nodes can not serve single files, only whole repositories. This creates a limitation with using them to deliver packages. An alternative format of addressing dependencies in `package.json` makes it possible to overcome this limitation.

In [Part 2](./milestone1-part2-details.md), integration with Verdaccio was considered. [Verdaccio](https://verdaccio.org/) is an npm proxy. The goal was to have it preferentially serve and cache packages from Radicle, but retain the ability to serve npm packages. In this way, the existing user experience (UX) is unchanged, which is good UX. The users can simply ‘opt in’ to using decentralized infrastructure without changing their workflow at all.

Due to the limitations discovered in Part 1, it is not possible to integrate Verdaccio with Radicle in a secure way. A proof-of-concept app named [file-proxy](https://github.com/christroutner/file-proxy) was developed, for serving single files from a Radicle repository. This feature could be integrated into Radicle Seed nodes, or operated as a stand-alone app on the same server as Verdaccio. This 'middleware' allows for secure retrieval of packages, under certain conditions. It also allows caching of packages by Verdaccio, which other methods do not.

[Part 3](https://radicle.community/t/discussion-package-signing-security/3157) involved some initial research on [supply chain attacks](https://snyk.io/blog/npm-security-preventing-supply-chain-attacks/) and [the package signing workflow used by npm](https://docs.npmjs.com/about-registry-signatures). It concluded with a discussion with the Radicle developer community.

The conclusion of the discussion was that Radicle is not in place to leverage a sophisticated package signing workflow, such as the one employed by npm. Instead, Radicle has an identity-based security model for its code repositories. It is best to retrieve files directly from Radicle repositories in order to leverage that existing security model.

In order to securely deliver packages, the feature provided by file-proxy needs to meet one of these two conditions:
- It needs to be integrated into Radicle Seed nodes so that individual files (packages) can be served directly from Radicle Seed nodes.
- A stand-alone file retrieval app like file-proxy needs to live on the same machine as Verdaccio. The focus here is that file-proxy is only one hop away from the Radicle Seed nodes, minimizing trust and eliminating the opportunity for a supply chain attack.

If one of those conditions are met, then the existing identity-based security model of Radicle can be leveraged to securely deliver packages to developers consuming them in their software.

## Conclusion

In the current state of Radicle's development, it **is** possible to use it as a package repository, in addition to a code repository. A few tools are required to overcome limitations:

- [file-proxy]() can be used to retrieve individual files (packages) from a Radicle Seed node.
- [Verdaccio]() can locally cache those packages served by file-proxy, and it can also fall-back to retrieve packages from npmjs.org.

This configuration leverages the existing security model of Radicle repositories. While there are a few extra steps, it is currently possible for developers to ween themselves off of centralized package repositories like [npm](https://npmjs.org) and [GitHub Packages](https://github.com/features/packages).
