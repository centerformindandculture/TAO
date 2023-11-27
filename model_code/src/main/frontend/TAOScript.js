
$(document).ready(function() {
    $('#runSimButton').click(function() {
        $('#simResult').text('');

        var inputObj = {}
        surveyData = JSON.parse(JSON.stringify(window.survey.data));

        for (var key in surveyData) {
            if (surveyData.hasOwnProperty(key)) {
                if (!key.endsWith("not_a_model_input")) {
                    inputObj[key] = surveyData[key];
                }
            }
        }

        var percInfectedBreakPoint = inputObj['percInfectedBreakPoint'];
        var inputJSON = JSON.stringify(inputObj)

        $.ajax({
            url: "http://localhost:8080/TAOServlet-0.0.1/rest/exogenousInfection",
            type: "POST",
            dataType: 'json',
            contentType: "application/json",
            data: inputJSON
        })
        .done(function (data) {
            $('#simResult').text("It would take an exogenous infection rate of "
                        + data["exogenousInfectionResult"]
                        + " in order for your school to reach "
                        + (percInfectedBreakPoint * 100)
                        + "% infected over "
                        + " the course of a semester.");
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
                    alert("Error: " + textStatus + ": " + errorThrown);
        });
    });

    $('#uniPopulation').on("input", function(){
        $('#uniPopulationSpan').text($(this).val());
    });
})
