/*
Handling for advancing time by X minutes.
The <<advancetime x>> macro takes one variable, X, which is a number representing minutes.
*/

Macro.add('advancetime', {
    handler: function() {
        if (this.args.length < 1) {
            return this.error("No amount of time to advance by passed");
        }

        // Coerce first argument to number.
        let amount = this.args[0] *= 1;

        if (amount <= 0) {
            return this.error("Zero or negative numbers cannot be passed");
        }

        let time = State.variables["%%timeIncrementor"];
        let vtime = time + amount;
        let increments = vtime / 60;
        let remainder = vtime % 60;
        State.variables["%%timeIncrementor"] = remainder;

        Cycle.get("seasons").update(increments);
        Cycle.get("months").update(increments);
        Cycle.get("days").update(increments);
        Cycle.get("time").update(increments);
    }
});