<!-- TITLE/ -->

<h1>device42-jira-node</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

Sample code for a Node.js server-side app to accept data from Device42 and create a JIRA Issue with the result.

<!-- /DESCRIPTION -->


---

## Install

### Software

- [Boron](https://nodejs.org/download/release/latest-boron/) [LTS](https://github.com/nodejs/LTS) release of Node.
- [Postman](https://www.getpostman.com/)
- [JIRA](https://www.atlassian.com/software/jira)
- [Device42](http://www.device42.com/download/)

### Node

```
$ git clone https://github.com/kreig303/device42-jira-node.git
$ cd device42-jira-node
$ npm install
$ npm start
```

### Postman

- Load the demo collection from `/etc` into Postman.
- Trigger the `POST` action to get verification that the API call connects.

### JIRA

- Create `.env` file with JIRA details (use `.env-sample` as a reference.)
- Trigger the `POST` action again in Postman.
- See if Issues were raised in your JIRA install.

### Device42

- Setup the appropriate webhook Endpoint in your Device42 installation.
- Now setup the Action in your Device42 installation with a reference to the Endpoint.
- Make changes per your Action and watch the magic happen.

---

## API Documentation

API Documentation is available at (https://localhost:5050/documentation) once installed.

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

<ul><li><a href="http://kreig.me">Kreig Zimmerman</a> — <a href="https://github.com/kreig303/device42-jira-node/commits?author=kreig303" title="View the GitHub contributions of Kreig Zimmerman on repository kreig303/device42-jira-node">view contributions</a></li></ul>

<a href="https://github.com/kreig303/device42-jira-node/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2017+ <a href="http://kreig.me">Kreig Zimmerman</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
