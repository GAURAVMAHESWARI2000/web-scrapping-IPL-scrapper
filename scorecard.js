let request = require('request')
let cheerio = require('cheerio')
let chalk = require("chalk")
/* 
let homePage = "https://www.espncricinfo.com"
let url = homePage + "/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard"
 */

function processSingleMatch(url){
  //  console.log(url)
    request(url,cb)
}

function cb(err,respose,html){
    dataExtractor(html)
}

function dataExtractor(html){
    const $ = cheerio.load(html)
    let bothInningArr = $(".Collapsible")
    for(let i=0;i<bothInningArr.length;i++){
        let teamNameElem = $(bothInningArr[i]).find("h5")
        let teamName = teamNameElem.text()
        teamName = teamName.split("INNINGS")[0]
        teamName = teamName.trim()
        console.log(chalk.blue(teamName));

        let batsmanTableBodyAllRows = $(bothInningArr[i]).find(".table.batsman tbody tr")
        for(let j=0;j<batsmanTableBodyAllRows.length;j++){
            let tdArr = $(batsmanTableBodyAllRows[j]).find("td")
            if(tdArr.length==8){
                let playerName = $(tdArr[0]).text()
                console.log(playerName);
            }

        }

        console.log("````````````````````````````````````````");

    }  
}

module.exports = {
    psm : processSingleMatch
}