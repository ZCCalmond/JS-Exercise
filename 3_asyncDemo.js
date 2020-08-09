const fetch = require("node-fetch");

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  // fetch(url)
  // .then(res=>res.json())
  // .then(column=>{
  //     console.log(`NAME:${column.name}`)
  //     console.log(`INTRO:${column.intro}`)
  // })

  const response = await fetch(url);
  const column = await response.json();

  console.log(`NAME:${column.name}`);
  console.log(`INTRO:${column.intro}`);
}

getZhihuColumn("feweekly");
