import { PersistentStorage } from "../zepp_player/PersistentStorage.js";
import GifRecorder from "./GifRecorder.js";

export class ToolbarManager {
    static player = null;
    static currentLevel = 0;
    static withOverlay = true;

    // UI Elements
    static toggleMode = document.getElementById("toggle_aod");
    static toggleEventZones = document.getElementById("toggle_events");
    static togglePause = document.getElementById("toggle_pause");
    static toggleShift = document.getElementById("toggle_shift");
    static toggleConsole = document.getElementById("toggle_console");
    static toggleEditor = document.getElementById("toggle_edit");
    static toggleFrames = document.getElementById("toggle_overlay");
    
    static doReloadBtn = document.getElementById("do_reload");
    static doExportBtn = document.getElementById("do_export");
    static doGifBtn = document.getElementById("do_gif");
    static doRotateBtn = document.getElementById("do_rotate");

    static viewConsole = document.getElementById("view_console");
    static viewEditor = document.getElementById("view_edit");

    static init(player) {
        ToolbarManager.player = player;

        // Load saved settings
        if(localStorage.zepp_player_editor === "true") {
            ToolbarManager.viewEditor.style.display = "";
        }
        if(localStorage.zepp_player_console === "true") {
            ToolbarManager.viewConsole.style.display = "";
        }
        if(localStorage.zepp_player_overlay === "false") {
            ToolbarManager.withOverlay = false;
        }
        ToolbarManager._refresh();

        // Bind onClick events
        ToolbarManager.toggleMode.onclick = ToolbarManager.doToggleMode;
        ToolbarManager.toggleEventZones.onclick = ToolbarManager.doToggleEventZones;
        ToolbarManager.togglePause.onclick = ToolbarManager.doTogglePause;
        ToolbarManager.doExportBtn.onclick = ToolbarManager.doExport;
        ToolbarManager.toggleShift.onclick = ToolbarManager.doToggleShift;
        ToolbarManager.doReloadBtn.onclick = ToolbarManager.doReload;
        ToolbarManager.toggleConsole.onclick = ToolbarManager.doToggleConsole;
        ToolbarManager.toggleEditor.onclick = ToolbarManager.doToggleEdit;
        ToolbarManager.doGifBtn.onclick = ToolbarManager.doGif;
        ToolbarManager.doRotateBtn.onclick = ToolbarManager.doRotate;
        ToolbarManager.toggleFrames.onclick = ToolbarManager.doToggleFrames;

        document.addEventListener("keypress", ToolbarManager.handleKeypress);
    }

    static handleKeypress(e) {
        switch(e.key) {
            case "A":
                ToolbarManager.doToggleMode();
                return;
            case "P":
                ToolbarManager.doTogglePause();
                return;
            case "S":
                ToolbarManager.doToggleShift();
                return;
            case "Z":
                ToolbarManager.doToggleEventZones();
                return;
            case "W":
                ToolbarManager.doReload();
                return;
            case "D":
                ToolbarManager.doExport();
                return;
            case "c":
                ToolbarManager.doToggleConsole();
                return;
            case "e":
                ToolbarManager.doToggleEdit();
                return;
        }
    }

    /**
     * Update buttons active/inactive states
     */
    static _refresh() {
        const data = [
            [ToolbarManager.toggleEditor, localStorage.zepp_player_editor === "true"],
            [ToolbarManager.toggleConsole, localStorage.zepp_player_console === "true"],
            [ToolbarManager.toggleEventZones, ToolbarManager.player.showEventZones],
            [ToolbarManager.togglePause, ToolbarManager.player.uiPause],
            [ToolbarManager.toggleShift, ToolbarManager.player.withShift],
            [ToolbarManager.toggleFrames, ToolbarManager.withOverlay]
        ];

        for(let i in data) {
            const [button, enabled] = data[i];
            enabled ? button.classList.add("active") : button.classList.remove("active");
        }
    }

    static doRotate() {
        ToolbarManager.player.rotation = (ToolbarManager.player.rotation + 90) % 360;
    }

    static doToggleMode() {
        const player = ToolbarManager.player;
        const levels = [player.LEVEL_NORMAL, player.LEVEL_AOD, player.LEVEL_EDIT];
        player.current_level = levels[(ToolbarManager.currentLevel + 1) % levels.length];
        ToolbarManager.currentLevel++;
    }

    static doToggleFrames() {
        ToolbarManager.withOverlay = !ToolbarManager.withOverlay;
        localStorage.zepp_player_overlay = ToolbarManager.withOverlay;
        ToolbarManager._refresh();
    }

    static doTogglePause() {
        const player = ToolbarManager.player;
        player.uiPause = !player.uiPause;
        ToolbarManager._refresh();
    }
    
    static doToggleEventZones() {
        const player = ToolbarManager.player;
        player.showEventZones = !player.showEventZones;
        ToolbarManager._refresh();
    }

    static doExport() {
        const player = ToolbarManager.player;
        const out = player.exportAll();
        console.info(out);
    }

    static doToggleShift() {
        const player = ToolbarManager.player;
        player.withShift = !player.withShift;
        ToolbarManager._refresh();
    }

    static doReload() {
        PersistentStorage.wipe();

        const player = ToolbarManager.player;
        player.init();
    }

    static doToggleConsole() {
        const newState = localStorage.zepp_player_console !== "true";
        ToolbarManager.viewConsole.style.display = newState ? "" : "none";
        localStorage.zepp_player_console = newState;
        ToolbarManager._refresh();
    }

    static doToggleEdit() {
        const newState = localStorage.zepp_player_editor !== "true";
        ToolbarManager.viewEditor.style.display = newState ? "" : "none";
        localStorage.zepp_player_editor = newState;
        ToolbarManager._refresh();
    }

    static async doGif() {
        const gifRecorder = new GifRecorder(ToolbarManager.player);
        await gifRecorder.record();
        gifRecorder.export();
    }
}
