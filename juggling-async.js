const http = require('http')
const bl = require('bl')
var res = []
var count = 0

function getter (ind) {
  http.get(process.argv[2 + ind], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      res[ind] = data.toString()
      count=count+1

      if (count == 3)
        res.map(elm=>console.log(elm))
    }))
  })
}

for (var i = 0; i < 3; i++)
  getter(i)