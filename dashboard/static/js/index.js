function on_load() {
    includeHTML();
}

function import_monaco() {
    require.config({ paths: { vs: '../static/js/monaco-editor/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        monaco.editor.setTheme('vs-dark');
        var editor_1 = monaco.editor.create(document.getElementById('monaco'), {
            value: "print(\"Hello World!\")",
            language: 'python'
        });
    });
}

function hash_href() {
    let hash = window.location.hash.replace("#", "");
    if (document.getElementById(hash) == null) {
        hash = "home";
    }
    let traget_element = document.getElementById(hash);
    traget_element.classList.remove("not-display");
    let content_elements = document.getElementsByClassName("index");
    for (let i =0; i < content_elements.length; i++) {
        if (content_elements[i] != traget_element) {
            content_elements[i].classList.add("not-display");
        }
    }
}

function home_mode(obj) {
    let basic = document.getElementById("basic");
    let advance = document.getElementById("advance");
    let monaco = document.getElementById("monaco");
    if (obj.textContent == "Basic") {
        basic.classList.remove("not-display");
        advance.classList.add("not-display");
    }
    else if (obj.textContent == "Advance") {
        advance.classList.remove("not-display");
        basic.classList.add("not-display");

        if (monaco.children.length == 0) {
            import_monaco()
        }
    }
}