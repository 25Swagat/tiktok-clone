import React from "react";
import "./App.css";
import Video from "./Video";
function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="https://v77.tiktokcdn.com/30364c38f11435ae76752c54ec21ef2b/5f61402b/video/tos/useast2a/tos-useast2a-pve-0068/b313869755b9469899f06559d586af2f/?a=1233&br=3652&bt=1826&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009151628450101901911633105F54F&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajVxOHQ8dTx2dzMzNzczM0ApaDY7OWU3aTxlNzRpNjk3NWdgajVqZC1uYGNfLS0uMTZzc2IuYTM2YmAuYDQxYmE2NjA6Yw%3D%3D&vl=&vr="
          channel="floyd"
          description="Does this work"
          song="No one cares"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://v16m.tiktokcdn.com/aca149af39a7b7db7facea69ccfbe304/5f5fad46/video/tos/useast2a/tos-useast2a-ve-0068c001/259b1391c9b94d65b5ae37beb7468191/?a=1233&br=3492&bt=1746&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009141149450101890660412A00B976&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2c8dXdtM2lndzMzZTczM0ApZWQ5PDRlaWQ1NzM1Nmc0N2dicF5rZS1vNjVfLS1eMTZzcy8wLzIzNWEtMV8uMzIzLS86Yw%3D%3D&vl=&vr="
          channel="floyd"
          description="Does this work"
          song="No one cares"
          likes={999}
          messages={456}
          shares={789}
        />
      </div>
    </div>
  );
}

export default App;
