
var question = ["<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394787/Flags/Flag_of_France_pifplu.png height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Belgium</button><br><br><button class=button1 id=hide1 onclick=correct()>France</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394788/Flags/Flag_of_Greece_sphhom.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Greece</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Russia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394788/Flags/Flag_of_Hungary_ck1y7c.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Hungary</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Spain</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394789/Flags/Flag_of_Ireland_ntthd8.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Germany</button><br><br><button class=button1 id=hide1 onclick=correct()>Ireland</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394786/Flags/Flag_of_Croatia_abau9c.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Croatia</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Czech</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394781/Flags/Flag_of_Albania_bjzfpq.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Albania</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Estonia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394788/Flags/Flag_of_Italy_cykohl.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>United Kingdom</button><br><br><button class=button1 id=hide1 onclick=correct()>Italy</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394790/Flags/Flag_of_Latvia_pacf7b.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Latvia</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Slovenia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394795/Flags/Flag_of_Portugal_alkv3g.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Portugal</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Turkey</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394799/Flags/Flag_of_the_Czech_Republic_us1ihk.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Russia</button><br><br><button class=button1 id=hide1 onclick=correct()>Czech</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394801/Flags/Flag_of_Ukraine_r2hjo1.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>France</button><br><br><button class=button1 id=hide1 onclick=correct()>Ukraine</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394801/Flags/Flag_of_Turkey_lmrwfm.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Turkey</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Germany</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394801/Flags/Flag_of_the_Vatican_City_zvdxbn.svg height=10 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Vatican</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Malta</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394801/Flags/Flag_of_the_United_Kingdom__3-5_pjpyrv.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Greece</button><br><br><button class=button1 id=hide1 onclick=correct()>United Kingdom</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394800/Flags/Flag_of_the_Netherlands_xqdo18.png height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Netherlands</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Croatia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394799/Flags/Flag_of_Spain_c1qtmy.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Spain</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Albania</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394799/Flags/Flag_of_Switzerland__Pantone_dinzjb.svg height=10 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Malta</button><br><br><button class=button1 id=hide1 onclick=correct()>Switzerland</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394799/Flags/Flag_of_Serbia_xoakap.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Serbia</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Croatia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394799/Flags/Flag_of_Sweden_sk2onp.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Sweden</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Finland</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394797/Flags/Flag_of_Slovenia_pmlejr.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Russia</button><br><br><button class=button1 id=hide1 onclick=correct()>Slovenia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394799/Flags/Flag_of_the_Czech_Republic_us1ihk.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Russia</button><br><br><button class=button1 id=hide1 onclick=correct()>Czech</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394797/Flags/Flag_of_Slovakia_kq9qji.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Slovenia</button><br><br><button class=button1 id=hide1 onclick=correct()>Slovakia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394797/Flags/Flag_of_San_Marino_krewgr.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>San Marino</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Vatican</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394796/Flags/Flag_of_Russia_noj9zx.svg height=10 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Russia</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Slovakia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394795/Flags/Flag_of_Romania_r34wf9.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Belgium</button><br><br><button class=button1 id=hide1 onclick=correct()>Romania</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394794/Flags/Flag_of_Poland_clwpez.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Poland</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Austria</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394792/Flags/Flag_of_Norway_hmdh8x.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Norway</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Switzerland</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394791/Flags/Flag_of_Malta__variant_kwsl1b.svg height=10 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Poland</button><br><br><button class=button1 id=hide1 onclick=correct()>Malta</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394786/Flags/Flag_of_Germany_qrmv2a.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Germany</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Hungary</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394781/Flags/Flag_of_Austria_fnnxiy.svg height=20 border=2 /><br><br><button class=button1 id=hide1 onclick=correct()>Austria</button><br><br><button class=button1 id=hide2 onclick=incorrect()>Latvia</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394784/Flags/Flag_of_Cyprus_s6s01r.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Albania</button><br><br><button class=button1 id=hide1 onclick=correct()>Cyprus</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394783/Flags/Flag_of_Belgium_nggoxr.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Germany</button><br><br><button class=button1 id=hide1 onclick=correct()>Belgium</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394785/Flags/Flag_of_Finland_fhecyl.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Denmark</button><br><br><button class=button1 id=hide1 onclick=correct()>Finland</button>",
    "<img src=https://res.cloudinary.com/dt9mdchbh/image/upload/v1628394788/Flags/Flag_of_Denmark_xbrk2q.svg height=20 border=2 /><br><br><button class=button1 id=hide2 onclick=incorrect()>Norway</button><br><br><button class=button1 id=hide1 onclick=correct()>Denmark</button>",



];

function shuffle(items1) {
    var elements = items1.length, items2, items3

    while (elements > 0) {
        items3 = Math.floor(Math.random() * elements);
        elements--;

        items2 = items1[elements];
        items1[elements] = items1[items3];
        items1[items3] = items2;
    }

    return items1;

}

shuffle(question)


var x = 0;
x++;

var y = 0;
y++;

var z = 0;
z++;

function start() {
    x++;
    questionnum.innerHTML = y++;
    hide.innerHTML = "";
    message002.innerHTML = question.shift();
    nextques.innerHTML = "";
}

function correct() {
    results.innerHTML = "<div id=green1>" + "Nice !（●＾o＾●）" + "</div>";
    hide1.style.background = "green";
    hide1.style.color = "white";
    hide1.disabled = true;
    hide2.disabled = true;
    score.innerHTML = z++;
    nextques.innerHTML = "<button class=button2 onclick=next()>Next</button>";
}

function incorrect() {
    results.innerHTML = "<div id=red1>" + "Too bad ! (×﹏×)" + "</div>";
    hide1.style.background = "green";
    hide1.style.color = "white";
    hide2.style.background = "red";
    hide1.disabled = true;
    hide2.disabled = true;
    nextques.innerHTML = "<button class=button2 onclick=next()>Next</button>";
}

function next() {
    nextques.innerHTML = "";
    x++;
    questionnum.innerHTML = y++;
    message002.innerHTML = question.shift();
    results.innerHTML = "";
    if (x > 11) {
        message002.innerHTML = "End of the Flag Game !<br>Did you enjoy it ? ^^";
        questionnum.innerHTML = (y - 2);
        nextques.innerHTML = "<button class=button2 onclick=restart()>Restart</button>";
    }
}

function restart() {
    location.reload();
}
