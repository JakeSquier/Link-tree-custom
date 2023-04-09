import './styles/App.css';
import './styles/widget.css'
// Component imports below
import PhotoWidget from './components/PhotoWidget';
import FollowerWidget from './components/FollowerWidget';
import Media from './components/Media';
import Head from './components/Head';

function App() {

  const apps = [
    {
      title: "Instagram",
      id: "instagramApp",
      url: "",
    },
    {
      title: "Tiktok",
      id: "tiktokApp",
      url: "",
    },
    {
      title: "Twitch",
      id: "twitchApp",
      url: "",
    },
    {
      title: "Snapchat",
      id: "snapchatApp",
      url: "",
    }
  ]

  return (
    <div className="App">
      <div id="container">
        <div id="head">
          <Head />
        </div>
        <div id="main">
          <PhotoWidget />
          <FollowerWidget />
          {
            apps.map((app) => {
              return (
                <Media title={app.title} id={app.id} url={app.url}/>
              )
            })
          }
        </div>
        <div id="foot">

        </div>
      </div>
    </div>
  );
}

export default App;
