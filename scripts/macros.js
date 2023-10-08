Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
    var day = data.date.weekdays[data.date.day];
    if (day == "Sunday" || day == "Saturday") {
        if (data.date.hour > 8 && data.date.hour < 20) {
            canvas.walls.updateAll(
                (d) => ({
                    ds: (d.document.ds = CONST.WALL_DOOR_STATES.CLOSED),
                }),
                (d) =>
                    d.id == "XdP9vdnhunLwxOSb" &&
                    d.document.ds == CONST.WALL_DOOR_STATES.LOCKED
            );
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
});
