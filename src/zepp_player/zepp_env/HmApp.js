/*
    ZeppPlayer - ZeppOS, mostly Mi Band 7, simulator for PC
    Copyright (C) 2022  MelianMiko

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export class HmApp {
    constructor(runtime) {
        this.runtime = runtime;
    }

    startApp(options) {
        console.log("startApp", options);
    }

    gotoPage(conf) {
        console.log("gotoPage", conf)
        if(!conf.url) return;

        this.runtime.requestPageSwitch(conf);
    }

    reloadPage() {}
    setLayerX() {}
    setLayerY() {}
    exit() {}

    gotoHome() {
        this.runtime.onConsole("ZeppPlayer", [
            "gotoHome requested"
        ])
    }

    goBack() {
        this.runtime.back();
    }

    setScreenKeep() {}
    packageInfo() {
        const data = this.runtime.appConfig.app;
        return {
            type: data.appType,
            appId: data.appId,
            name: data.name,
            version: data.version.name,
            icon: data.icon,
            description: data.description,
            vendor: data.vendor,
            pages: []
        }
    }

    registerGestureEvent() {}
    unregisterGestureEvent() {}
    
    alarmNew() {}
    alarmCancel() {}

    registerKeyEvent() {}
    unregisterKeyEvent() {}
    unregistKeyEvent() {}

    registerSpinEvent() {}
    unregistSpinEvent() {}
}
