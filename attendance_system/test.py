import hashlib
import pandas as pd
import time

c = 0


class Block:
    def __init__(self, data, prev_hash):
        self.data = data
        self.prev_hash = prev_hash
        self.hash = self.calc_hash()

    def calc_hash(self):
        sha = hashlib.sha256()
        sha.update(self.data.encode('utf-8'))
        return sha.hexdigest()


class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]

    def create_genesis_block(self):
        return Block("Genesis Block", "0")

    def add_block(self, data):
        prev_block = self.chain[-1]
        new_block = Block(data, prev_block.hash)
        self.chain.append(new_block)


def timing(data, rfid, c, blockchain):
    print('\n\n\n')
    print("class: ", c)
    user = pd.read_excel('class.xlsx')
    name = user['NAME'].values
    id = user['ID'].values
    bl = []

    for i in rfid:
        if i in id and i not in bl:
            bl.append(i)
            ti = data[data['RFID UID'] == i]['Time'].values
            inta = 0
            outa = 0
            temp = 0
            for t in ti:
                if temp % 2 == 1:
                    outa = outa + t.minute
                else:
                    inta = inta + t.minute
                temp += 1
            if inta > outa:
                outa += 60

            if outa-inta > 45:
                user.loc[user['ID'] == i, c] = 'P'

            else:
                user.loc[user['ID'] == i, c] = 'A'

    for i in id:
        if i not in rfid:
            user.loc[user['ID'] == i, c] = 'A'

    # user.to_excel('class.xlsx', index=False)
    user = pd.read_excel('class.xlsx')
    blockchain.add_block(str(user['ID']+user['NAME']+str(c)+user[c]))


blockchain = Blockchain()
while(True):
    data = pd.read_excel('record.xlsm')
    user = pd.read_excel('class.xlsx')
    name = user['NAME'].values
    id = user['ID'].values

    date = data['Date'].values
    tim = data['Time'].values
    rid = data['RFID UID'].values

    c += 1
    timing(data, rid, c, blockchain)

    if c == 6:
        break
    time.sleep(10)

    for block in blockchain.chain:
        print('data:', block.data, '\n')
        print('prev hash:', block.prev_hash, '\n')
        print('hash: ', block.hash, '\n')

    print('------------------------------------------')
