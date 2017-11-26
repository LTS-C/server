
class Block {

    constructor(blockNum, previousHash, timestamp, data, hash, difficulty, minerSignature,minerSignatureIndex) {
        this.blockNum = blockNum+1;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.difficulty = difficulty;
        this.minerSignature = minerSignature;
        this.minerSignatureIndex = minerSignatureIndex;

    };
}

module.exports.Block = Block;
