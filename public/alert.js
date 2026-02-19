fetch("https://www.tim.pl/api/v1/graphql?ton=simpleCartProductsDetailsQuery", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pl,en-US;q=0.9,en;q=0.8,de;q=0.7,ru;q=0.6",
    "baggage": "sentry-environment=production,sentry-release=0.759.0,sentry-public_key=feb94a3aa429110bad28b78bf21a4fd0,sentry-trace_id=d5a5c212231699549ad3bcd898fb4e42,sentry-sampled=false",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not:A-Brand\";v=\"99\", \"Google Chrome\";v=\"145\", \"Chromium\";v=\"145\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sentry-trace": "d5a5c212231699549ad3bcd898fb4e42-9ede54ac8090006a-0",
    "traceparent": "00-b204be7ad4901ebb90cee849d5a764bc-58675fb4169fde40-01",
    "tracestate": "d5ce32ed-c59310fd@dtr=1;58675fb4169fde40;1;ea7c4b59f27d43eb;1771483959149EH265OEJ2RCQU751CQ2MQE0GNEF7AAG2;JFREDUHCHPQFFHHFNMECDPCAWHPRCFUW-0",
    "x-client-fingerprint": "21ff0f1bcab4edf01001a436303445d8",
    "x-dtpc": "1$284616975_279h26vJFREDUHCHPQFFHHFNMECDPCAWHPRCFUW-0e0"
  },
  "referrer": "https://www.tim.pl/aparatura-elektryczna",
  "body": "{\"operationName\":\"simpleCartProductsDetailsQuery\",\"variables\":{\"first\":1,\"sku_list\":[\"0004-00013-04519\"]},\"query\":\"query simpleCartProductsDetailsQuery($sku_list: [String], $first: Int = 30) {\\n  productsArea {\\n    products(sku_list: $sku_list, first: $first) {\\n      edges {\\n        node {\\n          _id\\n          sku\\n          stock {\\n            unit\\n            qty\\n            __typename\\n          }\\n          url\\n          singleImage\\n          supplier {\\n            url\\n            __typename\\n          }\\n          manufacturer {\\n            name\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
