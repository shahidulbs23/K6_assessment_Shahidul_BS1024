# K6_assessment_Shahidul_BS1024

1. Create an NPM project name as ‘k6_assessment_your_name’

2. Write a script for the stress test:

a) target 200

b) duration 10 minutes

c) acceptance metrics

    i) http_req_duration: [‘p(95)< 3000ms’]

    ii) http_req_failed: [‘rate < 0.01’]

 

2. Write a script based on the info:

a) 30 request per second

b) duration 2 minutes

c) acceptance metrics

    i) http_req_duration: [‘p(95)< 5000ms’]

    ii) http_req_failed: [‘rate < 0.05’]

    iii) http_reqs: [‘rate > 25’]
