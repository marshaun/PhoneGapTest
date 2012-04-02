#import <Cordova/CDV.h>

@interface MyPlugin : CDVPlugin

- (void) nativeFunction:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end