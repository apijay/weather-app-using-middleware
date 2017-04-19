'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const saylentKey = '6135f78e52c9e3ca'
const API_ROOT = 'http://api.wunderground.com/api/'+saylentKey+'/conditions/q/';

const cityName = ['TX/Austin.json', 'CO/Denver.json'];

//const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
  all: page =>
    //requests.get(`/articles?limit=10`)
    requests.get(cityName[0])
    //   cityName.forEach(function (p1) {
    //       requests.get(p1);
    //   })
};

export default {
  Articles
};
