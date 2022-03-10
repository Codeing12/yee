noseX = 0;
noseY = 0;
difference = 0; 
rightWristX = 0;
leftWristY = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("poseNet Is Initalized!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
        console.log("noseX ="  +noseX + "noseY" + noseY + "difference" + difference);
    }
}
function draw()
{
    background("#969A97")

    document.getElementById("square_side").innerHTML = "width and height of a square will be = "+ difference + "px";
    fill("F900393");
    stroke("#F90093");
    square(noseX, noseY, difference);
}