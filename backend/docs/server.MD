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


