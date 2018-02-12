var SortedList = function() {

this.items = [];
this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
        return a - b;
    });
   
}
SortedList.prototype.get     = function(pos) {
    if (pos > this.items.length) {
        return "OutOfBounds"
    } else {
        return this.items[pos - 1]
    }

}
SortedList.prototype.max     = function() {
    if(this.items.length === 0){
        return "EmptySortedList"
    } else {
        return this.items[this.items.length-1]
    }
    
}
SortedList.prototype.min     = function() {
    if(this.items.length === 0){
        return "EmptySortedList"
    } else {
        return this.items[0]
    }
}
SortedList.prototype.average = function() {
    var total = this.items.reduce(function(sum, num){
        return sum + num;
        
    }, 0);
    if(this.items.length === 0){
        return "EmptySortedList";
    } else {
        return total/this.items.length;
    }
}
SortedList.prototype.sum     = function() {
    var total = this.items.reduce(function(sum, num){
        return sum + num;
        
    }, 0);
    if(this.items.length === 0){
        return "EmptySortedList";
    } else {
        return total;
    }
}
module.exports = SortedList;

