var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

request('http://www.stilltasty.com/fooditems/index/16374', (error, response, body) => {
  if (error) throw error
  var $ = cheerio.load(body)
  $(table > tbody).each(function (index) {
    var refrigerator = $(this).find(td.sliceMainLeft).find(img(alt = 'refrigerator'))
    console.log(`Cheking what nodes are returned: ${refrigerator}`)
    var days = refrigerator.parent().find(td.days).text().trim()
    console.log(`Lifespan : ${days}`)
    fs.appendFileSync('lifespan.txt', days)
  })
})
