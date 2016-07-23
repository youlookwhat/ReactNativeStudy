#import "ViewSnapshotter.h"
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTUIManager.h"

@implementation ViewSnapshotter

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(saveSnapshotToPath:(nonnull NSNumber *)reactTag
                  callback:(RCTResponseSenderBlock)callback)
{

  UIView *view = [self.bridge.uiManager viewForReactTag:reactTag];
  
  // defaults: snapshot the same size as the view, with alpha transparency, with current device's scale factor
  UIGraphicsBeginImageContextWithOptions(view.frame.size, NO, 0.0);

  [view drawViewHierarchyInRect:CGRectMake(0, 0, view.frame.size.width, view.frame.size.height) afterScreenUpdates:YES];
  UIImage *image = UIGraphicsGetImageFromCurrentImageContext();

  UIGraphicsEndImageContext();
  
//  dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0)
  
  dispatch_async(dispatch_get_main_queue(), ^{
    
    NSString * dataStr = [UIImageJPEGRepresentation(image, 0.1) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
    
    
    callback(@[[NSNull null], @{@"data":dataStr}]);
    
    
  });
  
  
}

@end
