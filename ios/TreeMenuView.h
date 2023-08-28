// This guard prevent this file to be compiled in the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#ifndef TreeMenuViewNativeComponent_h
#define TreeMenuViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface TreeMenuView : RCTViewComponentView
@end

NS_ASSUME_NONNULL_END

#endif /* TreeMenuViewNativeComponent_h */
#endif /* RCT_NEW_ARCH_ENABLED */
