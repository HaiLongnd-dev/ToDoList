package com.todolist

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import com.facebook.react.ReactInstanceManager
import com.facebook.react.devsupport.DevSupportManager
import com.facebook.react.devsupport.DevSettings

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String = "ToDoList"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val devSupportManager: DevSupportManager = reactInstanceManager.devSupportManager
        val devSettings: DevSettings = devSupportManager.devSettings
        devSettings.addCustomDevOption("Open Custom Debugger") {
            // Custom action when selected
            devSupportManager.setRemoteDebugging(true)
        }
    }
}
