var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    ++size;
    for(var i = size; i > 0; --i) {
        storage[i] = storage[i-1];
    }
    storage[0] = value;
  };

  instance.dequeue = function(){
    if(size > 0) {
      var temp = storage[--size];
      delete storage[size];
      return temp;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
