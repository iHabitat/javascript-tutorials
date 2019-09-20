/**
 * 该脚本是用于测试agent执行任务时的超时场景。
 */
const http = require('http');

const options = {
  hostname: "192.168.68.92",
  port: "8777",
  path: "/manager/shell/execBatch",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    operator: "tangguike"
  },
};

const req = http.request(options, res => {
  let result = "";
  res.on("data", chunk => {
    result += chunk;
  });

  res.on("end", () => {
    const ret = JSON.parse(result);
    console.log("result: ", result);
    console.log(`detail: ${ret.data.detail}`);
  });
});

const command = JSON.stringify({
  ips: ['192.168.68.79', '192.168.68.64'],
  cmd: "sleep 30s",
  timeout: 2,
  async: false
});

req.write(command);
req.end();
