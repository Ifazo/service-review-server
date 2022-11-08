const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// name: dbService
// pass: C3hRlFXzFiDR1Zul


const uri = "mongodb+srv://dbService:C3hRlFXzFiDR1Zul@cluster0.qyb0v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    const serviceCollection = client.db("test").collection("services");
    // const service = { name: "Application Security", url:"https://i.ibb.co/0DsssKx/download-2.jpg", price:"$90", description: "Web applications, like anything else directly connected to the Internet, are targets for threat actors. Since 2007, OWASP has tracked the top 10 threats to critical web application security flaws such as injection, broken authentication, misconfiguration, and cross-site scripting to name a few. With application security, the OWASP Top 10 attacks can be stopped. Application security also prevents bot attacks and stops any malicious interaction with applications and APIs. With continuous learning, apps will remain protected even as DevOps releases new content." }
    app.get('/services', async(req, ))
    const result = await serviceCollection.insertOne(service);
    console.log(result);
  }
  finally {

  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})