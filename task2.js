import http from 'k6/http';

import {sleep, check} from 'k6';

import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

import {textSummary} from "https://jslib.k6.io/k6-summary/0.0.1/index.js";



export const options = {

    scenarios: {     // 30 request per second, duration 2 minutes
        constant_vus: {
            executor: 'constant-vus',
            vus: 30,
            duration: '2m',
        },
    },

    thresholds: {
        http_req_duration: ['p(95)<5000'],
        http_req_failed: ['rate<0.05'],
        http_reqs: ['rate>25'],
    },
};
export default function () {
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1);
}
export function handleSummary(data) {

    return {
        "task2_Report.html": htmlReport(data),
        stdout: textSummary(data, {indent: " ", enableColors: true}),
    };
}