const mongodb = require("mongodb")
const mongoclient = mongodb.MongoClient
const monurl = 'mongodb://127.0.0.1:27017'
const dname = "dataone"
mongoclient.connect(monurl, (error, ros) => {
  if (error) {
    return console.log("error")
  }
  const data = ros.db(dname)
  console.log("sccessfuly")
  data.collection("users").insertOne(
      {
          name: "waseem",
          age: 26,
          city: "jeddah"
      },
      (error, ros) => {
          if (error) {
              return console.log("error")
          }

          console.log("good")
      }
  )
  ///
  data.collection("users").insertOne(
      {
          name: "abdulhakim",
          age: 24,
          city: "jeddah"
      },
      (error, ros) => {
          if (error) {
              return console.log("error")
          }

          console.log("good")
      }
  )

  // /////////////////////////////
  data.collection("users").insertMany([
      {
          name: "ali",
          age: 26,
          city: "sanaa"
      },
      {
          name: "hassan",
          age: 40,
          city: "riyadh"
      },
      {
          name: "salem",
          age: 27,
          city: "abha"
      },
      {
          name: "mohammed",
          age: 27,
          city: "makkah"
      },
      {
          name: "hamed",
          age: 27,
          city: "taif"
      }, {
          name: "ahmed",
          age: 26,
          city: "adan"
      },
      {
          name: "ali",
          age: 27,
          city: "taiz"
      },
      {
          name: "hassan",
          age: 27,
          city: "ibb"
      },
      {
          name: "salem",
          age: 26,
          city: "abyan"
      },
      {
          name: "mohammed",
          age: 26,
          city: "makha"
      },
      {
          name: "hamed",
          age: 80,
      }], (error, ros2) => {
          if (error) {
              return console.log("error")
          }

          console.log("good")
      }
  )
  ////
  data.collection('users').find({ age: 27 }).toArray((error, data) => {
      if (error) {
          return console.log('error ')
      }
      console.log(data)
  })

  data.collection('users').find({ age: 27 }).limit(3).toArray((error, data) => {
      if (error) {
          return console.log('error ')
      }
      console.log(data)
  })

  //////////////
  

  data.collection('users').updateMany({ age: 27 }, {
    $set :{ name: "ahmed"  },
    $inc: { age: 4 }

  }).
    then((data1) => { console.log(data1.modifiedCount) })
    .catch((error) => { console.log(error) })


    /////////
    data.collection('users').updateMany({}, {
  
      $inc: { age: 10}
  
    }).
      then((data1) => { console.log(data1.modifiedCount) })
      .catch((error) => { console.log(error) })
/////////////
    data.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})
})

//