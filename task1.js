import http from 'k6/http';
import { check, sleep } from 'k6';
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {textSummary} from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
export const options = {

    thresholds: {
        "http_req_duration": ['p(95)< 3000'],
        "http_req_failed": ['rate < 0.01']
    },
    stages: [
        {
            duration: '10m',
            target: 200
        }
    ]
}
export default function () {
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
export function handleSummary(data) {
    return {
        "task1Report.html": htmlReport(data),
        stdout: textSummary(data, {indent: " ", enableColors: true}),
    };
}