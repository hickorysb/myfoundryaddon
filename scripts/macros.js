var CharlieFillerToken = null;
var NewmanTillmanToken = null;
var StevieChairmanToken = null;

Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
    var day = data.date.weekdays[data.date.dayOfTheWeek];
    if (day == "Sunday" || day == "Saturday") {
        if (data.date.hour >= 8 && data.date.hour < 20) {
            CharlieFillerToken.hidden = true;
            NewmanTillmanToken.hidden = true;
            StevieChairmanToken.hidden = false;
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds ==
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.CLOSED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.CLOSED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds == CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        } else {
            CharlieFillerToken.hidden = true;
            NewmanTillmanToken.hidden = true;
            StevieChairmanToken.hidden = true;
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds !=
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.LOCKED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.LOCKED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds != CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        }
    } else {
        if (data.date.hour >= 6 && data.date.hour < 22) {
            if (data.date.hour >= 6 && data.date.hour < 14) {
                CharlieFillerToken.hidden = false;
                NewmanTillmanToken.hidden = true;
                StevieChairmanToken.hidden = true;
            } else {
                CharlieFillerToken.hidden = true;
                NewmanTillmanToken.hidden = false;
                StevieChairmanToken.hidden = true;
            }
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds ==
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.CLOSED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.CLOSED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds == CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        } else {
            CharlieFillerToken.hidden = true;
            NewmanTillmanToken.hidden = true;
            StevieChairmanToken.hidden = true;
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds !=
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.LOCKED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.LOCKED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds != CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        }
    }
});

Hooks.on(SimpleCalendar.Hooks.Ready, () => {
    CharlieFillerToken = game.scenes
        .get("oD4KXsJFDJTGD8zf")
        .tokens.get("jyyrghi4ZsxT3W5p");
    NewmanTillmanToken = game.scenes
        .get("oD4KXsJFDJTGD8zf")
        .tokens.get("kdKKs8mnGY7FMuMQ");
    StevieChairmanToken = game.scenes
        .get("oD4KXsJFDJTGD8zf")
        .tokens.get("Hzpbdqrb2gkMRIMj");
    var day = SimpleCalendar.api.getCurrentWeekday().name;
    var hour = SimpleCalendar.api.currentDateTime().hours;
    if (day == "Sunday" || day == "Saturday") {
        if (hour >= 8 && hour < 20) {
            CharlieFillerToken.hidden = true;
            NewmanTillmanToken.hidden = true;
            StevieChairmanToken.hidden = false;
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds ==
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.CLOSED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.CLOSED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds == CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        } else {
            CharlieFillerToken.hidden = true;
            NewmanTillmanToken.hidden = true;
            StevieChairmanToken.hidden = true;
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds !=
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.LOCKED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.LOCKED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds != CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        }
    } else {
        if (hour >= 6 && hour < 22) {
            if (hour >= 6 && hour < 14) {
                CharlieFillerToken.hidden = false;
                NewmanTillmanToken.hidden = true;
                StevieChairmanToken.hidden = true;
            } else {
                CharlieFillerToken.hidden = true;
                NewmanTillmanToken.hidden = false;
                StevieChairmanToken.hidden = true;
            }
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds ==
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.CLOSED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.CLOSED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds == CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        } else {
            if (!game.scenes.get("oD4KXsJFDJTGD8zf").isView) {
                if (
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds !=
                    CONST.WALL_DOOR_STATES.LOCKED
                ) {
                    game.scenes
                        .get("oD4KXsJFDJTGD8zf")
                        .walls.get("XdP9vdnhunLwxOSb").ds =
                        CONST.WALL_DOOR_STATES.LOCKED;
                }
            } else {
                canvas.walls.updateAll(
                    (d) => ({
                        ds: (d.document.ds = CONST.WALL_DOOR_STATES.LOCKED),
                    }),
                    (d) =>
                        d.id == "XdP9vdnhunLwxOSb" &&
                        d.document.ds != CONST.WALL_DOOR_STATES.LOCKED
                );
            }
        }
    }
});
