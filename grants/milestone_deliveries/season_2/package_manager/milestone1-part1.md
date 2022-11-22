# Milestone Delivery :mailbox: - Milestone 1, Part 1

**The [invoice form :pencil:](TODO) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/radicle-dev/radicle-grants/blob/main/docs/deliverables_guideline.md).**  

* **Application Document:** [Grant Application - Package Manager](https://radicle.community/t/grant-application-package-manager/3122)
* **Milestone Number:** Milestone 1, part 1

**Context** (optional)
The scope of this first part of the first milestone was to *Generate an npm-compatible package from source code obtained from Radicle*. While issues were discovered during this research, an solution for moving forward was found.

**Deliverables**
The [research notes](./milestone1-part1-details.md) are presented here as a deliverable for the first part of the first milestone. A summary video is included, in addition to written notes. It was determined that is **is** possible to build a JavaScript application without any dependence on GitHub or npm. JavaScript packages (dependencies) can be retrieved directly from Radicle Seed nodes (as git repositories).

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Generate an npm-compatible package from source code obtained from Radicle | [Details](./milestone1-part1-details.md) | Research notes |

**Additional Information**
Additional guidance is needed before moving on to the second and third parts of the fist milestone, but it is possible to move on directly to the fourth part. Here are the four parts of the first milestone:

| Number | Deliverable              | Specification                                                |
| ------ | ------------------------ | ------------------------------------------------------------ |
| 1.     | Package code             | Generate an npm-compatible package from source code obtained from Radicle |
| 2.     | Package signing          | Sign packages with Radicle keys                                           |
| 3.     | Package upload           | Research best way to upload packages                                      |
| 4.     | Verdaccio integration    | Research the best way to integrate with Verdaccio                         |

There were two outcomes from the first part of the research:
1. It **is not** possible to retrieve a binary packages directly from a Seed node.
2. It **is** possible to retrieve packages as a git repository from a Seed node.

When parts two (package signing) and three (package upload) were estimated, it was assumed that packages would be handled as binaries. Within that context, signing and uploading makes sense. But it's unclear how to approach package signing withing the context of using git repositories. It may not be necessary, since Radicle seed nodes already have signing integrated into the git repositories they host.

It may be appropriate to expand the context of the research, in order to evaluate the engineering necessary to support the distribution of binary files from Radicle seed nodes. It also remains to be seen if other programming languages can leverage the git repository feature, like npm does.

However, it is possible to continue on to part four (Verdaccio integration). The focus of this research would be to see if an npm mirror (Verdaccio) can be configured to mirror git repositories from Radicle seed nodes. The UX benefits from this stage of research would be very valuable to enterprise and business users of Radicle.
