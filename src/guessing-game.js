class GuessingGame {
    constructor(minval, maxval, res) {
      this.minval;
      this.maxval;
      this.res;
    }
  
    setRange(min, max) {
        this.minval = min;
        this.maxval = max;
    }
  
    guess() {
         this.res =((this.maxval-this.minval) / 2);
         return (this.minval + Math.ceil(this.res));
      
    }
  
    lower() {
        this.maxval = this.maxval - Math.floor(this.res);
    }
  
    greater() {
        this.minval = this.minval + Math.ceil(this.res);
    }
  }

module.exports = GuessingGame;
