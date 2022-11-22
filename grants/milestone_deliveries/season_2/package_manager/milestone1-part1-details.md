# Radicle Package Releases Research Notes

## Overview
This gist is a summary and blog of research notes I took while researching the possibility of using Radicle as a platform for generating and distributing software packages, such as npm packages. This is part of a [research grant through Radicle](https://radicle.community/t/grant-application-package-manager/3122).

Here is a short summary video of this gist:

[![Watch the video](https://img.youtube.com/vi/RmfZo2QdV0A/hqdefault.jpg)](https://youtu.be/RmfZo2QdV0A)

## Summary
The scope of this preliminary research was to complete the [first part of the first milestone](https://radicle.community/t/grant-application-package-manager/3122#milestone-1-npm-compatibility-12) of the research grant: *generate an npm-compatible package from source code obtained from Radicle.* To exercise this part of the research, I created two node.js JavaScript code repositories:

- [add](https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/tree/master/README.md) is a simple JavaScript (JS) library with a single function, `add(x,y)`, which adds two numbers `x` and `y`.
- [test-add](https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkp3yg4jiw9xs5w4dr8oe8dwziqj5ccdyeo/tree/master/README.md) exercises the `add()` function. It includes the `add` library as a dependency in its [`package.json`](https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkp3yg4jiw9xs5w4dr8oe8dwziqj5ccdyeo/tree/master/package.json#L12) file.

### .tgz Packages
In the conventional workflow (using npm), a new JS library is uploaded to npm using the `npm publish` command. This packages the code repository into a .tgz (tar-gunzip) file. The rules for building an npm package is [defined here](https://docs.npmjs.com/about-packages-and-modules). I was able to manually create such an npm package by using [these commands](https://www.cyberciti.biz/faq/how-to-create-tar-gz-file-in-linux-using-command-line/) to package the [add Radicle repository](https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/tree/master/README.md) into a .tgz file.

I was then able to include the `add` library as a dependency in the `test-add` repository, by adding it to the `package.json` library like this:

```
"dependencies": {
  "add": "../add/add-1.0.0.tgz"
}
```

This worked, but has the significant drawback of requiring the .tgz file to be downloaded locally. It would be much better to include the dependency via URL like this:

```
"dependencies": {
  "add": "https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/tree/master/add-1.0.0.tgz"
}
```

However, Radicle currently does not have the ability to serve single files from a Seed node. Until that changes, this more conventional method of including the dependency is not possible.

If the ability to serve files from a Seed node was developed, this would be the perferred way to distributing packages. The .tgz files are optimized by removing uncessary files, and then significantly compressed. This makes it the optimal method for distributing packages.

### Git Packages
An alternative way of including packages can leverage Git. Here is what the `test-add` dependency looks like using this method:

```
"dependencies": {
  "add": "git+https://pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy.git"
}
```

This method currently works with Radicle, because it leverages the Git server feature of the Seed nodes.

## Conclusion
The vast majority of the workflow, for publishing and serving packages via Radicle is already in place. Using the Git package format, it is possible to write JavaScript applications that have code dependencies in other Radicle repositories. This can be leveraged to eliminate any dependence on centralized platforms like GitHub or npm.  

It remains to be seen if this Git package format can be leveraged by other programming languages and package managers. It also remains to be seen if this method of package delivery can be integrated into package proxies like [Verdaccio](https://verdaccio.org/).

If Seed nodes had the ability to deliver single, binary files from within a repository, it would allow for more resiliant package delivery. However, the lack of that feature will not derail the continued research into the next milestones of this grant.


# Logs
Below are logs of the time I spent on this project, and notes I took while conducting research and interviews.

### 10/28
- started at 8AM. Stopped at 8:45AM. = 0.75 hr

Meeting with bordumb.eth about Areweave + Radicle grant.

Notes:
- Want package manager feature, with package signing.
- Needs a road to desired features, even if not fully featured at first.
- We should have another meeting with one of the guys interested in code attestation
- Development -> Clients + Heartwood on Discord
  - Clients is the web client and other clients
  - heartwood is p2p protocol
  - https://github.com/radicle-dev/heartwood/
- Web interface: https://github.com/radicle-dev/radicle-interface

We're going to schedule another meeting with the technical guys, to figure out what is desired in a package manager.

### 11/7
- started at 7AM. Stopped at 8AM. = 1 hr

Meeting with bordum and Radicle team about the package manager.

I've briefly evaluated the following package managers:
- npm
- tea
- apt
- GitHub
- Filecoin
- Verdaccio

Notes:
- Same key used in Radicle can be used for package signing.
- GitHub has a blueprint for modifying existing package managers to use a new service.
- We discussed using Verdaccio and modifying it to pull from Radicle instead of npm.
  - We would need a mapping between npm packages and Radicle repositories
  - It is possible to retrieve a single file from a Radible repo, without downloading the whole repo (yes, but feature needs to be built)

Open questions:
 - Can Verdaccio be modified to use a Radicle middleware?
 - Can we leverage npm's vulnerability scanning?
 - How would package signing work?
 - Can this system be used for arbitrary binaries?
 - How to handle naming conflicts?
	- Github package manager is the blueprint to follow here.

### 11/7
- started at 10AM. Stopped at 1PM = 3 hrs
Radicle

Creating a radicle grant for the package-manager that I discussed with the team this morning.

Grants Discourse post:
https://radicle.community/t/readme-applying-for-a-radicle-grant-start-here/2646

Reading through Radicle Grants repo:
https://github.com/radicle-dev/radicle-grants

### 11/18
- started at 8AM. Stopped at 9AM. = 1 hr

The first 10% ($1,200) of the grant came through. Reviewing additional threads on the forum that everyone suggest I read.

package manager grant application:
https://radicle.community/t/grant-application-package-manager/3122/4?u=bordumb

"Software releases on Radicle" thread:
https://radicle.community/t/software-releases-on-radicle/2786
- This thread tries to reach consensus on what makes a 'release'. General consensus is that any Git tag can be a release. And the release can be made more official by including signing from one or more people.

Scope of this first milestone (and payment) is npm compatibility. So the goal is to generate an npm package from a Radicle code repository, and then disect the result in order to understand how a raw repository is turned into an NPM package.

### 11/20
- started at 7AM. Stopped at 8AM. = 1 hr

Reading up on heartwood:
https://app.radicle.xyz/seeds/clients.radicle.xyz/rad:git:hnrkx7ruakgb9ozzi7atwb1rh6moq8pjonp6o/tree/8cd1561688462e2fcb234956b6f5916c42bdf4fa/0001-heartwood.md

Notes:
- signed refs - identifies a repository. Is a signed message by the maintainer of the repo contents.
- project - a repository with an identity document
- seed - a node that hosts and serves projects


Started researching npm packages:
https://docs.npmjs.com/about-packages-and-modules

### 11/21
- started at 6:15AM. Stopped at 7:30AM. = 1.25 hr

Focus for today is to create a simple npm library from a radicle repository, the dissect it.

Created GitHub repo for simple add library:
https://github.com/christroutner/add

Radicle project ID:
rad:git:hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy
https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/tree

When running `npm publish` the contents of the repo are added to a .tgz (tar + gzip) archive, and that is uploaded to npm. This is the 'release' package.

https://askubuntu.com/questions/83868/compress-in-tgz
- To create `backup.tgz` from folder `/home/user/project`:
  - tar -cvzf backup.tgz /home/user/project
- To exact:
  - tar -xvzf backup.tgz

Using the above command, I was able to manually create a .tgz file from the add directory. I then created a new `test-add` directory with a new JS program, and I was able to include the .tgz file as a dependency.

If I download the .tgz file locally, I can include it just fine. However, that is not the standard development workflow.

I tried to add the .tgz file to the `add` library repository and retrieve it that way. Here is the URL for that file:
https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/tree/master/add-1.0.0.tgz

I tried to add that URL to the package.json file for the `test-add` test app, but it was not able to download the .tgz file when I ran `npm install`. The reason is that that URL downloads HTML content, not the raw binary file. I asked in the Discord channel, and it appears there is no way (currently) to download raw file content with a URL from a seed node.

### 11/21
- started at 9:45AM. Stopped at 10:15AM. = 0.5 hr
- started at 10:45AM. Stopped at 12:45PM. = 2 hrs
- started at 2:15PM. Stopped at 3PM. = 0.75 hr

Summarizing my findings and hours in a GitHub gist.

Radicle repository for the test-add program:
rad:git:hnrkp3yg4jiw9xs5w4dr8oe8dwziqj5ccdyeo
https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkp3yg4jiw9xs5w4dr8oe8dwziqj5ccdyeo/tree

Got stuck with the lack of ability to serve .tgz files directly from a Radicle repo, but then I discoverd that the Git format works. Spent signficant time researching it, and summarizing my findings in a gist. Also shot a video summary.

Edited and finalized the gist with my research thus far.
