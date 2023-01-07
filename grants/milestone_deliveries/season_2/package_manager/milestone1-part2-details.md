# Radicle Package Manager - Part 2 - Research Notes

This summary report extends [the first part of research](https://gist.github.com/christroutner/0ca3006b2d3be3122d5ef195e78b7eca). This second part of the research focuses on [Part 4 of Milestone 1 of the research grant](https://radicle.community/t/grant-application-package-manager/3122#milestone-1-npm-compatibility-12): Verdaccio integration. As the research unfolded, it became clear that it would be best to focus on part 4 (Verdaccio integration) first, because the lessons learned from this research informs the discussion and research for part 2 (package signing) and part 3 (package uploads).

This written report summarizes the research in [this video](https://youtu.be/8aF2febVy7A). That video drills down into a lot of the technical details, whereas this report summarizes the reseach at a high-level. This report will be shared with the Radicle community in order to foster discussion on the trade-offs around package signing and security.

## Summary
The report below explains what Verdaccio is, and why integrating Radicle is valuable. It then walks through different techniques for integration which worked and did not work. The conclusions however are not complete without additional discussion and research around package signing and security.

## Research

### What Is Verdaccio & Why Integrate Radicle?

Verdaccio does many things, but it is primarily used as an 'npm proxy'. But first, it's important to differentiate between [npmjs.com](https://npmjs.com) and `npm` the command-line tool:
- npmjs.com is a centralized package repository that hosts libraries, which JavaScript and several other programming lanaguages depend on.
- `npm` is a command-line tool used to download packages from npmjs.com.

The `npm` tool can be configured to get its packages from a locally hosted Verdaccio instance, instead of npmjs.com. What Verdaccio does is download the package one time from npmjs.com, and then retains that copy. It will then serve the cached copy on subsequent requests. This is particularly useful on those rare days when npmjs.com has networking issues. Developers are able to continue working, even if npmjs.com is not accessible.

Verdaccio is commonly used by enterprises, but it is also heavily used by individual developers and small teams. Integrating Radicle would be particularly valuable, because developers could 'opt in' to using Radicle without changing their workflow at all. The workflow between the developer and Verdaccio would not change at all. Only the connection between Verdaccio and Radicle Seed nodes needs to be considered. Furthermore, existing projects can gradually replace existing npm dependencies with Radicle-sourced dependencies. *Not changing the UX (user experience), is the best UX.*

![image](https://user-images.githubusercontent.com/9870991/206744419-57740c80-8450-4478-a076-e983b6b0aa93.png)

Integrating Radicle with Verdaccio is a first step towards general integrations with other package managers like `brew`, `tea`, `pip3`, and others.

## What Works
Several approaches to integration were considered. The goal from [the first report and video](https://gist.github.com/christroutner/0ca3006b2d3be3122d5ef195e78b7eca) was to generate an npm-compatible package from a git repository hosted by a Radicle Seed node. The goal of this second stage of research is to serve that package through Verdaccio. This section focuses on the techniques that successfully cached the package in Verdaccio, and it highlights some of the security considerations to foster additional discussion and research. The next section (What Does Not Work) will discuss techniques that were not able to successfully cache the package with Verdaccio.

*Side Note:* In the [research video](https://youtu.be/8aF2febVy7A) that compliments this report, solutions are presented with 'what does not work' first, and 'what works' last. In this written report, the order has been reversed, displaying the best options first, and the worst options last.

### Serving Packages with file-proxy
In [this first report](https://gist.github.com/christroutner/0ca3006b2d3be3122d5ef195e78b7eca) it was shown that a git repository could be packaged as a .tgz file (which makes it a compatible npm package), and that file can be stored in the repository itself. This allows any git tag to be designated as a '[release](https://radicle.community/t/software-releases-on-radicle/2786)', and leverages the [Radicle identity and security model](https://app.radicle.xyz/seeds/clients.radicle.xyz/rad:git:hnrkx7ruakgb9ozzi7atwb1rh6moq8pjonp6o/tree/8cd1561688462e2fcb234956b6f5916c42bdf4fa/0001-heartwood.md).

The stumbling block in the first report was that Radicle Seed nodes do not directly serve individual files. The entire git repository must be downloaded. As a workaround, a web app called [file-proxy](https://github.com/christroutner/file-proxy) was created. This is a simple proof-of-concept prototype. For example, here is a URL that will download the `add-1.0.0.tgz` package from the first report:

- http://fullstackbch.nl:5020/files/pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/add-1.0.0.tgz

This web app uses this format: `/files/:seedUrl/:urn/:filename` where
- *:seedURL* is the URL for the Radicle Seed node that contains the git repository.
- *:urn* is the URN that identifies the git repository.
- *:filename* is the name of the file to retrieve. It must exist in the root directory of the repository.

Using this URL, the npm dependencies look like this:

```
"dependencies": {
  "add": "http://fullstackbch.nl:5020/files/pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/add-1.0.0.tgz"
}
```

This form of URL can be cached with Verdaccio. It also leverages the exising security model of Radicle, since the file comes directly from a repository hosted by a Radicle Seed node. This file-download feature can exist as a stand-alone app (like file-proxy), or it could be integrated directly into Radicle Seed nodes.

### Hosting Packages with Arweave or Filecoin
A second approach that 'worked' (in terms of the package being cached by Verdaccio), was uploading the package file to Arweave or Filecoin. Filecoin was used for the research, as the workflows are better understood. But Arweave has expressed interest in working with Radicle, and may be willing to fund the development of an automated workflow for uploading Radicle releases to Arweave. Both Filecoin and Arweave have APIs that can allow developers to create completely automated release workflows.

Using [web3.storage](https://web3.storage), which is a gateway for uploading files to Filecoin, the `add-1.0.0.tgz` package was manually uploaded:

- https://bafybeigatd6qj46j2lnym25qvdv6oc6c4tdtl4zdqsoteyzolgangtnooe.ipfs.w3s.link/ipfs/bafybeigatd6qj46j2lnym25qvdv6oc6c4tdtl4zdqsoteyzolgangtnooe/add-1.0.0.tgz

Using this URL, the npm dependencies look like this:

```
"dependencies": {
  "add": "https://bafybeigatd6qj46j2lnym25qvdv6oc6c4tdtl4zdqsoteyzolgangtnooe.ipfs.w3s.link/ipfs/bafybeigatd6qj46j2lnym25qvdv6oc6c4tdtl4zdqsoteyzolgangtnooe/add-1.0.0.tgz"
}
```

This form of URL can also be cached by Verdaccio. However, in this use-case, the file is not coming directly from a Radicle Seed node, so the Radicle security model can not be leveraged. An independent package signing and security model would need to be applied, to prevent [supply chain attacks](https://snyk.io/blog/npm-security-preventing-supply-chain-attacks/).

### What Did Not Work
There were two techniques explored that did not 'work' in the sense that Verdaccio was not able to cache the files.

#### git+https
As discussed in [the first report](https://gist.github.com/christroutner/0ca3006b2d3be3122d5ef195e78b7eca), it's possible to directly use the git repository hosted by the Radicle Seed node within a `package.json` file. The dependency looks like this:

```
"dependencies": {
  "add": "git+https://pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy.git"
}
```

An advatage of this format is that it works today, and it leverages the existing security model used by Radicle. The disadvantage is that it can not be cached by Verdaccio, and if the Seed Node goes down, the developer can not install their dependencies. If there are multiple dependencies that call out to multiple Seed nodes, the risk of failure increases.

#### git archive --remote
When reaching out to the Clients team for additional input and ideas, one suggestion was to leverage the `git archive` command in a format that looks like this:

- `git archive --remote=https://<address>/repo.git <branch|HEAD> /some/path/file.txt | tar -xO /some/path/file.txt > /tmp/file.txt`

In theory, this command would allow for retrieval of a single file within a git repository hosted by the Seed node.

While investigating this tip, the following results were discovered:

This `git archive` command fails with a timeout error, because `git://` protocol is not supported by Radicle Seed nodes. Only `https://` protocol is currently supported by Radicle Seed nodes.

- `git archive -v --remote=git://pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy.git --depth=1 --format=zip --output=./example.zip master`

That format could potentially work if Seed nodes were modified to support the git protocol.

This command fails with the error `fatal: operation not supported by protocol`. This is because the `https://` protocol is not supported by the `git archive` command.

- `git archive -v --remote=https://pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy.git --depth=1 --format=zip --output=./example.zip master`

## Conclusion
The scope of this part of the research was to investigate how npm packages, generated from git repositories stored on Radicle Seed nodes, could be cached with Verdaccio. It showed that two techniques were successful at caching the package with Verdaccio:

- The [file-proxy](https://github.com/christroutner/file-proxy) prototype app
- Uploading packages to Filecoin or Arweave

It also showed that these two techniques were not successful at caching the package with Verdaccio:
- git+https
- git archive --remote

In addition to caching (or not), security considerations are called out. These security considerations will be the subject of the next leg of research, which will start with a discussion in the [radicle.community](https://radicle.community) forum.
