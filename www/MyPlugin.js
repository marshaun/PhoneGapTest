var MyPlugin = {
    
callNativeFunction: function (success, fail, resultType) {
    return Cordova.exec( success, fail, 
                        "com.shaunmartin.MyPlugin", 
                        "nativeFunction", 
                        [resultType]);
}
};