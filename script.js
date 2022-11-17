//取得データ

// nameinput
$("#next").on("click", function () {
    const classNumber = $("#class_number").val();
    const studentNumber = $("#student_number").val();
    const familyName = $("#family_name").val();
    const firstName = $("#first_name").val();

    console.log(classNumber)
    console.log(studentNumber)
    console.log(familyName)
    console.log(firstName)

    const parsonal_data = {
        class: classNumber,
        student: studentNumber,
        familyName: familyName,
        firstName: firstName,
    }

    const jsonData = JSON.stringify(parsonal_data);
    localStorage.setItem("parsonal", jsonData);
})

if (localStorage.getItem("parsonal")) {
    const jsonData = localStorage.getItem("parsonal");
    const data = JSON.parse(jsonData);

    $("#class_number1").text(data.class);
    $("#student_number1").text(data.student);
    $("#family_name1").text(data.familyName);
    $("#first_name1").text(data.firstName);


}

// question
$("#decision").on("click", function () {
    const social = $("#sources").val();
    const company = $("#select_company").val();
    const nations = $("#nations_area").val();
    const comment = $("#free_text").val();


    console.log(social);
    console.log(company);
    console.log(nations);
    console.log(comment);

    const data = {
        social: social,
        company: company,
        nations: nations,
        comment: comment,
    };
    console.log(data);
    const jsonData = JSON.stringify(data);
    localStorage.setItem("note", jsonData);
})


if (localStorage.getItem("note")) {
    const jsonData = localStorage.getItem("note");
    const data = JSON.parse(jsonData);

    console.log(data);
    $("#answer1").text(data.social);
    $("#answer2").text(data.company);
    $("#answer3").text(data.nations);
    $("#answer4").text(data.comment);

}

// 解説ページ

let start = 1;
let end = 45;

let options = "";

for (i = start; i <= end; i++) {
    options += "<option>" + i + "</option>"
}

$("#student_number").html(options);

$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
}, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});