<!-- TITLE/ -->

<h1>device42-jira-node</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/kreig303/device42-jira-node" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/kreig303/device42-jira-node/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/kreig303/device42-jira-node" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/kreig303/device42-jira-node.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/kreig303/device42-jira-node#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/kreig303/device42-jira-node.svg" alt="Dev Dependency Status" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Sample code for a Node 8+ server-side app to accept data from Device42 and create a JIRA Issue with the result.

<!-- /DESCRIPTION -->


[![Greenkeeper badge](https://badges.greenkeeper.io/kreig303/device42-jira-node.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkreig303%2Fdevice42-jira-node.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkreig303%2Fdevice42-jira-node?ref=badge_shield)

---

## Required Software

- [Node 8](https://nodejs.org/download/release/latest-v8.x/)
- [Postman](https://www.getpostman.com/)
- [JIRA](https://www.atlassian.com/software/jira)
- [Device42](http://www.device42.com/download/)

### Node 8

```
$ git clone https://github.com/kreig303/device42-jira-node.git # add files locally
$ cd device42-jira-node # go to the directory
$ npm i # install all the things
$ npm test # ensure the install is kosher
$ npm run start:dev # start instance with debug logging
```

### Postman

- Load the collection from `/etc` into Postman.
- Trigger the `GET` action to verify the server is up and accepting connections.
- Trigger the `POST` action to get verification that the webhook is available.  It should return a `502` or `503` for now.

### JIRA

- Ensure you have a JIRA install either locally or in the cloud.
- Create `.env` file at the root with JIRA details (use `.env-sample` as a reference.)
- Trigger the `POST` action in Postman again.
- See if Issue was raised in your JIRA install.

### Device42

- Setup the appropriate webhook Endpoint in your Device42 installation.
- Now setup the Action in your Device42 installation with a reference to the Endpoint.
- Make changes per your Action and watch the results get sent to JIRA.

## Optional Software

- [Docker](https://www.docker.com/get-docker)

### Docker

- Make sure the `.env` file you need has already been created.

```
$ cd device42-jira-node # go to the directory
$ docker build -t device42app . # build docker image
$ docker run -p 5050:5050 device42app # execute docker image with port mapping
```

## API Documentation

API Documentation is available at (http://localhost:5050/docs) once installed.  Please note it is a very basic call i.e. the entire payload is not differentiated.

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/kreig303/device42-jira-node/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/kreig303/device42-jira-node/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://kreig.me">Kreig Zimmerman</a> — <a href="https://github.com/kreig303/device42-jira-node/commits?author=kreig303" title="View the GitHub contributions of Kreig Zimmerman on repository kreig303/device42-jira-node">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?



<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://kreig.me">Kreig Zimmerman</a> — <a href="https://github.com/kreig303/device42-jira-node/commits?author=kreig303" title="View the GitHub contributions of Kreig Zimmerman on repository kreig303/device42-jira-node">view contributions</a></li>
<li><a href="http://greenkeeper.io/">Greenkeeper</a> — <a href="https://github.com/kreig303/device42-jira-node/commits?author=greenkeeperio-bot" title="View the GitHub contributions of Greenkeeper on repository kreig303/device42-jira-node">view contributions</a></li></ul>

<a href="https://github.com/kreig303/device42-jira-node/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2017+ <a href="http://kreig.me">Kreig Zimmerman</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkreig303%2Fdevice42-jira-node.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkreig303%2Fdevice42-jira-node?ref=badge_large)