$httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
    const dataObject = JSON.parse(data);
    let { country, country_code, province, city, ip } = dataObject;
    // country = country_code == "CN" ? "中国" : country;
    const region = `地区：${country} ${province} ${city}`;
    ip = `免流IP：${ip}`;
    body={
        title: "当前免流信息",
        content: `${ip}\n${region}`,
        backgroundColor: "#268F81",
        icon: "iphone.circle.fill",
    }
    $done(body)
})
