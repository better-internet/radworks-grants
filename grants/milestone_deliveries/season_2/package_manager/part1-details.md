# Radicle Package Manager - Part 1 - Research Notes

## Overview
This gist is a summary and blog of research notes I took while researching the possibility of using Radicle as a platform for generating and distributing software packages, such as npm packages. This is part of a [research grant through Radicle](https://radicle.community/t/grant-application-package-manager/3122).

Here is a short summary video of this gist:

[![Watch the video](https://img.youtube.com/vi/RmfZo2QdV0A/hqdefault.jpg)](https://youtu.be/RmfZo2QdV0A)

## Summary
The scope of this preliminary research was to complete the [first part of the first milestone](https://radicle.community/t/grant-application-package-manager/3122#milestone-1-npm-compatibility-12) of the research grant: *generate an npm-compatible package from source code obtained from Radicle.* To exercise this part of the research, I created two node.js JavaScript code repositories:

- [add](https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/tree/master/README.md) ([GitHub](https://github.com/christroutner/add))is a simple JavaScript (JS) library with a single function, `add(x,y)`, which adds two numbers `x` and `y`.
- [test-add](https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkp3yg4jiw9xs5w4dr8oe8dwziqj5ccdyeo/tree/master/README.md) ([GitHub](https://github.com/christroutner/test-add)) exercises the `add()` function. It includes the `add` library as a dependency in its [`package.json`](https://app.radicle.xyz/seeds/pine.radicle.garden/rad:git:hnrkp3yg4jiw9xs5w4dr8oe8dwziqj5ccdyeo/tree/master/package.json#L12) file.

Experimenting with different formats, it was discovered that it **is** possible to add Radicle Seed Node URLs to a `package.json` file, in order to make Radicle function as a basic package repository. However, there are limitations in the current implementation of Seed Nodes.

## Research

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
