Macro.add('they', {
    skipArgs: true,
    handler: function() {
        let gender = State.getVar("$Player.Gender");
        switch(gender) {
            case "Male":
                this.output.append("he");
                break;
            case "Female":
                this.output.append("her");
                break;
            default:
                this.output.append("they");
                break;
        }
    }
});

Macro.add('them', {
    skipArgs: true,
    handler: function() {
        let gender = State.getVar("$Player.Gender");
        switch(gender) {
            case "Male":
                this.output.append("him");
                break;
            case "Female":
                this.output.append("her");
                break;
            default:
                this.output.append("them");
                break;
        }
    }
});

Macro.add('theirs', {
    skipArgs: true,
    handler: function() {
        let gender = State.getVar("$Player.Gender");
        switch(gender) {
            case "Male":
                this.output.append("his");
                break;
            case "Female":
                this.output.append("hers");
                break;
            default:
                this.output.append("theirs");
                break;
        }
    }
});

Macro.add('their', {
    skipArgs: true,
    handler: function() {
        let gender = State.getVar("$Player.Gender");
        switch(gender) {
            case "Male":
                this.output.append("his");
                break;
            case "Female":
                this.output.append("her");
                break;
            default:
                this.output.append("their");
                break;
        }
    }
});

Macro.add('themself', {
    skipArgs: true,
    handler: function() {
        let gender = State.getVar("$Player.Gender");
        switch(gender) {
            case "Male":
                this.output.append("himself");
                break;
            case "Female":
                this.output.append("herself");
                break;
            default:
                this.output.append("themself");
                break;
        }
    }
});

Macro.add('person', {
    skipArgs: true,
    handler: function() {
        let gender = State.getVar("$Player.Gender");
        switch(gender) {
            case "Male":
                this.output.append("man");
                break;
            case "Female":
                this.output.append("woman");
                break;
            default:
                this.output.append("person");
                break;
        }
    }
});