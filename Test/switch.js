function questionName(statusCode) {
    let answer;

    switch (statusCode) {
        case 200:
            answer = "Status Code : 200 Result : PASS - OK: Request successful";
            break;

        case 201:
            answer = "Status Code : 201 Result : PASS - Created: Resource created successfully";
            break;

        case 301:
            answer = "Status Code : 301 Result : WARNING - Moved Permanently: URL has changed";
            break;

        case 400:
            answer = "Status Code : 400 Result : FAIL - Bad Request: Check request payload";
            break;

        case 401:
            answer = "Status Code : 401 Result : FAIL - Unauthorized: Check auth token";
            break;

        case 403:
            answer = "Status Code : 403 Result : FAIL - Forbidden: Insufficient permissions";
            break;

        case 404:
            answer = "Status Code : 404 Result : FAIL - Not Found: Resource does not exist";
            break;

        case 500:
            answer = "Status Code : 500 Result : FAIL - Internal Server Error: Server issue";
            break;

        default:
            answer = `Status Code : ${statusCode} Result : UNKNOWN - Unhandled status code`;
    }

    return answer;
}

questionName(401);