# Changelog

## [Unreleased]

<!-- Please add new entries to the _top_ of this section. -->
- Add `--weights` to `sourcecred load` to provide weight overrides (#1224).

## [0.3.0]

- Display Timeline Cred in the UI (#1216)
- Calculate Timeline Cred, and save it on `sourcecred load` (#1212)
- Temporarily disable the Git plugin (#1210)
- Officially support node 10 and node 12 (#1205)
- Fail quicker and with information when using invalid GH token (#1161)
- Allow the user to save or upload weight settings (#1150)
- Allow tweaking weights on a per-node basis (#1143)
- Add the `pagerank` command (#1114)
- Add the `clear` command (#1111)
- Add description tooltips for node and edge types in the weight configuration UI (#1081)
- Add the `export-graph` command (#1110)
- Enable loading private repositories (#1085)
- Enable setting type weights to 0 in the UI (#1005)
- Add support for 🚀 and 👀 reaction types (#1068)
- Create one page per project, rather than having a selector (#988)

## [0.2.0]

- Cache GitHub data, allowing for incremental and resumable loading (#622)
- Hyperlink Git commits to GitHub (#887)
- Relicense from MIT to MIT + Apache-2 (#812)
- Display short hash + summary for commits (#879)
- Hyperlink to GitHub entities (#860)
- Add GitHub reactions to the graph (#846)
- Detect references to commits (#833)
- Detect references in commit messages (#829)
- Add commit authorship to the graph (#826)
- Add `MentionsAuthor` edges to the graph (#808)

## [0.1.0]

- Organize weight config by plugin (#773)
- Configure edge forward/backward weights separately (#749)
- Combine "load graph" and "run pagerank" into one button (#759)
- Store GitHub data compressed at rest, reducing space usage by 6–8× (#750)
- Improve weight sliders display (#736)
- Separate bots from users in the UI (#720)
- Add a feedback link to the prototype (#715)
- Support combining multiple repositories into a single graph (#711)
- Normalize scores so that 1000 cred is split amongst users (#709)
- Stop persisting weights in local store (#706)
- Execute GraphQL queries with exponential backoff (#699)
- Introduce a simplified Git plugin that only tracks commits (#685)
- Rename cred explorer table columns (#680)
- Display version string in the app's footer
- Support hosting SourceCred instances at arbitrary gateways, not just
  the root of a domain (#643)
- Aggregate over connection types in the cred explorer (#502)
- Start tracking changes in `CHANGELOG.md`
