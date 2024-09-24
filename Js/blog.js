

function openCloseAnswer(id1, id2, id3) {
    document.getElementById(id1).addEventListener("click", function () {
        document.getElementById(id2).classList.remove("hidden");
        document.getElementById(id3).classList.remove("hidden");
        document.getElementById(id1).classList.add("hidden");
        document.getElementById(id3).addEventListener("click", function () {
            document.getElementById(id2).classList.add("hidden");
            document.getElementById(id3).classList.add("hidden");
            document.getElementById(id1).classList.remove("hidden");
        })
    })
}

openCloseAnswer("q-1-open", "answer-1", "q-1-close");
openCloseAnswer("q-2-open", "answer-2", "q-2-close");
openCloseAnswer("q-3-open", "answer-3", "q-3-close");
openCloseAnswer("q-4-open", "answer-4", "q-4-close");
openCloseAnswer("q-5-open", "answer-5", "q-5-close");
