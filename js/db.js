/**
 * Created by dennis on 31/10/16.
 */
(function() {

    var db = {};
    window.db = db;

    db.overview;
    $.ajax({
        async: false,
        url: "json/overview.json",
        success: function(result) {
            db.overview = result;
        }
    });

    db.properties;
    $.ajax({
        async: false,
        url: "json/properties.json",
        success: function(result) {
            db.properties = result;
        }
    });

    db.rel = [];
    $.ajax({
        async: false,
        url: "json/rel.json",
        success: function(result) {
            $.each(result, function(i, field) {
                db.rel[i] = {
                    TOT_T: field[0],
                    NREC_T: field[1],
                    REC_T: field[2],
                    COPY_T: field[3],
                    TUPLES: field[4],
                    REL_NAME: field[5],
                    ID: field[6],
                    SRC: field[7],
                    PERFOR: field[8]
                };
            });
        }
    });

    db.rul = [];
    $.ajax({
        async: false,
        url: "json/rul.json",
        success: function(result) {
            $.each(result, function(i, field) {
                db.rul[i] = {
                    TOT_T: field[0],
                    NREC_T: field[1],
                    REC_T: field[2],
                    COPY_T: field[3],
                    TUPLES: field[4],
                    RUL_NAME: field[5],
                    ID: field[6],
                    REL_NAME: field[7],
                    VER: field[8],
                    PERFOR: field[9],
                    SRC: field[10]
                };
            });
        }
    });
}());