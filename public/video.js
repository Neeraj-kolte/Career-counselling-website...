// STEP 1: Token yahan paste karo
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1YTVlN2U4Yi03NjUwLTRmODAtYmUyYi1kNDI0NjVhNzNhOGEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTc0NzA4ODA2NSwiZXhwIjoxNzQ3NjkyODY1fQ.YzufmaKuRlJe9m6nXeEUgpzppnh_dWlvkFgsOw94tu0"; // Step 1 me jo copy kiya tha

let meeting = null;
let meetingId = null;

// 5a5e7e8b-7650-4f80-be2b-d42465a73a8a api key 
// secret 5b33d74462519e82ffe9d5d3c612eb40aa9568f0e65dda5a356a0eecf55bca96


// STEP 2: Meeting create karo (host ke liye)
async function createMeeting() {
  const res = await fetch("https://api.videosdk.live/v2/rooms", {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  });
  const { roomId } = await res.json();
  meetingId = roomId;
  document.getElementById("meeting-id-input").value = meetingId;
  alert("Meeting Created! Share this ID: " + meetingId);
}

// STEP 3: Meeting join karo (host ya guest dono)
function joinMeeting() {
  meetingId = document.getElementById("meeting-id-input").value.trim();
  if (!meetingId) {
    alert("Please enter Meeting ID");
    return;
  }
  meeting = window.VideoSDK.initMeeting({
    meetingId: meetingId,
    name: "Your Name", // chahe toh user ka naam yahan daal sakte ho
    micEnabled: true,
    webcamEnabled: true,
    token: token
  });
  meeting.join();

  // STEP 4: Video stream dikhao
  meeting.on("stream-enabled", (stream) => {
    const video = document.createElement("video");
    video.srcObject = stream;
    video.autoplay = true;
    video.playsInline = true;
    video.width = 320;
    document.getElementById("video-container").appendChild(video);
  });

  // STEP 5: Apna video bhi dikhao
  meeting.localParticipant.on("stream-enabled", (stream) => {
    const video = document.createElement("video");
    video.srcObject = stream;
    video.autoplay = true;
    video.playsInline = true;
    video.width = 320;
    video.muted = true; // apni awaaz na aaye
    document.getElementById("video-container").appendChild(video);
  });

  document.getElementById("video-call-section").style.display = "block";
}
