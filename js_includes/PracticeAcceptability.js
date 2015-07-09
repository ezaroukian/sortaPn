define_ibex_controller({
    name: "PracticeAcceptability",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "AcceptabilityJudgment", this.options ]
            });
        }
    },
    properties: {}
});