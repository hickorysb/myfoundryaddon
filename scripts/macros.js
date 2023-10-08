console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function () {
    console.log(
        "This code runs once the Foundry VTT software begins its initialization workflow."
    );
});

Hooks.on(SimpleCalendar.Hooks.DateTimeChange, (data) => {
    console.log(data);
});
