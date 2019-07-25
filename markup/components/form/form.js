$(function () {
    $.validator.methods.email = function (value, element) {
        return this.optional(element) || /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value);
    };
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            if (regexp.constructor != RegExp)
                regexp = new RegExp(regexp);
            else if (regexp.global)
                regexp.lastIndex = 0;
            return this.optional(element) || regexp.test(value);
        },
        "Please check your input."
    );
    $.extend($.validator.messages, {
        required: "Это поле необходимо заполнить.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "введите корректный email адрес",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        extension: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
        minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
        rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
        range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
        max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
        min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
    });
    formInit();
    function formInit() {
        $('.ui.checkbox').checkbox();
        $('[name=phone]').mask('+7 (999) 999-99-99');
        $('[data-form]').each(function () {
            $(this).validate({
                ignore: ".ignore",
                focusInvalid: true,
                errorPlacement: function (error, element) {
                    return true;
                },
                rules: {
                    hiddenRecaptcha: {
                       /* required: function () {
                            if (grecaptcha.getResponse() == '') {
                                return true;
                            } else {
                                return false;
                            }
                        }*/
                    },
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: {
                        required: true,
                        minlength: 16
                    },
                    requiredField: {
                        maxlength: 0
                    },
                    agree: {
                        required: true,
                    }
                },
                messages: {

                },
                submitHandler: function (form) {
                    $(form).css('pointer-events', 'none');
                    var data = new FormData(form);
                    data.append('ajaxForm', 'Y');
                    data.append('url', location.href);

                    var url = '/.ajax/form.php';
                    /*$.ajax({
                        url: url,
                        cache: false,
                        contentType: false,
                        processData: false,
                        type: 'POST',
                        data: data,
                        dataType: 'json',
                        success: function (data) {},
                        error: function (data) {}
                    });*/
                },
                invalidHandler: function (form) {

                }
            });
        });
    }
});
