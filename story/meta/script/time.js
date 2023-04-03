/*
Handling for advancing time by X minutes.
The <<advancetime x>> macro takes one variable, X, which is a number representing minutes.
*/

Macro.add('advancetime', {
    handler: function() {
        // Coerce first argument to number.
        let amount = this.args[0] *= 1;
        let time = State.getVar("$%%TimeIncrementor");
        let vtime = time + amount;
        let increments = vtime / 60;
        let remainder = vtime % 60;
        State.getVar("$%%TimeIncrementor") = remainder;

        Cycle.get("seasons").update(increments);
        Cycle.get("months").update(increments);
        Cycle.get("days").update(increments);
        Cycle.get("time").update(increments);
    }
});