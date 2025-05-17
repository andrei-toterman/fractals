var ang1, ang2, len1, len2, third;

function setup () {
    var canv = createCanvas(960, 540);
    angle1 = createSlider(-PI, PI, 0, 0.01);
    angle2 = createSlider(-PI, PI, 0, 0.01);
    length1 = createSlider(0, 0.67, 0.34, 0.05);
    length2 = createSlider(0, 0.67, 0.34, 0.05);
    third = createCheckbox(false);
    angle1.parent("main");
    angle2.parent("main");
    length1.parent("main");
    length2.parent("main");
    third.parent("main");
    canv.parent("main");
    stroke(255);
    strokeWeight(2);
}

function draw () {
    background(34);
    translate(width / 2, height);
    ang1 = angle1.value();
    ang2 = angle2.value();
    len1 = length1.value();
    len2 = length2.value();
    branch(200);
}

function branch (len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 10) {
        push();
        rotate(ang1);
        branch(len * len1);
        pop();
    }
    if (len > 10) {
        push();
        rotate(ang2);
        branch(len * len2);
        pop();
    }
    if (third.checked()) {
        if (len > 10) {
            push();
            rotate((ang1 + ang2) / 2);
            branch(len * (len1 + len2) / 2);
            pop();
        }    
    }
}