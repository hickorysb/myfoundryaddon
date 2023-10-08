var CharlieFillerToken = null;
var NewmanTillmanToken = null;
var StevieChairmanToken = null;

function setDoorLocked(scene, door) {
    if (
        game.scenes.get(scene).walls.get(door).ds !=
        CONST.WALL_DOOR_STATES.LOCKED
    ) {
        game.scenes
            .get(scene)
            .walls.get(door)
            .update({ ds: CONST.WALL_DOOR_STATES.LOCKED });
    }
}

function setGroceryStaffVisibility(day, hour) {
    if (day == "Sunday" || day == "Saturday") {
        if (hour >= 8 && hour < 20) {
            CharlieFillerToken.update({ hidden: true });
            NewmanTillmanToken.update({ hidden: true });
            StevieChairmanToken.update({ hidden: false });
        } else {
            CharlieFillerToken.update({ hidden: true });
            NewmanTillmanToken.update({ hidden: true });
            StevieChairmanToken.update({ hidden: true });
        }
    } else {
        if (hour >= 6 && hour < 14) {
            CharlieFillerToken.update({ hidden: false });
            NewmanTillmanToken.update({ hidden: true });
            StevieChairmanToken.update({ hidden: true });
        } else if (hour >= 14 && hour < 22) {
            CharlieFillerToken.update({ hidden: true });
            NewmanTillmanToken.update({ hidden: false });
            StevieChairmanToken.update({ hidden: true });
        } else {
            CharlieFillerToken.update({ hidden: true });
            NewmanTillmanToken.update({ hidden: true });
            StevieChairmanToken.update({ hidden: true });
        }
    }
}

function setDoorUnlocked(scene, door) {
    if (
        game.scenes.get(scene).walls.get(door).ds ==
        CONST.WALL_DOOR_STATES.LOCKED
    ) {
        game.scenes
            .get(scene)
            .walls.get(door)
            .update({ ds: CONST.WALL_DOOR_STATES.CLOSED });
    }
}

Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
    var day = data.date.weekdays[data.date.dayOfTheWeek];
    var hour = data.date.hour;
    if (day == "Sunday" || day == "Saturday") {
        if (hour >= 8 && hour < 20) {
            setGroceryStaffVisibility(day, hour);
            setDoorUnlocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
        } else {
            setGroceryStaffVisibility(day, hour);
            setDoorLocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
        }
    } else {
        if (hour >= 6 && hour < 22) {
            setGroceryStaffVisibility(day, hour);
            setDoorUnlocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
        } else {
            setGroceryStaffVisibility(day, hour);
            setDoorLocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
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
            setGroceryStaffVisibility(day, hour);
            setDoorUnlocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
        } else {
            setGroceryStaffVisibility(day, hour);
            setDoorLocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
        }
    } else {
        if (hour >= 6 && hour < 22) {
            setGroceryStaffVisibility(day, hour);
            setDoorUnlocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
        } else {
            setGroceryStaffVisibility(day, hour);
            setDoorLocked("oD4KXsJFDJTGD8zf", "XdP9vdnhunLwxOSb");
        }
    }
});
