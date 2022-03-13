## TP-WorkerWellbeing Backend
### Technologies:
1. NODEJS
2. EXPRESSJS
3. JADE (If we want to use the template. If we decide to create just a rest api then we can ignore it.)

### Usage
#### Installation
Once this repository in cloned. Navigate to
`backend` folder and run the following command 
to install the dependencies.

``npm install
``
#### Running the app
On MacOS or Linux, run the app with this command:

``DEBUG=myapp:* npm start``

On Windows Command Prompt, use this command:

``set DEBUG=myapp:* & npm start``

Further documentation on running can be found here:
https://expressjs.com/en/starter/generator.html

Then load http://localhost:3000/ in your browser to access the app.

Instructions on updating the swagger api documentation can be found here: https://www.section.io/engineering-education/documenting-node-js-rest-api-using-swagger/


---------------------------------------------------------------------------------------------------------------------
Server details:
###Server Details:
```
Host: zoetermeer.informatik.uni-mannheim.de (134.155.85.83)
Description:    Debian GNU/Linux 11 (bullseye)
Codename:       bullsey
```


###Mongo DB
Source:
```
deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse")
```
Installation Details:
```
db version v5.0.3
Build Info: {
    "version": "5.0.3",
    "gitVersion": "657fea5a61a74d7a79df7aff8e4bcf0bc742b748",
    "openSSLVersion": "OpenSSL 1.1.1k  25 Mar 2021",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "ubuntu2004",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```
Check Status:
```
sudo systemctl status mongod
```

Installation instructions: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d