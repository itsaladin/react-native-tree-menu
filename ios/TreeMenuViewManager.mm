#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface TreeMenuViewManager : RCTViewManager
@end

@implementation TreeMenuViewManager

RCT_EXPORT_MODULE(TreeMenuView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
