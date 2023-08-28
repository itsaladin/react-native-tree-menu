package com.treemenu

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.TreeMenuViewManagerInterface
import com.facebook.react.viewmanagers.TreeMenuViewManagerDelegate
import com.facebook.soloader.SoLoader

@ReactModule(name = TreeMenuViewManager.NAME)
class TreeMenuViewManager : SimpleViewManager<TreeMenuView>(),
  TreeMenuViewManagerInterface<TreeMenuView> {
  private val mDelegate: ViewManagerDelegate<TreeMenuView>

  init {
    mDelegate = TreeMenuViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<TreeMenuView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): TreeMenuView {
    return TreeMenuView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: TreeMenuView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "TreeMenuView"

    init {
      if (BuildConfig.CODEGEN_MODULE_REGISTRATION != null) {
        SoLoader.loadLibrary(BuildConfig.CODEGEN_MODULE_REGISTRATION)
      }
    }
  }
}
