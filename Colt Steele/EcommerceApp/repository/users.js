const fs = require('fs');
const crypto = require('crypto');
const util = require('util')
const scrypt = util.promisify(crypto.scrypt);
const { parse } = require('path');
const Repository = require('./repository');

class UsersRepository extends Repository {
    async create(attrs) {
        attrs.id = this.randomID();
        
        const salt = crypto.randomBytes(8).toString('hex');
        const buf = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${buf.toString('hex')}.${salt}`
        };
        records.push(record);

        await this.wrileAll(records);
        return record;
    }

    async comparePassword(saved, supplied){
        // saved : password saved in our database. 'hashed.salt'
        // supplied : password given to us by a user trying sign in
        const [hashed, salt] = saved.split('.');
        const hashedSuppliedBuf = await scrypt(supplied, salt, 64);
        return hashed === hashedSuppliedBuf.toString('hex');
    }
}

//exporting code
module.exports = new UsersRepository('users.json');
