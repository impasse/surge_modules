const body = JSON.parse($response.body);

body.license = {
    status: 'sub',
    expireTime: 2145830400000,
};

$done({ body: JSON.stringify(body) })