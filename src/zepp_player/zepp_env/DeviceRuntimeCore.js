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

import {TextWidget} from "../ui/widget/TextWidget";

class HmUtilsMock {
    constructor(runtime, currentAppContext) {
        this.runtime = runtime;
        this.currentAppContext = currentAppContext;
    }

    gettextFactory(table, lang, fallback) {
        let data = table[fallback];
        if(table[lang]) data = table[lang];

        return (key) => data[key];
    }

    Lang = class {
        constructor(a) {}
    }

    getLanguage() {
        return this.runtime.deviceState.OS_LANGUAGE.value;
    }

    getPx() {
        return (v) => v;
    }

    measureTextWidth(text, text_size) {
        const canvas = TextWidget.drawText({
            text, text_size,
            _metricsOnly: true
        }, this.runtime);

        return canvas.width;
    }
}

export default class DeviceRuntimeCoreMock {
    version = "1.0.1-zepp-player";

    constructor(runtime, placement) {
        this.runtime = runtime;
        this.placement = placement;
        this.HmUtils = new HmUtilsMock(runtime);
    }

    WidgetFactory = class {
        constructor(a1, a2, a3) {}
    }

    HmDomApi = class {
        constructor(a1, a2) {}
    }

    HmLogger = class {
        static getLogger(name) {
            return {
                log: (data) => console.log("hmLogger", "[" + name + "]", data)
            }
        }
    }

    App(config) {
        const defTemplate = {
            __globals__: {},
            _options: config,
            onCreate: () => {}
        }

        return {
            ...defTemplate,
            ...config
        }
    }

    WatchFace(config) {
        this.placement.currentApp.current.module = config;
        return config;
    }

    Page(config) {
        this.placement.currentApp.current.module = config;
        return config;
    }
}
