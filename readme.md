# wikipedia peaky parser
A partially parsing parser


## Installation
Standard procedure to install the beauty

### Prerequisite
To install, you need to have previously installed in your machine
* nodejs - tested on v11.9.0
* npm - tested on v6.8.0
* yarn - tested on v1.13.0 (alternatively to npm)


### Installation
```
$ mkdir tmp && cd $_
$ git clone git@github.com:cunk111/wpp.git
$ cd wpp
$ yarn install
```

### Usage

#### To start the server
```
$ yarn run start
```
Server now runs on `http://localhost:3000`

#### To get some results
Use `curl`or tools like postman and send a `GET` request on root `/`
```
curl -sb -H "Accept: application/json" "http://localhost:3000"
```
You also can specify an extra route, such as `/Richard_Serra`, the parser will replace the original suffix (Pierre_Soulages) by what you provide, and try its best

### Results
You get the Exhibition History returned in the body
3 csv files are created at the root of the application
* `picture.csv` contains the uri of the artist's picture
* `history.csv` contains the exhibitions' info listed on the wiki
* `categories.csv` contains the categories linked to the artist on the plateform
