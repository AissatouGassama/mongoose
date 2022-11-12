const express= require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const {Schema}=mongoose;


mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser:true, useUnifiedTopology: true })
.then(() => console.log("Connected."))
.catch((error) => console.log(`Error
connecting to MongoDB ${error}`));

const PersonSchema= new Schema({
    name:{ type: String, required: true },
    age:Number,
    favoriteFoods:[String]
});

const User= mongoose.model("User",
PersonSchema);

const FirstPerson= new User({
    name: "Zahra",
    age: 15,
    favoriteFoods:['cbon', 'yassa']

});
FirstPerson.save() 
    .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      })

      User.create([
        {name:'Amy', age:20, favoriteFoods:['couscous', 'kaldou', 'riz'] },
        {name:'Astel', age: 25, favoriteFoods:['mafe', 'filet']},
        {name:'Fatou', age: 25, favoriteFoods:['mafe', 'kaldou', 'couscous']},
        {name:'Amy', age:40, favoriteFoods:['couscous', 'mborokhé', 'riz au poisson'] }

        
     ]);

     User.find({name:'Amy'}, function(err, datas){
      if (err){
        console.log(err);
      }else{
        console.log('function call', datas )
      }
     }
     );
  
     User.findOne({favoriteFoods:'mafe'}, function(err, food){
      if (err){
        console.log(err);
      }else{
        console.log('find food', food)
      }
     })







app.listen(3000, ()=>{
    console.log('server running on 3000')
});

