# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.1.0](https://github.com/sketch-hq/sketch-file-format/compare/v3.0.0...v3.1.0) (2019-11-01)


### Features

* typeScript support ([363ddb9](https://github.com/sketch-hq/sketch-file-format/commit/363ddb962cbd2961896bafbec8a681d2c34c86eb))


### Bug Fixes

* fix integration tests to use typescript module ([8849f23](https://github.com/sketch-hq/sketch-file-format/commit/8849f23f0b8abb8ed1cb31e2f9c26ae655faf070))

## [3.0.0](https://github.com/sketch-hq/sketch-file-format/compare/v2.0.0...v3.0.0) (2019-10-31)


### ⚠ BREAKING CHANGES

* The schemas will not validate document versions other than 121

### Features

* support for Sketch document version 121 ([b3dbe9b](https://github.com/sketch-hq/sketch-file-format/commit/b3dbe9b01d259e16b09080575f898f50d563bcde)), closes [#16](https://github.com/sketch-hq/sketch-file-format/issues/16)

## [2.0.0](https://github.com/sketch-hq/sketch-file-format/compare/v1.1.4...v2.0.0) (2019-10-31)


### ⚠ BREAKING CHANGES

* The schemas will no longer validate Sketch files for document versions less than 120

### Features

* add MIT license ([4ab5ff8](https://github.com/sketch-hq/sketch-file-format/commit/4ab5ff82e417077ffc06416312bbe1e8e3214c3d))
* support for Sketch document version 120 ([#18](https://github.com/sketch-hq/sketch-file-format/issues/18)) ([3d72640](https://github.com/sketch-hq/sketch-file-format/commit/3d726406bfe6a3c2a5803213cc3c6cbe906f29ff))

### [1.1.4](https://github.com/sketch-hq/sketch-file-format/compare/v1.1.3...v1.1.4) (2019-10-31)


### Bug Fixes

* add contextSettings and gradient as optional props to border objects ([5696383](https://github.com/sketch-hq/sketch-file-format/commit/569638390f5002447670ecb9342e624ec6d03223))
* add contextSettings and gradient as optional props to the fill object ([acf8bfc](https://github.com/sketch-hq/sketch-file-format/commit/acf8bfc6a2ae210179049a038842a0d879e21d10))
* add optional innerShadows style prop ([de81722](https://github.com/sketch-hq/sketch-file-format/commit/de8172260d331fc5e16df5ec186d44a53997ee69))
* the prop presetDictionary was the wrong type, also add to symbol master ([da62a1a](https://github.com/sketch-hq/sketch-file-format/commit/da62a1aee46b344f73272ead1d675d6564c95a7d))

### [1.1.3](https://github.com/sketch-hq/sketch-file-format/compare/v1.1.2...v1.1.3) (2019-10-31)

### [1.1.2](https://github.com/sketch-hq/sketch-file-format/compare/v1.1.1...v1.1.2) (2019-10-30)


### Bug Fixes

* add optional colorControls prop to style object ([ebe2819](https://github.com/sketch-hq/sketch-file-format/commit/ebe28199df54445ac8e7ecb87319fa3d5cf71f6a))

### [1.1.1](https://github.com/sketch-hq/sketch-file-format/compare/v1.1.0...v1.1.1) (2019-10-30)


### Bug Fixes

* add optional borderOptions style property ([1f30fef](https://github.com/sketch-hq/sketch-file-format/commit/1f30fef7d550bd9feb96ffb49bd8de21b8111a46))
* add optional exportPresets property ([00a6202](https://github.com/sketch-hq/sketch-file-format/commit/00a62022806ed6da0ba5aec3cf5454ade0a7dbac))

## [1.1.0](https://github.com/sketch-hq/sketch-file-format/compare/v1.0.3...v1.1.0) (2019-10-30)


### Features

* integrate the new sketch-reference-files dependency ([#17](https://github.com/sketch-hq/sketch-file-format/issues/17)) ([3b9bc98](https://github.com/sketch-hq/sketch-file-format/commit/3b9bc9891092ca63ae94d17ada9811908ac53d49)), closes [#13](https://github.com/sketch-hq/sketch-file-format/issues/13)

### [1.0.3](https://github.com/sketch-hq/sketch-file-format/compare/v1.0.2...v1.0.3) (2019-10-25)

### [1.0.2](https://github.com/sketch-hq/sketch-file-format/compare/v1.0.1...v1.0.2) (2019-10-18)


### Bug Fixes

* ensure package is freshly built before publish ([a770ef1](https://github.com/sketch-hq/sketch-file-format/commit/a770ef1117c6c61b082b865c780e3b9002a3b043))
* skip husky hooks on release auto-commits ([d644c45](https://github.com/sketch-hq/sketch-file-format/commit/d644c45f8a100291c87a1b1a0fdd2ca99935d429))

### [1.0.1](https://github.com/sketch-hq/sketch-file-format/compare/v1.0.0...v1.0.1) (2019-10-18)


### Bug Fixes

* add changelog to prettierignore, since its auto-generated ([8f3529e](https://github.com/sketch-hq/sketch-file-format/commit/8f3529e857fe76a5ba294291cdba08a34cab83ff))
* fix schema ids to point at unpkg raw file ([eebc490](https://github.com/sketch-hq/sketch-file-format/commit/eebc490adc7b8c8df468d33141a99393d083d8bd))

## 1.0.0 (2019-10-18)

* first release, supporting Sketch files with document version `119`